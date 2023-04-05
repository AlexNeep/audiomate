import { json, LoaderFunction, MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { useEffect } from "react";

import styles from "~/index.css";
import Button from "./components/core/Buttons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { isGuest } from "./utils";
import GoogleTagManager from "./utils/analytics/googleTagManger";
import { setupHotjar } from "./utils/analytics/hotjar";
import { getUserProfile, updateUserProfile } from "./utils/db.server";
import { getUserSession } from "./utils/session.server";
import { UserProfile } from "./utils/types";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "LanguageMate | the world's best language-learning chatbot",
  description:
    "Speak to the world's best language-learning chatbot and confidently master foreign languages through conversation",
  viewport: "width=device-width,initial-scale=1",
  "og:title": "LanguageMate",
  "og:description":
    "Speak to the world's best language-learning chatbot and confidently master foreign languages through conversation",
  "og:type": "website",
  "og:url": "https://languagemate.io",
  "og:image":
    "https://storage.googleapis.com/languagemate-public/Facebook%20og%20image.png",
  "twitter:title": "LanguageMate",
  "twitter:description": "Master foreign languages through conversation",
  "twitter:image":
    "https://storage.googleapis.com/languagemate-public/Twitter%20card.png",
  "twitter:card": "summary_large_image",
});

export function links() {
  return [{ href: styles, rel: "stylesheet" }];
}

export type RootLoaderData = {
  user?: UserProfile;
  env: "development" | "test" | "production";
  is_guest: boolean;
};

async function updateLastLogin(userProfile: UserProfile) {
  const timestamp = new Date();
  const uid = userProfile.uid;

  return await updateUserProfile(uid, { last_login: timestamp });
}

export const loader: LoaderFunction = async ({ request }) => {
  try {
    const user = await getUserSession(request);
    if (!user) throw Error();

    const userProfile = await getUserProfile(user.uid);

    if (!userProfile) throw Error();

    return json<RootLoaderData>({
      user: userProfile,
      env: process.env.NODE_ENV,
      is_guest: isGuest(userProfile),
    });
  } catch (e) {
    return json<RootLoaderData>({
      user: undefined,
      env: process.env.NODE_ENV,
      is_guest: false,
    });
  }
};

function addTrackers() {
  setupHotjar();
}

export default function App() {
  const { user, env } = useLoaderData<RootLoaderData>() as RootLoaderData;

  useEffect(() => {
    if (env === "production") addTrackers();
  }, []);

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <GoogleTagManager env={env} gtmTrackingId="GTM-PXRZMNX" />
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-100 ">
        <div className="min-h-screen">
          <Header user={user} />
          <div className="px-2">
            <Outlet />
          </div>
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>

      <body className="bg-slate-100">
        <Header user={undefined} />
        <div className="mx-auto flex min-h-screen max-w-lg flex-col gap-8 px-2">
          <h1 className="text-lg font-bold text-blue-800">
            LanguageMate is at capacity right now
          </h1>

          <p>
            We're thrilled to have so many users! Fear not, we're hustling to
            make some room and get things back up to speed faster than a cheetah
            on roller skates. In the meantime, hang tight and enjoy some cat
            videos (we won't judge).
          </p>

          <p>Thanks for your patience and for being a part of our community!</p>

          <p>Try refreshing or come back later</p>

          <img
            src="https://firebasestorage.googleapis.com/v0/b/languagemate2.appspot.com/o/IMG_0059.PNG?alt=media&token=b0426f00-2cc3-471c-9a25-f27ad180d043"
            className="mx-auto h-auto w-1/2 max-w-[300px] rounded-md shadow-md"
          />
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function CatchBoundary() {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <Meta />
        <Links />
      </head>

      <body className="bg-slate-100">
        <Header user={undefined} />
        <div className="mx-auto flex min-h-screen max-w-lg flex-col gap-8 px-2">
          <h1 className="text-lg font-bold text-blue-800">
            This page does not exist
          </h1>

          <Link to="/">
            <Button>Go home</Button>
          </Link>
          <img
            src="https://firebasestorage.googleapis.com/v0/b/languagemate2.appspot.com/o/IMG_0059.PNG?alt=media&token=b0426f00-2cc3-471c-9a25-f27ad180d043"
            className="mx-auto h-auto w-1/2 max-w-[300px] rounded-md shadow-md"
          />
        </div>
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
