import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import { LoaderFunction, MetaFunction } from "@vercel/remix";
import { useEffect } from "react";

import { ClerkApp } from "@clerk/remix";
import { rootAuthLoader } from "@clerk/remix/ssr.server";
import styles from "~/index.css";
import Header from "./components/Header";
import GoogleTagManager from "./utils/analytics/googleTagManger";
import { setupHotjar } from "./utils/analytics/hotjar";

const description =
  "Effortlessly create and edit text using just your voice in seconds";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "AudioMate",
  description,
  viewport: "width=device-width,initial-scale=1",
  "og:title": "AudioMate",
  "og:description": description,
  "og:type": "website",
  "og:url": "https://audiomate.me",
  "og:image": "https://audiomate.me/interface.png",
  "twitter:title": "AudioMate",
  "twitter:description": description,
  "twitter:image": "https://audiomate.me/interface.png",
  "twitter:card": "summary_large_image",
});

export function links() {
  return [{ href: styles, rel: "stylesheet" }];
}

export type RootLoaderData = {
  env: "development" | "test" | "production";
};

export const loader: LoaderFunction = async (args) => {
  return rootAuthLoader(
    args,
    () => {
      return { env: process.env.NODE_ENV };
    },
    { loadUser: true }
  );
};

function addTrackers() {
  setupHotjar();
}

function App() {
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

export default ClerkApp(App);

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
        <Header />
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

import { ClerkCatchBoundary } from "@clerk/remix";

export const CatchBoundary = ClerkCatchBoundary();
