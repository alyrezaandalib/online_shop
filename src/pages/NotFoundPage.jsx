import { NavLink } from "react-router-dom";
import Layout from "../layout/Layout";

const NotFound = () => {
  return (
    <Layout>
      <div className="my-16 w-[70%] h-fit font-bold mx-auto py-3 px-5 text-lg">
        <h1>not found page !</h1>
        <NavLink to="/">
          <h1 className="text-[#3730a3] my-5">go to home page ? </h1>
        </NavLink>
      </div>
    </Layout>
  );
};

export default NotFound;
