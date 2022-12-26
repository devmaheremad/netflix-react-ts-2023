import moviesRequest from "../api/moviesRequest";
import { HeroHeader, Slider } from "../components";

const Home = () => {
  return (
    <>
      <HeroHeader />
      {moviesRequest.map(({ requestLink, title }, index) => {
        return <Slider key={index} title={title} requestLink={requestLink} />;
      })}
    </>
  );
};
export default Home;
