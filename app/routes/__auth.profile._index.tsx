import { SignedIn, UserProfile } from "@clerk/remix";
import Header from "~/components/Header";

const Profile = () => {
  return (
    <div>
      <Header />
      <SignedIn>
        <UserProfile />
      </SignedIn>
    </div>
  );
};

export default Profile;
