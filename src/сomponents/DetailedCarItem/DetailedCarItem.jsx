import {
  extractDriverLicense,
  extractSecurityDeposit,
  getCityFromAddress,
  getCountryFromAddress,
  extractMinimumAge,
  formatMileage,
  formatRentalPrice,
} from "../../helpers/utils";
import DefaultImage from "../../assets/images/car.jpeg";
import {
  Accent,
  Divider,
  Info,
  Item,
  Picture,
  SpanWithDivider,
  Title,
  Description,
  Wrap,
  Features,
  ConditionWrap,
  Condition,
  RentBtn,
} from "./DetailedCarItem.styled";

export const DetailedCarItem = ({ data }) => {
  const AgeInfo = extractMinimumAge(data.rentalConditions);
  return (
    <>
      <Item>
        <Picture
          src={data.img ? data.img : DefaultImage}
          alt={`${data.make} ${data.model}`}
          loading="lazy"
        />
        <Title>
          <span>
            {data.make} <Accent>{data.model}</Accent>, {data.year}
          </span>
        </Title>

        <Info>
          <Divider>
            <SpanWithDivider>
              {getCityFromAddress(data.address)}
            </SpanWithDivider>
            <SpanWithDivider>
              {getCountryFromAddress(data.address)}
            </SpanWithDivider>
            <SpanWithDivider>Id: {data.id}</SpanWithDivider>
            <SpanWithDivider>Year: {data.year}</SpanWithDivider>
            <span>Type: {data.type}</span>
          </Divider>
          <Divider>
            <SpanWithDivider>
              Fuel Consumption: {data.fuelConsumption}
            </SpanWithDivider>
            <span>Engine Size: {data.engineSize}</span>
          </Divider>
        </Info>
        <Wrap>
          <div>
            <Description>
            {data.description}
            </Description>
          </div>

          <div>
            <Features>Accessories and functionalities:</Features>
            <Info>
              <Divider>
                <SpanWithDivider>{data.accessories[0]}</SpanWithDivider>
                <SpanWithDivider>{data.accessories[1]}</SpanWithDivider>
                <span>{data.accessories[2]}</span>
              </Divider>
              <Divider>
                <SpanWithDivider>{data.functionalities[0]}</SpanWithDivider>
                <span>{data.functionalities[1]}</span>
              </Divider>
            </Info>
          </div>
          <div>
            <Features>Rental Conditions: </Features>
            <ConditionWrap>
              <Condition>
                {AgeInfo.key}:<Accent>{AgeInfo.value}</Accent>
              </Condition>
              <Condition>
                {extractDriverLicense(data.rentalConditions)}
              </Condition>
              <Condition>
                {extractSecurityDeposit(data.rentalConditions)}
              </Condition>

              <Condition>
                Mileage: <Accent>{formatMileage(data.mileage)}</Accent>
              </Condition>
              <Condition>
                Price: <Accent>{formatRentalPrice(data.rentalPrice)}</Accent>
              </Condition>
            </ConditionWrap>
          </div>
        </Wrap>
        <RentBtn href="tel:+380730000000">Rental car</RentBtn>
      </Item>
    </>
  );
};
