import { useGetCarsQuery } from "../../redux/carsApi";
import { Loader } from "../Loader/Loader";
import { Container, List, LoadBtn } from "./Gallery.styled";
import { useDispatch } from "react-redux";

import { useEffect, useState } from "react";
import { CarItem } from "../CarItem/CarItem";

export const Gallery = () => {
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const { data, isLoading, isError, isFetching } = useGetCarsQuery({
    page,
    limit: 8,
  });
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    if (!isLoading && !isError) {
      setAllData((prevData) => [...prevData, ...data]);
    }
  }, [dispatch, data, isLoading, isError]);


  const loadMore = () => {
    setPage(page + 1);
  };

  return (
    <>
      {data && (
        <Container>
          <List>
            {allData.map((carData) => (
              <CarItem key={carData.id} data={carData} />
            ))}
          </List>
          {isFetching && <Loader />}
          {!isFetching && data && data.length > 0 && (
            <LoadBtn type="button" aria-label="Load More" onClick={loadMore}>
              Load More
            </LoadBtn>
          )}
        </Container>
      )}
    </>
  );
};
