import styled from "@emotion/styled";

export const FilterWrap = styled.div`
  display: flex;
  flex-wrap:wrap;
  align-items: flex-end;
  justify-content: center;
  padding-top: 88px;
  padding-left: 40px;
  gap: 18px;
`;

export const SelectBrand = styled.select`
  padding: 11px 89px 11px 18px;
  border-radius: 14px;
  height: 48px;
  background: #f7f7fb;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #121417;
  font-family: Manrope;
`;

export const Wrap = styled.div`
  display: flex;
  width: 320px;
  div {
    position: relative;
  }
`;

export const FilterName = styled.label`
  display: block;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  margin-bottom: 8px;
`;
export const Option = styled.option`
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;
export const SelectPrice = styled.select`
  padding: 14px 18px;
  border-radius: 14px;
  height: 48px;
  background: #f7f7fb;
  border: none;
  outline: none;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #121417;
  font-family: Manrope;
`;
export const FieldName = styled.label`
  display: flex;
  flex-direction: column;
  color: #8a8a89;
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  gap: 8px;
`;

export const Field = styled.input`
  border: none;
  border-right: 1px solid rgba(138, 138, 137, 0.2);
  border-top-left-radius: 14px;
  border-bottom-left-radius: 14px;
  outline: none;
  height: 48px;
  width: 160px;
  background: #f7f7fb;
  padding: 14px 0px 14px 75px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;
export const FieldTo = styled.input`
  border: none;
  border-top-right-radius: 14px;
  border-bottom-right-radius: 14px;
  outline: none;
  height: 48px;
  width: 160px;
  background: #f7f7fb;
  padding: 14px 0px 14px 53px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
`;

export const Placeholder = styled.span`
  position: absolute;
  display: block;
  left: 24px;
  font-size: 18px;
  font-weight: 500;
  line-height: 20px;
  color: #121417;
  font-family: Manrope;
  top: 50%;
  transform: translateY(-50%);
`;
