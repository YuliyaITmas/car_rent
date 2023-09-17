import { useState } from "react";
import { useDispatch } from "react-redux";
import { resetFilter, setFilter } from "../../redux/carsSlice";
import { brands } from "../../data/brands";
import { Button } from "../Button/Button";
import {
  FilterName,
  FilterWrap,
  SelectBrand,
  SelectPrice,
  Wrap,
  FieldName,
  Field,
  FieldTo,
  Placeholder,
} from "./Filter.styled";
import { generatePriceOptions, parseNumber } from "../../helpers/utils";

export const Filter = () => {
  const dispatch = useDispatch();
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedPrice, setselectedPrice] = useState("");

  const [minMileage, setMinMileage] = useState("");
  const [maxMileage, setMaxMileage] = useState("");

  const handleFilterChange = () => {
    dispatch(
      setFilter({
        brand: selectedBrand,
        price: selectedPrice,
        from: minMileage,
        to: maxMileage,
      })
    );
  };
  const handleBrandSelect = (event) => {
    setSelectedBrand(event.target.value);
  };
  const handlePriceSelect = (event) => {
    setselectedPrice(event.target.value);
  };

  const handleMinMileageChange = (event) => {
    const numberValue = parseNumber(event.target.value);
    setMinMileage(numberValue);
  };

  const handleMaxMileageChange = (event) => {
    const numberValue = parseNumber(event.target.value);
    setMaxMileage(numberValue);
  };

  const handleReset = () => {
    dispatch(resetFilter());
    setSelectedBrand("");
    setselectedPrice("");
    setMinMileage("");
    setMaxMileage("");
  };

  return (
    <>
      <FilterWrap>
        <div>
          <FilterName htmlFor="carBrand">Car brand</FilterName>
          <SelectBrand
            id="carBrand"
            value={selectedBrand}
            onChange={handleBrandSelect}
          >
            <option value="" disabled hidden>
              Enter the text
            </option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </SelectBrand>
        </div>
        <div>
          <FilterName htmlFor="carPrice">Price/ 1 hour</FilterName>
          <SelectPrice
            id="carPrice"
            value={selectedPrice}
            onChange={handlePriceSelect}
          >
            <option value="" disabled hidden>
              to $
            </option>
            {generatePriceOptions(200).map((price) => (
              <option key={price} value={price}>
                ${price}
              </option>
            ))}
          </SelectPrice>
        </div>
        <div>
          <FieldName htmlFor="minMileage">
            Сar mileage / km
            <Wrap>
              <div>
                <Field
                  placeholder="2 000"
                  type="text"
                  id="minMileage"
                  value={minMileage}
                  onChange={handleMinMileageChange}
                />
                <Placeholder>From</Placeholder>
              </div>

              <div>
                <FieldTo
                  placeholder="5 000"
                  type="text"
                  id="maxMileage"
                  value={maxMileage}
                  onChange={handleMaxMileageChange}
                />
                <Placeholder>To</Placeholder>
              </div>
            </Wrap>
          </FieldName>
        </div>

        <Button
          type="button"
          onClick={handleFilterChange}
          ariaLabel="Search"
          style={{ padding: "14px 44px", width: "136px", height: "48px" }}
          label="Search"
        />
        <Button
          type="button"
          onClick={handleReset}
          ariaLabel="Reset"
          style={{ padding: "14px 44px", width: "136px", height: "48px" }}
          label="Reset"
        />
      </FilterWrap>
    </>
  );
};
