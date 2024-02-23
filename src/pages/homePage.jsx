import HomeSwipJs from "../component/swiper";
import Layout from "../layout/Layout";
import * as data from "../data";
import { BsMouse } from "react-icons/bs";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const Home = () => {
  const dataList = data.products;
  return (
    <Layout>
      <main className="mt-24 flex flex-col items-center justify-center">
        <div className="flex items-center justify-between w-[90%] h-full">
          <div className="mx-3 w-1/3 hidden lg:block ">
            <Typography className="text-4xl font-semibold">Welcome</Typography>
            <Typography className="font-medium text-lg text-gray-500 mt-8">
              Bring on the fun and excitement every one of our shoes brings
            </Typography>
            <Typography className="font-medium text-lg text-gray-500 mt-8"></Typography>
            <div className="mt-8 ">
              <Link to="/products">
                <Button color="deep-purple" className="mr-3 rounded-none">
                  explore
                </Button>
              </Link>
              <Link to="/products">
                <Button
                  color="deep-purple"
                  variant="outlined"
                  className="rounded-none"
                >
                  shop now
                </Button>
              </Link>
            </div>
          </div>
          <div className="w-full h-full lg:w-1/2">
            <HomeSwipJs dataList={dataList} />
          </div>
        </div>
        <div className="hidden bg-transparent mt-14 lg:flex justify-center items-center w-full h-10 font-bold text-lg">
          <div className="w-fit h-full animate-bounce mt-7 ">
            <BsMouse />
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
