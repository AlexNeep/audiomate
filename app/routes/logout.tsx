import { UserButton } from "@clerk/clerk-react";
import Header from "~/components/Header";

const Logout = () => {
  return (
    <div>
      <Header />
      <h1>My application</h1>
      <UserButton />
    </div>
  );
};

export default Logout;
