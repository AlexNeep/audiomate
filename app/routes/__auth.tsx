import { createClerkClient } from "@clerk/remix/api.server";
import { getAuth } from "@clerk/remix/ssr.server";
import { LoaderFunction, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { json } from "react-router";

export const loader: LoaderFunction = async (args) => {
  const { userId } = await getAuth(args);

  if (!userId) {
    return redirect("/login");
  }

  // const user = await createClerkClient({
  //   secretKey: process.env.CLERK_SECRET_KEY,
  // }).users.getUser(userId);

  // if (!user?.publicMetadata?.plan) return redirect("/pricing");

  return json({});
};

const AuthLayout = () => {
  return <Outlet />;
};

export default AuthLayout;
