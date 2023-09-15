import styled from "@emotion/styled";

export const Item = styled.li`
  display: flex;
  max-width: 274px;
  //   height: 426px;
  border-radius: 14px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
  flex-basis: 100%;
  position: relative;
  transition: box-shadow 0.3s ease;
  :hover {
    box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.2);
  }
`;

export const Picture = styled.img`
  display: flex;
  justify-content: center;
  width: 100%;
  min-height: 268px;
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
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  margin-bottom: 8px;
`;
export const Accent = styled.span`
  color: #3470ff;
`;

export const Info = styled.div`
  display: flex;
  
  flex-direction: column;
  gap: 4px;
  margin-bottom: 28px;
`;

export const Divider = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const SpanWithDivider = styled.span`
  position: relative;
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

