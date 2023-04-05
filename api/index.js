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
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_node2 = require("@remix-run/node"), import_react12 = require("@remix-run/react"), import_react13 = require("react");

// app/index.css
var app_default = "/build/_assets/index-4HMEDLFF.css";

// app/components/core/Buttons.tsx
var import_react2 = require("@remix-run/react"), import_react3 = require("react"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime");
var Button = ({
  children,
  variant,
  padding = "py-4" /* MEDIUM */,
  onClick,
  ...rest
}) => {
  let variantClassNames = variant === "transparent" ? "text-blue-500 disabled:bg-slate-300 outline outline-blue-500 shadow-md" : variant === "red" ? "bg-red-500 text-white disabled:bg-red-200 shadow-md" : variant === "green" ? "bg-green-500 text-white disabled:bg-green-200 shadow-md" : variant === "hypercolour" ? "background-animate-slow bg-gradient-to-r from-green-500 via-blue-500 to-purple-400 text-white shadow-md" : variant === "none" ? "" : "bg-blue-500 text-slate-100 disabled:bg-blue-200 shadow-md", transition = (0, import_react2.useTransition)(), { state } = transition, [clicked, setCliced] = (0, import_react3.useState)(!1);
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

// app/components/Footer.tsx
var import_react4 = require("@remix-run/react"), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Footer = () => {
  let location = (0, import_react4.useLocation)();
  return (location == null ? void 0 : location.pathname.includes("/scenarios")) || (location == null ? void 0 : location.pathname.includes("/lessons/")) ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "h-14 w-full bg-blue-300 p-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "relative m-auto flex h-full w-full max-w-5xl items-center justify-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    import_react4.Link,
    {
      className: "flex flex-wrap justify-center gap-1 font-semibold text-slate-900 ",
      to: "/contact",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: "We would love to hear your feedback." }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 17,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("span", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("u", { children: "Get in touch" }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 19,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/Footer.tsx",
          lineNumber: 18,
          columnNumber: 11
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Footer.tsx",
      lineNumber: 13,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 12,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 11,
    columnNumber: 5
  }, this);
}, Footer_default = Footer;

// app/components/Header.tsx
var import_react8 = require("@remix-run/react"), import_react9 = require("react"), import_bs = require("react-icons/bs"), import_gi = require("react-icons/gi"), import_io2 = require("react-icons/io"), import_md = require("react-icons/md");

// app/utils/index.ts
function isPremium(user) {
  return Boolean(user && user.customer_number);
}
function isGuest(user) {
  return !(user != null && user.email) || user.email === "";
}

// app/utils/hooks.ts
var import_react5 = require("@remix-run/react"), import_react6 = require("react");
function useOutsideAlerter(ref, onOutsideClick) {
  (0, import_react6.useEffect)(() => {
    function handleClickOutside(event) {
      ref.current && !ref.current.contains(event.target) && onOutsideClick();
    }
    return document.addEventListener("mousedown", handleClickOutside), () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref]);
}
function useRootData() {
  let rootMatch = (0, import_react5.useMatches)().find((root) => root.id === "root");
  return rootMatch ? rootMatch.data : null;
}

// app/components/home/PremiumLink.tsx
var import_react7 = require("@remix-run/react"), import_io = require("react-icons/io");
var import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), PremiumLink = ({
  setMenuOpen = () => {
  },
  fullWidth,
  iconSize = 24
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react7.Link, { to: "/pricing", onClick: () => setMenuOpen(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(Buttons_default, { variant: "hypercolour", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
  "div",
  {
    className: `mx-auto flex ${fullWidth ? "w-full" : "w-2/3"} items-center justify-between gap-2`,
    children: [
      "Go Premium",
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_io.IoIosRocket, { size: iconSize }, void 0, !1, {
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
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), ICON_SIZE = 25, Header = ({ user }) => {
  let isLoggedIn = Boolean(user), showPremium = !isPremium(user), [menuOpen, setMenuOpen] = (0, import_react9.useState)(!1), location = (0, import_react8.useLocation)(), fixHeader = (location == null ? void 0 : location.pathname) === "/", showStreakBar = user;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "div",
    {
      className: `flex w-full flex-col ${fixHeader && "sticky top-0 w-full"} mb-8`,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
          "div",
          {
            className: `top-0 z-30 flex w-full items-center justify-between gap-4 bg-blue-300 px-4  py-2 lg:py-5 ${!showStreakBar && "shadow-md"}`,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
                import_gi.GiHamburgerMenu,
                {
                  size: "25",
                  className: "cursor-pointer fill-slate-800 lg:hidden",
                  onClick: () => setMenuOpen(!0)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Header.tsx",
                  lineNumber: 36,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Home, { user }, void 0, !1, {
                fileName: "app/components/Header.tsx",
                lineNumber: 42,
                columnNumber: 9
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
                  lineNumber: 44,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Header.tsx",
            lineNumber: 31,
            columnNumber: 7
          },
          this
        ),
        menuOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "fixed top-0 z-50", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            BurgerMenu,
            {
              showPremium,
              setMenuOpen,
              isLoggedIn,
              user
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 54,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 53,
            columnNumber: 11
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "fixed top-0 z-40 h-screen w-screen bg-slate-800 bg-opacity-75" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 62,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 52,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 26,
      columnNumber: 5
    },
    this
  );
}, MainMenus = ({
  isLoggedIn,
  setMenuOpen,
  showPremium
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex  items-center gap-3", children: isLoggedIn ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "flex items-center gap-3", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "hidden items-center gap-3 lg:flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HeaderLink, { to: "scenarios", text: "Scenarios" }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 85,
      columnNumber: 17
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HeaderLink, { to: "profile/vocabulary", text: "Vocabulary" }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 86,
      columnNumber: 17
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 84,
    columnNumber: 15
  }, this),
  showPremium ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PremiumLink, { fullWidth: !0 }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 90,
    columnNumber: 17
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ScenariosLinkNavbar, {}, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 92,
    columnNumber: 17
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Header.tsx",
  lineNumber: 83,
  columnNumber: 13
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 81,
  columnNumber: 9
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "hidden items-center gap-4 lg:flex", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HeaderLink, { to: "/#features", text: "Features" }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 100,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HeaderLink, { to: "pricing", text: "Pricing" }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 101,
      columnNumber: 13
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(HeaderLink, { to: "login", text: "Login" }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 102,
      columnNumber: 13
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Header.tsx",
    lineNumber: 99,
    columnNumber: 11
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(GetStartedLink, { setMenuOpen, fullWidth: !0 }, void 0, !1, {
    fileName: "app/components/Header.tsx",
    lineNumber: 105,
    columnNumber: 11
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Header.tsx",
  lineNumber: 98,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 79,
  columnNumber: 5
}, this), BurgerMenu = ({
  showPremium,
  setMenuOpen,
  isLoggedIn,
  user
}) => {
  let wrapperRef = (0, import_react9.useRef)(null);
  useOutsideAlerter(wrapperRef, () => setMenuOpen(!1));
  let closeMenu = () => setMenuOpen(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    "div",
    {
      ref: wrapperRef,
      className: "absolute top-0 left-0 h-screen w-1/3 min-w-[300px] bg-slate-200",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "relative flex h-20 w-full items-center justify-between border-b border-slate-400 px-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Home, { onClick: closeMenu, user }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 136,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("button", { onClick: () => setMenuOpen(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_io2.IoMdClose, { className: "fill-slate-400", size: "30" }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 139,
            columnNumber: 11
          }, this) }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 138,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 135,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "mt-10 flex flex-col gap-4 px-4", children: isLoggedIn ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ProfileLink, { setMenuOpen }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 146,
            columnNumber: 14
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(ScenariosLink, { setMenuOpen }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 148,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(VocabularyLink, { setMenuOpen }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 150,
            columnNumber: 13
          }, this),
          showPremium && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(PremiumLink, { setMenuOpen }, void 0, !1, {
            fileName: "app/components/Header.tsx",
            lineNumber: 152,
            columnNumber: 29
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 145,
          columnNumber: 11
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            TransparentButtonLink,
            {
              to: "/#features",
              text: "Features",
              onClick: closeMenu
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 156,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            TransparentButtonLink,
            {
              to: "pricing",
              text: "Pricing",
              onClick: closeMenu
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 161,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
            TransparentButtonLink,
            {
              to: "login",
              text: "Login",
              onClick: closeMenu
            },
            void 0,
            !1,
            {
              fileName: "app/components/Header.tsx",
              lineNumber: 166,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
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
              lineNumber: 171,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/Header.tsx",
          lineNumber: 155,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/Header.tsx",
          lineNumber: 143,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 131,
      columnNumber: 5
    },
    this
  );
}, ICON_GAP = "gap-1", ScenariosLinkNavbar = ({ setMenuOpen = () => {
} }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react8.Link, { to: "/dashboard", onClick: () => setMenuOpen(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Buttons_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: `flex items-center justify-center ${ICON_GAP}`, children: "Dashboard" }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 195,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 194,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 193,
  columnNumber: 5
}, this), ScenariosLink = ({ setMenuOpen = () => {
} }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react8.Link, { to: "/dashboard", onClick: () => setMenuOpen(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Buttons_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "div",
  {
    className: `mx-auto flex w-2/3 items-center justify-between ${ICON_GAP}`,
    children: "Dashboard"
  },
  void 0,
  !1,
  {
    fileName: "app/components/Header.tsx",
    lineNumber: 207,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 206,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 205,
  columnNumber: 5
}, this), VocabularyLink = ({ setMenuOpen = () => {
} }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react8.Link, { to: "/profile/vocabulary", onClick: () => setMenuOpen(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Buttons_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "div",
  {
    className: `mx-auto flex w-2/3 items-center justify-between ${ICON_GAP}`,
    children: [
      "Vocabulary",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_bs.BsBarChartFill, { size: ICON_SIZE }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 225,
        columnNumber: 11
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/Header.tsx",
    lineNumber: 221,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 220,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 219,
  columnNumber: 5
}, this), Home = ({
  onClick,
  user
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  import_react8.Link,
  {
    onClick,
    to: `${user ? "/dashboard" : "/"} `,
    className: "flex items-center justify-center gap-2 text-2xl font-bold text-slate-800",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("img", { src: "/logo.png", loading: "eager", className: "h-14 w-auto" }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 245,
      columnNumber: 7
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/Header.tsx",
    lineNumber: 240,
    columnNumber: 5
  },
  this
), ProfileLink = ({ setMenuOpen = () => {
}, hideButton }) => hideButton ? /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react8.Link, { to: "/profile", onClick: () => setMenuOpen(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  import_md.MdPersonOutline,
  {
    size: 30,
    className: "rounded-3xl border-2 border-blue-800 fill-blue-800"
  },
  void 0,
  !1,
  {
    fileName: "app/components/Header.tsx",
    lineNumber: 254,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 253,
  columnNumber: 7
}, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_react8.Link, { to: "/profile", onClick: () => setMenuOpen(!1), children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Buttons_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "div",
  {
    className: `mx-auto flex w-2/3 items-center justify-between ${ICON_GAP}`,
    children: [
      "Profile",
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        import_md.MdPersonOutline,
        {
          size: 30,
          className: "rounded-3xl border-2 border-slate-50 fill-slate-50"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 268,
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
    lineNumber: 264,
    columnNumber: 9
  },
  this
) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 263,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/Header.tsx",
  lineNumber: 262,
  columnNumber: 5
}, this), GetStartedLink = ({
  setMenuOpen = () => {
  },
  fullWidth,
  padding = "py-2 lg:py-4" /* SMALL */
}) => {
  let location = (0, import_react8.useLocation)(), trial = new URLSearchParams(location.search).get("trial");
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_react8.Link,
    {
      to: trial ? "/pricing?trial=true" : "/dashboard",
      onClick: () => setMenuOpen(!1),
      className: "transition-all duration-200 ease-in-out hover:scale-105",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Buttons_default, { padding, variant: "hypercolour", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
        "div",
        {
          className: `mx-auto flex w-full items-center ${fullWidth ? "w-full justify-center" : "w-2/3 justify-between"} ${ICON_GAP}`,
          children: trial ? "Start free trial" : "Get started"
        },
        void 0,
        !1,
        {
          fileName: "app/components/Header.tsx",
          lineNumber: 295,
          columnNumber: 9
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/Header.tsx",
        lineNumber: 294,
        columnNumber: 7
      }, this)
    },
    "header",
    !1,
    {
      fileName: "app/components/Header.tsx",
      lineNumber: 288,
      columnNumber: 5
    },
    this
  );
}, HeaderLink = ({ to, text }) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  import_react8.Link,
  {
    to,
    className: "rounded-md px-2 py-1 text-lg font-semibold text-blue-800 transition-all duration-200 ease-in-out hover:bg-blue-800 hover:bg-opacity-10",
    children: text
  },
  void 0,
  !1,
  {
    fileName: "app/components/Header.tsx",
    lineNumber: 309,
    columnNumber: 5
  },
  this
), TransparentButtonLink = ({
  onClick,
  text,
  to
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  import_react8.Link,
  {
    onClick,
    to,
    className: "text-lg font-semibold text-blue-800",
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Buttons_default, { variant: "transparent", children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("span", { className: "px-5", children: text }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 334,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/Header.tsx",
      lineNumber: 333,
      columnNumber: 7
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/Header.tsx",
    lineNumber: 328,
    columnNumber: 5
  },
  this
), Header_default = Header;

// app/utils/analytics/googleTagManger.tsx
var import_react10 = require("@remix-run/react"), import_react11 = require("react"), import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), GoogleTagManager = ({
  env,
  gtmTrackingId
}) => {
  let location = (0, import_react10.useLocation)();
  return (0, import_react11.useEffect)(() => {
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
  }, [location, gtmTrackingId]), (0, import_react11.useEffect)(() => {
    var _a3;
    (_a3 = window.dataLayer) == null || _a3.push({
      event: "VirtualPageView"
    });
  }, [location.pathname]), env === "development" || !gtmTrackingId ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_jsx_dev_runtime6.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("noscript", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
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
    authDomain: "languagemate2.firebaseapp.com",
    projectId: "languagemate2",
    storageBucket: "languagemate2.appspot.com",
    messagingSenderId: "1070506034942",
    appId: "1:1070506034942:web:dca33ace782b1a344b07af",
    measurementId: "G-T0VFRMLYEG"
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
}, SUBSCRIBED_USER_TOKENS = {
  pro: 1e5,
  accelerated: 2e5,
  ultimate: 5e5
}, freePlan = {
  id: "free",
  title: "Free",
  price: 0,
  features: ["10 daily AI-powered messages", "Limited translations"],
  not_features: [
    "Vocabulary tracking",
    "Unlimited message corrections",
    "Unlimited speaking practice",
    "Unlimited listening practice",
    "Immerse yourself in ultra-realistic audio",
    "Get word definitions"
  ]
}, plans = [
  {
    id: "pro",
    title: "Pro",
    price: 6.99 /* pro */,
    features: [
      "30 daily AI-powered messages",
      "Unlimited translations",
      "Get word definitions",
      "Unlimited message corrections",
      "Unlimited listening practice"
    ],
    not_features: [
      "Unlimited speaking practice",
      "Vocabulary tracking",
      "Immerse yourself in ultra-realistic audio"
    ]
  },
  {
    id: "accelerated",
    title: "Accelerated",
    price: 14.99 /* accelerated */,
    features: [
      "100 daily AI-powered messages",
      "Unlimited translations",
      "Vocabulary tracking",
      "Get word definitions",
      "Unlimited message corrections",
      "Unlimited speaking practice",
      "Unlimited listening practice",
      "Immerse yourself in ultra-realistic audio"
    ],
    most_popular: !0
  },
  {
    id: "ultimate",
    title: "Ultimate",
    price: 29.99 /* ultimate */,
    features: [
      "Unlimited AI-powered messages",
      "Unlimited translations",
      "Vocabulary tracking",
      "Get word definitions",
      "Unlimited message corrections",
      "Unlimited speaking practice",
      "Unlimited listening practice",
      "Immerse yourself in ultra-realistic audio"
    ]
  }
];

// app/utils/db.server.ts
var usersRef = db.collection("users"), scenarioRef = db.collection("scenarios-dynamic"), categoriesRef = db.collection("categories");
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

// app/utils/session.server.ts
var import_node = require("@remix-run/node");

// app/utils/user.server.ts
var import_auth = require("firebase/auth");

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

// app/utils/user.server.ts
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

// app/root.tsx
var import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "LanguageMate | the world's best language-learning chatbot",
  description: "Speak to the world's best language-learning chatbot and confidently master foreign languages through conversation",
  viewport: "width=device-width,initial-scale=1",
  "og:title": "LanguageMate",
  "og:description": "Speak to the world's best language-learning chatbot and confidently master foreign languages through conversation",
  "og:type": "website",
  "og:url": "https://languagemate.io",
  "og:image": "https://storage.googleapis.com/languagemate-public/Facebook%20og%20image.png",
  "twitter:title": "LanguageMate",
  "twitter:description": "Master foreign languages through conversation",
  "twitter:image": "https://storage.googleapis.com/languagemate-public/Twitter%20card.png",
  "twitter:card": "summary_large_image"
});
function links() {
  return [{ href: app_default, rel: "stylesheet" }];
}
var loader = async ({ request }) => {
  try {
    let user = await getUserSession(request);
    if (!user)
      throw Error();
    let userProfile = await getUserProfile(user.uid);
    if (!userProfile)
      throw Error();
    return (0, import_node2.json)({
      user: userProfile,
      env: "development",
      is_guest: isGuest(userProfile)
    });
  } catch {
    return (0, import_node2.json)({
      user: void 0,
      env: "development",
      is_guest: !1
    });
  }
};
function addTrackers() {
  setupHotjar();
}
function App() {
  let { user, env } = (0, import_react12.useLoaderData)();
  return (0, import_react13.useEffect)(() => {
    env === "production" && addTrackers();
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 99,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 100,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap",
          rel: "stylesheet"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 101,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(googleTagManger_default, { env, gtmTrackingId: "GTM-PXRZMNX" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 105,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 106,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 107,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("body", { className: "bg-slate-100 ", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "min-h-screen", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Header_default, { user }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 111,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "px-2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Outlet, {}, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 113,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 112,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 110,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Footer_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 116,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 117,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 118,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 119,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 109,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 97,
    columnNumber: 5
  }, this);
}
function ErrorBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 129,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 130,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap",
          rel: "stylesheet"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 131,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 135,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 136,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 128,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("body", { className: "bg-slate-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Header_default, { user: void 0 }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 140,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto flex min-h-screen max-w-lg flex-col gap-8 px-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-lg font-bold text-blue-800", children: "LanguageMate is at capacity right now" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 142,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "We're thrilled to have so many users! Fear not, we're hustling to make some room and get things back up to speed faster than a cheetah on roller skates. In the meantime, hang tight and enjoy some cat videos (we won't judge)." }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 146,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Thanks for your patience and for being a part of our community!" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 153,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: "Try refreshing or come back later" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 155,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "img",
          {
            src: "https://firebasestorage.googleapis.com/v0/b/languagemate2.appspot.com/o/IMG_0059.PNG?alt=media&token=b0426f00-2cc3-471c-9a25-f27ad180d043",
            className: "mx-auto h-auto w-1/2 max-w-[300px] rounded-md shadow-md"
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 157,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 141,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Footer_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 162,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 163,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 164,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 165,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 139,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 127,
    columnNumber: 5
  }, this);
}
function CatchBoundary() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.googleapis.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 175,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("link", { rel: "preconnect", href: "https://fonts.gstatic.com" }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 176,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        "link",
        {
          href: "https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap",
          rel: "stylesheet"
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 177,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 181,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 182,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 174,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("body", { className: "bg-slate-100", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Header_default, { user: void 0 }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 186,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "mx-auto flex min-h-screen max-w-lg flex-col gap-8 px-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-lg font-bold text-blue-800", children: "This page does not exist" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 188,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Buttons_default, { children: "Go home" }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 193,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/root.tsx",
          lineNumber: 192,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "img",
          {
            src: "https://firebasestorage.googleapis.com/v0/b/languagemate2.appspot.com/o/IMG_0059.PNG?alt=media&token=b0426f00-2cc3-471c-9a25-f27ad180d043",
            className: "mx-auto h-auto w-1/2 max-w-[300px] rounded-md shadow-md"
          },
          void 0,
          !1,
          {
            fileName: "app/root.tsx",
            lineNumber: 195,
            columnNumber: 11
          },
          this
        )
      ] }, void 0, !0, {
        fileName: "app/root.tsx",
        lineNumber: 187,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Footer_default, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 200,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 201,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 202,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_react12.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 203,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 185,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 173,
    columnNumber: 5
  }, this);
}

// app/routes/api/login/link-guest-account.tsx
var link_guest_account_exports = {};
__export(link_guest_account_exports, {
  action: () => action
});
var import_node3 = require("@remix-run/node");
var action = async ({ request }) => {
  let userToken = await getUserSession(request);
  if (!userToken)
    return (0, import_node3.json)({}, { status: 500 });
  let email = (await request.formData()).get("email") ?? "";
  return updateUserProfile(userToken == null ? void 0 : userToken.uid, {
    email,
    messages: SUBSCRIBED_USER_MESSAGES.free
  }), sendWelcomeEmail(email), (0, import_node3.json)({ success: !0 });
};

// app/routes/api/stripe-webhook.tsx
var stripe_webhook_exports = {};
__export(stripe_webhook_exports, {
  action: () => action2
});
var import_node5 = require("@remix-run/node");

// app/utils/payment.server.ts
var import_node4 = require("@remix-run/node");
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
    return (0, import_node4.redirect)(session.url);
  } catch (err) {
    return console.log(err), (0, import_node4.json)({ error: "Something went wrong" });
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
  return await updateUserProfile(uid, { tokens: SUBSCRIBED_USER_TOKENS[plan] });
}
async function handleInvoicePaid(invoiceData) {
  let subscription = await retrieveSubscription(invoiceData.subscription), customerNumber = invoiceData.customer, uid = subscription.metadata.client_reference_id;
  return await updateUserProfile(uid, { customer_number: customerNumber });
}

// app/routes/api/stripe-webhook.tsx
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
      return err instanceof Error ? (console.log("\u26A0\uFE0F  Webhook signature verification failed.", err.message), (0, import_node5.json)({}, { status: 400 })) : (0, import_node5.json)({}, 500);
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
  return (0, import_node5.json)({});
};

// app/routes/payment/failure.tsx
var failure_exports = {};
__export(failure_exports, {
  default: () => failure_default
});
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), Failure = () => /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("h1", { children: "Payment Failed" }, void 0, !1, {
  fileName: "app/routes/payment/failure.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/payment/failure.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this), failure_default = Failure;

// app/routes/payment/success.tsx
var success_exports = {};
__export(success_exports, {
  default: () => success_default
});
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), Success = () => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("h1", { children: "Payment successful" }, void 0, !1, {
    fileName: "app/routes/payment/success.tsx",
    lineNumber: 4,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Thank you! You are all ready to go and start learning!" }, void 0, !1, {
    fileName: "app/routes/payment/success.tsx",
    lineNumber: 5,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("p", { children: "Slight apologises that this page is so bare your subscription will help me improve the site" }, void 0, !1, {
    fileName: "app/routes/payment/success.tsx",
    lineNumber: 6,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/payment/success.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this), success_default = Success;

// app/routes/profile/payment.tsx
var payment_exports = {};
__export(payment_exports, {
  default: () => payment_default,
  loader: () => loader2
});
var import_node6 = require("@remix-run/node");
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader2 = async ({ request }) => {
  let stripe2 = require("stripe")(process.env.STRIPE_SECRET_KEY), user = await getUserSession(request);
  if (!user)
    return (0, import_node6.redirect)("/login");
  let userProfile = await getUserProfile(user.uid), portalSession = await stripe2.billingPortal.sessions.create({
    customer: userProfile == null ? void 0 : userProfile.customer_number,
    return_url: request.url
  });
  return (0, import_node6.redirect)(portalSession.url, { status: 303 });
}, PaymentDashboard = () => /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)("h1", { children: "Payment Dashboard" }, void 0, !1, {
  fileName: "app/routes/profile/payment.tsx",
  lineNumber: 23,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/profile/payment.tsx",
  lineNumber: 22,
  columnNumber: 5
}, this), payment_default = PaymentDashboard;

// app/routes/contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => contact_default,
  loader: () => loader3
});
var import_node7 = require("@remix-run/node"), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), loader3 = () => (0, import_node7.redirect)("https://share-eu1.hsforms.com/1e0-dQW3vTjaiLcA9jiNRVwfxmeh"), Contact = () => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("h1", { className: "my-6 text-3xl font-bold", children: "Contact us" }, void 0, !1, {
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
  action: () => action4,
  default: () => pricing_default,
  meta: () => meta3
});
var import_node10 = require("@remix-run/node"), import_react18 = require("@remix-run/react"), import_react19 = require("react");

// app/components/core/ErrorMessage.tsx
var import_bi = require("react-icons/bi"), import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), ErrorMessage = ({ error }) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("p", { className: "flex items-center justify-start gap-2 rounded bg-red-200 px-4 py-2 font-semibold text-black shadow-md", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_bi.BiErrorCircle, { size: "25", className: "flex-shrink-0 fill-red-900" }, void 0, !1, {
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

// app/components/landing-page/MainFeaturesBulletPoint.tsx
var import_ai = require("react-icons/ai"), import_bs2 = require("react-icons/bs"), import_tb = require("react-icons/tb");

// app/components/landing-page/IconWrapper.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), IconWrapper = ({ Icon }) => /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)("div", { className: "flex h-16 w-16 items-center justify-center rounded-md border border-gray-200 bg-gray-50 shadow-sm", children: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(Icon, {}, void 0, !1, {
  fileName: "app/components/landing-page/IconWrapper.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/landing-page/IconWrapper.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this), IconWrapper_default = IconWrapper;

// app/components/landing-page/FeatureBulletPoint.tsx
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), FeatureBulletPoint = ({
  Icon,
  hideFill,
  title,
  paragraph
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex gap-2", children: [
  Icon && /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    IconWrapper_default,
    {
      Icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
        Icon,
        {
          size: 30,
          className: `${hideFill ? "" : "fill-blue-800"} stroke-blue-800`
        },
        void 0,
        !1,
        {
          fileName: "app/components/landing-page/FeatureBulletPoint.tsx",
          lineNumber: 20,
          columnNumber: 13
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/landing-page/FeatureBulletPoint.tsx",
      lineNumber: 18,
      columnNumber: 9
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "flex flex-1 flex-col justify-start gap-2", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h4", { className: "text-lg font-bold", children: title }, void 0, !1, {
      fileName: "app/components/landing-page/FeatureBulletPoint.tsx",
      lineNumber: 28,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { children: paragraph }, void 0, !1, {
      fileName: "app/components/landing-page/FeatureBulletPoint.tsx",
      lineNumber: 29,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/landing-page/FeatureBulletPoint.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/landing-page/FeatureBulletPoint.tsx",
  lineNumber: 16,
  columnNumber: 5
}, this), FeatureBulletPoint_default = FeatureBulletPoint;

// app/components/landing-page/MainFeaturesBulletPoint.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), MainFeatureBulletPoints = () => /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)("div", { className: "mx-auto grid w-full max-w-5xl grid-cols-1 gap-10 text-left sm:grid-cols-2 md:gap-12 xl:gap-16", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    FeatureBulletPoint_default,
    {
      Icon: import_bs2.BsTranslate,
      title: "Translate sentences instantly",
      paragraph: "Translation any message into your native language"
    },
    void 0,
    !1,
    {
      fileName: "app/components/landing-page/MainFeaturesBulletPoint.tsx",
      lineNumber: 11,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    FeatureBulletPoint_default,
    {
      Icon: import_ai.AiOutlineEdit,
      title: "Improve your grammar",
      paragraph: "Generate corrections & improve your your understanding of your target language"
    },
    void 0,
    !1,
    {
      fileName: "app/components/landing-page/MainFeaturesBulletPoint.tsx",
      lineNumber: 17,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    FeatureBulletPoint_default,
    {
      Icon: import_tb.TbSpeakerphone,
      hideFill: !0,
      title: "Speak in your target language",
      paragraph: "Use advanced speech recognition AI to speak in your target language"
    },
    void 0,
    !1,
    {
      fileName: "app/components/landing-page/MainFeaturesBulletPoint.tsx",
      lineNumber: 23,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    FeatureBulletPoint_default,
    {
      Icon: import_bs2.BsBarChartFill,
      title: "Grow your vocabulary",
      paragraph: `Practise conversations with LanguageMate in an anxiety-free
        environment`
    },
    void 0,
    !1,
    {
      fileName: "app/components/landing-page/MainFeaturesBulletPoint.tsx",
      lineNumber: 30,
      columnNumber: 7
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    FeatureBulletPoint_default,
    {
      Icon: import_ai.AiOutlineShop,
      title: "Real World Immersion",
      paragraph: "Experience life as it happens through scenarios"
    },
    void 0,
    !1,
    {
      fileName: "app/components/landing-page/MainFeaturesBulletPoint.tsx",
      lineNumber: 37,
      columnNumber: 7
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/components/landing-page/MainFeaturesBulletPoint.tsx",
  lineNumber: 10,
  columnNumber: 5
}, this), MainFeaturesBulletPoint_default = MainFeatureBulletPoints;

// app/components/landing-page/SubBulletPoint.tsx
var import_ai2 = require("react-icons/ai"), import_bi2 = require("react-icons/bi"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), BulletPoint = ({
  point,
  excluded,
  bold
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
  "p",
  {
    className: `flex items-center justify-start gap-4 text-left ${excluded ? "text-slate-400" : "text-slate-700"} ${bold ? "font-semibold" : "font-normal"}`,
    children: [
      excluded ? /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_bi2.BiPlus, { size: 25, className: "rotate-45 text-red-400" }, void 0, !1, {
        fileName: "app/components/landing-page/SubBulletPoint.tsx",
        lineNumber: 19,
        columnNumber: 9
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_ai2.AiOutlineEdit, { size: 25, className: "fill-blue-500" }, void 0, !1, {
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
var Dialog = __toESM(require("@radix-ui/react-dialog")), import_react16 = require("@remix-run/react"), import_auth4 = require("firebase/auth"), import_react17 = require("react"), import_react_google_button2 = __toESM(require("react-google-button")), import_io3 = require("react-icons/io");

// app/routes/login.tsx
var login_exports = {};
__export(login_exports, {
  action: () => action3,
  createAccount: () => createAccount,
  default: () => login_default,
  loader: () => loader4,
  meta: () => meta2
});
var import_node9 = require("@remix-run/node"), import_react14 = require("@remix-run/react"), import_bi3 = require("react-icons/bi"), import_hi = require("react-icons/hi"), import_auth3 = require("firebase/auth"), import_react15 = require("react"), import_react_google_button = __toESM(require("react-google-button"));

// app/components/core/Card.tsx
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
var Card = ({
  children,
  padding,
  gap,
  width
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(
  "div",
  {
    className: `flex w-full flex-auto flex-col justify-between  rounded-md bg-slate-200 shadow-lg ${width === "row" && " sm:w-1/3 md:w-1/4 xl:w-1/5"} ${padding === "small" ? "p-3" : "px-6 py-10"} ${gap === "small" ? "gap-4" : "gap-10"}`,
    children
  },
  void 0,
  !1,
  {
    fileName: "app/components/core/Card.tsx",
    lineNumber: 16,
    columnNumber: 5
  },
  this
), Card_default = Card;

// app/models/login.ts
var import_node8 = require("@remix-run/node");
var newSignupRedirectAfterLoginPath = "/scenarios/welcome-to-languagemate", redirectAfterLoginPath = "/dashboard", handleLogin = async (email, password, redirect7) => {
  let { res, error } = await signIn(email, password);
  if (error)
    return handleLoginError(error);
  if (!res.user)
    return handleLoginError();
  let token = await res.user.getIdToken();
  return createUserSession(token, redirect7 || redirectAfterLoginPath);
};
function handleLoginError(errorCode) {
  return errorCode === "404" ? { error: "Please create an account first" } : errorCode === "401" ? { error: "Login details are incorrect" } : (0, import_node8.json)({ error: "Something went wrong" });
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

// app/services/firebase.ts
var import_app3 = require("firebase/app"), import_auth2 = require("firebase/auth"), firebaseConfig = {
  apiKey: "AIzaSyAqUOhATNBI_6MTCavtjLvCecp1enuSl7g",
  authDomain: "languagemate2.firebaseapp.com",
  projectId: "languagemate2",
  storageBucket: "languagemate2.appspot.com",
  messagingSenderId: "1070506034942",
  appId: "1:1070506034942:web:dca33ace782b1a344b07af",
  measurementId: "G-T0VFRMLYEG"
}, app = (0, import_app3.initializeApp)(firebaseConfig), clientAuth = (0, import_auth2.getAuth)(app);

// app/routes/login.tsx
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), meta2 = () => ({
  title: "LanguageMate | Login"
}), action3 = async ({ request }) => {
  let formData = await request.formData(), _action = formData.get("_action");
  if (_action === "reset_password")
    return (0, import_node9.json)({
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
  ) : (0, import_node9.json)({});
}, loader4 = async ({ request }) => {
  let user = await getUserSession(request);
  if (user)
    return (0, import_node9.redirect)("/scenarios");
  let redirectTo = new URL(request.url).searchParams.get("redirect") ?? "";
  return (0, import_node9.json)({ user, redirect: redirectTo });
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
var Login = () => {
  let fetcher = (0, import_react14.useFetcher)(), [marketingEmails, setMarketingEmails] = (0, import_react15.useState)(!1), [showEmailLogin, setShowEmailLogin] = (0, import_react15.useState)(!1), [referrer, setReferrer] = (0, import_react15.useState)(""), loaderData = (0, import_react14.useLoaderData)();
  (0, import_react15.useEffect)(() => {
    setReferrer(document.referrer);
  }, []);
  function signInAsGuest() {
    (0, import_auth3.signInAnonymously)(clientAuth).then(
      (userCredentials) => createAccount({
        userCredentials,
        fetcher,
        marketingEmails,
        referrer,
        redirect: loaderData.redirect
      })
    ).catch((e) => console.log(e));
  }
  let handleGoogleLogin = async () => {
    let provider = new import_auth3.GoogleAuthProvider();
    await (0, import_auth3.signInWithPopup)(clientAuth, provider).then(
      (userCredentials) => createAccount({
        userCredentials,
        fetcher,
        marketingEmails,
        referrer,
        redirect: loaderData.redirect
      })
    ).catch((e) => console.log(e));
  }, isDisabled = fetcher.state === "loading";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "m-auto flex flex-col gap-6 lg:w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Card_default, { width: "full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("h1", { className: "text-xl font-bold text-blue-800", children: "Accelerate your learning with Google Signup" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 180,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-slate-500", children: "Sign up with Google to start learning immediately, get translations & more for free." }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 184,
          columnNumber: 15
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-slate-500" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 188,
          columnNumber: 15
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 179,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col items-center justify-center gap-6", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        import_react_google_button.default,
        {
          disabled: isDisabled,
          label: "Continue with Google",
          onClick: handleGoogleLogin
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 192,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 191,
        columnNumber: 13
      }, this),
      fetcher.state === "loading" && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-center font-bold text-blue-800", children: "Getting your account details!" }, void 0, !1, {
        fileName: "app/routes/login.tsx",
        lineNumber: 199,
        columnNumber: 15
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 178,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 177,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("p", { className: "text-center font-bold", children: "Or" }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 206,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Card_default, { width: "full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col gap-4", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col items-center justify-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        EmailLogin,
        {
          disabled: isDisabled,
          showEmailLogin,
          setShowEmailLogin,
          fetcher,
          redirect: loaderData.redirect
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 211,
          columnNumber: 15
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        Buttons_default,
        {
          disabled: isDisabled,
          variant: "transparent",
          onClick: signInAsGuest,
          children: "Continue as guest"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 218,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 210,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 209,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 208,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      "img",
      {
        src: "https://firebasestorage.googleapis.com/v0/b/languagemate2.appspot.com/o/IMG_0059.PNG?alt=media&token=b0426f00-2cc3-471c-9a25-f27ad180d043",
        className: "mx-auto mb-10 h-auto w-1/2 max-w-[300px] rounded-md shadow-md"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 229,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 176,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/login.tsx",
    lineNumber: 175,
    columnNumber: 5
  }, this);
}, EmailLogin = ({
  showEmailLogin,
  setShowEmailLogin,
  fetcher,
  redirect: redirect7,
  disabled
}) => {
  var _a3;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
    !showEmailLogin && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      Buttons_default,
      {
        disabled,
        variant: "transparent",
        className: "cursor-pointer text-sm text-slate-500",
        onClick: () => setShowEmailLogin(!0),
        children: "Login with email and password"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/login.tsx",
        lineNumber: 255,
        columnNumber: 11
      },
      this
    ) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 254,
      columnNumber: 9
    }, this),
    ((_a3 = fetcher == null ? void 0 : fetcher.data) == null ? void 0 : _a3.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "m-auto text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(ErrorMessage_default, { error: fetcher.data.error }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 268,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 267,
      columnNumber: 9
    }, this),
    showEmailLogin && /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(fetcher.Form, { method: "post", className: "lg:w-2/3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("input", { name: "redirect", hidden: !0, readOnly: !0, value: redirect7 }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 277,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { className: "font-semibold", children: "Email" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 279,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "flex w-full items-center gap-2 rounded-md bg-white p-2 font-semibold text-slate-700 shadow-sm placeholder:text-slate-400", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_hi.HiOutlineMail, { size: 20, className: "stroke-slate-700" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 281,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            "input",
            {
              className: "w-full bg-transparent",
              type: "email",
              name: "email",
              placeholder: "janedoe@gmail.com"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 282,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 280,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 276,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("label", { className: "font-semibold", children: "Password" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 292,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("span", { className: "flex w-full items-center gap-2 rounded-md bg-white p-2 font-semibold text-slate-700 shadow-sm placeholder:text-slate-400", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_bi3.BiLockAlt, { size: 20, className: "stroke-slate-700" }, void 0, !1, {
            fileName: "app/routes/login.tsx",
            lineNumber: 294,
            columnNumber: 19
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            "input",
            {
              type: "password",
              name: "password",
              className: "w-full bg-transparent",
              placeholder: "password"
            },
            void 0,
            !1,
            {
              fileName: "app/routes/login.tsx",
              lineNumber: 295,
              columnNumber: 19
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/routes/login.tsx",
          lineNumber: 293,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 291,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { className: "flex flex-col gap-6 lg:flex-row", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Buttons_default, { name: "_action", value: "login", type: "submit", children: "Login" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 305,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(Buttons_default, { name: "_action", value: "signup", type: "submit", children: "Sign up" }, void 0, !1, {
          fileName: "app/routes/login.tsx",
          lineNumber: 309,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/login.tsx",
        lineNumber: 304,
        columnNumber: 15
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
        "p",
        {
          onClick: () => fetcher.submit(
            { _action: "reset_password" },
            { method: "post" }
          ),
          children: "Reset password"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/login.tsx",
          lineNumber: 314,
          columnNumber: 15
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/login.tsx",
      lineNumber: 275,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 274,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/routes/login.tsx",
      lineNumber: 273,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/login.tsx",
    lineNumber: 252,
    columnNumber: 5
  }, this);
}, login_default = Login;

// app/components/Modals/LoginModal.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime"), LoginModal = ({
  open,
  onClose,
  redirect: redirect7,
  variant = "default"
}) => {
  var _a3;
  let fetcher = (0, import_react16.useFetcher)(), [error, setError] = (0, import_react17.useState)(""), user = (_a3 = useRootData()) == null ? void 0 : _a3.user, [referrer, setReferrer] = (0, import_react17.useState)("");
  (0, import_react17.useEffect)(() => {
    setReferrer(document.referrer);
  }, []), (0, import_react17.useEffect)(() => {
    var _a4;
    (_a4 = fetcher.data) != null && _a4.success && window.location.reload();
  }, [fetcher]);
  let handleGoogleLogin = (user2) => {
    user2 ? linkGuestWithGoogleAccount() : loginWithGoogle();
  };
  function loginWithGoogle() {
    let provider = new import_auth4.GoogleAuthProvider();
    (0, import_auth4.signInWithPopup)(clientAuth, provider).then(
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
    let provider = new import_auth4.GoogleAuthProvider();
    (0, import_auth4.signInAnonymously)(clientAuth).then((usercred) => {
      let user2 = usercred.user;
      (0, import_auth4.linkWithPopup)(user2, provider).then(() => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Dialog.Root, { open, onOpenChange: onClose, children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Dialog.Portal, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Dialog.Overlay, { className: "fixed inset-0 bg-slate-500 opacity-30" }, void 0, !1, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 94,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Dialog.Content, { className: "fixed top-[50%] left-[50%] flex w-[90vw] max-w-xl translate-x-[-50%] translate-y-[-50%] flex-col gap-8 rounded-lg bg-white py-10 px-6", children: [
      variant === "default" && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
      variant === "pricing" && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
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
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Dialog.Close, { asChild: !0, className: "absolute top-2 right-2 ", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("button", { "aria-label": "Close", children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_io3.IoMdClose, { className: "fill-slate-400", size: "30" }, void 0, !1, {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-col gap-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "flex items-center justify-center gap-2 text-lg font-semibold text-blue-800", children: "Sign up for full access" }, void 0, !1, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 141,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-col items-start justify-center gap-2", children: fullAccessFeatures.map((text, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(SubBulletPoint_default, { point: text }, index, !1, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 147,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 145,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("hr", { className: "mx-auto w-1/2 border-gray-400" }, void 0, !1, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 151,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-col items-center justify-center gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
        import_react_google_button2.default,
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
      error && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ErrorMessage_default, { error }, void 0, !1, {
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
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(import_jsx_dev_runtime19.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-col gap-10", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("section", { className: "flex flex-col items-center justify-center gap-2 text-center", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("h2", { className: "text-lg font-semibold text-blue-800", children: "Bye bye foreign language anxiety" }, void 0, !1, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 179,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { children: "Start your free trial now by creating an account in seconds." }, void 0, !1, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 182,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Modals/LoginModal.tsx",
    lineNumber: 178,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("hr", { className: "mx-auto w-1/2 border-gray-400" }, void 0, !1, {
    fileName: "app/components/Modals/LoginModal.tsx",
    lineNumber: 185,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("div", { className: "flex flex-col items-center justify-center gap-4", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(
      import_react_google_button2.default,
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
    /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)("p", { className: "text-center text-sm text-gray-400", children: "After signing up, you'll then be taken to our payment provider to start your free trial." }, void 0, !1, {
      fileName: "app/components/Modals/LoginModal.tsx",
      lineNumber: 192,
      columnNumber: 11
    }, this),
    error && /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(ErrorMessage_default, { error }, void 0, !1, {
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
var import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), meta3 = () => ({
  title: "LanguageMate | Pricing"
}), action4 = async ({ request }) => {
  try {
    let userToken = await getUserSession(request), plan = (await request.formData()).get("plan");
    if (!userToken) {
      let url = new URL(request.url), searchParams = new URLSearchParams(url.searchParams);
      searchParams.get("login") || searchParams.append("login", "true"), plan && searchParams.append("plan", plan);
      let newUrl = url.origin + url.pathname + "?" + searchParams.toString();
      return (0, import_node10.redirect)(newUrl);
    }
    if (!plan)
      throw Error("Something went wrong with pricing data");
    let priceId = getPriceTierId("development", plan), origin = request.url;
    return await createCheckout(priceId, origin, userToken.uid);
  } catch (e) {
    return e.message === "Not logged in" ? (0, import_node10.json)({ error: e == null ? void 0 : e.message }, { status: 401 }) : (0, import_node10.json)({ error: e == null ? void 0 : e.message }, { status: 500 });
  }
}, Payment = () => {
  var _a3;
  let actionData = (0, import_react18.useActionData)(), location = (0, import_react18.useLocation)(), query = new URLSearchParams(location.search), trial = query.get("trial"), [showLoginModal, setShowLoginModal] = (0, import_react19.useState)(!1), fetcher = (0, import_react18.useFetcher)(), user = (_a3 = useRootData()) == null ? void 0 : _a3.user;
  (0, import_react19.useEffect)(() => {
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
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "mb-10 ", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h1", { className: "mb-10 text-center text-3xl font-bold text-blue-800", children: "Start becoming fluent today" }, void 0, !1, {
      fileName: "app/routes/pricing.tsx",
      lineNumber: 98,
      columnNumber: 7
    }, this),
    (actionData == null ? void 0 : actionData.error) && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ErrorMessage_default, { error: actionData == null ? void 0 : actionData.error }, void 0, !1, {
      fileName: "app/routes/pricing.tsx",
      lineNumber: 102,
      columnNumber: 29
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_react18.Form,
      {
        method: "post",
        className: "mx-auto flex flex-col items-center justify-center gap-10 text-center",
        children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-wrap items-center justify-center gap-4 lg:gap-8", children: [
            !trial && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              HeroPaymentSection,
              {
                title: freePlan.title,
                id: freePlan.id,
                price: freePlan.price,
                features: freePlan.features,
                notFeatures: freePlan.not_features
              },
              void 0,
              !1,
              {
                fileName: "app/routes/pricing.tsx",
                lineNumber: 110,
                columnNumber: 13
              },
              this
            ),
            plans.map((plan2) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
              HeroPaymentSection,
              {
                title: plan2.title,
                id: plan2.id,
                price: plan2.price,
                features: plan2.features,
                notFeatures: plan2.not_features,
                mostPopular: plan2.most_popular
              },
              plan2.id,
              !1,
              {
                fileName: "app/routes/pricing.tsx",
                lineNumber: 119,
                columnNumber: 13
              },
              this
            ))
          ] }, void 0, !0, {
            fileName: "app/routes/pricing.tsx",
            lineNumber: 108,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-col gap-8", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h4", { className: "text-xl font-bold text-blue-800", children: "Our features" }, void 0, !1, {
              fileName: "app/routes/pricing.tsx",
              lineNumber: 132,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(MainFeaturesBulletPoint_default, {}, void 0, !1, {
              fileName: "app/routes/pricing.tsx",
              lineNumber: 134,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Buttons_default, { type: "submit", name: "plan", value: plans[0].id, children: "Start your 7-day free trial" }, void 0, !1, {
              fileName: "app/routes/pricing.tsx",
              lineNumber: 137,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/routes/pricing.tsx",
              lineNumber: 136,
              columnNumber: 11
            }, this)
          ] }, void 0, !0, {
            fileName: "app/routes/pricing.tsx",
            lineNumber: 131,
            columnNumber: 9
          }, this)
        ]
      },
      void 0,
      !0,
      {
        fileName: "app/routes/pricing.tsx",
        lineNumber: 104,
        columnNumber: 7
      },
      this
    ),
    showLoginModal && /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      LoginModal_default,
      {
        variant: "pricing",
        open: showLoginModal,
        onClose: () => setShowLoginModal(!1),
        redirect: location.pathname + location.search
      },
      void 0,
      !1,
      {
        fileName: "app/routes/pricing.tsx",
        lineNumber: 145,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/pricing.tsx",
    lineNumber: 97,
    columnNumber: 5
  }, this);
}, ColouredBackground = () => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "absolute -z-10 h-full w-full rounded-md bg-gradient-to-tr from-green-300 via-blue-500 to-purple-600 blur-sm" }, void 0, !1, {
  fileName: "app/routes/pricing.tsx",
  lineNumber: 158,
  columnNumber: 5
}, this), HeroPaymentSection = ({
  title,
  id,
  price,
  features,
  notFeatures,
  mostPopular
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "relative flex flex-col items-center justify-center gap-16 rounded-md bg-slate-100 p-6 shadow-lg", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-col gap-6", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h2", { className: "text-2xl font-bold text-blue-800", children: [
        title,
        " Plan"
      ] }, void 0, !0, {
        fileName: "app/routes/pricing.tsx",
        lineNumber: 181,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("h3", { className: "flex items-center justify-center gap-1 text-lg font-semibold text-blue-800", children: [
        "\xA3",
        price,
        mostPopular ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("span", { className: "font-semibold text-purple-600", children: "(most popular)" }, void 0, !1, {
          fileName: "app/routes/pricing.tsx",
          lineNumber: 185,
          columnNumber: 15
        }, this) : ""
      ] }, void 0, !0, {
        fileName: "app/routes/pricing.tsx",
        lineNumber: 182,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/pricing.tsx",
      lineNumber: 180,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex flex-col gap-2", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: features.map((feature, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SubBulletPoint_default, { bold: index === 0, point: feature }, feature, !1, {
        fileName: "app/routes/pricing.tsx",
        lineNumber: 197,
        columnNumber: 15
      }, this)) }, void 0, !1, {
        fileName: "app/routes/pricing.tsx",
        lineNumber: 195,
        columnNumber: 11
      }, this),
      notFeatures && notFeatures.map((feature) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(SubBulletPoint_default, { point: feature, excluded: !0 }, feature, !1, {
        fileName: "app/routes/pricing.tsx",
        lineNumber: 202,
        columnNumber: 15
      }, this))
    ] }, void 0, !0, {
      fileName: "app/routes/pricing.tsx",
      lineNumber: 194,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/pricing.tsx",
    lineNumber: 179,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)("div", { className: "flex items-center justify-center", children: price > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Buttons_default, { type: "submit", name: "plan", value: id, children: "Start your 7-day free trial" }, void 0, !1, {
    fileName: "app/routes/pricing.tsx",
    lineNumber: 209,
    columnNumber: 11
  }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_react18.Link, { to: "/login", children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(Buttons_default, { children: "Get started" }, void 0, !1, {
    fileName: "app/routes/pricing.tsx",
    lineNumber: 214,
    columnNumber: 13
  }, this) }, void 0, !1, {
    fileName: "app/routes/pricing.tsx",
    lineNumber: 213,
    columnNumber: 11
  }, this) }, void 0, !1, {
    fileName: "app/routes/pricing.tsx",
    lineNumber: 207,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(ColouredBackground, {}, void 0, !1, {
    fileName: "app/routes/pricing.tsx",
    lineNumber: 219,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/pricing.tsx",
  lineNumber: 178,
  columnNumber: 5
}, this), pricing_default = Payment;

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  loader: () => loader5,
  meta: () => meta4
});
var import_node11 = require("@remix-run/node"), import_react20 = require("@remix-run/react"), import_bi4 = require("react-icons/bi"), import_bs3 = require("react-icons/bs"), import_md2 = require("react-icons/md");
var import_io5 = require("react-icons/io5"), import_jsx_dev_runtime21 = require("react/jsx-dev-runtime"), FAQs = [
  {
    question: "How do I learn a language using LanguageMate?",
    answer: [
      {
        type: "p",
        content: "LanguageMate offers both guided and unguided scenarios to help you internalize a wide range of vocabulary and grammar."
      },
      {
        type: "p",
        content: "Whether you prefer a structured approach with step-by-step guidance or a more flexible learning experience where you can explore at your own pace, LanguageMate has something for you."
      },
      {
        type: "p",
        content: "Through conversations with the chatbot, you'll be able to practice speaking, listening, and comprehension skills in the language you're trying to learn, making the learning process engaging and effective."
      }
    ]
  },
  {
    question: "Is LanguageMate free?",
    answer: [
      {
        type: "p",
        content: "Yes, you can start using LanguageMate for free!"
      },
      {
        type: "p",
        content: "Our free plan offers limited access, allowing you to send a certain number of messages per day."
      },
      {
        type: "p",
        content: "If you want to perfect your pronunciation, dramatically improve your grammar, or send more messages, you can sign up for one of our paid plans. Our paid plans offer flexible subscription options to fit your budget and learning needs, and provide additional benefits to enhance your language learning experience."
      },
      {
        type: "a",
        content: "See pricing",
        to: "/pricing"
      }
    ]
  },
  {
    question: "How do I get started?",
    answer: [
      {
        type: "p",
        content: "Getting started with LanguageMate is quick and easy!"
      },
      {
        type: "a",
        to: "/dashboard",
        content: "Start for free"
      },
      {
        type: "p",
        content: "If you want to perfect your pronunciation, dramatically improve your grammar, or send more messages, you can sign up for one of our paid plans. Our paid plans offer flexible subscription options to fit your budget and learning needs, and provide additional benefits to enhance your language learing experience."
      },
      {
        type: "a",
        content: "See pricing",
        to: "/pricing"
      },
      {
        type: "p",
        content: "No matter which plan you choose, LanguageMate is designed to help you achieve your language learning goals quickly and effectively."
      },
      {
        type: "p",
        content: "So why wait? Sign up today and start improving your language skills!"
      }
    ]
  },
  {
    question: "How accurate are the corrections provided by LanguageMate?",
    answer: [
      {
        type: "p",
        content: "LanguageMate uses advanced natural language processing algorithms to provide accurate corrections and feedback on your language skills. Our technology is constantly improving, thanks to our team of engineers who work tirelessly to enhance the accuracy and effectiveness of our platform."
      },
      {
        type: "p",
        content: "While our rate of correctness is very high, it's important to note that no language learning tool can provide 100% accurate corrections all the time. That's why we encourage our users to think critically about the feedback they receive and to use it as a learning opportunity to improve their language skills."
      },
      {
        type: "p",
        content: "Our top-tier Accelerated Plan also offers in-depth explanations of why your messages were corrected, giving you a deeper understanding of the language rules and helping you to avoid making the same mistakes in the future."
      },
      {
        type: "p",
        content: "With LanguageMate, you can be confident that you're receiving high-quality feedback that will help you progress in your language learning journey."
      }
    ]
  }
], flags = [
  { flag: "\u{1F1EC}\u{1F1E7}", language: "English" },
  { flag: "\u{1F1EB}\u{1F1F7}", language: "French" },
  { flag: "\u{1F1E9}\u{1F1EA}", language: "German" },
  { flag: "\u{1F1EA}\u{1F1F8}", language: "Spanish" },
  { flag: "\u{1F1EE}\u{1F1F9}", language: "Italian" },
  { flag: "\u{1F1EF}\u{1F1F5}", language: "Japanese" },
  { flag: "\u{1F1F0}\u{1F1F7}", language: "Korean" },
  { flag: "\u{1F1E8}\u{1F1F3}", language: "Chinese" },
  { flag: "\u{1F1F7}\u{1F1FA}", language: "Russian" },
  { flag: "\u{1F1F5}\u{1F1F9}", language: "Portuguese" },
  { flag: "\u{1F1F3}\u{1F1F1}", language: "Dutch" },
  { flag: "\u{1F1F8}\u{1F1EA}", language: "Swedish" },
  { flag: "\u{1F1F3}\u{1F1F4}", language: "Norwegian" },
  { flag: "\u{1F1EB}\u{1F1EE}", language: "Finnish" },
  { flag: "\u{1F1F9}\u{1F1F7}", language: "Turkish" },
  { language: "Romanian", flag: "\u{1F1F7}\u{1F1F4}" },
  { language: "Polish", flag: "\u{1F1F5}\u{1F1F1}" },
  { language: "Welsh", flag: "\u{1F3F4}\u{E0067}\u{E0062}\u{E0077}\u{E006C}\u{E0073}\u{E007F}" },
  { language: "Arabic", flag: "\u{1F1F8}\u{1F1E6}" }
], StartTrialButton = () => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react20.Link, { to: "/pricing?trial=true", className: "m-auto w-full max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Buttons_default, { children: "Start your free trial" }, void 0, !1, {
  fileName: "app/routes/index.tsx",
  lineNumber: 161,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/index.tsx",
  lineNumber: 160,
  columnNumber: 5
}, this), StartFreeButton = () => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react20.Link, { to: "/dashboard", className: "m-auto w-full max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Buttons_default, { children: "Start learning for free" }, void 0, !1, {
  fileName: "app/routes/index.tsx",
  lineNumber: 169,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/index.tsx",
  lineNumber: 168,
  columnNumber: 5
}, this), meta4 = () => ({
  charset: "utf-8",
  title: "LanguageMate",
  description: "Speak to the world's best language-learning chatbot and confidently master foreign languages through conversation",
  viewport: "width=device-width,initial-scale=1",
  "og:title": "LanguageMate",
  "og:description": "Speak to the world's best language-learning chatbot and confidently master foreign languages through conversation",
  "og:type": "website",
  "og:url": "https://languagemate.io",
  "og:image": "https://storage.googleapis.com/languagemate-public/Facebook%20og%20image.png",
  "twitter:title": "LanguageMate",
  "twitter:description": "Master foreign languages through conversation",
  "twitter:image": "https://storage.googleapis.com/languagemate-public/Twitter%20card.png",
  "twitter:card": "summary_large_image"
}), loader5 = async ({ request }) => {
  let trial = new URL(request.url).searchParams.get("trial");
  return (0, import_node11.json)({ trial: Boolean(trial) });
}, Index = () => {
  let { trial } = (0, import_react20.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "m-auto flex max-w-5xl flex-col gap-10 scroll-smooth pb-10", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Hero, { trial }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 210,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(SupportedLanguages, {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 212,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col gap-16 py-10 lg:gap-40", id: "features", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "m-auto flex max-w-xl flex-col gap-8 text-center", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col gap-4", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-lg font-bold uppercase", children: "A complete learning tool" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 217,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { className: "text-3xl font-bold text-blue-800", children: "Learn from the comfort of your own home" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 220,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 216,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "flex flex-col gap-4 text-lg", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "text-left lg:text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "font-semibold text-red-600", children: [
              "Before LanguageMate:",
              " "
            ] }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 227,
              columnNumber: 15
            }, this),
            "Practising speaking your target language with other people triggers anxiety.",
            " "
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 226,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "text-left lg:text-center", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "font-semibold text-blue-800", children: [
              "After LanguageMate:",
              " "
            ] }, void 0, !0, {
              fileName: "app/routes/index.tsx",
              lineNumber: 234,
              columnNumber: 15
            }, this),
            "You feel calm speaking to LanguageMate knowing there is no judgment whilst you progress towards fluency."
          ] }, void 0, !0, {
            fileName: "app/routes/index.tsx",
            lineNumber: 233,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 225,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 215,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        Section,
        {
          Icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_bs3.BsTranslate, { size: 30, className: "fill-blue-800" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 244,
            columnNumber: 23
          }, this),
          video: "https://storage.googleapis.com/languagemate-public/traslation.mp4",
          title: "Learn from the translations",
          paragrapgh: "Translate messages quickly.",
          bullets: ["Learn meanings of words in context"]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 243,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        Section,
        {
          Icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_md2.MdQuiz, { size: 30, className: "fill-blue-800" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 252,
            columnNumber: 23
          }, this),
          video: "https://storage.googleapis.com/languagemate-public/Improvement%20demo.mp4",
          title: "Improve your grammar",
          right: !0,
          paragrapgh: "Generate corrections on the fly",
          bullets: ["Understand the grammar rule", "Learn from your mistakes"]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 251,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        Section,
        {
          Icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_md2.MdQuiz, { size: 30, className: "fill-blue-800" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 261,
            columnNumber: 23
          }, this),
          video: "https://storage.googleapis.com/languagemate-public/speech-to-text.mp4",
          title: "Perfect your pronunciation",
          paragrapgh: "Speak as you would in real life.",
          bullets: [
            "Advanced speech recognition technology",
            "Lightning fast conversations"
          ]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 260,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        Section,
        {
          Icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_bi4.BiWorld, { size: 30, className: "fill-blue-800" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 272,
            columnNumber: 23
          }, this),
          video: "https://storage.googleapis.com/languagemate-public/native.mp4",
          title: "Speak with a polyglot",
          right: !0,
          paragrapgh: "LanguageMate will understand you even if you speak in your native language.",
          bullets: [
            "Expand your active vocabulary through conversations",
            "Grow your passive vocabulary through reading",
            "Maintain streaks by completing conversations"
          ]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 271,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        Section,
        {
          Icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_io5.IoReader, { size: 30, className: "fill-blue-800" }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 285,
            columnNumber: 23
          }, this),
          title: "Go to definitions",
          imageSource: "https://storage.googleapis.com/languagemate-public/definitions.png",
          paragrapgh: "Easily find the meaning of words.",
          bullets: [
            "Learn the meaning of words in context",
            "Expand your active vocabulary"
          ]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 284,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 214,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("section", { className: "flex flex-col gap-8", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mb-8 flex flex-col gap-4", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { className: "m-auto max-w-xl text-center text-3xl font-bold sm:mb-16 lg:text-5xl", children: "Everything you need to become fluent" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 298,
          columnNumber: 11
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-center text-lg", children: "LanguageMate is a simple but powerful tool that supercharges you towards fluency!" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 301,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 297,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(MainFeaturesBulletPoint_default, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 307,
        columnNumber: 9
      }, this),
      trial ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(StartTrialButton, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 309,
        columnNumber: 18
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(StartFreeButton, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 309,
        columnNumber: 41
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 296,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("section", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { className: "text-3xl font-bold text-blue-800", children: "FAQs" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 313,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mx-auto flex flex-col flex-wrap gap-4 lg:grid lg:grid-cols-2", children: FAQs.map(({ question, answer }, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Card_default, { width: "full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("details", { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("summary", { className: "text-lg font-bold text-blue-800", children: question }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 319,
          columnNumber: 17
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-4 flex flex-col gap-6", children: answer.map((answerBlock, index2) => {
          let { type, content } = answerBlock;
          return type === "p" ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { children: content }, index2, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 327,
            columnNumber: 46
          }, this) : type === "a" ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "m-auto w-1/2", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Buttons_default, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react20.Link, { to: answerBlock.to, children: content }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 332,
            columnNumber: 29
          }, this) }, void 0, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 331,
            columnNumber: 27
          }, this) }, index2, !1, {
            fileName: "app/routes/index.tsx",
            lineNumber: 330,
            columnNumber: 25
          }, this) : "";
        }) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 323,
          columnNumber: 17
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 318,
        columnNumber: 15
      }, this) }, index, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 317,
        columnNumber: 13
      }, this)) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 315,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 312,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-col items-center justify-center gap-4 py-10 ", children: [
      trial ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(StartTrialButton, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 347,
        columnNumber: 11
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react20.Link, { to: "/dashboard", className: "m-auto w-full max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Buttons_default, { children: "Get started now for free" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 350,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 349,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "text-lg", children: "Or" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 354,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react20.Link, { to: "/pricing", className: "m-auto w-full max-w-lg", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Buttons_default, { variant: "transparent", children: "See our plans" }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 356,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 355,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/routes/index.tsx",
      lineNumber: 345,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 209,
    columnNumber: 5
  }, this);
}, Section = ({
  video,
  imageSource,
  title,
  paragrapgh,
  right,
  Icon,
  bullets
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("section", { className: "flex flex-col items-center justify-center gap-10 lg:grid lg:grid-cols-2", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex w-full flex-col gap-4 text-left", children: [
    Icon && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(IconWrapper_default, { Icon: () => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Icon, {}, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 384,
      columnNumber: 43
    }, this) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 384,
      columnNumber: 18
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "text-xl font-bold text-blue-800", children: title }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 385,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("p", { className: "text-lg text-slate-700", children: paragrapgh }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 386,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "mt-4 flex flex-col gap-4", children: bullets == null ? void 0 : bullets.map((point, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(SubBulletPoint_default, { point }, index, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 389,
      columnNumber: 13
    }, this)) }, void 0, !1, {
      fileName: "app/routes/index.tsx",
      lineNumber: 387,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 383,
    columnNumber: 7
  }, this),
  imageSource && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    "img",
    {
      className: `block h-auto w-full max-w-xl rounded-xl shadow-inner ${right ? "lg:order-last" : "lg:order-first"}`,
      src: imageSource,
      loading: "lazy"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/index.tsx",
      lineNumber: 394,
      columnNumber: 9
    },
    this
  ),
  video && /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    "video",
    {
      className: `block h-auto w-full max-w-xl rounded-xl shadow-inner ${right ? "lg:order-last" : "lg:order-first"}`,
      src: video,
      loop: !0,
      muted: !0,
      playsInline: !0,
      autoPlay: !0,
      preload: "none",
      poster: imageSource
    },
    void 0,
    !1,
    {
      fileName: "app/routes/index.tsx",
      lineNumber: 403,
      columnNumber: 9
    },
    this
  )
] }, void 0, !0, {
  fileName: "app/routes/index.tsx",
  lineNumber: 382,
  columnNumber: 5
}, this), Hero = ({ trial }) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
  "section",
  {
    id: "hero",
    className: "flex flex-col items-center justify-center gap-8 text-center",
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h1", { className: "text-2xl font-semibold tracking-tight text-blue-700", children: [
        "Is",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "text-bold  tracking-tighter text-red-600", children: "anxiety" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 428,
          columnNumber: 9
        }, this),
        " ",
        "holding you back from mastering foreign languages?"
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 426,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { className: "max-w-xl text-xl tracking-wide", children: [
        "Unleash your potential with",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "font-semibold text-blue-700", children: "LanguageMate" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 436,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 434,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h3", { className: "text-lg", children: [
        "Become fluent in any target language by speaking",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "font-semibold text-blue-700", children: "anxiety-free" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 441,
          columnNumber: 9
        }, this),
        " to the",
        " ",
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { className: "font-semibold text-blue-700", children: [
          "world's best language-learning chatbot",
          " "
        ] }, void 0, !0, {
          fileName: "app/routes/index.tsx",
          lineNumber: 442,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 439,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "m-auto flex w-full max-w-3xl flex-col gap-6 md:flex-row md:justify-center [&>button]:h-full", children: [
        trial ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(StartTrialButton, {}, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 448,
          columnNumber: 18
        }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(StartFreeButton, {}, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 448,
          columnNumber: 41
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(import_react20.Link, { to: "#features", className: "w-full font-semibold", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Buttons_default, { variant: "transparent", children: "Learn more" }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 451,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/routes/index.tsx",
          lineNumber: 450,
          columnNumber: 9
        }, this)
      ] }, void 0, !0, {
        fileName: "app/routes/index.tsx",
        lineNumber: 447,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
        "img",
        {
          src: "https://storage.googleapis.com/languagemate-public/branded-screenshot.png",
          className: "w-4/5 max-w-md"
        },
        void 0,
        !1,
        {
          fileName: "app/routes/index.tsx",
          lineNumber: 455,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "[&>button]:font-semibold", children: trial ? /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(StartTrialButton, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 460,
        columnNumber: 18
      }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(StartFreeButton, {}, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 460,
        columnNumber: 41
      }, this) }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 459,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/routes/index.tsx",
    lineNumber: 422,
    columnNumber: 5
  },
  this
), SupportedLanguages = () => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("section", { className: "text-center", children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(Card_default, { width: "full", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("h2", { className: "text-3xl", children: [
    flags.length,
    " Supported languages"
  ] }, void 0, !0, {
    fileName: "app/routes/index.tsx",
    lineNumber: 470,
    columnNumber: 9
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("div", { className: "flex flex-wrap items-center justify-center gap-4 text-3xl", children: flags.map(({ flag, language }) => /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(
    "p",
    {
      className: "flex items-center justify-center gap-2",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)("span", { "aria-label": language, children: flag }, void 0, !1, {
        fileName: "app/routes/index.tsx",
        lineNumber: 478,
        columnNumber: 17
      }, this)
    },
    language,
    !1,
    {
      fileName: "app/routes/index.tsx",
      lineNumber: 474,
      columnNumber: 15
    },
    this
  )) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 471,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/routes/index.tsx",
  lineNumber: 469,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/index.tsx",
  lineNumber: 468,
  columnNumber: 5
}, this), routes_default = Index;

// app/routes/terms.tsx
var terms_exports = {};
__export(terms_exports, {
  default: () => terms_default
});
var import_jsx_dev_runtime22 = require("react/jsx-dev-runtime"), Terms = () => /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("div", { className: "flex flex-col gap-8", children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)("h1", { className: "font-bold text-blue-800", children: "Terms and conditions" }, void 0, !1, {
  fileName: "app/routes/terms.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/routes/terms.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this), terms_default = Terms;

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "4f0ee57b", entry: { module: "/build/entry.client-HBBHDJDT.js", imports: ["/build/_shared/chunk-GTNGNULT.js", "/build/_shared/chunk-AHL4TSUE.js", "/build/_shared/chunk-VIPVJV6J.js", "/build/_shared/chunk-5KL4PAQL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-CP3WJMD2.js", imports: ["/build/_shared/chunk-HSWL562X.js", "/build/_shared/chunk-BWNXRDGK.js", "/build/_shared/chunk-Q7G6OFKU.js", "/build/_shared/chunk-SNT6XHV7.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !0, hasErrorBoundary: !0 }, "routes/api/login/link-guest-account": { id: "routes/api/login/link-guest-account", parentId: "root", path: "api/login/link-guest-account", index: void 0, caseSensitive: void 0, module: "/build/routes/api/login/link-guest-account-TQDAPUY2.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/api/stripe-webhook": { id: "routes/api/stripe-webhook", parentId: "root", path: "api/stripe-webhook", index: void 0, caseSensitive: void 0, module: "/build/routes/api/stripe-webhook-EQOSIBHG.js", imports: void 0, hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/contact": { id: "routes/contact", parentId: "root", path: "contact", index: void 0, caseSensitive: void 0, module: "/build/routes/contact-23VCAICI.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-GGEXXK3X.js", imports: ["/build/_shared/chunk-KM7KXZ5X.js", "/build/_shared/chunk-WEOPVTPI.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/login": { id: "routes/login", parentId: "root", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/login-TWJO36LG.js", imports: ["/build/_shared/chunk-HUKAUH66.js", "/build/_shared/chunk-WEOPVTPI.js", "/build/_shared/chunk-65B4HZGS.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/payment/failure": { id: "routes/payment/failure", parentId: "root", path: "payment/failure", index: void 0, caseSensitive: void 0, module: "/build/routes/payment/failure-TRYUNQUS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/payment/success": { id: "routes/payment/success", parentId: "root", path: "payment/success", index: void 0, caseSensitive: void 0, module: "/build/routes/payment/success-V4SGKC4T.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/pricing": { id: "routes/pricing", parentId: "root", path: "pricing", index: void 0, caseSensitive: void 0, module: "/build/routes/pricing-I337KZWQ.js", imports: ["/build/_shared/chunk-KM7KXZ5X.js", "/build/_shared/chunk-HUKAUH66.js", "/build/_shared/chunk-WEOPVTPI.js", "/build/_shared/chunk-65B4HZGS.js"], hasAction: !0, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/profile/payment": { id: "routes/profile/payment", parentId: "root", path: "profile/payment", index: void 0, caseSensitive: void 0, module: "/build/routes/profile/payment-B4GQQB4O.js", imports: ["/build/_shared/chunk-65B4HZGS.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/terms": { id: "routes/terms", parentId: "root", path: "terms", index: void 0, caseSensitive: void 0, module: "/build/routes/terms-PSOWNQ44.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-4F0EE57B.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public/build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !1, v2_meta: !1, v2_normalizeFormMethod: !1, v2_routeConvention: !1 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/api/login/link-guest-account": {
    id: "routes/api/login/link-guest-account",
    parentId: "root",
    path: "api/login/link-guest-account",
    index: void 0,
    caseSensitive: void 0,
    module: link_guest_account_exports
  },
  "routes/api/stripe-webhook": {
    id: "routes/api/stripe-webhook",
    parentId: "root",
    path: "api/stripe-webhook",
    index: void 0,
    caseSensitive: void 0,
    module: stripe_webhook_exports
  },
  "routes/payment/failure": {
    id: "routes/payment/failure",
    parentId: "root",
    path: "payment/failure",
    index: void 0,
    caseSensitive: void 0,
    module: failure_exports
  },
  "routes/payment/success": {
    id: "routes/payment/success",
    parentId: "root",
    path: "payment/success",
    index: void 0,
    caseSensitive: void 0,
    module: success_exports
  },
  "routes/profile/payment": {
    id: "routes/profile/payment",
    parentId: "root",
    path: "profile/payment",
    index: void 0,
    caseSensitive: void 0,
    module: payment_exports
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
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
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
