import { Link, useNavigate } from "react-router-dom";
import { Button } from "@material-tailwind/react";
import SignUp from "../component/signup";
import UseQuery from "../hooks/useQuery";

const SignUpPage = () => {
  const query = UseQuery();
  const redirect = query.get("redirect") || "/";
  const navigate = useNavigate();
  return (
    <div className="flex w-full h-screen">
      <div className="w-full flex flex-col justify-center items-center lg:w-1/2 bg-gray-100">
        <SignUp />
        <Link to={`/log-in?redirect=${redirect}`}>
          <h2 className="flex lg:hidden mt-5 text-[#3730a3] font-bold">
            Already login ?
          </h2>
        </Link>
      </div>
      <div className="hidden relative lg:flex h-full w-1/2 justify-center items-center bg-gray-200">
        <div className="w-60 h-60 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full animate-bounce"></div>
        <div className="w-full h-1/2 absolute bottom-0 bg-white/10 backdrop-blur-lg flex justify-center items-center">
          <div className="w-50 flex flex-col justify-center items-center">
            <Button
              color="deep-purple"
              onClick={() => navigate(`/log-in?redirect=${redirect}`)}
            >
              go to log in
            </Button>
            <Link to="/" className="mt-5">
              go to home page !
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
