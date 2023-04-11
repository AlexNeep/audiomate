import { SignedIn, UserProfile } from "@clerk/remix";
import { Link } from "@remix-run/react";
import Button from "~/components/core/Buttons";
import Header from "~/components/Header";

const Profile = () => {
  return (
    <div>
      <Header />
      <SignedIn>
        <div className="mx-auto flex flex-col items-center gap-8 px-1">
          <UserProfile />
          <Link to="/profile/billing" className="w-40">
            <Button variant="transparent">Billing</Button>
          </Link>
        </div>
      </SignedIn>
    </div>
  );
};

export default Profile;
