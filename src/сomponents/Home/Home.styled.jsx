import styled from "@emotion/styled";

export const HomePageContainer = styled.div`
  position: relative;
  background-color: #a9bcd8;
  opacity: 0.9;
  mix-blend-mode: normal;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
  width: 100vw;
`;

export const BgImage = styled.img`
  min-width: 100%;
  width: 100%;
  max-height: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  @media (max-width: 674px) {
    height: 100%;
    width: 100%;
  }
`;

export const Wrap = styled.div`
  width: 100%;
  padding: 0px 60px;
  @media (max-width: 374px) {
    padding: 0px 20px;
  }
  ,
  @media (max-width: 675px) {
    padding: 0px 40px;
  }
`;
export const Heading = styled.h1`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 30px;
  margin-top: 50px;
  text-align: center;
  line-height: 1.4;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  @media (max-width: 500px) {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
    line-height: 1.5;
  }
`;

export const Subheading = styled.p`
  margin: 0 auto;
  font-size: 18px;
  max-width: 600px;
  text-align: center;
  line-height: 1.3;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  @media (max-width: 500px) {
    font-size: 16px;
    line-height: 1.3;
  }
`;
