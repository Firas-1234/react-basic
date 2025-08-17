import Nav from "../components/organism/Nav.jsx";
import Hero from "../components/molecules/Hero.jsx";
import CardDescription from "../components/organism/CardDescription.jsx"

const Home = () => {
  return (
    <div classname="app">
      <Nav />
      <Hero />
      <CardDescription />
    </div>
  );
};

export default Home;
