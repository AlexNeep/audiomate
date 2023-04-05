import { LoaderFunction, redirect } from "@remix-run/node";

export const loader: LoaderFunction = () => {
  return redirect("https://share-eu1.hsforms.com/1e0-dQW3vTjaiLcA9jiNRVwfxmeh");
};

const Contact = () => {
  return (
    <div>
      <h1 className="my-6 text-3xl font-bold">Contact us</h1>
    </div>
  );
};

export default Contact;
