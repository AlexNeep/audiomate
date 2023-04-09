import { Link, useLocation } from "@remix-run/react";
import { useRef, useState } from "react";
import { BsBarChartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdPersonOutline } from "react-icons/md";
import { isPremium } from "~/utils";
import { useOutsideAlerter } from "~/utils/hooks";
import { UserProfile } from "~/utils/types";
import Button, { ButtonPaddingOptions } from "./core/Buttons";
import { PremiumLink } from "./home/PremiumLink";

const ICON_SIZE = 25;

const Header = ({ user }: { user: UserProfile | undefined }) => {
  const isLoggedIn = Boolean(user);
  const showPremium = !isPremium(user);

  const [menuOpen, setMenuOpen] = useState(false);

  const location = useLocation();
  const fixHeader = location?.pathname === "/";
  const showStreakBar = user;

  return (
    <div
      className={`flex w-full flex-col ${
        fixHeader && "sticky top-0 w-full"
      } mb-8`}
    >
      <div
        className={`top-0 z-30 flex w-full items-center justify-between gap-4 bg-orange-200 px-4  py-2 lg:py-5 ${
          !showStreakBar && "shadow-md"
        }`}
      >
        <GiHamburgerMenu
          size="25"
          className="cursor-pointer fill-slate-800 lg:hidden"
          onClick={() => setMenuOpen(true)}
        />

        <Home user={user} />

        <MainMenus
          isLoggedIn={isLoggedIn}
          setMenuOpen={setMenuOpen}
          showPremium={showPremium}
        />
      </div>

      {menuOpen && (
        <>
          <div className="fixed top-0 z-50">
            <BurgerMenu
              showPremium={showPremium}
              setMenuOpen={setMenuOpen}
              isLoggedIn={isLoggedIn}
              user={user}
            />
          </div>

          <div className="fixed top-0 z-40 h-screen w-screen bg-slate-800 bg-opacity-75" />
        </>
      )}
    </div>
  );
};

const MainMenus = ({
  isLoggedIn,
  setMenuOpen,
  showPremium,
}: {
  isLoggedIn: boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  showPremium: boolean;
}) => {
  return (
    <div className="flex  items-center gap-3">
      {isLoggedIn ? (
        <>
          {
            <div className="flex items-center gap-3">
              <div className="hidden items-center gap-3 lg:flex">
                <HeaderLink to="scenarios" text="Scenarios" />
                <HeaderLink to="profile/vocabulary" text="Vocabulary" />
              </div>

              {showPremium ? (
                <PremiumLink fullWidth />
              ) : (
                <ScenariosLinkNavbar />
              )}
            </div>
          }
        </>
      ) : (
        <>
          <div className="hidden items-center gap-4 lg:flex">
            <HeaderLink to="/#features" text="Features" />
            <HeaderLink to="pricing" text="Pricing" />
            <HeaderLink to="login" text="Login" />
          </div>
        </>
      )}
    </div>
  );
};

type BurgerMenuProps = {
  showPremium: Boolean;
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isLoggedIn: boolean;
  user?: UserProfile;
};

const BurgerMenu = ({
  showPremium,
  setMenuOpen,
  isLoggedIn,
  user,
}: BurgerMenuProps) => {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef, () => setMenuOpen(false));

  const closeMenu = () => setMenuOpen(false);

  return (
    <div
      ref={wrapperRef}
      className="absolute left-0 top-0 h-screen w-1/3 min-w-[300px] bg-slate-200"
    >
      <div className="relative flex h-20 w-full items-center justify-between border-b border-slate-400 px-4">
        <Home onClick={closeMenu} user={user} />

        <button onClick={() => setMenuOpen(false)}>
          <IoMdClose className="fill-slate-400" size="30" />
        </button>
      </div>

      <div className="mt-10 flex flex-col gap-4 px-4">
        {isLoggedIn ? (
          <>
            {<ProfileLink setMenuOpen={setMenuOpen} />}

            <ScenariosLink setMenuOpen={setMenuOpen} />

            <VocabularyLink setMenuOpen={setMenuOpen} />

            {showPremium && <PremiumLink setMenuOpen={setMenuOpen} />}
          </>
        ) : (
          <>
            <TransparentButtonLink
              to="/#features"
              text="Features"
              onClick={closeMenu}
            />
            <TransparentButtonLink
              to="pricing"
              text="Pricing"
              onClick={closeMenu}
            />
            <TransparentButtonLink
              to="login"
              text="Login"
              onClick={closeMenu}
            />
            <GetStartedLink
              setMenuOpen={setMenuOpen}
              fullWidth
              padding={ButtonPaddingOptions.MEDIUM}
            />
          </>
        )}
      </div>
    </div>
  );
};

type LinkProps = {
  setMenuOpen?: (value: boolean) => void;
  hideButton?: boolean;
  fullWidth?: boolean;
};

const ICON_GAP = "gap-1";

const ScenariosLinkNavbar = ({ setMenuOpen = () => {} }: LinkProps) => {
  return (
    <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
      <Button>
        <div className={`flex items-center justify-center ${ICON_GAP}`}>
          Dashboard
        </div>
      </Button>
    </Link>
  );
};

const ScenariosLink = ({ setMenuOpen = () => {} }: LinkProps) => {
  return (
    <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
      <Button>
        <div
          className={`mx-auto flex w-2/3 items-center justify-between ${ICON_GAP}`}
        >
          Dashboard
        </div>
      </Button>
    </Link>
  );
};

const VocabularyLink = ({ setMenuOpen = () => {} }: LinkProps) => {
  return (
    <Link to="/profile/vocabulary" onClick={() => setMenuOpen(false)}>
      <Button>
        <div
          className={`mx-auto flex w-2/3 items-center justify-between ${ICON_GAP}`}
        >
          Vocabulary
          <BsBarChartFill size={ICON_SIZE} />
        </div>
      </Button>
    </Link>
  );
};

const Home = ({
  onClick,
  user,
}: {
  onClick?: () => void;
  user: UserProfile | null | undefined;
}) => {
  return (
    <Link
      onClick={onClick}
      to={`${user ? "/dashboard" : "/"} `}
      className="flex h-14 items-center justify-center gap-2 text-2xl font-bold text-slate-800"
    >
      <img
        src={"/logo-blank.png"}
        loading="eager"
        className={`h-8 w-auto  rounded-xl`}
      />
    </Link>
  );
};

const ProfileLink = ({ setMenuOpen = () => {}, hideButton }: LinkProps) => {
  if (hideButton)
    return (
      <Link to="/profile" onClick={() => setMenuOpen(false)}>
        <MdPersonOutline
          size={30}
          className="rounded-3xl border-2 border-blue-800 fill-blue-800"
        />
      </Link>
    );

  return (
    <Link to="/profile" onClick={() => setMenuOpen(false)}>
      <Button>
        <div
          className={`mx-auto flex w-2/3 items-center justify-between ${ICON_GAP}`}
        >
          Profile
          <MdPersonOutline
            size={30}
            className="rounded-3xl border-2 border-slate-50 fill-slate-50"
          />
        </div>
      </Button>
    </Link>
  );
};

const GetStartedLink = ({
  setMenuOpen = () => {},
  fullWidth,
  padding = ButtonPaddingOptions.SMALL,
}: LinkProps & { padding?: ButtonPaddingOptions }) => {
  const location = useLocation();
  const qs = new URLSearchParams(location.search);
  const trial = qs.get("trial");

  return (
    <Link
      key="header"
      to={trial ? "/pricing?trial=true" : "/dashboard"}
      onClick={() => setMenuOpen(false)}
      className="transition-all duration-200 ease-in-out hover:scale-105"
    >
      <Button padding={padding} variant="hypercolour">
        <div
          className={`mx-auto flex w-full items-center ${
            fullWidth ? "w-full justify-center" : "w-2/3 justify-between"
          } ${ICON_GAP}`}
        >
          {trial ? "Start free trial" : "Get started"}
        </div>
      </Button>
    </Link>
  );
};

const HeaderLink = ({ to, text }: { to: string; text: string }) => {
  return (
    <Link
      to={to}
      className="rounded-md px-2 py-1 text-lg font-semibold text-blue-800 transition-all duration-200 ease-in-out hover:bg-blue-800 hover:bg-opacity-10"
    >
      {text}
    </Link>
  );
};

const TransparentButtonLink = ({
  onClick,
  text,
  to,
}: {
  onClick: () => void;
  to: string;
  text: string;
}) => {
  return (
    <Link
      onClick={onClick}
      to={to}
      className="text-lg font-semibold text-blue-800"
    >
      <Button variant="transparent">
        <span className="px-5">{text}</span>
      </Button>
    </Link>
  );
};

export default Header;
