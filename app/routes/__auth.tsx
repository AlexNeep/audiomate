import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { json } from "react-router";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);
  if (!userId) {
    return redirect("/login");
  }

  return json({});
};

const AuthLayout = () => {
  return <Outlet />;
};

export default AuthLayout;
