import { UserProfile } from "~utils/types";
type LoaderData = {
  user: UserProfile | undefined | null;
};

export const loader: LoaderFunction = async ({ request }) => {
  const userToken = await getUserSession(request);
  const user = userToken ? await getUserProfile(userToken.uid) : undefined;

  return json<LoaderData>({
    user,
  });
};
