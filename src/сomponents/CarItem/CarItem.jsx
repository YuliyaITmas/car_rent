import { useState } from "react";
import DefaultImage from "../../assets/images/car.jpeg";
import Icons from "../../assets/images/icons.svg";
import { getCityFromAddress, getCountryFromAddress } from "../../helpers/utils";
import { useDispatch, useSelector } from "react-redux";
import { Button, ButtonIcon } from "../Button/Button";
import {
  Item,
  Picture,
  Title,
  Accent,
  Info,
  Divider,
  SpanWithDivider,
} from "./CarItem.styled";
import { Modal } from "../Modal/Modal";
import { DetailedCarItem } from "../DetailedCarItem/DetailedCarItem";
import { addToFavorites, removeFromFavorites } from "../../redux/carsSlice";
import { selectFavorites } from "../../redux/selectors";

export const CarItem = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const dispatch = useDispatch();

  const isFavorite = useSelector(selectFavorites);

  const isCarInFavorites = isFavorite.some(
    (favoriteCar) => favoriteCar.id === data.id
  );

  const handleClick = () => {
    if (isCarInFavorites) {
      dispatch(removeFromFavorites(data));
    } else {
      dispatch(addToFavorites(data));
    }
  };

  return (
    <>
      <Item>
        <ButtonIcon
          type="button"
          onClick={handleClick}
          ariaLabel="addFavorite"
          iconHref={`${Icons}#icon-normal`}
          isFavorite={isCarInFavorites}
        />

        <Picture
          src={data.img ? data.img : DefaultImage}
          alt={`${data.make} ${data.model}`}
          loading="lazy"
        />

        <Title>
          <span>
            {data.make} <Accent>{data.model}</Accent>, {data.year}
          </span>
          <span>{data.rentalPrice}</span>
        </Title>

        <Info>
          <Divider>
            <SpanWithDivider>
              {getCityFromAddress(data.address)}
            </SpanWithDivider>
            <SpanWithDivider>
              {getCountryFromAddress(data.address)}
            </SpanWithDivider>
            <span>{data.rentalCompany}</span>
          </Divider>
          <Divider>
            <SpanWithDivider>{data.type}</SpanWithDivider>
            <SpanWithDivider>{data.model}</SpanWithDivider>
            <SpanWithDivider>{data.id}</SpanWithDivider>
            <span>{data.accessories[0]}</span>
          </Divider>
        </Info>
        <Button label="Learn more" onClick={toggleModal} />
      </Item>
      {isModalOpen && (
        <Modal
          isModalOpen={isModalOpen}
          onClose={toggleModal}
          children={<DetailedCarItem data={data} />}
        />
      )}
    </>
  );
};
