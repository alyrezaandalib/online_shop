import Layout from "../layout/Layout";
import { NavLink } from "react-router-dom";

const AboutUs = () => {
  return (
    <Layout>
      <main className="my-16 w-[70%] h-fit  mx-auto py-3 px-5 text-lg">
        <h2 className="font-bold">About Us</h2>
        <div className=" my-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
          porro illum dolore voluptatum sunt, dolor tempore asperiores pariatur
          modi voluptatibus. Ipsum commodi vitae mollitia magnam expedita nulla?
          Officia, culpa labore. Lorem ipsum dolor sit amet consectetur
          <br />
          adipisicing elit. Voluptate odio perspiciatis numquam suscipit, omnis
          saepe et maiores eaque, aliquid cupiditate eveniet modi velit quis
          natus rerum accusamus vero inventore voluptatum.\ Lorem ipsum dolor
          sit amet
          <br />
          numquam quia adipisci, rem enim laudantium soluta in, aspernatur
          animi. Alias ipsa officia, a aliquid sint dolorum perspiciatis.
        </div>
        <NavLink to="/">
          <h1 className="text-[#3730a3] my-5 font-bold">go to home page ? </h1>
        </NavLink>
      </main>
    </Layout>
  );
};

export default AboutUs;
