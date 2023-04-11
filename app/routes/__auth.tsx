import { json, LoaderFunction } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { getUserProfile } from "~/utils/db.server";
import { getUserSession } from "~/utils/session.server";
import { UserProfile } from "~/utils/types";

export type AuthLoaderData = {
  user: UserProfile | undefined;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userToken = await getUserSession(request);
  const user = userToken ? await getUserProfile(userToken.uid) : undefined;

  return json<AuthLoaderData>({ user: user ?? undefined });
};

const Auth = () => {
  return <Outlet />;
};

export default Auth;
