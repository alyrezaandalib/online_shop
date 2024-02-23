import { useFormik } from "formik";
import * as Yup from "yup";
import { useEffect } from "react";
import Input from "./input";
import { signUpUser } from "../services/signUpsServices";
import { Button } from "@material-tailwind/react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuth, useAuthActions } from "../context/AuthProvider";
import UseQuery from "../hooks/useQuery";

const initialValues = {
  name: "",
  email: "",
  password: "",
  passwordConfirmation: "",
  phoneNumber: "",
};

const validationSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .required("Email is required")
    .email("Invalid email format"),
  phoneNumber: Yup.string()
    .required("phone Number is required")
    .matches(/^[0-9]+$/, "Must be only digits")
    .min(11, "Must be exactly 11 digits")
    .max(11, "Must be exactly 11 digits"),
  passwordConfirmation: Yup.string()
    .required("password is required")
    .oneOf([Yup.ref("password"), null], "Passwords must match"),
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
    if (userData) navigate(redirect);
  }, [userData, redirect]);

  const onSubmit = async (values) => {
    const { name, email, password, phoneNumber } = values;
    const userData = {
      name,
      email,
      password,
      phoneNumber,
    };
    try {
      const { data } = await signUpUser(userData);
      setAuth(data);
      localStorage.setItem("AuthState", JSON.stringify(data));
      toast.success("welcome to online shop");
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
        <Input formik={formik} label="Name" name="name" />
        <Input formik={formik} label="Email" name="email" />
        <Input formik={formik} label="Phone Number" name="phoneNumber" />
        <Input
          formik={formik}
          label="Password"
          name="password"
          type="password"
        />
        <Input
          formik={formik}
          label="Password Confirmation"
          name="passwordConfirmation"
          type="password"
        />
        <div className="mt-8 flex flex-col gap-y-4">
          <Button type="submit" color="deep-purple">
            Sign Up
          </Button>
        </div>
      </div>
    </form>
  );
};

export default SignUpForm;
