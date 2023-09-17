import styled from "@emotion/styled";

export const Btn = styled.button`
  display: flex;
  width: 274px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  font-family: inherit;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  transition: all 0.3s ease;

  &:hover {
    background: #0b44cd;
  }
  &:focus {
    background: #0b44cd;
    box-shadow: 0 0 5px rgba(169, 169, 169, 0.8);
  }
`;

export const IconWrap = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
  display: flex;
  width: 18px;
  height: 18px;
  align-items: center;
  background-color: transparent;
  transition: all 0.3s ease;
  color: rgba(255, 255, 255, 0.8);

  &:hover {
    color: #3470ff;

    svg {
      stroke: currentColor;
    }
  }
`;
export const Icon = styled.svg`
  width: 18px;
  height: 18px;
  stroke: currentColor;
  fill: none;
`;

export const Close = styled.button`
  position: absolute;
  right: 16px;
  top: 16px;
  display: flex;
  width: 24px;
  height: 24px;
  align-items: center;
  background-color: transparent;
  transition: all 0.3s ease;
  color: #121417;

  &:hover {
    svg {
      stroke: #3470ff;
    }
  }
`;

// export const Arrow = styled.button`
//   position: absolute;
//   right: 10px;
//   top: 16px;
//   display: flex;
//   width: 14px;
//   height: 14px;
//   align-items: center;
//   background-color: transparent;
//   transition: all 0.3s ease;
//   color: #121417;
//   z-index: 2000;
// `;