import { json, LoaderFunction, MetaFunction } from "@vercel/remix";
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
import Header from "./components/Header";
import GoogleTagManager from "./utils/analytics/googleTagManger";
import { setupHotjar } from "./utils/analytics/hotjar";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "AudioMate",
  // description:
  //   "Speak to the world's best language-learning chatbot and confidently master foreign languages through conversation",
  viewport: "width=device-width,initial-scale=1",
  // "og:title": "LanguageMate",
  // "og:description":
  //   "Speak to the world's best language-learning chatbot and confidently master foreign languages through conversation",
  // "og:type": "website",
  // "og:url": "https://languagemate.io",
  // "og:image":
  //   "https://storage.googleapis.com/languagemate-public/Facebook%20og%20image.png",
  // "twitter:title": "LanguageMate",
  // "twitter:description": "Master foreign languages through conversation",
  // "twitter:image":
  //   "https://storage.googleapis.com/languagemate-public/Twitter%20card.png",
  // "twitter:card": "summary_large_image",
});

export function links() {
  return [{ href: styles, rel: "stylesheet" }];
}

export type RootLoaderData = {
  env: "development" | "test" | "production";
};

export const loader: LoaderFunction = async ({ request }) => {
  return json({ env: process.env.NODE_ENV });
};

function addTrackers() {
  setupHotjar();
}

export default function App() {
  const { env } = useLoaderData<RootLoaderData>() as RootLoaderData;

  useEffect(() => {
    if (env === "production") addTrackers();
  }, []);

  useEffect(() => {
    if (env === "development") return;
    navigator.serviceWorker
      .register("/sw.js")
      .then(() => {
        console.log("Service worker registered!");
      })
      .catch((error) => {
        console.warn("Error registering service worker:");
        console.warn(error);
      });
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
        <link rel="manifest" href="/manifest.json" />
        <GoogleTagManager env={env} gtmTrackingId="GTM-PXRZMNX" />
        <Meta />
        <Links />
      </head>
      <body className="bg-slate-100 ">
        <div className="min-h-screen">
          <Outlet />
        </div>
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
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
