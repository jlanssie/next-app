import { Image } from "../components";
import "./index.scss";

export const Home = () => {
  return (
    <section className="home">
        <div>
          <Image baseUrl="/avatar/" className="circle" alt="A picture of me." loading="eager" />
        </div>
      <div>
        <h1>Hello</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
          occaecat cupidatat non proident, sunt in culpa qui officia deserunt
          mollit anim id est laborum.
        </p>
      </div>
    </section>
  );
};

export default Home;
