import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { logInUser } from "../services/loginServices";
import * as Yup from "yup";
import Input from "./input";
import { FcGoogle } from "react-icons/fc";
import { Button } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { useAuth, useAuthActions } from "../context/AuthProvider";
import UseQuery from "../hooks/useQuery";

const initialValues = {
  email: "",
  password: "",
};

const validationSchema = Yup.object({
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  password: Yup.string()
    .required("Password is required")
    .min(8, "at least enter 8 character")
    .max(20, "at last you can enter 20 character"),
});

const SignUpForm = () => {
  const query = UseQuery();
  const redirect = query.get("redirect") || "/";
  const navigate = useNavigate();
  const setAuth = useAuthActions();
  const userData = useAuth();

  useEffect(() => {
    if (userData) navigate("/checkout");
  }, [userData, redirect]);

  const onSubmit = async (values) => {
    try {
      const { data } = await logInUser(values);
      setAuth(data);
      localStorage.setItem("AuthState", JSON.stringify(data));
      toast.success("welcome to online shop ");
      navigate(redirect);
    } catch (error) {
      if (error.response && error.response.data.message) {
        const errorMessage = error.response.data.message;
        toast.error(errorMessage);
      }
    }
  };

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema,
    validateOnMount: true,
  });

  return (
    <form
      className="bg-white px-14 py-5 rounded-3xl border-2 shadow-xl"
      onSubmit={formik.handleSubmit}
    >
      <h1 className="text-2xl font-semibold">Welcome Back</h1>
      <p className="font-medium text-sm text-gray-500 mt-3">
        Welcome back! Please enter your details.
      </p>
      <div className="mt-4">
        <Input formik={formik} label="Email" name="email" />
        <Input
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />
        <div className="mt-8 text-[#3730a3]">
          <Link to={"/sign-up"}>Forget your password ?</Link>
        </div>
        <div className="mt-5 flex flex-col gap-y-4">
          <Button type="submit" color="deep-purple">
            log in
          </Button>
          <Button
            variant="outlined"
            color="blue-gray"
            className="flex items-center gap-3"
          >
            <FcGoogle className="text-lg" />
            Continue with Google
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
