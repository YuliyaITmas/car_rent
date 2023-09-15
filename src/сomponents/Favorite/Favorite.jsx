import { useSelector } from "react-redux";
import { Container, List } from "../Gallery/Gallery.styled";
import { CarItem } from "../CarItem/CarItem";
import { selectFavorites } from "../../redux/selectors";

export const Favorite = () => {
  const isFavorite = useSelector(selectFavorites);

  return (
    <>
      {isFavorite && (
        <Container>
          <List>
            {isFavorite.map((data) => (
              <CarItem key={data.id} data={data} />
            ))}
          </List>
        </Container>
      )}
    </>
  );
};
