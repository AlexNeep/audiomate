import { SignedIn, UserProfile } from "@clerk/remix";
import Header from "~/components/Header";
import Contact from "./contact";

const Profile = () => {
  return (
    <div>
      <Header />
      I have not setup this page fully yet. Send me a message here and I will
      handle your query ASAP and build this page
      <Contact />
    </div>
  );
};

export default Profile;
