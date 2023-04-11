var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_stream = require("stream"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 2e4;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let callbackName = "onShellReady";
  return new Promise((resolve, reject) => {
    let didError = !1, { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this),
      {
        [callbackName]() {
          let body = new import_stream.PassThrough();
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new Response(body, {
              status: didError ? 500 : responseStatusCode,
              headers: responseHeaders
            })
          ), pipe(body);
        },
        onShellError(err) {
          reject(err);
        },
        onError(error) {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  CatchBoundary: () => CatchBoundary,
  ErrorBoundary: () => ErrorBoundary,
  default: () => root_default,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react11 = require("@remix-run/react"), import_react12 = require("react"), import_ssr = require("@clerk/remix/ssr.server"), import_remix2 = require("@clerk/remix");

// app/index.css
var app_default = "/build/_assets/index-VAVRCJRH.css";

// app/components/Header.tsx
var import_remix = require("@clerk/remix"), import_react7 = require("@remix-run/react"), import_react8 = require("react"), import_gi = require("react-icons/gi"), import_io2 = require("react-icons/io"), import_md = require("react-icons/md");

// app/utils/hooks.ts
var import_react2 = require("@remix-run/react"), import_react3 = require("react");
function useOutsideAlerter(ref, onOutsideClick) {
  (0, import_react3.useEffect)(() => {
    function handleClickOutside(event) {
      ref.current && !ref.current.contains(event.target) && onOutsideClick();
    }
    return document.addEventListener("mousedown", handleClickOutside), () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}

// app/components/core/Buttons.tsx
var import_react4 = require("@remix-run/react"), import_react5 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
var Button = ({
  children,
  variant,
  padding = "py-4" /* MEDIUM */,
  onClick,
  ...rest
}) => {
  let variantClassNames = variant === "transparent" ? "text-blue-500 disabled:bg-slate-300 outline outline-blue-500 shadow-md" : variant === "red" ? "bg-red-500 text-white disabled:bg-red-200 shadow-md" : variant === "green" ? "bg-green-500 text-white disabled:bg-green-200 shadow-md" : variant === "hypercolour" ? "background-animate-slow bg-gradient-to-r from-green-500 via-blue-500 to-purple-400 text-white shadow-md" : variant === "none" ? "" : "bg-orange-500 text-stone-800 disabled:bg-orange-200 shadow-md", transition = (0, import_react4.useNavigation)(), { state } = transition, [clicked, setCliced] = (0, import_react5.useState)(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(
    "button",
    {
      onClick: (e) => {
        setCliced(!0), onClick && onClick(e);
      },
      ...rest,
      className: `w-full rounded-md px-2 font-semibold  ${variantClassNames} ${padding} ${state === "loading" && clicked && "opacity-50"}`,
      children
    },
    void 0,
    !1,
    {
      fileName: "app/components/core/Buttons.tsx",
      lineNumber: 50,
      columnNumber: 5
    },
    this
  );
}, Buttons_default = Button;

// app/components/home/PremiumLink.tsx
var import_react6 = require("@remix-run/react"), import_io = require("react-icons/io");
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), PremiumLink = ({
  setMenuOpen = () => {
  },
  fullWidth,
  iconSize = 24
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_react6.Link, { to: "/pricing", onClick: () => setMenuOpen(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(Buttons_default, { variant: "hypercolour", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
  "div",
  {
    className: `mx-auto flex ${fullWidth ? "w-full" : "w-2/3"} items-center justify-between gap-2`,
    children: [
      "Go Premium",
      /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(import_io.IoIosRocket, { size: iconSize }, void 0, !1, {
        fileName: "app/components/home/PremiumLink.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/home/PremiumLink.tsx",
    lineNumber: 21,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/components/home/PremiumLink.tsx",
  lineNumber: 20,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/home/PremiumLink.tsx",
  lineNumber: 19,
  columnNumber: 5
}, this);

// app/components/Header.tsx
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), Header = () => {
  let { userId } = (0, import_remix.useAuth)(), isLoggedIn = Boolean(userId), showPremium = !0, [menuOpen, setMenuOpen] = (0, import_react8.useState)(!1), location = (0, import_react7.useLocation)(), fixHeader = (location == null ? void 0 : location.pathname) === "/", showStreakBar = userId;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "div",
    {
      className: `flex w-full flex-col ${fixHeader && "sticky top-0 w-full"} mb-8`,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "div",
        {
          className: `relative top-0 z-30 flex w-full items-center justify-between gap-4 bg-orange-200 py-4 lg:px-10  ${!showStreakBar && "shadow-md"}`,
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                import_gi.GiHamburgerMenu,
                {
                  size: "25",
                  className: "z-10 ml-4 cursor-pointer fill-slate-800 lg:hidden",
                  onClick: () => setMenuOpen(!0)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 35,
                  columnNumber: 11
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "absolute left-0 top-0 flex w-full items-center justify-center lg:relative lg:w-fit", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Home, {}, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 42,
                columnNumber: 13
              }, this) }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 41,
                columnNumber: 11
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                MainMenus,
                {
                  isLoggedIn,
                  setMenuOpen,
                  showPremium
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 45,
                  columnNumber: 11
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/Header.tsx",
              lineNumber: 34,
              columnNumber: 9
            }, this),
            menuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "fixed top-0 z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
                BurgerMenu,
                {
                  showPremium,
                  setMenuOpen,
                  isLoggedIn
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 55,
                  columnNumber: 15
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 54,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "fixed top-0 z-40 h-screen w-screen bg-slate-800 bg-opacity-75" }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 62,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/components/Header.tsx",
              lineNumber: 53,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 29,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 24,
      columnNumber: 5
    },
    this
  );
}, MainMenus = ({
  isLoggedIn,
  setMenuOpen,
  showPremium
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "z-10 mr-4 flex items-center gap-3", children: isLoggedIn ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "flex items-center gap-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react7.Link, { to: "/app", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Buttons_default, { children: "New chat" }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 86,
  columnNumber: 17
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 85,
  columnNumber: 15
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 84,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 82,
  columnNumber: 9
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "hidden items-center gap-4 lg:flex", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HeaderLink, { to: "/pricing", text: "Pricing" }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 94,
    columnNumber: 13
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(HeaderLink, { to: "/login", text: "Login" }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 95,
    columnNumber: 13
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Header.tsx",
  lineNumber: 93,
  columnNumber: 11
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 92,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 80,
  columnNumber: 5
}, this), BurgerMenu = ({
  showPremium,
  setMenuOpen,
  isLoggedIn,
  user
}) => {
  let wrapperRef = (0, import_react8.useRef)(null);
  useOutsideAlerter(wrapperRef, () => setMenuOpen(!1));
  let closeMenu = () => setMenuOpen(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    "div",
    {
      ref: wrapperRef,
      className: "absolute left-0 top-0 h-screen w-1/3 min-w-[300px] bg-slate-200",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "relative flex h-20 w-full items-center justify-between border-b border-slate-400 px-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Home, { onClick: closeMenu, withBackground: !0 }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 127,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("button", { onClick: () => setMenuOpen(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_io2.IoMdClose, { className: "fill-slate-400", size: "30" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 130,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 129,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 126,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "mt-10 flex flex-col gap-4 px-4", children: isLoggedIn ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ProfileLink, { setMenuOpen }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 137,
            columnNumber: 14
          }, this),
          showPremium && /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PremiumLink, { setMenuOpen }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 139,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            TransparentButtonLink,
            {
              to: "/pricing",
              text: "Pricing",
              onClick: closeMenu
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 143,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            TransparentButtonLink,
            {
              to: "/login",
              text: "Login",
              onClick: closeMenu
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 148,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            GetStartedLink,
            {
              setMenuOpen,
              fullWidth: !0,
              padding: "py-4" /* MEDIUM */
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 153,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 134,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 122,
      columnNumber: 5
    },
    this
  );
}, ICON_GAP = "gap-1", Home = ({
  onClick,
  withBackground = !1
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  import_react7.Link,
  {
    onClick,
    to: "/",
    className: "flex h-14 items-center justify-center gap-2 text-2xl font-bold text-slate-800",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
      "img",
      {
        src: withBackground ? "/logo.png" : "/logo-blank.png",
        loading: "eager",
        className: `w-auto  rounded ${withBackground ? "h-10" : "h-8"}`
      },
      void 0,
      !1,
      {
        fileName: "app/components/Header.tsx",
        lineNumber: 186,
        columnNumber: 7
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/components/Header.tsx",
    lineNumber: 181,
    columnNumber: 5
  },
  this
), ProfileLink = ({ setMenuOpen = () => {
}, hideButton }) => hideButton ? /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react7.Link, { to: "/profile", onClick: () => setMenuOpen(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  import_md.MdPersonOutline,
  {
    size: 30,
    className: "rounded-3xl border-2 border-blue-800 fill-blue-800"
  },
  void 0,
  !1,
  {
    fileName: "app/components/Header.tsx",
    lineNumber: 199,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 198,
  columnNumber: 7
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react7.Link, { to: "/profile", onClick: () => setMenuOpen(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Buttons_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  "div",
  {
    className: `mx-auto flex w-2/3 items-center justify-between ${ICON_GAP}`,
    children: [
      "Profile",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_md.MdPersonOutline,
        {
          size: 30,
          className: "rounded-3xl border-2 border-slate-50 fill-slate-50"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 213,
          columnNumber: 11
        },
        this
      )
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/Header.tsx",
    lineNumber: 209,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 208,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 207,
  columnNumber: 5
}, this), GetStartedLink = ({
  setMenuOpen = () => {
  },
  fullWidth,
  padding = "py-2 lg:py-4" /* SMALL */
}) => {
  let location = (0, import_react7.useLocation)(), trial = new URLSearchParams(location.search).get("trial");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
    import_react7.Link,
    {
      to: trial ? "/pricing?trial=true" : "/pricing",
      onClick: () => setMenuOpen(!1),
      className: "transition-all duration-200 ease-in-out hover:scale-105",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Buttons_default, { padding, variant: "hypercolour", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "div",
        {
          className: `mx-auto flex w-full items-center ${fullWidth ? "w-full justify-center" : "w-2/3 justify-between"} ${ICON_GAP}`,
          children: trial ? "Start free trial" : "Get started"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 240,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 239,
        columnNumber: 7
      }, this)
    },
    "header",
    !1,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 233,
      columnNumber: 5
    },
    this
  );
}, HeaderLink = ({ to, text }) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  import_react7.Link,
  {
    to,
    className: "z-10 cursor-pointer rounded-md px-2 py-1 text-lg font-semibold text-gray-800 transition-all duration-200 ease-in-out hover:bg-gray-600 hover:bg-opacity-10",
    children: text
  },
  void 0,
  !1,
  {
    fileName: "app/components/Header.tsx",
    lineNumber: 254,
    columnNumber: 5
  },
  this
), TransparentButtonLink = ({
  onClick,
  text,
  to
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  import_react7.Link,
  {
    onClick,
    to,
    className: "text-lg font-semibold text-blue-800",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Buttons_default, { variant: "transparent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("span", { className: "px-5", children: text }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 279,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 278,
      columnNumber: 7
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/Header.tsx",
    lineNumber: 273,
    columnNumber: 5
  },
  this
), Header_default = Header;

// app/utils/analytics/googleTagManger.tsx
var import_react9 = require("@remix-run/react"), import_react10 = require("react"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), GoogleTagManager = ({
  env,
  gtmTrackingId
}) => {
  let location = (0, import_react9.useLocation)();
  return (0, import_react10.useEffect)(() => {
    if (env !== "development" && (gtmTrackingId == null ? void 0 : gtmTrackingId.length)) {
      let gtmScript = document.createElement("script");
      return gtmScript.innerHTML = `
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
        })(window, document, 'script', 'dataLayer', '${gtmTrackingId}');`, document.head.appendChild(gtmScript), () => {
        document.head.removeChild(gtmScript);
      };
    }
  }, [location, gtmTrackingId]), (0, import_react10.useEffect)(() => {
    var _a3;
    (_a3 = window.dataLayer) == null || _a3.push({
      event: "VirtualPageView"
    });
  }, [location.pathname]), env === "development" || !gtmTrackingId ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("noscript", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "iframe",
    {
      src: `https://www.googletagmanager.com/ns.html?id=${gtmTrackingId}`,
      height: "0",
      width: "0",
      style: { display: "none", visibility: "hidden" }
    },
    void 0,
    !1,
    {
      fileName: "app/utils/analytics/googleTagManger.tsx",
      lineNumber: 50,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/utils/analytics/googleTagManger.tsx",
    lineNumber: 49,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/utils/analytics/googleTagManger.tsx",
    lineNumber: 48,
    columnNumber: 5
  }, this);
}, googleTagManger_default = GoogleTagManager;

// app/utils/analytics/hotjar.ts
function setupHotjar() {
  (function(h, o, t, j, a, r) {
    h.hj = h.hj || function() {
      (h.hj.q = h.hj.q || []).push(arguments);
    }, h._hjSettings = { hjid: 3303988, hjsv: 6 }, a = o.getElementsByTagName("head")[0], r = o.createElement("script"), r.async = 1, r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv, a.appendChild(r);
  })(window, document, "https://static.hotjar.com/c/hotjar-", ".js?sv=");
}

// app/root.tsx
var import_remix3 = require("@clerk/remix");

// app/utils/db.server.ts
var import_firebase_admin2 = require("firebase-admin");

// app/services/db.server.ts
var import_firebase_admin = __toESM(require("firebase-admin")), import_app = require("firebase-admin/app"), import_app2 = require("firebase/app"), _a;
if (!import_firebase_admin.default.apps.length) {
  let config = {
    credential: import_firebase_admin.default.credential.cert({
      projectId: process.env.FIREBASE_ADMIN_PROJECT_ID,
      clientEmail: process.env.FIREBASE_ADMIN_CLIENT_EMAIL,
      privateKey: (_a = process.env.FIREBASE_ADMIN_PRIVATE_KEY) == null ? void 0 : _a.replace(/\\n/g, `
`)
    }),
    databaseURL: process.env.FIREBASE_DATABASE_URL
  };
  (0, import_app.initializeApp)(config);
}
var db = import_firebase_admin.default.firestore(), adminAuth = import_firebase_admin.default.auth(), Firebase, _a2;
if (!((_a2 = Firebase == null ? void 0 : Firebase.apps) != null && _a2.length)) {
  let firebaseConfig2 = {
    apiKey: process.env.FIREBASE_KEY,
    authDomain: "audiomate.firebaseapp.com",
    projectId: "audiomate",
    storageBucket: "audiomate.appspot.com",
    messagingSenderId: "768929423248",
    appId: "1:768929423248:web:8d0f7a3e2617c1ea62dd15",
    measurementId: "G-046G6QMKSH"
  };
  Firebase = (0, import_app2.initializeApp)(firebaseConfig2);
}

// app/utils/payment.ts
var NEW_PROFILE_TOKENS = 2e4;
var SUBSCRIBED_USER_MESSAGES = {
  guest: 25,
  free: 50,
  pro: 1e3,
  accelerated: 3e3,
  ultimate: 1e4
};
var plans = [
  {
    id: "pro",
    title: "Pro",
    price: 6.99 /* pro */,
    features: [
      "Max output length 500 words",
      "Max voice inputs length 30 seconds",
      "Version history"
    ],
    not_features: []
  },
  {
    id: "accelerated",
    title: "Accelerated",
    price: 8.99 /* accelerated */,
    features: [
      "Max output length 750 words",
      "Max voice inputs length 30 seconds",
      "Version history"
    ]
  },
  {
    id: "ultimate",
    title: "Ultimate",
    price: 9.99 /* ultimate */,
    features: [
      "Max output length 2000 words",
      "Max voice inputs length 60 seconds",
      "Version history"
    ]
  }
];

// app/utils/db.server.ts
var usersRef = db.collection("users");
async function getUserProfile(uid) {
  let doc = await usersRef.doc(uid).get();
  return doc.exists ? doc.data() : null;
}
async function getUserProfileByCustomerNumber(customerNumber) {
  let docs = await usersRef.limit(1).where("customer_number", "==", customerNumber).get(), doc = [];
  return docs.forEach((currenctDoc) => {
    doc.push(currenctDoc.data());
  }), doc[0];
}
async function createNewProfile(email, uid, marketing_emails, referrer) {
  if (!await usersRef.doc(uid).set(
    {
      created_at: import_firebase_admin2.firestore.Timestamp.now(),
      tokens: NEW_PROFILE_TOKENS,
      messages: email === "" ? SUBSCRIBED_USER_MESSAGES.guest : SUBSCRIBED_USER_MESSAGES.free,
      email,
      uid,
      marketing_emails,
      referrer
    },
    { merge: !0 }
  ))
    throw Error("failed to create user profile");
}
async function updateUserProfile(uid, newUserProfileData) {
  usersRef.doc(uid).set(newUserProfileData, { merge: !0 });
}

// app/root.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "AudioMate",
  viewport: "width=device-width,initial-scale=1"
});
function links() {
  return [{ href: app_default, rel: "stylesheet" }];
}
var loader = async (args) => (0, import_ssr.rootAuthLoader)(
  args,
  async ({ request }) => {
    let { userId } = request.auth;
    return { env: "development", userProfile: userId ? await getUserProfile(userId) : void 0 };
  },
  { loadUser: !0 }
);
function addTrackers() {
  setupHotjar();
}
function App() {
  let { env } = (0, import_react11.useLoaderData)();
  return (0, import_react12.useEffect)(() => {
    env === "production" && addTrackers();
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 90,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 91,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap",
          rel: "stylesheet"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 92,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { rel: "manifest", href: "/manifest.json" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 96,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(googleTagManger_default, { env, gtmTrackingId: "GTM-PXRZMNX" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 97,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 98,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 89,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { className: "bg-slate-100 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "min-h-screen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 103,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 102,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 101,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 88,
    columnNumber: 5
  }, this);
}
var root_default = (0, import_remix2.ClerkApp)(App);
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 120,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap",
          rel: "stylesheet"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 121,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 125,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 126,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 118,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("body", { className: "bg-slate-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(Header_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { className: "mx-auto flex min-h-screen max-w-lg flex-col gap-8 px-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("h1", { className: "text-lg font-bold text-blue-800", children: "LanguageMate is at capacity right now" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 132,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "We're thrilled to have so many users! Fear not, we're hustling to make some room and get things back up to speed faster than a cheetah on roller skates. In the meantime, hang tight and enjoy some cat videos (we won't judge)." }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 136,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Thanks for your patience and for being a part of our community!" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 143,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("p", { children: "Try refreshing or come back later" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 145,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
          "img",
          {
            src: "https://firebasestorage.googleapis.com/v0/b/languagemate2.appspot.com/o/IMG_0059.PNG?alt=media&token=b0426f00-2cc3-471c-9a25-f27ad180d043",
            className: "mx-auto h-auto w-1/2 max-w-[300px] rounded-md shadow-md"
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 147,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 131,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 152,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 153,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_react11.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 129,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 117,
    columnNumber: 5
  }, this);
}
var CatchBoundary = (0, import_remix3.ClerkCatchBoundary)();

// app/routes/api.login.link-guest-account.tsx
var api_login_link_guest_account_exports = {};
__export(api_login_link_guest_account_exports, {
  action: () => action
});
var import_node2 = require("@remix-run/node");

// app/utils/emails.server.ts
function sendWelcomeEmail(email) {
  return sendPlunkEvent(email, "create_account" /* create_account */);
}
function sendPlunkEvent(email, event) {
  let EMAIL_API_KEY = process.env.PLUNK_SECRET_API_KEY;
  if (!EMAIL_API_KEY) {
    console.log("No email API key");
    return;
  }
  return fetch("https://api.useplunk.com/v1/track", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${EMAIL_API_KEY}`
    },
    body: JSON.stringify({ event, email })
  });
}

// app/utils/session.server.ts
var import_node = require("@remix-run/node");

// app/utils/user.server.ts
var import_auth = require("firebase/auth");
async function signIn(email, password) {
  let auth = (0, import_auth.getAuth)();
  return (0, import_auth.signInWithEmailAndPassword)(auth, email, password).then((res) => ({ res })).catch((error) => (error == null ? void 0 : error.code) === "auth/user-not-found" ? { error: "404" } : (error == null ? void 0 : error.code) === "auth/wrong-password" ? { error: "401" } : { error: "500" });
}
async function signUp(email, password, hasSetMarketingEmails, referrer) {
  let auth = (0, import_auth.getAuth)(), user = await (0, import_auth.createUserWithEmailAndPassword)(auth, email, password);
  return await triggerNewAccountEvents(
    email,
    user.user.uid,
    hasSetMarketingEmails,
    referrer
  ), user;
}
async function triggerNewAccountEvents(email, uid, hasSetMarketingEmails, referrer) {
  await createNewProfile(email, uid, hasSetMarketingEmails, referrer), email && sendWelcomeEmail(email);
}
async function getSessionToken(idToken) {
  let decodedToken = await adminAuth.verifyIdToken(idToken);
  if ((decodedToken == null ? void 0 : decodedToken.provider_id) === "anonymous")
    return createSessionCookie(idToken);
  if (new Date().getTime() / 1e3 - decodedToken.auth_time > 5 * 60)
    throw new Error("Recent sign in required");
  return createSessionCookie(idToken);
}
function createSessionCookie(idToken) {
  return adminAuth.createSessionCookie(idToken, { expiresIn: 12096e5 });
}

// app/utils/session.server.ts
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret)
  throw new Error("SESSION_SECRET must be set!");
var storage = (0, import_node.createCookieSessionStorage)({
  cookie: {
    name: "__session",
    secure: !1,
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: !0
  }
});
async function createUserSession(idToken, redirectTo) {
  let token = await getSessionToken(idToken), session = await storage.getSession();
  return session.set("token", token), (0, import_node.redirect)(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
async function getUserSession(request) {
  let token = (await storage.getSession(request.headers.get("Cookie"))).get("token");
  if (!token)
    return null;
  try {
    return await adminAuth.verifySessionCookie(token, !0);
  } catch {
    return null;
  }
}

// app/routes/api.login.link-guest-account.tsx
var action = async ({ request }) => {
  let userToken = await getUserSession(request);
  if (!userToken)
    return (0, import_node2.json)({}, { status: 500 });
  let email = (await request.formData()).get("email") ?? "";
  return updateUserProfile(userToken == null ? void 0 : userToken.uid, {
    email
  }), sendWelcomeEmail(email), (0, import_node2.json)({ success: !0 });
};

// app/routes/api.stripe-webhook.tsx
var api_stripe_webhook_exports = {};
__export(api_stripe_webhook_exports, {
  action: () => action2
});
var import_node4 = require("@remix-run/node");

// app/utils/payment.server.ts
var import_node3 = require("@remix-run/node");
var STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY, stripe = require("stripe")(STRIPE_SECRET_KEY), priceTiers = {
  production: {
    pro: "price_1MVt9uCcziHGfD7iZznsxpcX",
    accelerated: "price_1MVtABCcziHGfD7i1vzQAgEc",
    ultimate: "price_1Mr2LcCcziHGfD7iUgN5ML4R"
  },
  test: {
    pro: "price_1MVt91CcziHGfD7iyQmjA83R",
    accelerated: "price_1MVt9UCcziHGfD7iRCJxZG0r",
    ultimate: "price_1Mr2MZCcziHGfD7iE2efLVPX"
  }
};
function getPriceTierId(nodeEnv, plan) {
  return nodeEnv === "production" ? priceTiers.production[plan] : priceTiers.test[plan];
}
async function createCheckout(priceId, origin, uid) {
  if (!STRIPE_SECRET_KEY)
    throw Error();
  try {
    let session = await stripe.checkout.sessions.create({
      billing_address_collection: "auto",
      line_items: [{ price: priceId, quantity: 1 }],
      mode: "subscription",
      allow_promotion_codes: !0,
      success_url: `${origin}/payment/success`,
      cancel_url: `${origin}/payment/failure`,
      subscription_data: {
        trial_period_days: 7,
        metadata: { client_reference_id: uid }
      }
    });
    return (0, import_node3.redirect)(session.url);
  } catch (err) {
    return console.log(err), (0, import_node3.json)({ error: "Something went wrong" });
  }
}
async function retrieveSubscription(subscriptionId) {
  return await stripe.subscriptions.retrieve(subscriptionId);
}
async function handlePaymentIntentSucceeded(paymentIntent) {
  let customerNumber = paymentIntent.customer;
  if (!customerNumber)
    throw Error("Customer account not created");
  let uid = (await getUserProfileByCustomerNumber(
    customerNumber
  )).uid;
  if (!uid)
    throw Error("Could not add tokens to user account");
  let plan = "pro" /* pro */;
  return await updateUserProfile(uid, {});
}
async function handleInvoicePaid(invoiceData) {
  let subscription = await retrieveSubscription(invoiceData.subscription), customerNumber = invoiceData.customer, uid = subscription.metadata.client_reference_id;
  return await updateUserProfile(uid, { customer_number: customerNumber });
}

// app/routes/api.stripe-webhook.tsx
var action2 = async ({ request }) => {
  let endpointSecret = process.env.STRIPE_WEBHOOK_SECRET, stripe2 = require("stripe")(process.env.STRIPE_SECRET_KEY), event = null, payload = await request.text();
  if (endpointSecret) {
    let signature = request.headers.get("stripe-signature");
    try {
      event = await stripe2.webhooks.constructEvent(
        payload,
        signature,
        endpointSecret
      );
    } catch (err) {
      return err instanceof Error ? (console.log("\u26A0\uFE0F  Webhook signature verification failed.", err.message), (0, import_node4.json)({}, { status: 400 })) : (0, import_node4.json)({}, 500);
    }
  }
  switch (event == null ? void 0 : event.type) {
    case "payment_intent.succeeded":
      let paymentIntent = event.data.object;
      await handlePaymentIntentSucceeded(paymentIntent);
      break;
    case "invoice.paid":
      let invoiceData = event.data.object;
      await handleInvoicePaid(invoiceData);
      break;
    default:
      console.log(`Unhandled event type ${event == null ? void 0 : event.type}.`);
  }
  return (0, import_node4.json)({});
};

// app/routes/api.generate-text.tsx
var api_generate_text_exports = {};
__export(api_generate_text_exports, {
  action: () => action3
});
var import_node5 = require("@remix-run/node");

// app/models/index.ts
var import_openai = require("openai");
async function getTextFromSpeech(audio) {
  let Errors;
  ((Errors2) => (Errors2.DEFAULT = "Something went wrong", Errors2.NO_TEXT = "We did not detect any words in that audio recording. Make sure your audio device is connected."))(Errors || (Errors = {}));
  try {
    let text = await transcribeAudioDirect(audio);
    if (text === "")
      throw Error("We did not detect any words in that audio recording. Make sure your audio device is connected." /* NO_TEXT */);
    if (!text)
      throw Error("Something went wrong" /* DEFAULT */);
    return text;
  } catch (e) {
    throw console.log(e), Error("Something went wrong" /* DEFAULT */);
  }
}
async function transcribeAudioDirect(audio) {
  let formData = new FormData();
  return formData.append("model", "whisper-1"), formData.append("file", audio, "audio.mp3"), formData.append("language", "en"), (await (await fetch(
    "https://api.openai.com/v1/audio/transcriptions",
    {
      body: formData,
      method: "post",
      headers: {
        encType: "multipart/form-data",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`
      }
    }
  )).json()).text;
}
async function generateTextFromInput(pastText, newUserInput) {
  var _a3, _b, _c;
  let Errors;
  ((Errors2) => Errors2.DEFAULT = "Something went wrong")(Errors || (Errors = {}));
  let config = {
    model: "gpt-3.5-turbo",
    max_tokens: 1e3,
    frequency_penalty: 0.2,
    presence_penalty: 1,
    temperature: 0.6,
    top_p: 1
  }, configuration = new import_openai.Configuration({
    apiKey: process.env.OPENAI_API_KEY
  }), openai = new import_openai.OpenAIApi(configuration), messages = [
    {
      role: "system",
      content: "Process the instructions and respond. The instructions may refer to or request edits to the next message. Follow the instructions exactly."
    },
    {
      role: "user",
      content: `Past content: ${pastText}`
    },
    {
      role: "user",
      content: `Instructions: ${newUserInput}`
    }
  ];
  try {
    let openAiRequest = openai.createChatCompletion({
      messages,
      ...config
    }), res = await Promise.race([
      openAiRequest,
      new Promise((_, reject) => setTimeout(() => reject(), 15e3))
    ]);
    return (_c = (_b = (_a3 = res == null ? void 0 : res.data) == null ? void 0 : _a3.choices) == null ? void 0 : _b[0].message) == null ? void 0 : _c.content;
  } catch (e) {
    return console.log(e), "Something went wrong" /* DEFAULT */;
  }
}

// app/routes/api.generate-text.tsx
var action3 = async ({ request }) => {
  try {
    let formData = await request.formData(), audio = formData.get("audio"), inputText = formData.get("input_text"), pastText = formData.get("past_text") ?? "";
    if (!audio && !inputText)
      throw Error("Audio or input text required");
    let text = audio ? await getTextFromSpeech(audio) : inputText;
    console.log(text);
    let generatedResText = await generateTextFromInput(pastText, text);
    return console.log(generatedResText), (0, import_node5.json)({ text: generatedResText });
  } catch (e) {
    return console.log(e), (0, import_node5.json)({ text: "", error: e });
  }
};

// app/routes/payment.failure.tsx
var payment_failure_exports = {};
__export(payment_failure_exports, {
  default: () => payment_failure_default
});
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), Failure = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { children: "Payment Failed" }, void 0, !1, {
  fileName: "app/routes/payment.failure.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/payment.failure.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this), payment_failure_default = Failure;

// app/routes/payment.success.tsx
var payment_success_exports = {};
__export(payment_success_exports, {
  default: () => payment_success_default
});
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), Success = () => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Payment successful" }, void 0, !1, {
    fileName: "app/routes/payment.success.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Thank you! You are all ready to go and start learning!" }, void 0, !1, {
    fileName: "app/routes/payment.success.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("p", { children: "Slight apologises that this page is so bare your subscription will help me improve the site" }, void 0, !1, {
    fileName: "app/routes/payment.success.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/payment.success.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this), payment_success_default = Success;

// app/routes/profile.payment.tsx
var profile_payment_exports = {};
__export(profile_payment_exports, {
  default: () => profile_payment_default,
  loader: () => loader2
});
var import_node6 = require("@remix-run/node");
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => {
  let stripe2 = require("stripe")(process.env.STRIPE_SECRET_KEY), user = await getUserSession(request);
  if (!user)
    return (0, import_node6.redirect)("/login");
  let userProfile = await getUserProfile(user.uid), portalSession = await stripe2.billingPortal.sessions.create({
    customer: userProfile == null ? void 0 : userProfile.customer_number,
    return_url: request.url
  });
  return (0, import_node6.redirect)(portalSession.url, { status: 303 });
}, PaymentDashboard = () => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "Payment Dashboard" }, void 0, !1, {
  fileName: "app/routes/profile.payment.tsx",
  lineNumber: 23,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/profile.payment.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this), profile_payment_default = PaymentDashboard;

// app/routes/api.tts.tsx
var api_tts_exports = {};
__export(api_tts_exports, {
  action: () => action4
});
var import_node7 = require("@remix-run/node");
var action4 = async ({ request }) => {
  try {
    let audio = (await request.formData()).get("audio"), text = await getTextFromSpeech(audio);
    return (0, import_node7.json)({ text });
  } catch (e) {
    return console.log(e), (0, import_node7.json)({ error: e, text: "" });
  }
};

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => contact_default,
  loader: () => loader3
});
var import_node8 = require("@remix-run/node"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader3 = () => (0, import_node8.redirect)("https://share-eu1.hsforms.com/1e0-dQW3vTjaiLcA9jiNRVwfxmeh"), Contact = () => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { className: "my-6 text-3xl font-bold", children: "Contact us" }, void 0, !1, {
  fileName: "app/routes/contact.tsx",
  lineNumber: 10,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/contact.tsx",
  lineNumber: 9,
  columnNumber: 5
}, this), contact_default = Contact;

// app/routes/pricing.tsx
var pricing_exports = {};
__export(pricing_exports, {
  action: () => action6,
  default: () => pricing_default,
  loader: () => loader5,
  meta: () => meta3
});
var import_node11 = require("@remix-run/node"), import_react15 = require("@remix-run/react"), import_react16 = require("react");

// app/components/core/ErrorMessage.tsx
var import_bi = require("react-icons/bi"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), ErrorMessage = ({ error }) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("p", { className: "flex items-center justify-start gap-2 rounded bg-red-200 px-4 py-2 font-semibold text-black shadow-md", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_bi.BiErrorCircle, { size: "25", className: "flex-shrink-0 fill-red-900" }, void 0, !1, {
    fileName: "app/components/core/ErrorMessage.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this),
  error
] }, void 0, !0, {
  fileName: "app/components/core/ErrorMessage.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this), ErrorMessage_default = ErrorMessage;

// app/components/landing-page/SubBulletPoint.tsx
var import_ai = require("react-icons/ai"), import_bi2 = require("react-icons/bi"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), BulletPoint = ({
  point,
  excluded,
  bold
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  "p",
  {
    className: `flex items-center justify-start gap-4 text-left ${excluded ? "text-slate-400" : "text-slate-700"} ${bold ? "font-semibold" : "font-normal"}`,
    children: [
      excluded ? /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_bi2.BiPlus, { size: 25, className: "rotate-45 text-red-400" }, void 0, !1, {
        fileName: "app/components/landing-page/SubBulletPoint.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_ai.AiOutlineEdit, { size: 25, className: "fill-blue-500" }, void 0, !1, {
        fileName: "app/components/landing-page/SubBulletPoint.tsx",
        lineNumber: 21,
        columnNumber: 9
      }, this),
      point
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/landing-page/SubBulletPoint.tsx",
    lineNumber: 13,
    columnNumber: 5
  },
  this
), SubBulletPoint_default = BulletPoint;

// app/components/Modals/LoginModal.tsx
var Dialog = __toESM(require("@radix-ui/react-dialog")), import_react13 = require("@remix-run/react"), import_auth3 = require("firebase/auth"), import_react14 = require("react"), import_react_google_button = __toESM(require("react-google-button")), import_io3 = require("react-icons/io");

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action5,
  createAccount: () => createAccount,
  default: () => login_default,
  loader: () => loader4,
  meta: () => meta2
});
var import_node10 = require("@remix-run/node");

// app/models/login.ts
var import_node9 = require("@remix-run/node");
var newSignupRedirectAfterLoginPath = "/app", redirectAfterLoginPath = "/app", handleLogin = async (email, password, redirect7) => {
  let { res, error } = await signIn(email, password);
  if (error)
    return handleLoginError(error);
  if (!res.user)
    return handleLoginError();
  let token = await res.user.getIdToken();
  return createUserSession(token, redirect7 || redirectAfterLoginPath);
};
function handleLoginError(errorCode) {
  return errorCode === "404" ? { error: "Please create an account first" } : errorCode === "401" ? { error: "Login details are incorrect" } : (0, import_node9.json)({ error: "Something went wrong" });
}
var handleSignUp = async (email, password, redirect7, hasSetMarketingEmails, referrer) => {
  let { user } = await signUp(
    email,
    password,
    hasSetMarketingEmails,
    referrer
  ), token = await user.getIdToken();
  return createUserSession(token, redirect7 || newSignupRedirectAfterLoginPath);
}, handleClientAuth = async (email, uid, token, redirect7, hasSetMarketingEmails, referrer) => {
  let existingUser = await getUserProfile(uid), relevantRedirect = redirectAfterLoginPath;
  return existingUser || (relevantRedirect = newSignupRedirectAfterLoginPath, await triggerNewAccountEvents(email, uid, hasSetMarketingEmails, referrer)), existingUser && !(existingUser != null && existingUser.marketing_emails) && hasSetMarketingEmails && await updateUserProfile(existingUser.uid, {
    marketing_emails: hasSetMarketingEmails
  }), createUserSession(token, redirect7 || relevantRedirect);
};

// app/routes/login.tsx
var import_remix4 = require("@clerk/remix"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), meta2 = () => ({
  title: "AudioMate | Login"
}), action5 = async ({ request }) => {
  let formData = await request.formData(), _action = formData.get("_action");
  if (_action === "reset_password")
    return (0, import_node10.json)({
      error: "Sorry you have forgotten your password! We have not setup password resetting yet. Contact us and we will send you a reset link."
    });
  let email = formData.get("email"), uid = formData.get("uid"), token = formData.get("token"), password = formData.get("password"), redirect7 = formData.get("redirect"), referrer = formData.get("referrer"), hasSetMarketingEmails = formData.get("marketing_emails") == "true";
  if (uid && token)
    return await handleClientAuth(
      email,
      uid,
      token,
      redirect7,
      hasSetMarketingEmails,
      referrer
    );
  if (!password)
    throw Error("Something went wrong- no passowrd");
  return _action === "login" ? await handleLogin(email, password, redirect7) : _action === "signup" ? await handleSignUp(
    email,
    password,
    redirect7,
    hasSetMarketingEmails,
    referrer
  ) : (0, import_node10.json)({});
}, loader4 = async ({ request }) => {
  let user = await getUserSession(request);
  if (user)
    return (0, import_node10.redirect)("/scenarios");
  let redirectTo = new URL(request.url).searchParams.get("redirect") ?? "";
  return (0, import_node10.json)({ user, redirect: redirectTo });
};
async function createAccount({
  userCredentials,
  fetcher,
  marketingEmails,
  referrer,
  redirect: redirect7 = ""
}) {
  let user = userCredentials.user, token = await user.getIdToken();
  fetcher.submit(
    {
      email: user.email ?? "",
      marketing_emails: `${marketingEmails}`,
      uid: user.uid,
      token,
      redirect: redirect7,
      referrer
    },
    { action: "/login", method: "post" }
  );
}
var Login = () => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "m-auto flex flex-col gap-6 ", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Header_default, {}, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 156,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "mx-auto flex flex-col gap-4 lg:mx-auto lg:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(import_remix4.SignIn, { redirectUrl: "/app" }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 158,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 157,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/login.tsx",
  lineNumber: 155,
  columnNumber: 5
}, this), login_default = Login;

// app/services/firebase.ts
var import_app3 = require("firebase/app"), import_auth2 = require("firebase/auth"), firebaseConfig = {
  apiKey: "AIzaSyAqUOhATNBI_6MTCavtjLvCecp1enuSl7g",
  authDomain: "audiomate.firebaseapp.com",
  projectId: "audiomate",
  storageBucket: "audiomate.appspot.com",
  messagingSenderId: "768929423248",
  appId: "1:768929423248:web:8d0f7a3e2617c1ea62dd15",
  measurementId: "G-046G6QMKSH"
}, app;
try {
  app = (0, import_app3.getApp)();
} catch {
  app = (0, import_app3.initializeApp)(firebaseConfig);
}
var clientAuth = (0, import_auth2.getAuth)(app);

// app/components/Modals/LoginModal.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), LoginModal = ({
  open,
  onClose,
  redirect: redirect7,
  variant = "default",
  user
}) => {
  let fetcher = (0, import_react13.useFetcher)(), [error, setError] = (0, import_react14.useState)(""), [referrer, setReferrer] = (0, import_react14.useState)("");
  (0, import_react14.useEffect)(() => {
    setReferrer(document.referrer);
  }, []), (0, import_react14.useEffect)(() => {
    var _a3;
    (_a3 = fetcher.data) != null && _a3.success && window.location.reload();
  }, [fetcher]);
  let handleGoogleLogin = (user2) => {
    user2 ? linkGuestWithGoogleAccount() : loginWithGoogle();
  };
  function loginWithGoogle() {
    let provider = new import_auth3.GoogleAuthProvider();
    (0, import_auth3.signInWithPopup)(clientAuth, provider).then(
      (userCredentials) => createAccount({
        userCredentials,
        fetcher,
        marketingEmails: !0,
        referrer,
        redirect: redirect7
      })
    ).catch((e) => console.log(e));
  }
  function linkGuestWithGoogleAccount() {
    let provider = new import_auth3.GoogleAuthProvider();
    (0, import_auth3.signInAnonymously)(clientAuth).then((usercred) => {
      let user2 = usercred.user;
      (0, import_auth3.linkWithPopup)(user2, provider).then(() => {
        fetcher.submit(
          { email: user2.email ?? "" },
          { method: "post", action: "/api/login/link-guest-account" }
        );
      }).catch((e) => {
        let duplicateAccount = "Firebase: Error (auth/credential-already-in-use).", duplicateAccountMsg = "This Google account is already linked to another account. Please login with that account or use a different Google account.";
        if ((e == null ? void 0 : e.message) === duplicateAccount)
          return setError(duplicateAccountMsg);
        setError("Something went wrong");
      });
    });
  }
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Dialog.Root, { open, onOpenChange: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Dialog.Portal, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Dialog.Overlay, { className: "fixed inset-0 bg-slate-500 opacity-30" }, void 0, !1, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Dialog.Content, { className: "fixed left-[50%] top-[50%] flex w-[90vw] max-w-xl translate-x-[-50%] translate-y-[-50%] flex-col gap-8 rounded-lg bg-white px-6 py-10", children: [
      variant === "default" && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        DefaultContent,
        {
          handleGoogleLogin,
          error,
          user
        },
        void 0,
        !1,
        {
          fileName: "app/components/Modals/LoginModal.tsx",
          lineNumber: 97,
          columnNumber: 13
        },
        this
      ),
      variant === "pricing" && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        PricingContent,
        {
          handleGoogleLogin,
          error,
          user
        },
        void 0,
        !1,
        {
          fileName: "app/components/Modals/LoginModal.tsx",
          lineNumber: 104,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(Dialog.Close, { asChild: !0, className: "absolute right-2 top-2 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { "aria-label": "Close", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_io3.IoMdClose, { className: "fill-slate-400", size: "30" }, void 0, !1, {
        fileName: "app/components/Modals/LoginModal.tsx",
        lineNumber: 112,
        columnNumber: 15
      }, this) }, void 0, !1, {
        fileName: "app/components/Modals/LoginModal.tsx",
        lineNumber: 111,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/components/Modals/LoginModal.tsx",
        lineNumber: 110,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 95,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Modals/LoginModal.tsx",
    lineNumber: 93,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Modals/LoginModal.tsx",
    lineNumber: 92,
    columnNumber: 5
  }, this);
}, DefaultContent = ({
  handleGoogleLogin,
  error,
  user
}) => {
  let fullAccessFeatures = [
    `${SUBSCRIBED_USER_MESSAGES.free} more AI-powered messages`,
    "Access to all scenarios",
    "Generate translations",
    "Practise listening audio",
    "Track your vocabulary growth"
  ];
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col gap-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "flex items-center justify-center gap-2 text-lg font-semibold text-blue-800", children: "Sign up for full access" }, void 0, !1, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 141,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col items-start justify-center gap-2", children: fullAccessFeatures.map((text, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(SubBulletPoint_default, { point: text }, index, !1, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 147,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 145,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("hr", { className: "mx-auto w-1/2 border-gray-400" }, void 0, !1, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 151,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col items-center justify-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        import_react_google_button.default,
        {
          label: "Signup with Google",
          onClick: () => handleGoogleLogin(user)
        },
        void 0,
        !1,
        {
          fileName: "app/components/Modals/LoginModal.tsx",
          lineNumber: 154,
          columnNumber: 11
        },
        this
      ),
      error && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(ErrorMessage_default, { error }, void 0, !1, {
        fileName: "app/components/Modals/LoginModal.tsx",
        lineNumber: 159,
        columnNumber: 21
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 153,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Modals/LoginModal.tsx",
    lineNumber: 140,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Modals/LoginModal.tsx",
    lineNumber: 139,
    columnNumber: 5
  }, this);
}, PricingContent = ({
  handleGoogleLogin,
  error,
  user
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_jsx_dev_runtime14.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col gap-10", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("section", { className: "flex flex-col items-center justify-center gap-2 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h2", { className: "text-lg font-semibold text-blue-800", children: "Bye bye foreign language anxiety" }, void 0, !1, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 179,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: "Start your free trial now by creating an account in seconds." }, void 0, !1, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 182,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Modals/LoginModal.tsx",
    lineNumber: 178,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("hr", { className: "mx-auto w-1/2 border-gray-400" }, void 0, !1, {
    fileName: "app/components/Modals/LoginModal.tsx",
    lineNumber: 185,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-col items-center justify-center gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
      import_react_google_button.default,
      {
        label: "Signup with Google",
        onClick: () => handleGoogleLogin(user)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Modals/LoginModal.tsx",
        lineNumber: 188,
        columnNumber: 11
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "text-center text-sm text-gray-400", children: "After signing up, you'll then be taken to our payment provider to start your free trial." }, void 0, !1, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 192,
      columnNumber: 11
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(ErrorMessage_default, { error }, void 0, !1, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 196,
      columnNumber: 21
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Modals/LoginModal.tsx",
    lineNumber: 187,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Modals/LoginModal.tsx",
  lineNumber: 177,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Modals/LoginModal.tsx",
  lineNumber: 176,
  columnNumber: 5
}, this), LoginModal_default = LoginModal;

// app/routes/pricing.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), meta3 = () => ({
  title: "AudioMate | Pricing"
}), action6 = async ({ request }) => {
  try {
    let userToken = await getUserSession(request), plan = (await request.formData()).get("plan");
    if (!userToken) {
      let url = new URL(request.url), searchParams = new URLSearchParams(url.searchParams);
      searchParams.get("login") || searchParams.append("login", "true"), plan && searchParams.append("plan", plan);
      let newUrl = url.origin + url.pathname + "?" + searchParams.toString();
      return (0, import_node11.redirect)(newUrl);
    }
    if (!plan)
      throw Error("Something went wrong with pricing data");
    let priceId = getPriceTierId("development", plan), origin = request.url;
    return await createCheckout(priceId, origin, userToken.uid);
  } catch (e) {
    return e.message === "Not logged in" ? (0, import_node11.json)({ error: e == null ? void 0 : e.message }, { status: 401 }) : (0, import_node11.json)({ error: e == null ? void 0 : e.message }, { status: 500 });
  }
}, loader5 = async ({ request }) => {
  let userToken = await getUserSession(request), user = userToken ? await getUserProfile(userToken.uid) : void 0;
  return (0, import_node11.json)({
    user: user || void 0
  });
}, Payment = () => {
  let { user } = (0, import_react15.useLoaderData)(), actionData = (0, import_react15.useActionData)(), location = (0, import_react15.useLocation)(), query = new URLSearchParams(location.search), trial = query.get("trial"), [showLoginModal, setShowLoginModal] = (0, import_react16.useState)(!1), fetcher = (0, import_react15.useFetcher)();
  (0, import_react16.useEffect)(() => {
    let login = query.get("login"), removeParams = () => {
      let newUrl = window.location.pathname, params = new URLSearchParams(window.location.search);
      params.delete("login"), params.delete("plan"), params.toString() && (newUrl += "?" + params.toString()), window.history.pushState({ path: newUrl }, "", newUrl);
    };
    if (user && plan && login) {
      setShowLoginModal(!1), removeParams(), fetcher.submit({ plan }, { action: "/pricing", method: "post" });
      return;
    }
    login && setShowLoginModal(!0);
  }, [location]);
  let plan = query.get("plan");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Header_default, {}, void 0, !1, {
      fileName: "app/routes/pricing.tsx",
      lineNumber: 112,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mb-10 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h1", { className: "mb-10 text-center text-3xl font-bold text-blue-800", children: "Start becoming fluent today" }, void 0, !1, {
        fileName: "app/routes/pricing.tsx",
        lineNumber: 115,
        columnNumber: 9
      }, this),
      (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(ErrorMessage_default, { error: actionData == null ? void 0 : actionData.error }, void 0, !1, {
        fileName: "app/routes/pricing.tsx",
        lineNumber: 119,
        columnNumber: 31
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        import_react15.Form,
        {
          method: "post",
          className: "mx-auto flex flex-col items-center justify-center gap-10 text-center",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-wrap items-center justify-center gap-4 lg:gap-8", children: plans.map((plan2) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
              HeroPaymentSection,
              {
                title: plan2.title,
                id: plan2.id,
                price: plan2.price,
                features: plan2.features,
                notFeatures: plan2.not_features
              },
              plan2.id,
              !1,
              {
                fileName: "app/routes/pricing.tsx",
                lineNumber: 127,
                columnNumber: 15
              },
              this
            )) }, void 0, !1, {
              fileName: "app/routes/pricing.tsx",
              lineNumber: 125,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-col gap-8", children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h4", { className: "text-xl font-bold text-blue-800", children: "Our features" }, void 0, !1, {
                fileName: "app/routes/pricing.tsx",
                lineNumber: 140,
                columnNumber: 13
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Buttons_default, { type: "submit", name: "plan", value: plans[0].id, children: "Buy now" }, void 0, !1, {
                fileName: "app/routes/pricing.tsx",
                lineNumber: 145,
                columnNumber: 15
              }, this) }, void 0, !1, {
                fileName: "app/routes/pricing.tsx",
                lineNumber: 144,
                columnNumber: 13
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/pricing.tsx",
              lineNumber: 139,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/routes/pricing.tsx",
          lineNumber: 121,
          columnNumber: 9
        },
        this
      ),
      showLoginModal && /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        LoginModal_default,
        {
          variant: "pricing",
          open: showLoginModal,
          onClose: () => setShowLoginModal(!1),
          redirect: location.pathname + location.search,
          user
        },
        void 0,
        !1,
        {
          fileName: "app/routes/pricing.tsx",
          lineNumber: 153,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/pricing.tsx",
      lineNumber: 114,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/pricing.tsx",
    lineNumber: 111,
    columnNumber: 5
  }, this);
}, HeroPaymentSection = ({
  title,
  id,
  price,
  features,
  notFeatures,
  mostPopular
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "relative flex flex-col items-center justify-center gap-16 rounded-md bg-slate-100 p-6 shadow-lg", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h2", { className: "text-2xl font-bold text-blue-800", children: [
        title,
        " Plan"
      ] }, void 0, !0, {
        fileName: "app/routes/pricing.tsx",
        lineNumber: 185,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("h3", { className: "flex items-center justify-center gap-1 text-lg font-semibold text-blue-800", children: [
        "\xA3",
        price,
        mostPopular ? /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("span", { className: "font-semibold text-purple-600", children: "(most popular)" }, void 0, !1, {
          fileName: "app/routes/pricing.tsx",
          lineNumber: 189,
          columnNumber: 15
        }, this) : ""
      ] }, void 0, !0, {
        fileName: "app/routes/pricing.tsx",
        lineNumber: 186,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/pricing.tsx",
      lineNumber: 184,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SubBulletPoint_default, { bold: index === 0, point: feature }, feature, !1, {
        fileName: "app/routes/pricing.tsx",
        lineNumber: 201,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/pricing.tsx",
        lineNumber: 199,
        columnNumber: 11
      }, this),
      notFeatures && notFeatures.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(SubBulletPoint_default, { point: feature, excluded: !0 }, feature, !1, {
        fileName: "app/routes/pricing.tsx",
        lineNumber: 206,
        columnNumber: 15
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/pricing.tsx",
      lineNumber: 198,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/pricing.tsx",
    lineNumber: 183,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "flex items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(Buttons_default, { type: "submit", name: "plan", value: id, children: "Buy now" }, void 0, !1, {
    fileName: "app/routes/pricing.tsx",
    lineNumber: 212,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/pricing.tsx",
    lineNumber: 211,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/pricing.tsx",
  lineNumber: 182,
  columnNumber: 5
}, this), pricing_default = Payment;

// app/routes/_index.tsx
var index_exports = {};
__export(index_exports, {
  default: () => index_default
});
var import_react17 = require("react"), import_react18 = require("@remix-run/react");
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
var Index = () => {
  let [optionIndex, setOptionIndex] = (0, import_react17.useState)(0);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Header_default, {}, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 165,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "mx-auto flex max-w-5xl flex-col gap-10 scroll-smooth pb-10", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("section", { className: "mx-auto flex max-w-2xl flex-col items-center justify-center gap-8 px-4 lg:flex-row", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { className: "flex grow flex-col gap-4 lg:gap-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h1", { className: "shrink-0 text-center text-3xl font-bold text-orange-500", children: "Say it, Edit it, Perfect it" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 170,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("h2", { className: "text-center text-xl font-semibold text-slate-800", children: [
          "Effortlessly create and edit",
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
            "span",
            {
              children: [
                "text"
              ][optionIndex]
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_index.tsx",
              lineNumber: 175,
              columnNumber: 15
            },
            this
          ),
          " ",
          "using just your voice in seconds"
        ] }, void 0, !0, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 173,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_react18.Link, { to: "/app", className: "mx-auto w-fit text-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(Buttons_default, { children: "Start now for \xA34.99" }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 184,
          columnNumber: 15
        }, this) }, void 0, !1, {
          fileName: "app/routes/_index.tsx",
          lineNumber: 183,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/_index.tsx",
        lineNumber: 169,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
        "img",
        {
          className: "mx-auto block rounded-xl shadow-inner lg:w-1/2",
          src: "https://storage.cloud.google.com/audiomate-public/demo.png"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_index.tsx",
          lineNumber: 188,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 168,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/_index.tsx",
      lineNumber: 167,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_index.tsx",
    lineNumber: 164,
    columnNumber: 5
  }, this);
};
var index_default = Index;

// app/routes/logout.tsx
var logout_exports = {};
__export(logout_exports, {
  default: () => logout_default
});
var import_clerk_react = require("@clerk/clerk-react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime"), Logout = () => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(Header_default, {}, void 0, !1, {
    fileName: "app/routes/logout.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)("h1", { children: "My application" }, void 0, !1, {
    fileName: "app/routes/logout.tsx",
    lineNumber: 8,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_clerk_react.UserButton, {}, void 0, !1, {
    fileName: "app/routes/logout.tsx",
    lineNumber: 9,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/logout.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this), logout_default = Logout;

// app/routes/terms.tsx
var terms_exports = {};
__export(terms_exports, {
  default: () => terms_default
});
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), Terms = () => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col gap-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h1", { className: "font-bold text-blue-800", children: "Terms and conditions" }, void 0, !1, {
  fileName: "app/routes/terms.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/terms.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this), terms_default = Terms;

// app/routes/app.tsx
var app_exports = {};
__export(app_exports, {
  default: () => app_default2
});
var import_react19 = require("@remix-run/react"), import_react20 = require("react"), import_bi3 = require("react-icons/bi"), import_bs = require("react-icons/bs"), import_cg = require("react-icons/cg"), import_hi = require("react-icons/hi"), import_io4 = require("react-icons/io"), import_io5 = require("react-icons/io5");
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), App2 = () => {
  var _a3, _b, _c, _d;
  let fetcher = (0, import_react19.useFetcher)(), [versions, setVersions] = (0, import_react20.useState)([]), [currentVersionIndex, setCurrentVersionIndex] = (0, import_react20.useState)(
    null
  ), [inputText, setInputText] = (0, import_react20.useState)(""), [textEditMode, setTextEditMode] = (0, import_react20.useState)(!1), text = (_a3 = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _a3.text, currentVersion = versions[currentVersionIndex ?? versions.length - 1];
  (0, import_react20.useEffect)(() => {
    text && (setVersions((curr) => [...curr, text]), setCurrentVersionIndex(null));
  }, [text]);
  let error = ((_b = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _b.error) && (typeof ((_c = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _c.error) == "string" ? (_d = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _d.error : "Something went wrong"), isLoading = fetcher.state === "submitting" || fetcher.state === "loading", [duration, setDuration] = (0, import_react20.useState)(0), [recording, setRecording] = (0, import_react20.useState)(!1), [timer, setTimer] = (0, import_react20.useState)(null), [mediaRecorder, setMediaRecorder] = (0, import_react20.useState)(
    null
  ), [audioChunks, setAudioChunks] = (0, import_react20.useState)(null);
  function changeRecording() {
    recording ? stopRecording(mediaRecorder) : startRecording({
      setMediaRecorder,
      setAudioChunks,
      setDuration,
      setTimer
    }), setRecording(!recording);
  }
  (0, import_react20.useEffect)(() => {
    if (audioChunks) {
      let audioBlob = new Blob(audioChunks, { type: "audio/mp3" });
      submitForm(audioBlob), cleanUp();
    }
  }, [audioChunks]);
  function submitForm(audioBlob) {
    let form = new FormData();
    audioBlob && form.append("audio", audioBlob), form.append("input_text", inputText), form.append("past_text", currentVersion), fetcher.submit(form, {
      method: "post",
      encType: "multipart/form-data",
      action: "/api/generate-text"
    });
  }
  function cleanUp() {
    setMediaRecorder(null), setAudioChunks(null), timer && clearInterval(timer), setTimer(null), setDuration(0);
  }
  (0, import_react20.useEffect)(() => {
    let AudioRecorder = require("audio-recorder-polyfill");
    window.MediaRecorder = AudioRecorder;
  }, []);
  let isLeftArrowDisabled = versions.length === 0 || currentVersionIndex === 0, isRightArrowDisabled = typeof currentVersionIndex != "number" || currentVersionIndex === versions.length - 1;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "grid h-screen grid-rows-8 gap-4 pb-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Header_default, {}, void 0, !1, {
      fileName: "app/routes/app.tsx",
      lineNumber: 108,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/routes/app.tsx",
      lineNumber: 107,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("section", { className: "relative row-span-6 mx-2 rounded-lg bg-white text-gray-900 shadow lg:mx-auto lg:w-full lg:max-w-xl", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "absolute z-10 flex h-12 w-full items-center justify-center ", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          "button",
          {
            className: "absolute left-0 top-0 flex h-full items-center justify-center gap-2 rounded-br-lg rounded-tl-lg bg-orange-500 px-3 py-2 text-gray-800",
            onClick: () => {
              !currentVersion || navigator.share({ text: currentVersion });
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_io5.IoShareOutline, { size: "20" }, void 0, !1, {
              fileName: "app/routes/app.tsx",
              lineNumber: 120,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.tsx",
            lineNumber: 113,
            columnNumber: 11
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          "button",
          {
            className: "absolute right-0 top-0 flex h-full items-center justify-center gap-2 rounded-bl-lg rounded-tr-lg bg-orange-500 px-3 py-2 text-gray-800",
            onClick: () => {
              !currentVersion || (navigator.clipboard.writeText(currentVersion), alert("Copied"));
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_io5.IoCopyOutline, { size: "20" }, void 0, !1, {
              fileName: "app/routes/app.tsx",
              lineNumber: 131,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.tsx",
            lineNumber: 123,
            columnNumber: 11
          },
          this
        ),
        versions.length > 1 && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex h-full w-full items-center justify-center gap-2 text-center", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            "button",
            {
              disabled: isLeftArrowDisabled,
              onClick: () => setCurrentVersionIndex((curr) => (console.log(curr, versions), Math.max(curr ? curr - 1 : versions.length - 2, 0))),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
                import_bs.BsArrowLeftShort,
                {
                  size: "35",
                  className: `shrink-0 rounded-lg bg-gray-200 p-1 ${isLeftArrowDisabled ? "text-gray-400" : "text-gray-700"}`
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.tsx",
                  lineNumber: 146,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.tsx",
              lineNumber: 136,
              columnNumber: 15
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "w-32 font-semibold", children: typeof currentVersionIndex == "number" ? `Version ${currentVersionIndex + 1}` : "Latest version" }, void 0, !1, {
            fileName: "app/routes/app.tsx",
            lineNumber: 153,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            "button",
            {
              disabled: isRightArrowDisabled,
              onClick: () => setCurrentVersionIndex((curr) => curr ? Math.min(curr + 1, versions.length - 1) : 1),
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
                import_bs.BsArrowRightShort,
                {
                  size: "35",
                  className: `shrink-0  rounded-lg bg-gray-200 p-1 ${isRightArrowDisabled ? "text-gray-400" : "text-gray-700"}`
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/app.tsx",
                  lineNumber: 167,
                  columnNumber: 17
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.tsx",
              lineNumber: 158,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app.tsx",
          lineNumber: 135,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.tsx",
        lineNumber: 112,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "relative flex h-full w-full resize-none items-center justify-center pt-12 outline-none", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
          "textarea",
          {
            className: "h-full w-full resize-none px-4 py-2 outline-none",
            value: currentVersion,
            contentEditable: !1,
            placeholder: `Click the record button below and say some instructions.

You will then be able to make further edits.`,
            readOnly: !0
          },
          void 0,
          !1,
          {
            fileName: "app/routes/app.tsx",
            lineNumber: 178,
            columnNumber: 11
          },
          this
        ),
        isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "absolute top-1/2 flex -translate-y-1/2 transform flex-col items-center justify-center gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("span", { children: "Loading" }, void 0, !1, {
            fileName: "app/routes/app.tsx",
            lineNumber: 187,
            columnNumber: 15
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            import_cg.CgSpinner,
            {
              className: "flex-shrink-0 animate-spin  text-orange-500",
              size: "30"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.tsx",
              lineNumber: 188,
              columnNumber: 15
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/app.tsx",
          lineNumber: 186,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/app.tsx",
        lineNumber: 177,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/app.tsx",
      lineNumber: 111,
      columnNumber: 7
    }, this),
    textEditMode ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("section", { className: "relative row-span-1 flex w-full items-center justify-center px-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "rounded bg-gray-200 p-2 shadow", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        import_hi.HiOutlineMicrophone,
        {
          size: "25",
          onClick: () => setTextEditMode(!1),
          className: "text-gray-900"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app.tsx",
          lineNumber: 200,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/app.tsx",
        lineNumber: 199,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "textarea",
        {
          value: inputText,
          onChange: (e) => setInputText(e.currentTarget.value),
          className: "m-4 h-full w-full resize-none rounded p-2 shadow outline-none",
          onKeyDown: (e) => {
            e.keyCode === 13 && !e.shiftKey && submitForm();
          },
          disabled: isLoading
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app.tsx",
          lineNumber: 207,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "button",
        {
          type: "submit",
          className: "border border-transparent p-2",
          disabled: isLoading,
          onClick: () => submitForm(),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
            import_io4.IoMdSend,
            {
              size: "20",
              className: ` transition-colors duration-100 ${prompt.length > 0 ? "fill-gray-50" : "fill-gray-800"}`
            },
            void 0,
            !1,
            {
              fileName: "app/routes/app.tsx",
              lineNumber: 222,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app.tsx",
          lineNumber: 216,
          columnNumber: 11
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/app.tsx",
      lineNumber: 198,
      columnNumber: 9
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("section", { className: "relative row-span-1 flex w-full items-center justify-center", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        Microphone,
        {
          recording,
          changeRecording,
          duration
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app.tsx",
          lineNumber: 232,
          columnNumber: 11
        },
        this
      ),
      recording ? /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "absolute right-10 top-1/2 -translate-y-1/2 transform text-lg", children: [
        duration,
        " seconds",
        " "
      ] }, void 0, !0, {
        fileName: "app/routes/app.tsx",
        lineNumber: 239,
        columnNumber: 13
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        "button",
        {
          onClick: () => setTextEditMode(!0),
          className: "absolute right-10 top-1/2 -translate-y-1/2 transform  rounded-xl bg-gray-200  p-3 text-gray-800 shadow ",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_bi3.BiEdit, { size: "20", className: "shrink-0" }, void 0, !1, {
            fileName: "app/routes/app.tsx",
            lineNumber: 247,
            columnNumber: 15
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/routes/app.tsx",
          lineNumber: 243,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/app.tsx",
      lineNumber: 231,
      columnNumber: 9
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "rounded bg-red-200 px-2 py-1 text-center font-semibold shadow", children: error }, void 0, !1, {
      fileName: "app/routes/app.tsx",
      lineNumber: 253,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/app.tsx",
    lineNumber: 106,
    columnNumber: 5
  }, this);
}, app_default2 = App2;
function startRecording({
  setMediaRecorder,
  setAudioChunks,
  setDuration,
  setTimer
}) {
  navigator.mediaDevices.getUserMedia({ audio: !0, video: !1 }).then((stream) => {
    let localMediaRecorder = new MediaRecorder(stream);
    localMediaRecorder.start();
    let timer = setInterval(() => {
      setDuration((curr) => curr + 1);
    }, 1e3);
    setTimer(timer), localMediaRecorder.addEventListener("dataavailable", (event) => {
      console.log("Recording stopped, data available"), setAudioChunks((prev) => [...prev ?? [], event.data]);
    }), setMediaRecorder(localMediaRecorder);
  });
}
function stopRecording(mediaRecorder) {
  if (!mediaRecorder) {
    console.error("mediaRecorder is not defined");
    return;
  }
  mediaRecorder.stop(), mediaRecorder.stream.getAudioTracks().forEach((track) => track.stop());
}
var Microphone = ({
  changeRecording,
  recording,
  duration
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
  "div",
  {
    className: `cols-span-1 mx-auto w-fit rounded-xl p-4 shadow-lg transition-colors duration-500 ${recording ? duration % 2 ? "bg-red-500" : "bg-red-100" : "bg-orange-500"}`,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      import_hi.HiOutlineMicrophone,
      {
        onClick: changeRecording,
        size: "40",
        className: " shrink-0  text-gray-800"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/app.tsx",
        lineNumber: 323,
        columnNumber: 7
      },
      this
    )
  },
  void 0,
  !1,
  {
    fileName: "app/routes/app.tsx",
    lineNumber: 314,
    columnNumber: 5
  },
  this
);

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "c1f7a87e", entry: { module: "/build/entry.client-B2YUOGUI.js", imports: ["/build/_shared/chunk-VFRHADDM.js", "/build/_shared/chunk-FDDKQUMY.js", "/build/_shared/chunk-FN3KWL4V.js", "/build/_shared/chunk-4IYZMDEG.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-L2SBNQDF.js", imports: ["/build/_shared/chunk-PNRS76RF.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/_index": { id: "routes/_index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_index-PH2WEV7A.js", imports: ["/build/_shared/chunk-S23ENW3V.js", "/build/_shared/chunk-YJWDNDTZ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.generate-text": { id: "routes/api.generate-text", parentId: "root", path: "api/generate-text", index: void 0, caseSensitive: void 0, module: "/build/routes/api.generate-text-VNJMQONS.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.login.link-guest-account": { id: "routes/api.login.link-guest-account", parentId: "root", path: "api/login/link-guest-account", index: void 0, caseSensitive: void 0, module: "/build/routes/api.login.link-guest-account-HUH2MJH2.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.stripe-webhook": { id: "routes/api.stripe-webhook", parentId: "root", path: "api/stripe-webhook", index: void 0, caseSensitive: void 0, module: "/build/routes/api.stripe-webhook-EC7RELM5.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api.tts": { id: "routes/api.tts", parentId: "root", path: "api/tts", index: void 0, caseSensitive: void 0, module: "/build/routes/api.tts-HXBS76RE.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/app": { id: "routes/app", parentId: "root", path: "app", index: void 0, caseSensitive: void 0, module: "/build/routes/app-MKPJ5KFT.js", imports: ["/build/_shared/chunk-YJWDNDTZ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-ZDYSYRDV.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-X2KV5JM3.js", imports: ["/build/_shared/chunk-FQ4KIVVN.js", "/build/_shared/chunk-RRK7CBX6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/logout": { id: "routes/logout", parentId: "root", path: "logout", index: void 0, caseSensitive: void 0, module: "/build/routes/logout-A2UYPPIK.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/payment.failure": { id: "routes/payment.failure", parentId: "root", path: "payment/failure", index: void 0, caseSensitive: void 0, module: "/build/routes/payment.failure-ZM6UI2VR.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/payment.success": { id: "routes/payment.success", parentId: "root", path: "payment/success", index: void 0, caseSensitive: void 0, module: "/build/routes/payment.success-R6QYUF4G.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/pricing": { id: "routes/pricing", parentId: "root", path: "pricing", index: void 0, caseSensitive: void 0, module: "/build/routes/pricing-EPWODFTZ.js", imports: ["/build/_shared/chunk-S23ENW3V.js", "/build/_shared/chunk-FQ4KIVVN.js", "/build/_shared/chunk-YJWDNDTZ.js", "/build/_shared/chunk-AX4XTCKJ.js", "/build/_shared/chunk-RRK7CBX6.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile.payment": { id: "routes/profile.payment", parentId: "root", path: "profile/payment", index: void 0, caseSensitive: void 0, module: "/build/routes/profile.payment-R2UAXEMY.js", imports: ["/build/_shared/chunk-AX4XTCKJ.js", "/build/_shared/chunk-RRK7CBX6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/terms": { id: "routes/terms", parentId: "root", path: "terms", index: void 0, caseSensitive: void 0, module: "/build/routes/terms-33F5EAA2.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-C1F7A87E.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api.login.link-guest-account": {
    id: "routes/api.login.link-guest-account",
    parentId: "root",
    path: "api/login/link-guest-account",
    index: void 0,
    caseSensitive: void 0,
    module: api_login_link_guest_account_exports
  },
  "routes/api.stripe-webhook": {
    id: "routes/api.stripe-webhook",
    parentId: "root",
    path: "api/stripe-webhook",
    index: void 0,
    caseSensitive: void 0,
    module: api_stripe_webhook_exports
  },
  "routes/api.generate-text": {
    id: "routes/api.generate-text",
    parentId: "root",
    path: "api/generate-text",
    index: void 0,
    caseSensitive: void 0,
    module: api_generate_text_exports
  },
  "routes/payment.failure": {
    id: "routes/payment.failure",
    parentId: "root",
    path: "payment/failure",
    index: void 0,
    caseSensitive: void 0,
    module: payment_failure_exports
  },
  "routes/payment.success": {
    id: "routes/payment.success",
    parentId: "root",
    path: "payment/success",
    index: void 0,
    caseSensitive: void 0,
    module: payment_success_exports
  },
  "routes/profile.payment": {
    id: "routes/profile.payment",
    parentId: "root",
    path: "profile/payment",
    index: void 0,
    caseSensitive: void 0,
    module: profile_payment_exports
  },
  "routes/api.tts": {
    id: "routes/api.tts",
    parentId: "root",
    path: "api/tts",
    index: void 0,
    caseSensitive: void 0,
    module: api_tts_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/pricing": {
    id: "routes/pricing",
    parentId: "root",
    path: "pricing",
    index: void 0,
    caseSensitive: void 0,
    module: pricing_exports
  },
  "routes/_index": {
    id: "routes/_index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: index_exports
  },
  "routes/logout": {
    id: "routes/logout",
    parentId: "root",
    path: "logout",
    index: void 0,
    caseSensitive: void 0,
    module: logout_exports
  },
  "routes/login": {
    id: "routes/login",
    parentId: "root",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: login_exports
  },
  "routes/terms": {
    id: "routes/terms",
    parentId: "root",
    path: "terms",
    index: void 0,
    caseSensitive: void 0,
    module: terms_exports
  },
  "routes/app": {
    id: "routes/app",
    parentId: "root",
    path: "app",
    index: void 0,
    caseSensitive: void 0,
    module: app_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
