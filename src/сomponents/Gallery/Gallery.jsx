import { useGetCarsQuery } from "../../redux/carsApi";
import { Loader } from "../Loader/Loader";
import { Container, List, LoadBtn } from "./Gallery.styled";
import { useDispatch, useSelector } from "react-redux";

import { useEffect, useState } from "react";
import { CarItem } from "../CarItem/CarItem";
import {
  selectCars,
  selectFilter,
  selectIsLoaded,
} from "../../redux/selectors";
import { filterCars } from "../../helpers/utils";
import { resetFilter, setItems } from "../../redux/carsSlice";

export const Gallery = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(resetFilter());
  }, [dispatch]);

  const isLoaded = useSelector(selectIsLoaded);

   const { data: allCars } = useGetCarsQuery({
     skip: isLoaded,
   });
    useEffect(() => {
     if (allCars){ dispatch(setItems(allCars))};
    }, [dispatch, allCars]);

  


  const [page, setPage] = useState(1);
 
  const { data, isLoading, isError, isFetching } = useGetCarsQuery({
    page,
    limit: 8,
  });
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    if (!isLoading && !isError && data && data.length > 0) {
      setAllData((prevData) => [...prevData, ...data]);
    }
  }, [dispatch, data, isLoading, isError]);

  const resetState = () => {
    setAllData([]);
  };
  useEffect(() => {
    return () => {
      resetState();
    };
  }, []);

  const loadMore = () => {
    setPage(page + 1);
  };
  const filter = useSelector(selectFilter);
  const cars = useSelector(selectCars);

 

  const filteredCars = filterCars(cars, filter);

const isFilterApplied = filter
  ? Object.values(filter).some((value) => Boolean(value))
  : false;



  return (
    <> { isFilterApplied ? (filteredCars && (
        <Container>
          <List>
            {filteredCars.map((carData) => (
              <CarItem key={carData.id} data={carData} />
            ))}
          </List>
          {isFetching && <Loader />}
          {!isFetching  && filteredCars.length >= 8 && (
            <LoadBtn type="button" aria-label="Load More" onClick={loadMore}>
              Load More
            </LoadBtn>
          )}
        </Container> )) : (allData && (
        <Container>
          <List>
            {allData.map((carData) => (
              <CarItem key={carData.id} data={carData} />
            ))}
          </List>
          {isFetching && <Loader />}
          {!isFetching && allData && allData.length >= 8 && (
            <LoadBtn type="button" aria-label="Load More" onClick={loadMore}>
              Load More
            </LoadBtn>
          )}
        </Container>)) }
      
    </>
  );
};
