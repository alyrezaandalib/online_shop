import Layout from "../layout/Layout";
import { Button } from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { useAuth } from "../context/AuthProvider";

const Profile = () => {
  const userData = useAuth();
  if (!userData) {
    return (
      <Layout>
        <div className="my-16 w-[70%] h-fit font-bold text-center mx-auto py-3 px-5 text-lg">
          <h1>You are not logged in yet</h1>
        </div>
      </Layout>
    );
  }
  return (
    <Layout>
      <div className="my-16 w-[80%] mx-auto py-3 px-5 lg:w-[40%]">
        <form
          onSubmit={() => {}}
          className="bg-white px-14 py-5 rounded-3xl border-2 shadow-xl w-full"
        >
          <h1 className="text-2xl font-semibold">Account information</h1>
          <p className="font-medium text-sm text-gray-500 mt-3">
            Welcome back! Please enter your details.
          </p>
          <div className="mt-8">
            <div className="my-5">
              <Input label="userName" color="deep-purple" />
            </div>
            <Input label="email" color="deep-purple" />
            <div className="mt-8 flex flex-col gap-y-4">
              <Button type="submit" color="deep-purple">
                register changes
              </Button>
            </div>
          </div>
        </form>
      </div>
    </Layout>
  );
};

export default Profile;
