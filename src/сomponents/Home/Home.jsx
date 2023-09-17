import { HomePageContainer, Heading, Subheading, BgImage, Wrap } from "./Home.styled";
import Bcg from "../../assets/images/car-bcg.jpeg";

export const Home = () => {
  return (
    <HomePageContainer>
      <BgImage src={Bcg} alt="background" loading="lazy" />
   <Wrap>
          <Heading>Welcome to Our Car Rental Service</Heading>
          <Subheading>
            Explore our wide range of cars and find the perfect one for your
            journey. We provide reliable and affordable car rental options.
          </Subheading>
   </Wrap>
    </HomePageContainer>
  );
};
