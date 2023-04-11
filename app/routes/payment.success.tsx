import { Link } from "@remix-run/react";
import Button from "~/components/core/Buttons";
import Header from "~/components/Header";

const Success = () => {
  return (
    <div>
      <Header />
      <div className="mx-auto flex max-w-lg flex-col gap-8">
        <h1 className="text-lg font-semibold">Payment successful</h1>
        <p>Thank you! You are all ready to go and start!</p>

        <Link to="/app">
          <Button>Start now</Button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
