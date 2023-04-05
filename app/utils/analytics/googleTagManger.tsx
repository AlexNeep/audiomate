import { useLocation } from "@remix-run/react";
import { useEffect } from "react";

const GoogleTagManager = ({
  env,
  gtmTrackingId,
}: {
  env: "production" | "development" | "test";
  gtmTrackingId: string | undefined;
}) => {
  const location = useLocation();

  useEffect(() => {
    if (env !== "development" && gtmTrackingId?.length) {
      const gtmScript = document.createElement("script");

      gtmScript.innerHTML = `
        (function(w, d, s, l, i) {
          w[l] = w[l] || [];
          w[l].push({
              'gtm.start': new Date().getTime(),
              event: 'gtm.js'
          });
          var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
          j.async = true;
          j.src =
              'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
          f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', '${gtmTrackingId}');`;

      document.head.appendChild(gtmScript);

      return () => {
        document.head.removeChild(gtmScript);
      };
    }
  }, [location, gtmTrackingId]);

  useEffect(() => {
    window.dataLayer?.push({
      event: "VirtualPageView",
    });
  }, [location.pathname]);

  return env === "development" || !gtmTrackingId ? null : (
    <>
      <noscript>
        <iframe
          src={`https://www.googletagmanager.com/ns.html?id=${gtmTrackingId}`}
          height="0"
          width="0"
          style={{ display: "none", visibility: "hidden" }}
        />
      </noscript>
    </>
  );
};

export default GoogleTagManager;
