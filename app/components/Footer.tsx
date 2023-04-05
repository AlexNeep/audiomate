import { Link, useLocation } from "@remix-run/react";

const Footer = () => {
  const location = useLocation();
  const hideFooter =
    location?.pathname.includes("/scenarios") ||
    location?.pathname.includes("/lessons/");
  if (hideFooter) return null;

  return (
    <div className="h-14 w-full bg-blue-300 p-4">
      <div className="relative m-auto flex h-full w-full max-w-5xl items-center justify-center">
        <Link
          className="flex flex-wrap justify-center gap-1 font-semibold text-slate-900 "
          to="/contact"
        >
          <span>We would love to hear your feedback.</span>
          <span>
            <u>Get in touch</u>
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Footer;
