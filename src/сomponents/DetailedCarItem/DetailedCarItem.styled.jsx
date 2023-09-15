import styled from "@emotion/styled";

export const Item = styled.div`
  display: flex;
  width: 100%;
  border-radius: 14px;
  flex-direction: column;
  align-items: flex-start;
`;

export const Picture = styled.img`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 248px;
  flex-shrink: 0;
  border-radius: 14px;
  background: #f3f3f2;
  object-fit: cover;
  margin-bottom: 14px;
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: #121417;
  font-family: Manrope;
  font-size: 18px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
`;
export const Accent = styled.span`
  color: #3470ff;
  font-weight: 600;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 14 px;
`;

export const Divider = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  white-space: nowrap;
`;

export const SpanWithDivider = styled.span`
  position: relative;
  white-space: nowrap;
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: calc(100% + 6px);
    transform: translateY(-50%);
    width: 1px;
    height: 16px;
    background-color: rgba(18, 20, 23, 0.1);
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
    gap: 24px;
  justify-content: space-between;


  margin-top: 14px;
`;
export const Description = styled.p`
  color: #121417;
  line-height: 20px;
  font-size: 14px;
`;
export const Features = styled.p`
  color: #121417;
  line-height: 20px;
  font-size: 14px;
  margin-bottom: 8px;
`;
export const ConditionWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Condition = styled.span`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 35px;
  background: #f9f9f9;
  color: #363535;
  font-family: Montserrat;
  font-size: 12px;
`;

export const RentBtn = styled.a`
  display: flex;
  width: 168px;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  margin-top: 24px;
  transition: all 0.3s ease;
  text-decoration: none;

  &:hover {
    background: #0b44cd;
  }
  &:focus {
    background: #0b44cd;
    box-shadow: 0 0 5px rgba(169, 169, 169, 0.8);
  }
`;
