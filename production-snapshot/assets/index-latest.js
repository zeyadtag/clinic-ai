import {
  r as o,
  a as ks,
  L as Q,
  u as mt,
  O as qt,
  N as Ht,
  b as ws,
  d as He,
  e as we,
  f as Qe,
  h as _s,
  i as X,
  R as Cs,
  B as Ss,
} from "./react-BakvvWk0.js";
import { c as Is } from "./supabase-CyQR2TUW.js";
import {
  R as As,
  B as Ms,
  C as Ds,
  X as Ls,
  Y as Os,
  T as $s,
  a as Ps,
} from "./charts-DIzrYkjv.js";
(function () {
  const s = document.createElement("link").relList;
  if (s && s.supports && s.supports("modulepreload")) return;
  for (const n of document.querySelectorAll('link[rel="modulepreload"]')) i(n);
  new MutationObserver((n) => {
    for (const r of n)
      if (r.type === "childList")
        for (const x of r.addedNodes)
          x.tagName === "LINK" && x.rel === "modulepreload" && i(x);
  }).observe(document, { childList: !0, subtree: !0 });
  function a(n) {
    const r = {};
    return (
      n.integrity && (r.integrity = n.integrity),
      n.referrerPolicy && (r.referrerPolicy = n.referrerPolicy),
      n.crossOrigin === "use-credentials"
        ? (r.credentials = "include")
        : n.crossOrigin === "anonymous"
          ? (r.credentials = "omit")
          : (r.credentials = "same-origin"),
      r
    );
  }
  function i(n) {
    if (n.ep) return;
    n.ep = !0;
    const r = a(n);
    fetch(n.href, r);
  }
})();
var Qt = { exports: {} },
  We = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ts = o,
  Es = Symbol.for("react.element"),
  zs = Symbol.for("react.fragment"),
  Rs = Object.prototype.hasOwnProperty,
  Vs = Ts.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  Fs = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wt(t, s, a) {
  var i,
    n = {},
    r = null,
    x = null;
  (a !== void 0 && (r = "" + a),
    s.key !== void 0 && (r = "" + s.key),
    s.ref !== void 0 && (x = s.ref));
  for (i in s) Rs.call(s, i) && !Fs.hasOwnProperty(i) && (n[i] = s[i]);
  if (t && t.defaultProps)
    for (i in ((s = t.defaultProps), s)) n[i] === void 0 && (n[i] = s[i]);
  return {
    $$typeof: Es,
    type: t,
    key: r,
    ref: x,
    props: n,
    _owner: Vs.current,
  };
}
We.Fragment = zs;
We.jsx = Wt;
We.jsxs = Wt;
Qt.exports = We;
var e = Qt.exports,
  ot = {},
  _t = ks;
((ot.createRoot = _t.createRoot), (ot.hydrateRoot = _t.hydrateRoot));
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Bs = (t) => t.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(),
  Gt = (...t) => t.filter((s, a, i) => !!s && i.indexOf(s) === a).join(" ");
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var Us = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qs = o.forwardRef(
  (
    {
      color: t = "currentColor",
      size: s = 24,
      strokeWidth: a = 2,
      absoluteStrokeWidth: i,
      className: n = "",
      children: r,
      iconNode: x,
      ...l
    },
    p,
  ) =>
    o.createElement(
      "svg",
      {
        ref: p,
        ...Us,
        width: s,
        height: s,
        stroke: t,
        strokeWidth: i ? (Number(a) * 24) / Number(s) : a,
        className: Gt("lucide", n),
        ...l,
      },
      [
        ...x.map(([m, u]) => o.createElement(m, u)),
        ...(Array.isArray(r) ? r : [r]),
      ],
    ),
);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const w = (t, s) => {
  const a = o.forwardRef(({ className: i, ...n }, r) =>
    o.createElement(qs, {
      ref: r,
      iconNode: s,
      className: Gt(`lucide-${Bs(t)}`, i),
      ...n,
    }),
  );
  return ((a.displayName = `${t}`), a);
};
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Kt = w("Activity", [
  [
    "path",
    {
      d: "M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",
      key: "169zse",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ne = w("ArrowLeft", [
  ["path", { d: "m12 19-7-7 7-7", key: "1l729n" }],
  ["path", { d: "M19 12H5", key: "x3x0zl" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Hs = w("ArrowRight", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "m12 5 7 7-7 7", key: "xquz4c" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xt = w("ArrowUpLeft", [
  ["path", { d: "M7 17V7h10", key: "11bw93" }],
  ["path", { d: "M17 17 7 7", key: "2786uv" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Yt = w("Award", [
  [
    "path",
    {
      d: "m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526",
      key: "1yiouv",
    },
  ],
  ["circle", { cx: "12", cy: "8", r: "6", key: "1vp47v" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const et = w("Bell", [
  ["path", { d: "M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9", key: "1qo2s2" }],
  ["path", { d: "M10.3 21a1.94 1.94 0 0 0 3.4 0", key: "qgo35s" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ae = w("BookOpen", [
  ["path", { d: "M12 7v14", key: "1akyts" }],
  [
    "path",
    {
      d: "M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z",
      key: "ruj8y",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const je = w("Bookmark", [
  [
    "path",
    { d: "m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z", key: "1fy3hk" },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Qs = w("Bot", [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  [
    "rect",
    { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" },
  ],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const he = w("CalendarCheck", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m9 16 2 2 4-4", key: "19s6y9" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zt = w("CalendarClock", [
  [
    "path",
    {
      d: "M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5",
      key: "1osxxc",
    },
  ],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M3 10h5", key: "r794hk" }],
  ["path", { d: "M17.5 17.5 16 16.3V14", key: "akvzfd" }],
  ["circle", { cx: "16", cy: "16", r: "6", key: "qoo3c4" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ie = w("CalendarDays", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "rect",
    { width: "18", height: "18", x: "3", y: "4", rx: "2", key: "1hopcy" },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "M8 14h.01", key: "6423bh" }],
  ["path", { d: "M12 14h.01", key: "1etili" }],
  ["path", { d: "M16 14h.01", key: "1gbofw" }],
  ["path", { d: "M8 18h.01", key: "lrp35t" }],
  ["path", { d: "M12 18h.01", key: "mhygvu" }],
  ["path", { d: "M16 18h.01", key: "kzsmim" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ws = w("CalendarX2", [
  ["path", { d: "M8 2v4", key: "1cmpym" }],
  ["path", { d: "M16 2v4", key: "4m81vk" }],
  [
    "path",
    {
      d: "M21 13V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8",
      key: "3spt84",
    },
  ],
  ["path", { d: "M3 10h18", key: "8toen8" }],
  ["path", { d: "m17 22 5-5", key: "1k6ppv" }],
  ["path", { d: "m17 17 5 5", key: "p7ous7" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Gs = w("Camera", [
  [
    "path",
    {
      d: "M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z",
      key: "1tc9qg",
    },
  ],
  ["circle", { cx: "12", cy: "13", r: "3", key: "1vg3eu" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ge = w("Check", [["path", { d: "M20 6 9 17l-5-5", key: "1gmf2c" }]]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Jt = w("CircleAlert", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["line", { x1: "12", x2: "12", y1: "8", y2: "12", key: "1pkeuh" }],
  ["line", { x1: "12", x2: "12.01", y1: "16", y2: "16", key: "4dfq90" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oe = w("CircleCheck", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const _e = w("Clock3", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16.5 12", key: "1aq6pp" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ks = w("Clock", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["polyline", { points: "12 6 12 12 16 14", key: "68esgv" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xs = w("Copy", [
  [
    "rect",
    {
      width: "14",
      height: "14",
      x: "8",
      y: "8",
      rx: "2",
      ry: "2",
      key: "17jyea",
    },
  ],
  [
    "path",
    {
      d: "M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",
      key: "zix9uf",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const dt = w("Cross", [
  [
    "path",
    {
      d: "M11 2a2 2 0 0 0-2 2v5H4a2 2 0 0 0-2 2v2c0 1.1.9 2 2 2h5v5c0 1.1.9 2 2 2h2a2 2 0 0 0 2-2v-5h5a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-5V4a2 2 0 0 0-2-2h-2z",
      key: "1t5g7j",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ys = w("Droplets", [
  [
    "path",
    {
      d: "M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z",
      key: "1ptgy4",
    },
  ],
  [
    "path",
    {
      d: "M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97",
      key: "1sl1rz",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Zs = w("ExternalLink", [
  ["path", { d: "M15 3h6v6", key: "1q9fwt" }],
  ["path", { d: "M10 14 21 3", key: "gplh6r" }],
  [
    "path",
    {
      d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
      key: "a6xqqp",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Js = w("EyeOff", [
  [
    "path",
    {
      d: "M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49",
      key: "ct8e1f",
    },
  ],
  ["path", { d: "M14.084 14.158a3 3 0 0 1-4.242-4.242", key: "151rxh" }],
  [
    "path",
    {
      d: "M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143",
      key: "13bj9a",
    },
  ],
  ["path", { d: "m2 2 20 20", key: "1ooewy" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Me = w("Eye", [
  [
    "path",
    {
      d: "M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",
      key: "1nclc0",
    },
  ],
  ["circle", { cx: "12", cy: "12", r: "3", key: "1v7zrd" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const es = w("FileQuestion", [
  ["path", { d: "M12 17h.01", key: "p32p05" }],
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7z",
      key: "1mlx9k",
    },
  ],
  ["path", { d: "M9.1 9a3 3 0 0 1 5.82 1c0 2-3 3-3 3", key: "mhlwft" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ts = w("FileText", [
  [
    "path",
    {
      d: "M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",
      key: "1rqfz7",
    },
  ],
  ["path", { d: "M14 2v4a2 2 0 0 0 2 2h4", key: "tnqrlb" }],
  ["path", { d: "M10 9H8", key: "b1mrlr" }],
  ["path", { d: "M16 13H8", key: "t4e002" }],
  ["path", { d: "M16 17H8", key: "z1uh3a" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ct = w("Gift", [
  ["rect", { x: "3", y: "8", width: "18", height: "4", rx: "1", key: "bkv52" }],
  ["path", { d: "M12 8v13", key: "1c76mn" }],
  ["path", { d: "M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7", key: "6wjy6b" }],
  [
    "path",
    {
      d: "M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5",
      key: "1ihvrl",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ea = w("GraduationCap", [
  [
    "path",
    {
      d: "M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",
      key: "j76jl0",
    },
  ],
  ["path", { d: "M22 10v6", key: "1lu8f3" }],
  ["path", { d: "M6 12.5V16a6 3 0 0 0 12 0v-3.5", key: "1r8lef" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ta = w("HeartHandshake", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
  [
    "path",
    {
      d: "M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",
      key: "4oyue0",
    },
  ],
  ["path", { d: "m18 15-2-2", key: "60u0ii" }],
  ["path", { d: "m15 18-2-2", key: "6p76be" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const St = w("HeartPulse", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
  ["path", { d: "M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27", key: "1uw2ng" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const De = w("Heart", [
  [
    "path",
    {
      d: "M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",
      key: "c3ymky",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pt = w("House", [
  ["path", { d: "M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8", key: "5wwlr5" }],
  [
    "path",
    {
      d: "M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",
      key: "1d0kgt",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const It = w("Image", [
  [
    "rect",
    {
      width: "18",
      height: "18",
      x: "3",
      y: "3",
      rx: "2",
      ry: "2",
      key: "1m3agn",
    },
  ],
  ["circle", { cx: "9", cy: "9", r: "2", key: "af1f0g" }],
  ["path", { d: "m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21", key: "1xmnt7" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ss = w("Info", [
  ["circle", { cx: "12", cy: "12", r: "10", key: "1mglay" }],
  ["path", { d: "M12 16v-4", key: "1dtifu" }],
  ["path", { d: "M12 8h.01", key: "e9boi3" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ht = w("KeyRound", [
  [
    "path",
    {
      d: "M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z",
      key: "1s6t7t",
    },
  ],
  [
    "circle",
    { cx: "16.5", cy: "7.5", r: ".5", fill: "currentColor", key: "w0ekpg" },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ut = w("LayoutDashboard", [
  ["rect", { width: "7", height: "9", x: "3", y: "3", rx: "1", key: "10lvy0" }],
  [
    "rect",
    { width: "7", height: "5", x: "14", y: "3", rx: "1", key: "16une8" },
  ],
  [
    "rect",
    { width: "7", height: "9", x: "14", y: "12", rx: "1", key: "1hutg5" },
  ],
  [
    "rect",
    { width: "7", height: "5", x: "3", y: "16", rx: "1", key: "ldoo1y" },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const as = w("Lightbulb", [
  [
    "path",
    {
      d: "M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",
      key: "1gvzjb",
    },
  ],
  ["path", { d: "M9 18h6", key: "x1upvd" }],
  ["path", { d: "M10 22h4", key: "ceow96" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const sa = w("LockKeyhole", [
  ["circle", { cx: "12", cy: "16", r: "1", key: "1au0dj" }],
  [
    "rect",
    { x: "3", y: "10", width: "18", height: "12", rx: "2", key: "6s8ecr" },
  ],
  ["path", { d: "M7 10V7a5 5 0 0 1 10 0v3", key: "1pqi11" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ns = w("LogOut", [
  ["path", { d: "M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4", key: "1uf3rs" }],
  ["polyline", { points: "16 17 21 12 16 7", key: "1gabdz" }],
  ["line", { x1: "21", x2: "9", y1: "12", y2: "12", key: "1uyos4" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const aa = w("Mail", [
  [
    "rect",
    { width: "20", height: "16", x: "2", y: "4", rx: "2", key: "18n3k1" },
  ],
  ["path", { d: "m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7", key: "1ocrg3" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const At = w("Megaphone", [
  ["path", { d: "m3 11 18-5v12L3 14v-3z", key: "n962bs" }],
  ["path", { d: "M11.6 16.8a3 3 0 1 1-5.8-1.6", key: "1yl0tm" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const na = w("Menu", [
  ["line", { x1: "4", x2: "20", y1: "12", y2: "12", key: "1e0a9i" }],
  ["line", { x1: "4", x2: "20", y1: "6", y2: "6", key: "1owob3" }],
  ["line", { x1: "4", x2: "20", y1: "18", y2: "18", key: "yk5zj1" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ia = w("MessageCircle", [
  ["path", { d: "M7.9 20A9 9 0 1 0 4 16.1L2 22Z", key: "vv11sd" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const la = w("MessageSquareText", [
  [
    "path",
    {
      d: "M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z",
      key: "1lielz",
    },
  ],
  ["path", { d: "M13 8H7", key: "14i4kc" }],
  ["path", { d: "M17 12H7", key: "16if0g" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ra = w("MicOff", [
  ["line", { x1: "2", x2: "22", y1: "2", y2: "22", key: "a6p6uj" }],
  ["path", { d: "M18.89 13.23A7.12 7.12 0 0 0 19 12v-2", key: "80xlxr" }],
  ["path", { d: "M5 10v2a7 7 0 0 0 12 5", key: "p2k8kg" }],
  ["path", { d: "M15 9.34V5a3 3 0 0 0-5.68-1.33", key: "1gzdoj" }],
  ["path", { d: "M9 9v3a3 3 0 0 0 5.12 2.12", key: "r2i35w" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ca = w("Mic", [
  [
    "path",
    {
      d: "M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z",
      key: "131961",
    },
  ],
  ["path", { d: "M19 10v2a7 7 0 0 1-14 0v-2", key: "1vc78b" }],
  ["line", { x1: "12", x2: "12", y1: "19", y2: "22", key: "x3vr5v" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const oa = w("Newspaper", [
  [
    "path",
    {
      d: "M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2",
      key: "7pis2x",
    },
  ],
  ["path", { d: "M18 14h-8", key: "sponae" }],
  ["path", { d: "M15 18h-5", key: "95g1m2" }],
  ["path", { d: "M10 6h8v4h-8V6Z", key: "smlsk5" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const da = w("Pause", [
  [
    "rect",
    { x: "14", y: "4", width: "4", height: "16", rx: "1", key: "zuxfzm" },
  ],
  [
    "rect",
    { x: "6", y: "4", width: "4", height: "16", rx: "1", key: "1okwgv" },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xa = w("Pencil", [
  [
    "path",
    {
      d: "M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",
      key: "1a8usu",
    },
  ],
  ["path", { d: "m15 5 4 4", key: "1mk7zo" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Le = w("Pill", [
  [
    "path",
    {
      d: "m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z",
      key: "wa1lgi",
    },
  ],
  ["path", { d: "m8.5 8.5 7 7", key: "rvfmvr" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ke = w("Play", [
  ["polygon", { points: "6 3 20 12 6 21 6 3", key: "1oa8hb" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const xt = w("Plus", [
  ["path", { d: "M5 12h14", key: "1ays0h" }],
  ["path", { d: "M12 5v14", key: "s699le" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const is = w("Save", [
  [
    "path",
    {
      d: "M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",
      key: "1c8476",
    },
  ],
  ["path", { d: "M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7", key: "1ydtos" }],
  ["path", { d: "M7 3v4a1 1 0 0 0 1 1h7", key: "t51u73" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const gt = w("Search", [
  ["circle", { cx: "11", cy: "11", r: "8", key: "4ej97u" }],
  ["path", { d: "m21 21-4.3-4.3", key: "1qie3q" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ft = w("Send", [
  [
    "path",
    {
      d: "M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",
      key: "1ffxy3",
    },
  ],
  ["path", { d: "m21.854 2.147-10.94 10.939", key: "12cjpa" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ls = w("Share2", [
  ["circle", { cx: "18", cy: "5", r: "3", key: "gq8acd" }],
  ["circle", { cx: "6", cy: "12", r: "3", key: "w7nqdw" }],
  ["circle", { cx: "18", cy: "19", r: "3", key: "1xt0gg" }],
  [
    "line",
    { x1: "8.59", x2: "15.42", y1: "13.51", y2: "17.49", key: "47mynk" },
  ],
  ["line", { x1: "15.41", x2: "8.59", y1: "6.51", y2: "10.49", key: "1n3mei" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const re = w("ShieldCheck", [
  [
    "path",
    {
      d: "M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",
      key: "oel41y",
    },
  ],
  ["path", { d: "m9 12 2 2 4-4", key: "dzmm74" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const de = w("Sparkles", [
  [
    "path",
    {
      d: "M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",
      key: "4pj2yx",
    },
  ],
  ["path", { d: "M20 3v4", key: "1olli1" }],
  ["path", { d: "M22 5h-4", key: "1gvqau" }],
  ["path", { d: "M4 17v2", key: "vumght" }],
  ["path", { d: "M5 18H3", key: "zchphs" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ma = w("SquarePen", [
  [
    "path",
    {
      d: "M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7",
      key: "1m0v6g",
    },
  ],
  [
    "path",
    {
      d: "M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z",
      key: "ohrbg2",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const pa = w("Star", [
  [
    "polygon",
    {
      points:
        "12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2",
      key: "8f66p6",
    },
  ],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Xe = w("Stethoscope", [
  ["path", { d: "M11 2v2", key: "1539x4" }],
  ["path", { d: "M5 2v2", key: "1yf1q8" }],
  [
    "path",
    {
      d: "M5 3H4a2 2 0 0 0-2 2v4a6 6 0 0 0 12 0V5a2 2 0 0 0-2-2h-1",
      key: "rb5t3r",
    },
  ],
  ["path", { d: "M8 15a6 6 0 0 0 12 0v-3", key: "x18d4x" }],
  ["circle", { cx: "20", cy: "10", r: "2", key: "ts1r5v" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ha = w("Sun", [
  ["circle", { cx: "12", cy: "12", r: "4", key: "4exip2" }],
  ["path", { d: "M12 2v2", key: "tus03m" }],
  ["path", { d: "M12 20v2", key: "1lh1kg" }],
  ["path", { d: "m4.93 4.93 1.41 1.41", key: "149t6j" }],
  ["path", { d: "m17.66 17.66 1.41 1.41", key: "ptbguv" }],
  ["path", { d: "M2 12h2", key: "1t8f8n" }],
  ["path", { d: "M20 12h2", key: "1q8mjw" }],
  ["path", { d: "m6.34 17.66-1.41 1.41", key: "1m8zz5" }],
  ["path", { d: "m19.07 4.93-1.41 1.41", key: "1shlcs" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ua = w("Timer", [
  ["line", { x1: "10", x2: "14", y1: "2", y2: "2", key: "14vaq8" }],
  ["line", { x1: "12", x2: "15", y1: "14", y2: "11", key: "17fdiu" }],
  ["circle", { cx: "12", cy: "14", r: "8", key: "1e1u0o" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Mt = w("Trash2", [
  ["path", { d: "M3 6h18", key: "d0wm0j" }],
  ["path", { d: "M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6", key: "4alrt4" }],
  ["path", { d: "M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2", key: "v07s0e" }],
  ["line", { x1: "10", x2: "10", y1: "11", y2: "17", key: "1uufr5" }],
  ["line", { x1: "14", x2: "14", y1: "11", y2: "17", key: "xtxkd" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ga = w("TrendingDown", [
  ["polyline", { points: "22 17 13.5 8.5 8.5 13.5 2 7", key: "1r2t7k" }],
  ["polyline", { points: "16 17 22 17 22 11", key: "11uiuu" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const qe = w("TrendingUp", [
  ["polyline", { points: "22 7 13.5 15.5 8.5 10.5 2 17", key: "126l90" }],
  ["polyline", { points: "16 7 22 7 22 13", key: "kwv8wd" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Ye = w("TriangleAlert", [
  [
    "path",
    {
      d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
      key: "wmoenq",
    },
  ],
  ["path", { d: "M12 9v4", key: "juzpu7" }],
  ["path", { d: "M12 17h.01", key: "p32p05" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const fa = w("Upload", [
  ["path", { d: "M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4", key: "ih7n3h" }],
  ["polyline", { points: "17 8 12 3 7 8", key: "t8dd8p" }],
  ["line", { x1: "12", x2: "12", y1: "3", y2: "15", key: "widbto" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ja = w("UserCheck", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["polyline", { points: "16 11 18 13 22 9", key: "1pwet4" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const jt = w("UserRound", [
  ["circle", { cx: "12", cy: "8", r: "5", key: "1hypcn" }],
  ["path", { d: "M20 21a8 8 0 0 0-16 0", key: "rfgkzh" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ba = w("User", [
  ["path", { d: "M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2", key: "975kel" }],
  ["circle", { cx: "12", cy: "7", r: "4", key: "17ys0d" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const rs = w("Users", [
  ["path", { d: "M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2", key: "1yyitq" }],
  ["circle", { cx: "9", cy: "7", r: "4", key: "nufk8" }],
  ["path", { d: "M22 21v-2a4 4 0 0 0-3-3.87", key: "kshegd" }],
  ["path", { d: "M16 3.13a4 4 0 0 1 0 7.75", key: "1da9ce" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const Dt = w("Wallet", [
  [
    "path",
    {
      d: "M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1",
      key: "18etb6",
    },
  ],
  ["path", { d: "M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4", key: "xoc0q4" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const ya = w("WandSparkles", [
  [
    "path",
    {
      d: "m21.64 3.64-1.28-1.28a1.21 1.21 0 0 0-1.72 0L2.36 18.64a1.21 1.21 0 0 0 0 1.72l1.28 1.28a1.2 1.2 0 0 0 1.72 0L21.64 5.36a1.2 1.2 0 0 0 0-1.72",
      key: "ul74o6",
    },
  ],
  ["path", { d: "m14 7 3 3", key: "1r5n42" }],
  ["path", { d: "M5 6v4", key: "ilb8ba" }],
  ["path", { d: "M19 14v4", key: "blhpug" }],
  ["path", { d: "M10 2v2", key: "7u0qdc" }],
  ["path", { d: "M7 8H3", key: "zfb6yr" }],
  ["path", { d: "M21 16h-4", key: "1cnmox" }],
  ["path", { d: "M11 3H9", key: "1obp7u" }],
]);
/**
 * @license lucide-react v0.441.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const be = w("X", [
    ["path", { d: "M18 6 6 18", key: "1bl5f8" }],
    ["path", { d: "m6 6 12 12", key: "d8bk6v" }],
  ]),
  B = (t = "id") =>
    `${t}_${Date.now().toString(36)}_${Math.random().toString(36).slice(2, 8)}`,
  bt = (t) => {
    const s = new Date(t);
    return (s.setHours(0, 0, 0, 0), s);
  },
  J = (t, s) => {
    const a = new Date(t);
    return (a.setDate(a.getDate() + s), a);
  },
  yt = (t, s) => new Date(new Date(t).getTime() + s * 6e4),
  Ze = (t, s) => new Date(t).toDateString() === new Date(s).toDateString(),
  ke = (t) =>
    new Date(t).toLocaleDateString(void 0, {
      weekday: "short",
      month: "short",
      day: "numeric",
    }),
  cs = (t) =>
    new Date(t).toLocaleTimeString(void 0, {
      hour: "numeric",
      minute: "2-digit",
    }),
  ce = (t) => `${ke(t)}, ${cs(t)}`,
  fe = (t) =>
    (t / 100).toLocaleString("ar-EG", { style: "currency", currency: "EGP" }),
  vt = (t) => {
    if (!t) return null;
    const s = new Date(t),
      a = new Date() - s;
    return Math.floor(a / (1e3 * 60 * 60 * 24 * 365.25));
  },
  Nt = (t) => {
    const s = bt(t),
      a = s.getDay();
    return J(s, -a);
  },
  le = bt(new Date());
function va() {
  const t = {
      id: "clinic_tag",
      name: "تاج",
      slug: "tag",
      timezone: "Africa/Cairo",
      phone: "01000000000",
      address: "الإسكندرية، مصر",
    },
    s = [
      {
        id: "doc_ziad",
        fullName: "د. زياد محمد",
        title: "طبيب جلدية وتجميل وليزر",
        specialties: [
          "الأمراض الجلدية",
          "علاج حب الشباب",
          "تساقط الشعر",
          "التجميل والليزر",
        ],
        qualifications: ["طب الجلدية والتجميل"],
        yearsExperience: 0,
        bio: "رعاية متخصصة للبشرة والشعر مع خطط علاج واضحة ومتابعة دقيقة للحالة.",
        slotDurationMinutes: 30,
        isActive: !0,
      },
    ],
    a = [
      {
        id: "svc_checkup",
        name: "كشف جلدية",
        description: "فحص وتشخيص مشكلات البشرة ووضع خطة العلاج المناسبة.",
        priceCents: 12e3,
        durationMinutes: 30,
      },
      {
        id: "svc_followup",
        name: "متابعة جلدية",
        description: "متابعة استجابة الحالة للعلاج وتحديث الخطة عند الحاجة.",
        priceCents: 7e3,
        durationMinutes: 20,
      },
      {
        id: "svc_derm",
        name: "علاج حب الشباب",
        description: "تقييم حب الشباب وآثاره ووضع برنامج علاجي متكامل.",
        priceCents: 15e3,
        durationMinutes: 30,
      },
      {
        id: "svc_aesthetic",
        name: "جلسة تجميل وليزر",
        description: "جلسات تجميل وليزر مع متابعة النتائج قبل وبعد.",
        priceCents: 32e3,
        durationMinutes: 60,
      },
      {
        id: "svc_bloodwork",
        name: "استشارة الشعر والتساقط",
        description: "تشخيص أسباب تساقط الشعر وتحديد الفحوصات وخطة العلاج.",
        priceCents: 9e3,
        durationMinutes: 30,
      },
    ],
    i = [
      {
        id: "pat_jordan",
        fullName: "مريض تجريبي 01",
        phone: "000-000-0001",
        email: "demo.patient01@example.invalid",
        dateOfBirth: "1990-01-01",
        gender: "Male",
        allergies: ["Penicillin"],
        chronicConditions: ["Hypertension"],
        currentMedications: ["Lisinopril 10mg"],
        notes: "Prefers early morning appointments.",
        loyaltyLevel: "gold",
        totalVisits: 9,
        completedVisits: 8,
      },
      {
        id: "pat_sofia",
        fullName: "مريض تجريبي 02",
        phone: "000-000-0002",
        email: "demo.patient02@example.invalid",
        dateOfBirth: "1990-01-01",
        gender: "Female",
        allergies: [],
        chronicConditions: [],
        currentMedications: [],
        notes: "",
        loyaltyLevel: "unlocked",
        totalVisits: 4,
        completedVisits: 4,
      },
      {
        id: "pat_wei",
        fullName: "مريض تجريبي 03",
        phone: "000-000-0003",
        email: "demo.patient03@example.invalid",
        dateOfBirth: "1990-01-01",
        gender: "Male",
        allergies: ["Sulfa drugs"],
        chronicConditions: ["Type 2 Diabetes"],
        currentMedications: ["Metformin 500mg"],
        notes: "Needs interpreter assistance on occasion (Mandarin).",
        loyaltyLevel: "vip",
        totalVisits: 16,
        completedVisits: 15,
      },
      {
        id: "pat_amelia",
        fullName: "مريض تجريبي 04",
        phone: "000-000-0004",
        email: "demo.patient04@example.invalid",
        dateOfBirth: "1990-01-01",
        gender: "Female",
        allergies: [],
        chronicConditions: [],
        currentMedications: [],
        notes: "",
        loyaltyLevel: "new",
        totalVisits: 1,
        completedVisits: 0,
      },
    ],
    n = (I, h = 0, R = 0) => yt(bt(J(le, R)), I * 60 + h),
    r = [
      {
        id: B("appt"),
        patientId: "pat_jordan",
        doctorId: "doc_ziad",
        serviceId: "svc_checkup",
        startsAt: n(9, 0),
        endsAt: n(9, 30),
        status: "completed",
      },
      {
        id: B("appt"),
        patientId: "pat_sofia",
        doctorId: "doc_ziad",
        serviceId: "svc_derm",
        startsAt: n(9, 30),
        endsAt: n(10, 15),
        status: "completed",
      },
      {
        id: B("appt"),
        patientId: "pat_amelia",
        doctorId: "doc_ziad",
        serviceId: "svc_checkup",
        startsAt: n(10, 30),
        endsAt: n(11, 0),
        status: "in_progress",
      },
      {
        id: B("appt"),
        patientId: "pat_wei",
        doctorId: "doc_ziad",
        serviceId: "svc_followup",
        startsAt: n(11, 15),
        endsAt: n(11, 35),
        status: "confirmed",
      },
      {
        id: B("appt"),
        patientId: "pat_jordan",
        doctorId: "doc_ziad",
        serviceId: "svc_aesthetic",
        startsAt: n(13, 0),
        endsAt: n(14, 0),
        status: "scheduled",
      },
      {
        id: B("appt"),
        patientId: "pat_sofia",
        doctorId: "doc_ziad",
        serviceId: "svc_bloodwork",
        startsAt: n(15, 0),
        endsAt: n(15, 20),
        status: "cancelled",
        cancellationReason: "Patient rescheduled",
      },
      {
        id: B("appt"),
        patientId: "pat_wei",
        doctorId: "doc_ziad",
        serviceId: "svc_derm",
        startsAt: n(9, 0, 1),
        endsAt: n(9, 45, 1),
        status: "scheduled",
      },
      {
        id: B("appt"),
        patientId: "pat_amelia",
        doctorId: "doc_ziad",
        serviceId: "svc_checkup",
        startsAt: n(10, 0, -1),
        endsAt: n(10, 30, -1),
        status: "no_show",
      },
    ],
    x = [
      {
        id: B("visit"),
        patientId: "pat_jordan",
        doctorId: "doc_ziad",
        serviceId: "svc_checkup",
        visitDate: n(9, 0, -7),
        diagnosis: "Well-controlled hypertension",
        treatment: "Continue Lisinopril 10mg daily",
        doctorNotes:
          "BP 128/82, patient reports consistent medication adherence.",
        followUpDate: null,
        status: "completed",
      },
      {
        id: B("visit"),
        patientId: "pat_wei",
        doctorId: "doc_ziad",
        serviceId: "svc_followup",
        visitDate: n(11, 0, -14),
        diagnosis: "Type 2 diabetes, stable",
        treatment: "Continue Metformin, dietary counseling reinforced",
        doctorNotes:
          "A1C trending down since last visit. Encouraged to continue current routine.",
        followUpDate: null,
        status: "completed",
      },
      {
        id: B("visit"),
        patientId: "pat_sofia",
        doctorId: "doc_ziad",
        serviceId: "svc_derm",
        visitDate: n(9, 30, 0),
        diagnosis: "Mild eczema, forearms",
        treatment: "Topical corticosteroid, twice daily for 2 weeks",
        doctorNotes:
          "No signs of infection. Advised fragrance-free moisturizer.",
        followUpDate: J(le, 14).toISOString().slice(0, 10),
        status: "completed",
      },
    ],
    l = [
      {
        id: B("tx"),
        patientId: "pat_sofia",
        medication: "Hydrocortisone 1% cream",
        instructions: "Apply a thin layer to affected areas twice daily.",
        startDate: le.toISOString().slice(0, 10),
        endDate: J(le, 14).toISOString().slice(0, 10),
        reminderSchedule: "daily_08:00,daily_20:00",
        isActive: !0,
      },
    ],
    p = [
      {
        id: B("wl"),
        patientId: "pat_amelia",
        serviceId: "svc_derm",
        doctorId: "doc_ziad",
        preferredStart: n(9, 0, 2),
        status: "open",
      },
    ],
    m = [
      {
        id: B("fu"),
        patientId: "pat_wei",
        visitId: x[1].id,
        kind: "clinical",
        status: "pending",
        scheduledFor: J(le, -1),
        response: null,
        flagged: !1,
      },
    ],
    u = [
      {
        id: B("rev"),
        patientId: "pat_jordan",
        rating: 5,
        sentiment: "positive",
        comment: "خدمة ممتازة والدكتور يشرح كل التفاصيل بوضوح واهتمام.",
        isPublic: !0,
      },
      {
        id: B("rev"),
        patientId: "pat_wei",
        rating: 5,
        sentiment: "positive",
        comment: "الاستقبال منظم ووقت الانتظار قصير، والتجربة مريحة جدًا.",
        isPublic: !0,
      },
      {
        id: B("rev"),
        patientId: "pat_sofia",
        rating: 4,
        sentiment: "positive",
        comment: "نتائج رائعة وخطة علاج واضحة مع متابعة دقيقة للحالة.",
        isPublic: !0,
      },
    ],
    C = [
      {
        id: B("rw"),
        patientId: "pat_wei",
        milestoneVisits: 10,
        rewardDescription: "10% off next visit",
        grantedAt: J(le, -40),
      },
    ],
    v = [],
    g = [],
    D = [],
    _ = [
      {
        id: "post_acne",
        slug: "acne-mistakes",
        title: "3 أخطاء بتزوّد حب الشباب من غير ما تاخد بالك",
        excerpt:
          "لمس الحبوب وتجربة منتجات كثيرة وتجاهل واقي الشمس قد يؤخروا تحسن بشرتك.",
        content:
          "حب الشباب يحتاج خطة بسيطة وثابتة. تجنب لمس الحبوب أو عصرها، ولا تغيّر المنتجات كل عدة أيام. استخدم واقي شمس مناسب، وإذا استمرت المشكلة احجز كشفًا لتحديد العلاج الأنسب لحالتك.",
        contentType: "reel",
        category: "حب الشباب",
        status: "published",
        campaignCode: "acne-reel",
        ctaLabel: "احجز كشف حب الشباب",
        publishedAt: J(le, -2).toISOString(),
        views: 1840,
        likes: 126,
        saves: 83,
        shares: 41,
        helpful: 96,
        seriesTitle: "رحلة علاج حب الشباب",
        episodeNumber: 1,
        serviceId: "svc_derm",
        medicallyReviewed: !0,
        scenes: [
          {
            title: "بتعاني من حب الشباب؟",
            text: "متعملش الأخطاء دي",
            icon: "sparkles",
          },
          {
            title: "1 — عصر الحبوب",
            text: "يزود الالتهاب والآثار",
            icon: "alert",
          },
          {
            title: "2 — تغيير العلاج بسرعة",
            text: "النتيجة تحتاج وقتًا والتزامًا",
            icon: "clock",
          },
          {
            title: "3 — إهمال واقي الشمس",
            text: "قد يغمّق آثار الحبوب",
            icon: "sun",
          },
          {
            title: "الخطة الصح تبدأ بالتشخيص",
            text: "احجز كشفك في عيادة تاج",
            icon: "calendar",
          },
        ],
      },
      {
        id: "post_hair",
        slug: "hair-loss-signs",
        title: "إمتى تساقط الشعر يحتاج كشف؟",
        excerpt:
          "لو التساقط مستمر أو مصحوب بفراغات واضحة، التشخيص المبكر يفرق.",
        content:
          "التساقط اليومي البسيط طبيعي، لكن استمرار التساقط أكثر من عدة أسابيع أو ظهور فراغات أو حكة شديدة يحتاج تقييمًا طبيًا. السبب قد يكون نقص عناصر، اضطراب هرموني أو مشكلة في فروة الرأس.",
        contentType: "post",
        category: "الشعر",
        status: "published",
        campaignCode: "hair-post",
        ctaLabel: "احجز استشارة الشعر",
        publishedAt: J(le, -5).toISOString(),
        views: 1120,
        likes: 74,
        saves: 59,
        shares: 18,
        helpful: 67,
        seriesTitle: "دليل الشعر الصحي",
        episodeNumber: 1,
        serviceId: "svc_bloodwork",
        medicallyReviewed: !0,
      },
      {
        id: "post_sunscreen",
        slug: "sunscreen-guide",
        title: "واقي الشمس: الكمية الصح وطريقة التجديد",
        excerpt: "دليل سريع يساعدك تحصل على الحماية المكتوبة على العبوة.",
        content:
          "ضع كمية كافية على الوجه والرقبة قبل الخروج، وجدده كل ساعتين عند التعرض المباشر للشمس أو بعد التعرق. اختيار النوع يعتمد على طبيعة بشرتك ووجود حب شباب أو حساسية.",
        contentType: "tip",
        category: "العناية بالبشرة",
        status: "published",
        campaignCode: "sun-care",
        ctaLabel: "احجز استشارة بشرة",
        publishedAt: J(le, -8).toISOString(),
        views: 2360,
        likes: 188,
        saves: 142,
        shares: 65,
        helpful: 171,
        seriesTitle: "أساسيات البشرة",
        episodeNumber: 1,
        serviceId: "svc_checkup",
        medicallyReviewed: !0,
      },
      {
        id: "post_acne_routine",
        slug: "acne-routine",
        title: "روتين بسيط للبشرة المعرّضة للحبوب",
        excerpt: "3 خطوات أساسية بدون زحمة منتجات أو خلطات مجهولة.",
        content:
          "ابدأ بغسول لطيف، ثم علاج يحدده الطبيب حسب نوع الحبوب، واختم بمرطب وواقي شمس مناسبين. كثرة المنتجات لا تعني نتيجة أسرع، وقد تسبب تهيجًا يزيد المشكلة.",
        contentType: "reel",
        category: "حب الشباب",
        status: "published",
        campaignCode: "acne-routine",
        ctaLabel: "ابدأ خطة علاج مناسبة",
        publishedAt: J(le, -1).toISOString(),
        views: 742,
        likes: 61,
        saves: 48,
        shares: 17,
        helpful: 53,
        seriesTitle: "رحلة علاج حب الشباب",
        episodeNumber: 2,
        serviceId: "svc_derm",
        medicallyReviewed: !0,
        scenes: [
          {
            title: "روتين الحبوب مش لازم يبقى معقد",
            text: "3 خطوات فقط",
            icon: "sparkles",
          },
          {
            title: "غسول لطيف",
            text: "مرتين يوميًا بدون فرك عنيف",
            icon: "droplet",
          },
          { title: "علاج مناسب لحالتك", text: "مش وصفة صاحبك", icon: "shield" },
          {
            title: "ترطيب + واقي شمس",
            text: "لحماية حاجز البشرة والآثار",
            icon: "sun",
          },
          {
            title: "كل بشرة لها خطة",
            text: "احجز تقييمًا مع د. زياد",
            icon: "calendar",
          },
        ],
      },
      {
        id: "post_laser",
        slug: "laser-before-session",
        title: "قبل جلسة الليزر: 4 حاجات مهمة",
        excerpt: "تحضير بسيط يساعد على جلسة أكثر أمانًا وراحة.",
        content:
          "تجنب إزالة الشعر من الجذور قبل الجلسة، والتزم بتعليمات الطبيب بخصوص التعرض للشمس والمنتجات المقشرة، وأخبر الطبيب بأي أدوية تستخدمها. إعدادات الجهاز تختلف حسب لون البشرة والشعر.",
        contentType: "reel",
        category: "الليزر والتجميل",
        status: "published",
        campaignCode: "laser-prep",
        ctaLabel: "احجز استشارة ليزر",
        publishedAt: J(le, -3).toISOString(),
        views: 980,
        likes: 89,
        saves: 76,
        shares: 25,
        helpful: 82,
        seriesTitle: "دليل الليزر الآمن",
        episodeNumber: 1,
        serviceId: "svc_aesthetic",
        medicallyReviewed: !0,
        scenes: [
          {
            title: "عندك جلسة ليزر قريب؟",
            text: "خلي بالك من الأربع نقاط دول",
            icon: "sparkles",
          },
          {
            title: "ممنوع إزالة الشعر من الجذور",
            text: "استخدم الطريقة التي يحددها الطبيب",
            icon: "alert",
          },
          {
            title: "قلل التعرض للشمس",
            text: "واتبع تعليمات واقي الشمس",
            icon: "sun",
          },
          {
            title: "اذكر أدويتك ومنتجاتك",
            text: "خصوصًا المقشرات والعلاجات القوية",
            icon: "shield",
          },
          {
            title: "الأمان يبدأ من التقييم",
            text: "احجز استشارة في عيادة تاج",
            icon: "calendar",
          },
        ],
      },
      {
        id: "post_moisturizer",
        slug: "choose-moisturizer",
        title: "إزاي تختار مرطب مناسب لنوع بشرتك؟",
        excerpt: "المرطب المناسب يدعم حاجز البشرة بدون إحساس ثقيل أو تهيج.",
        content:
          "البشرة الدهنية قد تفضل تركيبة خفيفة غير مسببة لانسداد المسام، بينما الجافة تحتاج مكونات أكثر دعمًا للحاجز. البشرة الحساسة تستفيد من التركيبات البسيطة الخالية من العطور. لو في التهاب مستمر، الأفضل تقييم السبب أولًا.",
        contentType: "post",
        category: "العناية بالبشرة",
        status: "published",
        campaignCode: "moisturizer-post",
        ctaLabel: "اعرف احتياج بشرتك",
        publishedAt: J(le, -6).toISOString(),
        views: 650,
        likes: 43,
        saves: 51,
        shares: 12,
        helpful: 49,
        seriesTitle: "أساسيات البشرة",
        episodeNumber: 2,
        serviceId: "svc_checkup",
        medicallyReviewed: !0,
      },
    ];
  return {
    clinic: t,
    doctors: s,
    services: a,
    patients: i,
    appointments: r,
    visits: x,
    treatments: l,
    waitingList: p,
    followups: m,
    reviews: u,
    rewards: C,
    notifications: v,
    campaigns: g,
    media: D,
    contentPosts: _,
    contentQuestions: [],
    contentQuizzes: [
      {
        id: "quiz_skin",
        slug: "skin-routine-check",
        title: "هل روتين بشرتك محتاج مراجعة؟",
        description: "اختبار توعوي في أقل من دقيقة.",
        category: "البشرة",
        questions: [
          {
            text: "هل تشعر بتهيج أو حرقان متكرر بعد المنتجات؟",
            options: [
              { label: "نعم، كثيرًا", score: 2 },
              { label: "أحيانًا", score: 1 },
              { label: "لا", score: 0 },
            ],
          },
          {
            text: "هل تستخدم أكثر من مادة فعالة قوية في نفس الروتين؟",
            options: [
              { label: "نعم", score: 2 },
              { label: "لست متأكدًا", score: 1 },
              { label: "لا", score: 0 },
            ],
          },
          {
            text: "هل تستخدم واقي الشمس بانتظام؟",
            options: [
              { label: "نادرًا", score: 2 },
              { label: "أحيانًا", score: 1 },
              { label: "يوميًا", score: 0 },
            ],
          },
        ],
        serviceId: "svc_checkup",
        isActive: !0,
      },
      {
        id: "quiz_hair",
        slug: "hair-loss-check",
        title: "هل تساقط الشعر يحتاج كشفًا؟",
        description: "مؤشرات عامة تساعدك تعرف الخطوة المناسبة.",
        category: "الشعر",
        questions: [
          {
            text: "هل التساقط مستمر أكثر من 3 أشهر؟",
            options: [
              { label: "نعم", score: 2 },
              { label: "أقل من 3 أشهر", score: 1 },
              { label: "لا", score: 0 },
            ],
          },
          {
            text: "هل ظهرت فراغات أو مناطق محددة؟",
            options: [
              { label: "نعم", score: 2 },
              { label: "غير متأكد", score: 1 },
              { label: "لا", score: 0 },
            ],
          },
          {
            text: "هل توجد حكة شديدة أو قشور ملحوظة؟",
            options: [
              { label: "نعم", score: 2 },
              { label: "خفيفة", score: 1 },
              { label: "لا", score: 0 },
            ],
          },
        ],
        serviceId: "svc_bloodwork",
        isActive: !0,
      },
    ],
    patientContent: [],
    dayStatus: { doc_ziad: { runningLateMinutes: 0, patientsAhead: 0 } },
  };
}
const os = 9,
  ds = 17;
function Na(t, s) {
  const a = [],
    i = new Date(t);
  i.setHours(os, 0, 0, 0);
  const n = new Date(t);
  for (n.setHours(ds, 0, 0, 0); yt(i, s) <= n; )
    (a.push(new Date(i)), i.setMinutes(i.getMinutes() + 15));
  return a;
}
function ka(t, s, a, i) {
  return t < i && a < s;
}
function Be(t, s, a, i) {
  const n = yt(a, i);
  if (a < new Date() || a.getDay() === 0) return !1;
  const r = a.getHours() + a.getMinutes() / 60;
  return r < os || r + i / 60 > ds
    ? !1
    : !t.some(
        (x) =>
          x.doctorId === s &&
          x.status !== "cancelled" &&
          x.status !== "no_show" &&
          ka(a, n, new Date(x.startsAt), new Date(x.endsAt)),
      );
}
function wa({
  appointments: t,
  doctorId: s,
  durationMinutes: a,
  requestedStart: i,
  count: n = 3,
  searchDays: r = 10,
}) {
  const x = [];
  for (let l = 0; l <= r && x.length < n; l++) {
    const p = new Date(i);
    p.setDate(p.getDate() + l);
    const m = Na(p, a).filter((u) => (l === 0 ? u >= i : !0));
    for (const u of m) {
      if (x.length >= n) break;
      Be(t, s, u, a) && x.push(u);
    }
  }
  return x;
}
function _a(t, s, a = new Date()) {
  return t.filter(
    (i) =>
      i.doctorId === s &&
      Ze(i.startsAt, a) &&
      new Date(i.startsAt) < a &&
      ["scheduled", "confirmed", "waiting", "in_progress"].includes(i.status),
  ).length;
}
const xs = "https://dexeezznudtwaxqaustx.supabase.co",
  ms = "sb_publishable_isT5LDE4Z-KeBDxBjkzZfw_J7DdVeJq",
  Ca = !xs.includes("your-project") && !ms.includes("your-anon-key"),
  M = Ca ? Is(xs, ms) : null,
  Sa = () => !M;
function Ia(t) {
  console.info("[notification event]", t.eventType, t);
}
const Lt = "tag_dermatology_clinic_ar_v1",
  ps = o.createContext(null);
function Aa({ children: t }) {
  const s = Sa(),
    [a, i] = o.useState(() => {
      if (typeof window < "u") {
        const d = window.localStorage.getItem(Lt);
        if (d)
          try {
            return JSON.parse(d);
          } catch {}
      }
      return va();
    });
  (o.useEffect(() => {
    s &&
      typeof window < "u" &&
      window.localStorage.setItem(Lt, JSON.stringify(a));
  }, [s, a]),
    o.useEffect(() => {
      if (s || !M) return;
      let d = !0;
      const j = async () => {
        const [c, b, A, E, U, W] = await Promise.all([
          M.from("clinics").select("*").eq("slug", "tag").single(),
          M.from("doctors").select("*").eq("is_active", !0).order("created_at"),
          M.from("services")
            .select("*")
            .eq("is_active", !0)
            .order("created_at"),
          M.from("reviews")
            .select("*")
            .eq("is_public", !0)
            .order("created_at", { ascending: !1 }),
          M.from("content_posts")
            .select("*")
            .order("published_at", { ascending: !1 }),
          M.from("content_quizzes")
            .select("*")
            .eq("is_active", !0)
            .order("created_at"),
        ]);
        !d ||
          c.error ||
          b.error ||
          A.error ||
          i((K) => ({
            ...K,
            clinic: {
              id: c.data.id,
              name: c.data.name,
              slug: c.data.slug,
              timezone: c.data.timezone,
              phone: c.data.phone,
              address: c.data.address,
            },
            doctors: b.data.map((S) => ({
              id: S.id,
              fullName: S.full_name,
              title: S.title,
              specialties: S.specialties || [],
              qualifications: S.qualifications || [],
              yearsExperience: S.years_experience || 0,
              bio: S.bio || "",
              slotDurationMinutes: S.slot_duration_minutes,
              isActive: S.is_active,
            })),
            services: A.data.map((S) => ({
              id: S.id,
              name: S.name,
              description: S.description,
              priceCents: S.price_cents,
              durationMinutes: S.duration_minutes,
            })),
            reviews: (E.data || []).map((S) => ({
              id: S.id,
              patientId: S.patient_id,
              rating: S.rating,
              sentiment: S.sentiment,
              comment: S.comment,
              isPublic: S.is_public,
            })),
            contentPosts: (U.data || []).map((S) => ({
              id: S.id,
              slug: S.slug,
              title: S.title,
              excerpt: S.excerpt,
              content: S.content,
              contentType: S.content_type,
              category: S.category,
              status: S.status,
              campaignCode: S.campaign_code,
              ctaLabel: S.cta_label,
              publishedAt: S.published_at,
              scheduledFor: S.scheduled_for,
              views: S.views,
              likes: S.likes,
              saves: S.saves,
              shares: S.shares,
              helpful: S.helpful,
              createdAt: S.created_at,
              scenes: S.scenes || [],
              seriesTitle: S.series_title,
              episodeNumber: S.episode_number,
              serviceId: S.service_id,
              medicallyReviewed: S.medically_reviewed,
              reviewedAt: S.reviewed_at,
              sources: S.sources || [],
              platformVariants: S.platform_variants || {},
            })),
            contentQuizzes: (W.data || []).map((S) => ({
              id: S.id,
              slug: S.slug,
              title: S.title,
              description: S.description,
              category: S.category,
              questions: S.questions || [],
              serviceId: S.service_id,
              isActive: S.is_active,
              createdAt: S.created_at,
            })),
          }));
      };
      j();
      const y = M.channel("clinic-public-data")
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "services" },
          j,
        )
        .on(
          "postgres_changes",
          { event: "*", schema: "public", table: "doctors" },
          j,
        )
        .subscribe();
      return () => {
        ((d = !1), M.removeChannel(y));
      };
    }, [s]),
    o.useEffect(() => {
      if (s || !M) return;
      let d = !0;
      const j = async () => {
        const { data: E } = await M.auth.getSession();
        if (!E.session) return;
        const [U, W, K, S, te, Z, Oe, ye, me, Ce, bs, ys, vs] =
          await Promise.all([
            M.from("patients")
              .select("*")
              .order("created_at", { ascending: !1 }),
            M.from("appointments")
              .select("*")
              .order("starts_at", { ascending: !0 }),
            M.from("patient_visits")
              .select("*")
              .order("visit_date", { ascending: !1 }),
            M.from("waiting_list")
              .select("*")
              .order("created_at", { ascending: !1 }),
            M.from("followups")
              .select("*")
              .order("scheduled_for", { ascending: !0 }),
            M.from("patient_rewards")
              .select("*")
              .order("granted_at", { ascending: !1 }),
            M.from("notifications")
              .select("*")
              .order("created_at", { ascending: !1 }),
            M.from("clinic_day_status")
              .select("*")
              .eq("day", new Date().toISOString().slice(0, 10)),
            M.from("campaigns")
              .select("*")
              .order("created_at", { ascending: !1 }),
            M.from("before_after_media")
              .select("*")
              .order("taken_at", { ascending: !1 }),
            M.from("content_questions")
              .select("*")
              .order("created_at", { ascending: !1 }),
            M.from("patient_content")
              .select("*")
              .order("assigned_at", { ascending: !1 }),
            M.from("content_quizzes")
              .select("*")
              .order("created_at", { ascending: !1 }),
          ]);
        if (!d || U.error || W.error) return;
        const Ns = await Promise.all(
          (Ce.data || []).map(async (pe) => {
            const { data: f } = await M.storage
              .from("patient-progress")
              .createSignedUrl(pe.storage_path, 3600);
            return {
              id: pe.id,
              patientId: pe.patient_id,
              visitId: pe.visit_id,
              stage: pe.stage,
              storagePath: pe.storage_path,
              takenAt: pe.taken_at,
              url: (f == null ? void 0 : f.signedUrl) || null,
            };
          }),
        );
        i((pe) => ({
          ...pe,
          patients: U.data.map((f) => ({
            id: f.id,
            fullName: f.full_name,
            phone: f.phone,
            email: f.email,
            dateOfBirth: f.date_of_birth,
            gender: f.gender,
            allergies: f.allergies || [],
            chronicConditions: f.chronic_conditions || [],
            currentMedications: f.current_medications || [],
            notes: f.notes || "",
            loyaltyLevel: f.loyalty_level,
            totalVisits: f.total_visits,
            completedVisits: f.completed_visits,
            lastVisitAt: f.last_visit_at,
          })),
          appointments: W.data.map((f) => ({
            id: f.id,
            patientId: f.patient_id,
            doctorId: f.doctor_id,
            serviceId: f.service_id,
            startsAt: f.starts_at,
            endsAt: f.ends_at,
            status: f.status,
            notes: f.notes || "",
            cancellationReason: f.cancellation_reason,
            sourcePostId: f.source_post_id,
            campaignCode: f.campaign_code,
            createdAt: f.created_at,
          })),
          visits: (K.data || []).map((f) => ({
            id: f.id,
            patientId: f.patient_id,
            doctorId: f.doctor_id,
            serviceId: f.service_id,
            appointmentId: f.appointment_id,
            visitDate: f.visit_date,
            diagnosis: f.diagnosis || "",
            treatment: f.treatment || "",
            doctorNotes: f.doctor_notes || "",
            followUpDate: f.follow_up_date,
            status: f.status,
          })),
          waitingList: (S.data || []).map((f) => ({
            id: f.id,
            patientId: f.patient_id,
            serviceId: f.service_id,
            doctorId: f.doctor_id,
            preferredStart: f.preferred_start,
            preferredEnd: f.preferred_end,
            status: f.status,
            convertedAppointmentId: f.converted_appointment_id,
            createdAt: f.created_at,
          })),
          followups: (te.data || []).map((f) => ({
            id: f.id,
            patientId: f.patient_id,
            visitId: f.visit_id,
            kind: f.kind,
            status: f.status,
            scheduledFor: f.scheduled_for,
            response: f.response,
            flagged: f.flagged,
          })),
          rewards: (Z.data || []).map((f) => ({
            id: f.id,
            patientId: f.patient_id,
            milestoneVisits: f.milestone_visits,
            rewardDescription: f.reward_description,
            grantedAt: f.granted_at,
          })),
          notifications: (Oe.data || []).map((f) => ({
            id: f.id,
            patientId: f.patient_id,
            appointmentId: f.appointment_id,
            eventType: f.event_type,
            channel: f.channel,
            payload: f.payload,
            status: f.status,
            scheduledFor: f.scheduled_for,
            createdAt: f.created_at,
          })),
          dayStatus: Object.fromEntries(
            (ye.data || []).map((f) => [
              f.doctor_id,
              {
                runningLateMinutes: f.running_late_minutes,
                patientsAhead: f.patients_ahead,
              },
            ]),
          ),
          campaigns: (me.data || []).map((f) => ({
            id: f.id,
            name: f.name,
            eventType: f.event_type,
            audienceFilter: f.audience_filter,
            message: f.message,
            status: f.status,
            scheduledFor: f.scheduled_for,
            createdAt: f.created_at,
          })),
          media: Ns,
          contentQuestions: (bs.data || []).map((f) => ({
            id: f.id,
            question: f.question,
            category: f.category,
            status: f.status,
            occurrences: f.occurrences,
            createdAt: f.created_at,
          })),
          patientContent: (ys.data || []).map((f) => ({
            id: f.id,
            patientId: f.patient_id,
            postId: f.post_id,
            note: f.note,
            assignedAt: f.assigned_at,
            viewedAt: f.viewed_at,
          })),
          contentQuizzes: (vs.data || []).map((f) => ({
            id: f.id,
            slug: f.slug,
            title: f.title,
            description: f.description,
            category: f.category,
            questions: f.questions || [],
            serviceId: f.service_id,
            isActive: f.is_active,
            createdAt: f.created_at,
          })),
        }));
      };
      j();
      const y = () => j(),
        c = () => j();
      (window.addEventListener("clinic:staff-linked", y),
        window.addEventListener("clinic:staff-refresh", c));
      const { data: b } = M.auth.onAuthStateChange(() => setTimeout(j, 0)),
        A = M.channel("clinic-staff-data")
          .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "appointments" },
            j,
          )
          .on(
            "postgres_changes",
            { event: "*", schema: "public", table: "patients" },
            j,
          )
          .subscribe();
      return () => {
        ((d = !1),
          window.removeEventListener("clinic:staff-linked", y),
          window.removeEventListener("clinic:staff-refresh", c),
          b.subscription.unsubscribe(),
          M.removeChannel(A));
      };
    }, [s]));
  const n = o.useCallback((d) => {
      const j = {
        id: B("notif"),
        status: "pending",
        channel: "n8n_webhook",
        createdAt: new Date().toISOString(),
        ...d,
      };
      return (
        Ia(j),
        i((y) => ({
          ...y,
          notifications: [j, ...y.notifications].slice(0, 200),
        })),
        j
      );
    }, []),
    r = o.useCallback(
      (d, j, y) => Be(a.appointments, d, new Date(j), y),
      [a.appointments],
    ),
    x = o.useCallback(
      async (d, j, y, c = 3) => {
        if (!s && M) {
          const { data: b, error: A } = await M.rpc("suggest_available_slots", {
            p_doctor_id: d,
            p_requested_start: new Date(j).toISOString(),
            p_duration_minutes: y,
            p_count: c,
          });
          return A ? [] : (b || []).map((E) => new Date(E.slot_start));
        }
        return wa({
          appointments: a.appointments,
          doctorId: d,
          durationMinutes: y,
          requestedStart: new Date(j),
          count: c,
        });
      },
      [s, a.appointments],
    ),
    l = o.useCallback(
      (d) => {
        const j = a.patients.find((c) => c.phone === d.phone),
          y = j ? j.id : B("pat");
        return (
          i((c) => {
            if (c.patients.some((A) => A.id === y))
              return {
                ...c,
                patients: c.patients.map((A) =>
                  A.id === y ? { ...A, ...d, id: y } : A,
                ),
              };
            const b = {
              loyaltyLevel: "new",
              totalVisits: 0,
              completedVisits: 0,
              allergies: [],
              chronicConditions: [],
              currentMedications: [],
              notes: "",
              ...d,
              id: y,
            };
            return { ...c, patients: [...c.patients, b] };
          }),
          y
        );
      },
      [a.patients],
    ),
    p = o.useCallback(
      async ({
        fullName: d,
        phone: j,
        email: y,
        serviceId: c,
        doctorId: b,
        startsAt: A,
        notes: E,
        sourcePostId: U = null,
        campaignCode: W = null,
      }) => {
        const K = a.services.find((me) => me.id === c),
          S = (K == null ? void 0 : K.durationMinutes) ?? 30,
          te = new Date(A),
          Z = new Date(te.getTime() + S * 6e4);
        if (!s && M) {
          const { data: me, error: Ce } = await M.rpc("book_appointment", {
            p_clinic_id: a.clinic.id,
            p_full_name: d,
            p_phone: j,
            p_service_id: c,
            p_doctor_id: b,
            p_starts_at: te.toISOString(),
            p_email: y || null,
            p_notes: E || null,
          });
          return Ce
            ? {
                ok: !1,
                reason: Ce.message.includes("slot_unavailable")
                  ? "unavailable"
                  : "error",
                message: Ce.message,
              }
            : ((U || W) &&
                (await M.rpc("record_booking_source", {
                  p_appointment_id: me.id,
                  p_source_post_id: U,
                  p_campaign_code: W,
                })),
              { ok: !0, appointment: me });
        }
        if (!Be(a.appointments, b, te, S))
          return { ok: !1, reason: "unavailable" };
        const Oe = l({ fullName: d, phone: j, email: y }),
          ye = {
            id: B("appt"),
            patientId: Oe,
            doctorId: b,
            serviceId: c,
            startsAt: te.toISOString(),
            endsAt: Z.toISOString(),
            status: "scheduled",
            notes: E || "",
            createdAt: new Date().toISOString(),
            sourcePostId: U,
            campaignCode: W,
          };
        return (
          i((me) => ({ ...me, appointments: [...me.appointments, ye] })),
          n({
            eventType: "appointment_reminder_24h",
            appointmentId: ye.id,
            patientId: Oe,
            payload: { startsAt: ye.startsAt },
            scheduledFor: new Date(
              te.getTime() - 24 * 3600 * 1e3,
            ).toISOString(),
          }),
          { ok: !0, appointment: ye }
        );
      },
      [s, a.appointments, a.clinic.id, a.services, l, n],
    ),
    m = o.useCallback(
      ({
        fullName: d,
        phone: j,
        email: y,
        serviceId: c,
        doctorId: b,
        preferredStart: A,
      }) => {
        const E = l({ fullName: d, phone: j, email: y }),
          U = {
            id: B("wl"),
            patientId: E,
            serviceId: c,
            doctorId: b,
            preferredStart: A ? new Date(A).toISOString() : null,
            status: "open",
            createdAt: new Date().toISOString(),
          };
        return (
          i((W) => ({ ...W, waitingList: [U, ...W.waitingList] })),
          n({
            eventType: "waitlist_joined",
            patientId: E,
            payload: { serviceId: c, doctorId: b },
          }),
          U
        );
      },
      [l, n],
    ),
    u = o.useCallback(
      (d, { doctorId: j, startsAt: y }) => {
        const c = a.waitingList.find((K) => K.id === d);
        if (!c) return { ok: !1 };
        const b = a.services.find((K) => K.id === c.serviceId),
          A = (b == null ? void 0 : b.durationMinutes) ?? 30,
          E = new Date(y),
          U = new Date(E.getTime() + A * 6e4);
        if (!Be(a.appointments, j || c.doctorId, E, A))
          return { ok: !1, reason: "unavailable" };
        const W = {
          id: B("appt"),
          patientId: c.patientId,
          doctorId: j || c.doctorId,
          serviceId: c.serviceId,
          startsAt: E.toISOString(),
          endsAt: U.toISOString(),
          status: "scheduled",
          notes: "Converted from waiting list",
          createdAt: new Date().toISOString(),
        };
        return (
          i((K) => ({
            ...K,
            appointments: [...K.appointments, W],
            waitingList: K.waitingList.map((S) =>
              S.id === d
                ? { ...S, status: "converted", convertedAppointmentId: W.id }
                : S,
            ),
          })),
          n({
            eventType: "waitlist_slot_offered",
            patientId: c.patientId,
            appointmentId: W.id,
          }),
          { ok: !0, appointment: W }
        );
      },
      [a.waitingList, a.services, a.appointments, n],
    ),
    C = o.useCallback((d) => {
      i((j) => ({
        ...j,
        waitingList: j.waitingList.map((y) =>
          y.id === d ? { ...y, status: "cancelled" } : y,
        ),
      }));
    }, []),
    v = o.useCallback(
      async (d, j, y = {}) => {
        if (
          (i((c) => ({
            ...c,
            appointments: c.appointments.map((b) =>
              b.id === d ? { ...b, status: j, ...y } : b,
            ),
          })),
          !s && M)
        ) {
          const c = { status: j };
          (y.startedAt && (c.started_at = y.startedAt),
            y.completedAt && (c.completed_at = y.completedAt),
            y.cancelledAt && (c.cancelled_at = y.cancelledAt),
            y.cancellationReason !== void 0 &&
              (c.cancellation_reason = y.cancellationReason),
            await M.from("appointments").update(c).eq("id", d));
        }
      },
      [s],
    ),
    g = o.useCallback((d) => v(d, "confirmed"), [v]),
    D = o.useCallback(
      (d, j) => {
        v(d, "cancelled", {
          cancelledAt: new Date().toISOString(),
          cancellationReason: j || "",
        });
        const y = a.appointments.find((c) => c.id === d);
        y &&
          n({
            eventType: "cancellation_slot_reoffer",
            appointmentId: d,
            payload: { doctorId: y.doctorId, startsAt: y.startsAt },
          });
      },
      [v, a.appointments, n],
    ),
    _ = o.useCallback(
      (d) => v(d, "in_progress", { startedAt: new Date().toISOString() }),
      [v],
    ),
    T = o.useCallback((d) => v(d, "no_show"), [v]),
    z = [3, 5, 10],
    N = (d) =>
      d >= 10 ? "vip" : d >= 5 ? "gold" : d >= 3 ? "unlocked" : "new",
    O = o.useCallback(
      async (d, j) => {
        const y = a.appointments.find((b) => b.id === d);
        if (!y) return { ok: !1, message: "appointment_not_found" };
        if (!s && M) {
          const { data: b, error: A } = await M.rpc("complete_clinic_visit", {
            p_appointment_id: d,
            p_diagnosis: j.diagnosis || null,
            p_treatment: j.treatment || null,
            p_doctor_notes: j.notes || null,
            p_follow_up_date: j.followUpDate || null,
          });
          return A
            ? { ok: !1, message: A.message }
            : (window.dispatchEvent(new Event("clinic:staff-refresh")),
              { ok: !0, visit: b });
        }
        const c = {
          id: B("visit"),
          patientId: y.patientId,
          doctorId: y.doctorId,
          serviceId: y.serviceId,
          appointmentId: d,
          visitDate: new Date().toISOString(),
          diagnosis: j.diagnosis || "",
          treatment: j.treatment || "",
          doctorNotes: j.notes || "",
          followUpDate: j.followUpDate || null,
          status: "completed",
        };
        return (
          i((b) => {
            const A = b.patients.find((Z) => Z.id === y.patientId),
              E = ((A == null ? void 0 : A.totalVisits) || 0) + 1,
              U = ((A == null ? void 0 : A.completedVisits) || 0) + 1,
              W = z.find((Z) => Z === U),
              K = W
                ? [
                    ...b.rewards,
                    {
                      id: B("rw"),
                      patientId: y.patientId,
                      milestoneVisits: W,
                      rewardDescription:
                        W === 10
                          ? "15% off next visit + priority booking"
                          : W === 5
                            ? "10% off next visit"
                            : "Free consultation add-on",
                      grantedAt: new Date().toISOString(),
                    },
                  ]
                : b.rewards,
              S = {
                id: B("fu"),
                patientId: y.patientId,
                visitId: c.id,
                kind: "review",
                status: "pending",
                scheduledFor: new Date().toISOString(),
                response: null,
                flagged: !1,
              },
              te = c.followUpDate
                ? [
                    {
                      id: B("fu"),
                      patientId: y.patientId,
                      visitId: c.id,
                      kind: "clinical",
                      status: "pending",
                      scheduledFor: new Date(c.followUpDate).toISOString(),
                      response: null,
                      flagged: !1,
                    },
                  ]
                : [];
            return {
              ...b,
              appointments: b.appointments.map((Z) =>
                Z.id === d
                  ? {
                      ...Z,
                      status: "completed",
                      completedAt: new Date().toISOString(),
                    }
                  : Z,
              ),
              visits: [c, ...b.visits],
              patients: b.patients.map((Z) =>
                Z.id === y.patientId
                  ? {
                      ...Z,
                      totalVisits: E,
                      completedVisits: U,
                      lastVisitAt: c.visitDate,
                      loyaltyLevel: N(U),
                    }
                  : Z,
              ),
              rewards: K,
              followups: [S, ...te, ...b.followups],
            };
          }),
          n({
            eventType: "review_request",
            patientId: y.patientId,
            appointmentId: d,
          }),
          n({
            eventType: "clinical_followup",
            patientId: y.patientId,
            payload: { followUpDate: j.followUpDate || "بعد 7 أيام" },
            scheduledFor: j.followUpDate
              ? new Date(j.followUpDate).toISOString()
              : new Date(Date.now() + 7 * 864e5).toISOString(),
          }),
          { ok: !0, visit: c }
        );
      },
      [s, a.appointments, n],
    ),
    I = o.useCallback(
      async ({ name: d, message: j, scheduledFor: y, audience: c = "all" }) => {
        if (!s && M) {
          const { data: E, error: U } = await M.rpc(
            "schedule_clinic_campaign",
            {
              p_name: d,
              p_message: j,
              p_scheduled_for: new Date(y).toISOString(),
              p_audience: c,
            },
          );
          return U
            ? { ok: !1, message: U.message }
            : (window.dispatchEvent(new Event("clinic:staff-refresh")),
              { ok: !0, campaign: E });
        }
        const b = {
            id: B("campaign"),
            name: d,
            message: j,
            status: "scheduled",
            eventType: "seasonal_campaign",
            audienceFilter: { audience: c },
            scheduledFor: new Date(y).toISOString(),
            createdAt: new Date().toISOString(),
          },
          A =
            c === "loyal"
              ? a.patients.filter((E) => E.completedVisits >= 3)
              : a.patients;
        return (
          i((E) => ({ ...E, campaigns: [b, ...(E.campaigns || [])] })),
          A.forEach((E) =>
            n({
              eventType: "seasonal_campaign",
              patientId: E.id,
              payload: { campaignId: b.id, name: d, message: j },
              scheduledFor: b.scheduledFor,
            }),
          ),
          { ok: !0, campaign: b }
        );
      },
      [s, a.patients, n],
    ),
    h = o.useCallback(
      async (d) => {
        var c;
        const j = d.slug || `${d.contentType}-${Date.now()}`;
        if (!s && M) {
          const { data: b, error: A } = await M.from("content_posts")
            .insert({
              clinic_id: a.clinic.id,
              author_doctor_id: (c = a.doctors[0]) == null ? void 0 : c.id,
              slug: j,
              title: d.title,
              excerpt: d.excerpt,
              content: d.content,
              content_type: d.contentType,
              category: d.category,
              status: d.status,
              campaign_code: d.campaignCode || j,
              cta_label: d.ctaLabel || "احجز بخصوص هذا الموضوع",
              published_at:
                d.status === "published" ? new Date().toISOString() : null,
              service_id: d.serviceId || null,
              series_title: d.seriesTitle || null,
              episode_number: d.episodeNumber || null,
              scenes: d.scenes || [],
              medically_reviewed: !0,
              reviewed_at: new Date().toISOString(),
              sources: d.sources || [],
              platform_variants: d.platformVariants || {},
            })
            .select()
            .single();
          return A
            ? { ok: !1, message: A.message }
            : (i((E) => ({
                ...E,
                contentPosts: [
                  {
                    id: b.id,
                    slug: b.slug,
                    title: b.title,
                    excerpt: b.excerpt,
                    content: b.content,
                    contentType: b.content_type,
                    category: b.category,
                    status: b.status,
                    campaignCode: b.campaign_code,
                    ctaLabel: b.cta_label,
                    publishedAt: b.published_at,
                    scheduledFor: b.scheduled_for,
                    views: 0,
                    likes: 0,
                    saves: 0,
                    shares: 0,
                    helpful: 0,
                    createdAt: b.created_at,
                    scenes: b.scenes || [],
                    seriesTitle: b.series_title,
                    episodeNumber: b.episode_number,
                    serviceId: b.service_id,
                    medicallyReviewed: b.medically_reviewed,
                    reviewedAt: b.reviewed_at,
                    sources: b.sources || [],
                    platformVariants: b.platform_variants || {},
                  },
                  ...(E.contentPosts || []),
                ],
              })),
              { ok: !0, post: b });
        }
        const y = {
          id: B("post"),
          slug: j,
          ...d,
          campaignCode: d.campaignCode || j,
          ctaLabel: d.ctaLabel || "احجز بخصوص هذا الموضوع",
          publishedAt:
            d.status === "published" ? new Date().toISOString() : null,
          views: 0,
          likes: 0,
          saves: 0,
          shares: 0,
          helpful: 0,
          createdAt: new Date().toISOString(),
        };
        return (
          i((b) => ({ ...b, contentPosts: [y, ...(b.contentPosts || [])] })),
          { ok: !0, post: y }
        );
      },
      [s, a.clinic.id, a.doctors],
    ),
    R = o.useCallback(
      async (d, j, y) => {
        if (!s && M) {
          const { data: b, error: A } = await M.rpc(
            "track_content_interaction",
            { p_post_id: d, p_interaction_type: j, p_visitor_key: y },
          );
          return A
            ? { ok: !1 }
            : (i((E) => ({
                ...E,
                contentPosts: E.contentPosts.map((U) =>
                  U.id === d ? { ...U, ...b } : U,
                ),
              })),
              { ok: !0 });
        }
        const c =
          j === "like"
            ? "likes"
            : j === "save"
              ? "saves"
              : j === "share"
                ? "shares"
                : "helpful";
        return (
          i((b) => ({
            ...b,
            contentPosts: b.contentPosts.map((A) =>
              A.id === d ? { ...A, [c]: (A[c] || 0) + 1 } : A,
            ),
          })),
          { ok: !0 }
        );
      },
      [s],
    ),
    k = o.useCallback(
      async ({ question: d, category: j = "عام" }) => {
        if (!s && M) {
          const { error: c } = await M.rpc("submit_content_question", {
            p_question: d,
            p_category: j,
          });
          return { ok: !c };
        }
        const y = {
          id: B("question"),
          question: d,
          category: j,
          status: "new",
          occurrences: 1,
          createdAt: new Date().toISOString(),
        };
        return (
          i((c) => ({
            ...c,
            contentQuestions: [y, ...(c.contentQuestions || [])],
          })),
          { ok: !0 }
        );
      },
      [s],
    ),
    P = o.useCallback(
      async ({ patientId: d, postId: j, note: y = "" }) => {
        if (!s && M) {
          const { data: b, error: A } = await M.from("patient_content")
            .insert({
              clinic_id: a.clinic.id,
              patient_id: d,
              post_id: j,
              note: y,
            })
            .select()
            .single();
          return A
            ? { ok: !1, message: A.message }
            : (i((E) => ({
                ...E,
                patientContent: [
                  {
                    id: b.id,
                    patientId: d,
                    postId: j,
                    note: y,
                    assignedAt: b.assigned_at,
                  },
                  ...(E.patientContent || []),
                ],
              })),
              { ok: !0 });
        }
        const c = {
          id: B("assigned"),
          patientId: d,
          postId: j,
          note: y,
          assignedAt: new Date().toISOString(),
        };
        return (
          i((b) => ({
            ...b,
            patientContent: [c, ...(b.patientContent || [])],
          })),
          { ok: !0 }
        );
      },
      [s, a.clinic.id],
    ),
    F = o.useCallback(
      async (d) => {
        var c;
        const j = {
          clinic_id: a.clinic.id,
          slug: d.slug || `quiz-${Date.now()}`,
          title: d.title.trim(),
          description:
            ((c = d.description) == null ? void 0 : c.trim()) || null,
          category: d.category || "عام",
          questions: d.questions,
          service_id: d.serviceId || null,
          is_active: d.isActive,
          updated_at: new Date().toISOString(),
        };
        if (!s && M) {
          const b = d.id
              ? M.from("content_quizzes").update(j).eq("id", d.id)
              : M.from("content_quizzes").insert(j),
            { data: A, error: E } = await b.select().single();
          if (E) return { ok: !1, message: E.message };
          const U = {
            id: A.id,
            slug: A.slug,
            title: A.title,
            description: A.description,
            category: A.category,
            questions: A.questions || [],
            serviceId: A.service_id,
            isActive: A.is_active,
            createdAt: A.created_at,
          };
          return (
            i((W) => ({
              ...W,
              contentQuizzes: d.id
                ? W.contentQuizzes.map((K) => (K.id === d.id ? U : K))
                : [U, ...W.contentQuizzes],
            })),
            { ok: !0, quiz: U }
          );
        }
        const y = {
          ...d,
          id: d.id || B("quiz"),
          slug: j.slug,
          createdAt: d.createdAt || new Date().toISOString(),
        };
        return (
          i((b) => ({
            ...b,
            contentQuizzes: d.id
              ? b.contentQuizzes.map((A) => (A.id === d.id ? y : A))
              : [y, ...b.contentQuizzes],
          })),
          { ok: !0, quiz: y }
        );
      },
      [s, a.clinic.id],
    ),
    G = o.useCallback(
      async (d, j) => {
        if (!s && M) {
          const { error: y } = await M.from("content_quizzes")
            .update({ is_active: j })
            .eq("id", d);
          if (y) return { ok: !1, message: y.message };
        }
        return (
          i((y) => ({
            ...y,
            contentQuizzes: y.contentQuizzes.map((c) =>
              c.id === d ? { ...c, isActive: j } : c,
            ),
          })),
          { ok: !0 }
        );
      },
      [s],
    ),
    Y = o.useCallback(
      async (d) => {
        if (!s && M) {
          const { error: j } = await M.from("content_quizzes")
            .delete()
            .eq("id", d);
          if (j) return { ok: !1, message: j.message };
        }
        return (
          i((j) => ({
            ...j,
            contentQuizzes: j.contentQuizzes.filter((y) => y.id !== d),
          })),
          { ok: !0 }
        );
      },
      [s],
    ),
    ae = o.useCallback(
      (d) => {
        const j = { id: B("tx"), isActive: !0, ...d };
        return (
          i((y) => ({ ...y, treatments: [j, ...y.treatments] })),
          n({
            eventType: "treatment_reminder",
            patientId: d.patientId,
            payload: { medication: d.medication, schedule: d.reminderSchedule },
          }),
          j
        );
      },
      [n],
    ),
    ne = o.useCallback(
      async ({ patientId: d, visitId: j = null, stage: y, file: c }) => {
        var A;
        if (!c || !["before", "after"].includes(y))
          return { ok: !1, message: "invalid_file" };
        if (!s && M) {
          const E =
              ((A = c.name.split(".").pop()) == null
                ? void 0
                : A.toLowerCase()) || "jpg",
            U = `${a.clinic.id}/${d}/${crypto.randomUUID()}.${E}`,
            { error: W } = await M.storage
              .from("patient-progress")
              .upload(U, c, { contentType: c.type, upsert: !1 });
          if (W) return { ok: !1, message: W.message };
          const { data: K, error: S } = await M.from("before_after_media")
            .insert({
              clinic_id: a.clinic.id,
              patient_id: d,
              visit_id: j,
              stage: y,
              storage_path: U,
            })
            .select()
            .single();
          if (S)
            return (
              await M.storage.from("patient-progress").remove([U]),
              { ok: !1, message: S.message }
            );
          const { data: te } = await M.storage
            .from("patient-progress")
            .createSignedUrl(U, 3600);
          return (
            window.dispatchEvent(new Event("clinic:staff-refresh")),
            { ok: !0, media: { ...K, url: te == null ? void 0 : te.signedUrl } }
          );
        }
        const b = {
          id: B("media"),
          patientId: d,
          visitId: j,
          stage: y,
          storagePath: c.name,
          takenAt: new Date().toISOString(),
          url: URL.createObjectURL(c),
        };
        return (
          i((E) => ({ ...E, media: [b, ...(E.media || [])] })),
          { ok: !0, media: b }
        );
      },
      [s, a.clinic.id],
    ),
    ie = o.useCallback((d, j) => {
      i((y) => ({
        ...y,
        followups: y.followups.map((c) => {
          if (c.id !== d) return c;
          if (c.kind === "clinical") {
            const b = j === "same" || j === "worse";
            return {
              ...c,
              response: j,
              status: b ? "flagged" : "closed",
              flagged: b,
            };
          }
          return {
            ...c,
            response: j,
            status: j === "negative" ? "flagged" : "answered",
            flagged: j === "negative",
          };
        }),
      }));
    }, []),
    L = o.useCallback((d) => {
      i((j) => ({
        ...j,
        followups: j.followups.map((y) =>
          y.id === d ? { ...y, status: "closed" } : y,
        ),
      }));
    }, []),
    q = o.useCallback(
      (d, { rating: j, comment: y }) => {
        const c = j >= 4 ? "positive" : "negative",
          b = {
            id: B("rev"),
            patientId: d,
            rating: j,
            comment: y,
            sentiment: c,
            isPublic: c === "positive",
            createdAt: new Date().toISOString(),
          };
        return (
          i((A) => ({ ...A, reviews: [b, ...A.reviews] })),
          c === "negative" &&
            n({
              eventType: "negative_review_flagged",
              patientId: d,
              payload: { rating: j, comment: y },
            }),
          b
        );
      },
      [n],
    ),
    ee = o.useCallback((d, j) => {
      i((y) => ({
        ...y,
        dayStatus: { ...y.dayStatus, [d]: { ...y.dayStatus[d], ...j } },
      }));
    }, []),
    xe = o.useMemo(
      () => ({
        ...a,
        demo: s,
        checkAvailability: r,
        suggestNearestSlots: x,
        bookAppointment: p,
        joinWaitingList: m,
        convertWaitingListEntry: u,
        cancelWaitingListEntry: C,
        confirmAppointment: g,
        cancelAppointment: D,
        startVisit: _,
        markNoShow: T,
        completeVisit: O,
        scheduleSeasonalCampaign: I,
        saveContentPost: h,
        trackContentInteraction: R,
        submitContentQuestion: k,
        assignContentToPatient: P,
        saveQuiz: F,
        toggleQuiz: G,
        deleteQuiz: Y,
        saveTreatment: ae,
        uploadPatientMedia: ne,
        respondToFollowup: ie,
        closeFollowup: L,
        submitReview: q,
        setDoctorDayStatus: ee,
        countPatientsAheadToday: (d) => _a(a.appointments, d),
      }),
      [
        a,
        s,
        r,
        x,
        p,
        m,
        u,
        C,
        g,
        D,
        _,
        T,
        O,
        I,
        h,
        R,
        k,
        P,
        F,
        G,
        Y,
        ae,
        ne,
        ie,
        L,
        q,
        ee,
      ],
    );
  return e.jsx(ps.Provider, { value: xe, children: t });
}
function H() {
  const t = o.useContext(ps);
  if (!t) throw new Error("useClinicData must be used within DataProvider");
  return t;
}
const Ma = [
  { id: "home", label: "الرئيسية", icon: pt },
  { id: "services", label: "الخدمات", icon: Xe },
  { id: "about", label: "الأطباء", icon: jt },
  { id: "reviews", label: "آراء المرضى", icon: la },
];
function Da() {
  const { clinic: t } = H(),
    [s, a] = o.useState(!1),
    i = ({ mobile: n = !1 }) =>
      e.jsxs(e.Fragment, {
        children: [
          e.jsxs("div", {
            className: "space-y-1",
            children: [
              e.jsx("p", {
                className:
                  "mb-3 px-3 text-[11px] font-semibold tracking-[.12em] text-ink/35",
                children: "القائمة الرئيسية",
              }),
              Ma.map(({ id: r, label: x, icon: l }) =>
                e.jsxs(
                  "a",
                  {
                    href: r === "home" ? "/" : `/#${r}`,
                    onClick: () => a(!1),
                    className:
                      "flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-sm font-medium text-ink/65 transition hover:bg-primary-light hover:text-primary-dark",
                    children: [
                      e.jsx(l, { className: "h-[18px] w-[18px]" }),
                      " ",
                      x,
                    ],
                  },
                  r,
                ),
              ),
            ],
          }),
          e.jsx("div", { className: "my-5 border-t border-line" }),
          e.jsxs(Q, {
            to: "/magazine",
            onClick: () => a(!1),
            className:
              "mb-5 flex items-center gap-3 rounded-xl border border-primary/20 bg-primary/5 px-3 py-3 text-sm font-semibold text-primary-dark",
            children: [
              e.jsx(Ae, { className: "h-[18px] w-[18px]" }),
              " مجلة تاج الطبية",
            ],
          }),
          e.jsx("p", {
            className:
              "mb-3 px-3 text-[11px] font-semibold tracking-[.12em] text-ink/35",
            children: "الدخول إلى النظام",
          }),
          e.jsxs("div", {
            className: "space-y-2",
            children: [
              e.jsxs(Q, {
                to: "/dashboard",
                onClick: () => a(!1),
                className:
                  "flex items-center gap-3 rounded-xl bg-primary-light px-3 py-3 text-sm font-semibold text-primary-dark",
                children: [
                  e.jsx(ut, { className: "h-[18px] w-[18px]" }),
                  " لوحة الطبيب",
                ],
              }),
              e.jsxs(Q, {
                to: "/portal",
                onClick: () => a(!1),
                className:
                  "flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-medium text-ink/65 hover:bg-base",
                children: [
                  e.jsx(re, { className: "h-[18px] w-[18px]" }),
                  " بوابة المريض",
                ],
              }),
              e.jsxs(Q, {
                to: "/book",
                onClick: () => a(!1),
                className:
                  "flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark",
                children: [e.jsx(he, { className: "h-4 w-4" }), " احجز موعدًا"],
              }),
            ],
          }),
          !n &&
            e.jsx("p", {
              className: "mt-auto px-3 pt-8 text-xs leading-5 text-ink/40",
              children: "رعاية أفضل، حجز أسهل، وتجربة عيادة أكثر ذكاءً.",
            }),
        ],
      });
  return e.jsxs(e.Fragment, {
    children: [
      e.jsxs("aside", {
        className:
          "fixed inset-y-0 right-0 z-40 hidden w-72 flex-col border-l border-line bg-paper px-5 py-6 lg:flex",
        children: [
          e.jsxs(Q, {
            to: "/",
            className: "mb-9 flex items-center gap-3 px-2",
            children: [
              e.jsx("span", {
                className:
                  "flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-sm",
                children: e.jsx(dt, { className: "h-5 w-5" }),
              }),
              e.jsxs("div", {
                children: [
                  e.jsx("p", {
                    className:
                      "font-display text-lg font-bold leading-tight text-ink",
                    children: t.name,
                  }),
                  e.jsx("p", {
                    className:
                      "mt-0.5 text-[11px] tracking-[.12em] text-primary",
                    children: "رعاية متصلة",
                  }),
                ],
              }),
            ],
          }),
          e.jsx(i, {}),
        ],
      }),
      e.jsxs("header", {
        className:
          "sticky top-0 z-40 flex h-16 items-center justify-between border-b border-line bg-paper/95 px-4 backdrop-blur lg:hidden",
        children: [
          e.jsxs(Q, {
            to: "/",
            className: "flex items-center gap-2.5",
            children: [
              e.jsx("span", {
                className:
                  "flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-white",
                children: e.jsx(dt, { className: "h-4 w-4" }),
              }),
              e.jsx("span", {
                className: "font-display text-lg text-ink",
                children: t.name,
              }),
            ],
          }),
          e.jsx("button", {
            className: "rounded-lg border border-line p-2",
            onClick: () => a(!0),
            "aria-label": "فتح القائمة",
            children: e.jsx(na, { className: "h-5 w-5" }),
          }),
        ],
      }),
      s &&
        e.jsx("div", {
          className: "fixed inset-0 z-50 bg-ink/30 lg:hidden",
          onClick: () => a(!1),
          children: e.jsxs("aside", {
            className:
              "mr-auto flex h-full w-[84%] max-w-sm flex-col bg-paper p-5 shadow-2xl",
            onClick: (n) => n.stopPropagation(),
            children: [
              e.jsxs("div", {
                className: "mb-7 flex items-center justify-between",
                children: [
                  e.jsx("p", {
                    className: "font-display text-xl text-ink",
                    children: "القائمة",
                  }),
                  e.jsx("button", {
                    onClick: () => a(!1),
                    className: "rounded-lg border border-line p-2",
                    children: e.jsx(be, { className: "h-5 w-5" }),
                  }),
                ],
              }),
              e.jsx(i, { mobile: !0 }),
            ],
          }),
        }),
    ],
  });
}
function La() {
  const { clinic: t } = H();
  return e.jsx("footer", {
    className: "border-t border-line bg-base",
    children: e.jsx("div", {
      className: "mx-auto max-w-6xl px-5 py-10 text-sm text-ink/60",
      children: e.jsxs("div", {
        className: "flex flex-col justify-between gap-6 md:flex-row",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("p", {
                className: "font-display text-base text-ink",
                children: t.name,
              }),
              e.jsx("p", { className: "mt-1", children: t.address }),
              e.jsx("p", { children: t.phone }),
            ],
          }),
          e.jsxs("p", {
            className: "text-ink/40",
            children: [
              "© ",
              new Date().getFullYear(),
              " ",
              t.name,
              ". جميع الحقوق محفوظة.",
            ],
          }),
        ],
      }),
    }),
  });
}
const Oa = ["أقرب موعد", "الخدمات والأسعار", "مواعيد العمل"];
function $a() {
  const { services: t } = H(),
    [s, a] = o.useState(!1),
    [i, n] = o.useState(""),
    [r, x] = o.useState([
      {
        role: "assistant",
        text: "أهلًا بك 👋 أنا مساعد عيادة تاج. أقدر أساعدك في اختيار خدمة الجلدية أو الوصول لأقرب موعد.",
      },
    ]),
    l = (p) => {
      const m = p.trim();
      if (!m) return;
      let u =
        "أقدر أساعدك في المواعيد والخدمات والأسعار. لو لديك أعراض شديدة أو طارئة، تواصل فورًا مع خدمات الطوارئ.";
      (m.includes("موعد") || m.includes("حجز")
        ? (u =
            "ممتاز، يمكنك فتح الحجز الآن واختيار الخدمة والطبيب، وسيقترح النظام أقرب بدائل إذا كان الموعد مشغولًا.")
        : m.includes("خدمات") || m.includes("أسعار")
          ? (u = `لدينا ${t.length} خدمات متخصصة في الجلدية والشعر والتجميل والليزر. كل الأسعار والمدد ظاهرة قبل الحجز.`)
          : (m.includes("عمل") || m.includes("مواعيد العيادة")) &&
            (u =
              "العيادة تستقبل الحجوزات من السبت إلى الخميس، ويمكنك طلب موعد إلكترونيًا في أي وقت."),
        x((C) => [
          ...C,
          { role: "user", text: m },
          { role: "assistant", text: u },
        ]),
        n(""));
    };
  return e.jsxs("div", {
    className: "fixed bottom-5 left-5 z-50 sm:bottom-7 sm:left-7",
    children: [
      s
        ? e.jsxs("section", {
            "aria-label": "مساعد العيادة",
            className:
              "mb-3 flex h-[500px] max-h-[72vh] w-[calc(100vw-40px)] max-w-[370px] flex-col overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_24px_80px_rgba(0,0,0,.45)]",
            children: [
              e.jsxs("header", {
                className:
                  "flex items-center justify-between bg-gradient-to-l from-primary to-[#126f66] p-4 text-white",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center gap-3",
                    children: [
                      e.jsx("span", {
                        className:
                          "grid h-10 w-10 place-items-center rounded-xl bg-white/15",
                        children: e.jsx(Qs, { className: "h-5 w-5" }),
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "font-bold",
                            children: "مساعد تاج الذكي",
                          }),
                          e.jsxs("p", {
                            className:
                              "mt-0.5 flex items-center gap-1 text-[11px] text-white/70",
                            children: [
                              e.jsx("span", {
                                className:
                                  "h-1.5 w-1.5 rounded-full bg-emerald-200",
                              }),
                              " متاح الآن",
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsx("button", {
                    "aria-label": "إغلاق المساعد",
                    onClick: () => a(!1),
                    className: "rounded-lg p-2 hover:bg-white/10",
                    children: e.jsx(be, { className: "h-5 w-5" }),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "flex-1 space-y-3 overflow-y-auto bg-base/60 p-4",
                children: [
                  r.map((p, m) =>
                    e.jsx(
                      "p",
                      {
                        className: `max-w-[88%] rounded-xl px-3 py-2.5 text-sm leading-6 ${p.role === "assistant" ? "mr-auto border border-line bg-paper text-ink/75" : "ml-auto bg-primary text-white"}`,
                        children: p.text,
                      },
                      `${p.role}-${m}`,
                    ),
                  ),
                  e.jsx("div", {
                    className: "flex flex-wrap gap-2 pt-1",
                    children: Oa.map((p) =>
                      e.jsx(
                        "button",
                        {
                          onClick: () => l(p),
                          className:
                            "rounded-full border border-primary/30 bg-primary/5 px-3 py-1.5 text-xs text-primary-dark hover:bg-primary/10",
                          children: p,
                        },
                        p,
                      ),
                    ),
                  }),
                  r.some((p) => p.role === "user" && p.text.includes("موعد"))
                    ? e.jsxs(Q, {
                        to: "/book",
                        onClick: () => a(!1),
                        className:
                          "flex items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 text-sm font-bold text-base",
                        children: [
                          e.jsx(he, { className: "h-4 w-4" }),
                          " ابدأ الحجز الآن",
                        ],
                      })
                    : null,
                ],
              }),
              e.jsxs("form", {
                onSubmit: (p) => {
                  (p.preventDefault(), l(i));
                },
                className: "flex gap-2 border-t border-line bg-paper p-3",
                children: [
                  e.jsx("input", {
                    "aria-label": "اكتب رسالتك",
                    value: i,
                    onChange: (p) => n(p.target.value),
                    className: "input",
                    placeholder: "اسأل عن المواعيد أو الخدمات...",
                  }),
                  e.jsx("button", {
                    "aria-label": "إرسال",
                    className:
                      "grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-primary text-white",
                    children: e.jsx(ft, { className: "h-4 w-4" }),
                  }),
                ],
              }),
            ],
          })
        : null,
      e.jsxs("button", {
        onClick: () => a((p) => !p),
        className:
          "group flex items-center gap-3 rounded-full bg-primary px-4 py-3 text-white shadow-[0_14px_35px_rgba(31,184,153,.35)] transition hover:-translate-y-1 hover:bg-primary-dark",
        children: [
          e.jsxs("span", {
            className: "relative",
            children: [
              e.jsx(ia, { className: "h-6 w-6" }),
              e.jsx(de, {
                className: "absolute -right-2 -top-2 h-3.5 w-3.5 text-accent",
              }),
            ],
          }),
          e.jsx("span", {
            className: "text-sm font-bold",
            children: "اسأل مساعد العيادة",
          }),
        ],
      }),
    ],
  });
}
function Pa() {
  const t = mt(),
    { clinic: s } = H();
  return (
    o.useEffect(() => {
      if (!t.hash) return;
      const a = t.hash.slice(1);
      requestAnimationFrame(() => {
        var i;
        return (i = document.getElementById(a)) == null
          ? void 0
          : i.scrollIntoView({ behavior: "auto", block: "start" });
      });
    }, [t.pathname, t.hash]),
    e.jsxs("div", {
      className: "min-h-screen bg-base",
      children: [
        e.jsx(Da, {}),
        e.jsxs("div", {
          className: "flex min-h-screen flex-col lg:pr-72",
          children: [
            e.jsxs("header", {
              className:
                "hidden h-[72px] items-center justify-between border-b border-line bg-base/90 px-7 backdrop-blur lg:flex",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsxs("p", {
                      className: "text-sm font-semibold text-ink",
                      children: ["منصة ", s.name],
                    }),
                    e.jsx("p", {
                      className: "mt-0.5 text-xs text-ink/35",
                      children: "إدارة ذكية ومتكاملة للعيادة",
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className: "flex items-center gap-3",
                  children: [
                    e.jsxs("span", {
                      className:
                        "inline-flex items-center gap-2 rounded-pill border border-line bg-paper px-3 py-2 text-xs text-ink/60",
                      children: [
                        e.jsx(Kt, { className: "h-3.5 w-3.5 text-success" }),
                        " النظام يعمل",
                      ],
                    }),
                    e.jsxs(Q, {
                      to: "/dashboard",
                      className:
                        "inline-flex items-center gap-2 rounded-lg border border-line bg-paper px-3 py-2 text-xs font-semibold text-ink hover:border-primary/50",
                      children: [
                        e.jsx(ut, { className: "h-4 w-4 text-primary" }),
                        " لوحة الطبيب",
                      ],
                    }),
                    e.jsxs(Q, {
                      to: "/book",
                      className:
                        "inline-flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-white",
                      children: [
                        e.jsx(he, { className: "h-4 w-4" }),
                        " حجز جديد",
                      ],
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("main", { className: "flex-1", children: e.jsx(qt, {}) }),
            e.jsx(La, {}),
          ],
        }),
        e.jsx($a, {}),
      ],
    })
  );
}
const hs = o.createContext(null);
function Ta({ children: t }) {
  const [s, a] = o.useState(null),
    [i, n] = o.useState(null),
    [r, x] = o.useState(!0),
    l = o.useCallback(async (g) => {
      if (!(g != null && g.user) || !M) return (n(null), null);
      const { data: D } = await M.from("doctors")
        .select("id, clinic_id, full_name, title, role")
        .eq("auth_user_id", g.user.id)
        .maybeSingle();
      return (n(D || null), D || null);
    }, []);
  o.useEffect(() => {
    let g = !0;
    M.auth.getSession().then(async ({ data: _ }) => {
      g && (a(_.session), await l(_.session), g && x(!1));
    });
    const { data: D } = M.auth.onAuthStateChange((_, T) => {
      (a(T), setTimeout(() => l(T), 0));
    });
    return () => {
      ((g = !1), D.subscription.unsubscribe());
    };
  }, [l]);
  const p = o.useCallback(
      (g, D) => M.auth.signInWithPassword({ email: g, password: D }),
      [],
    ),
    m = o.useCallback(
      (g, D) =>
        M.auth.signUp({
          email: g,
          password: D,
          options: { emailRedirectTo: `${window.location.origin}/activate` },
        }),
      [],
    ),
    u = o.useCallback(
      async (g) => {
        const { data: D, error: _ } = await M.rpc("claim_staff_access", {
          p_code: g,
        });
        return (
          _ ||
            (await l(s),
            window.dispatchEvent(new Event("clinic:staff-linked"))),
          { data: D, error: _ }
        );
      },
      [l, s],
    ),
    C = o.useCallback(() => M.auth.signOut(), []),
    v = o.useMemo(
      () => ({
        session: s,
        staffDoctor: i,
        loading: r,
        signIn: p,
        signUp: m,
        claimAccess: u,
        signOut: C,
        refreshStaff: l,
      }),
      [s, i, r, p, m, u, C, l],
    );
  return e.jsx(hs.Provider, { value: v, children: t });
}
function Je() {
  const t = o.useContext(hs);
  if (!t) throw new Error("useAuth must be used inside AuthProvider");
  return t;
}
const us = [
  { to: "/dashboard", label: "نظرة عامة", icon: ut, end: !0 },
  { to: "/dashboard/appointments", label: "المواعيد", icon: Ie },
  { to: "/dashboard/patients", label: "المرضى", icon: rs },
  { to: "/dashboard/waiting-list", label: "قائمة الانتظار", icon: _e },
  { to: "/dashboard/automations", label: "المتابعة والخصومات", icon: de },
  { to: "/dashboard/clinical-updates", label: "الطب والأدوية", icon: Kt },
  { to: "/dashboard/content", label: "استوديو المحتوى", icon: ma },
  { to: "/dashboard/quizzes", label: "إدارة الاختبارات", icon: es },
  { to: "/dashboard/growth", label: "مركز النمو", icon: qe },
];
function Ea() {
  const { clinic: t, doctors: s, demo: a } = H(),
    { staffDoctor: i, signOut: n } = Je(),
    r = s.find((x) => x.id === (i == null ? void 0 : i.id)) || s[0];
  return e.jsxs("div", {
    className: "flex min-h-screen bg-base",
    children: [
      e.jsxs("aside", {
        className:
          "hidden w-64 shrink-0 flex-col border-l border-line bg-paper md:flex",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-2 border-b border-line px-6 py-5",
            children: [
              e.jsx("span", {
                className:
                  "flex h-8 w-8 items-center justify-center rounded-md bg-primary text-white",
                children: e.jsx(dt, { className: "h-4 w-4" }),
              }),
              e.jsx("span", {
                className: "font-display text-base text-ink",
                children: t.name,
              }),
            ],
          }),
          e.jsx("nav", {
            className: "flex-1 space-y-1 px-3 py-5",
            children: us.map(({ to: x, label: l, icon: p, end: m }) =>
              e.jsxs(
                Ht,
                {
                  to: x,
                  end: m,
                  className: ({ isActive: u }) =>
                    `flex items-center gap-3 rounded-md px-3 py-2.5 text-sm font-medium transition-colors ${u ? "bg-primary-light text-primary-dark" : "text-ink/60 hover:bg-line/40 hover:text-ink"}`,
                  children: [e.jsx(p, { className: "h-4 w-4" }), l],
                },
                x,
              ),
            ),
          }),
          e.jsxs("div", {
            className: "border-t border-line px-4 py-4",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-3 rounded-md px-2 py-2",
                children: [
                  e.jsx("div", {
                    className: "h-8 w-8 shrink-0 rounded-full bg-primary-light",
                  }),
                  e.jsxs("div", {
                    className: "min-w-0",
                    children: [
                      e.jsx("p", {
                        className: "truncate text-sm font-medium text-ink",
                        children: r.fullName,
                      }),
                      e.jsx("p", {
                        className: "truncate text-xs text-ink/50",
                        children: r.title,
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(Q, {
                to: "/",
                className:
                  "mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm text-ink/60 hover:bg-line/40 hover:text-ink",
                children: [
                  e.jsx(pt, { className: "h-4 w-4" }),
                  " العودة للموقع",
                ],
              }),
              e.jsxs("button", {
                onClick: n,
                className:
                  "mt-2 flex w-full items-center gap-2 rounded-md px-2 py-2 text-sm text-ink/50 hover:bg-line/40 hover:text-ink",
                children: [
                  e.jsx(ns, { className: "h-4 w-4" }),
                  " تسجيل الخروج",
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex-1",
        children: [
          e.jsx(za, {}),
          e.jsxs("main", {
            className: "mx-auto max-w-6xl px-5 py-6 md:py-8",
            children: [
              a &&
                e.jsx("div", {
                  className:
                    "mb-6 rounded-md border border-warning/30 bg-warning/5 px-3 py-2 text-xs text-warning",
                  children:
                    "نسخة تجريبية تعمل ببيانات وهمية — اربط Supabase لتشغيل بيانات العيادة الحقيقية.",
                }),
              e.jsx(qt, {}),
            ],
          }),
        ],
      }),
    ],
  });
}
function za() {
  return e.jsxs("nav", {
    className:
      "sticky top-0 z-30 flex items-center gap-1 overflow-x-auto border-b border-line bg-paper px-3 py-2 md:hidden",
    children: [
      e.jsxs(Q, {
        to: "/",
        className:
          "flex shrink-0 items-center gap-1.5 rounded-pill px-3 py-1.5 text-xs font-medium text-ink/60",
        children: [e.jsx(pt, { className: "h-3.5 w-3.5" }), " الموقع"],
      }),
      us.map(({ to: t, label: s, icon: a, end: i }) =>
        e.jsxs(
          Ht,
          {
            to: t,
            end: i,
            className: ({ isActive: n }) =>
              `flex shrink-0 items-center gap-1.5 rounded-pill px-3 py-1.5 text-xs font-medium ${n ? "bg-primary-light text-primary-dark" : "text-ink/60"}`,
            children: [e.jsx(a, { className: "h-3.5 w-3.5" }), " ", s],
          },
          t,
        ),
      ),
    ],
  });
}
function Ra() {
  const { clinic: t, doctors: s } = H(),
    a = s[0];
  return e.jsxs("section", {
    id: "home",
    className: "relative scroll-mt-16 overflow-hidden bg-base lg:scroll-mt-0",
    children: [
      e.jsx("div", {
        className:
          "pointer-events-none absolute right-0 top-0 h-[520px] w-[520px] rounded-full bg-primary/10 blur-3xl",
      }),
      e.jsxs("div", {
        className:
          "mx-auto grid max-w-7xl gap-10 px-5 py-8 lg:grid-cols-[1.02fr_.98fr] lg:items-center lg:px-7 lg:py-10",
        children: [
          e.jsxs("div", {
            children: [
              e.jsxs("p", {
                className:
                  "inline-flex items-center gap-2 rounded-pill border border-primary/25 bg-primary-light/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-[.14em] text-primary-dark",
                children: [
                  e.jsx(de, { className: "h-3.5 w-3.5" }),
                  " تجربة مريض مدعومة بالذكاء الاصطناعي",
                ],
              }),
              e.jsxs("h1", {
                className:
                  "mt-5 max-w-2xl font-display text-4xl font-bold leading-[1.08] text-ink sm:text-5xl lg:text-[54px]",
                children: [
                  "عيادة أذكى.",
                  e.jsx("br", {}),
                  e.jsx("span", {
                    className: "text-primary-dark",
                    children: "ورحلة مريض أكثر راحة.",
                  }),
                ],
              }),
              e.jsxs("p", {
                className: "mt-6 max-w-xl text-base leading-7 text-ink/65",
                children: [
                  "تجمع عيادة ",
                  t.name,
                  " بين الرعاية الجلدية المتخصصة ونظام حجز ذكي يجد أقرب موعد متاح — بدون انتظار أو اتصالات متكررة.",
                ],
              }),
              e.jsxs("div", {
                className: "mt-8 flex flex-wrap gap-3",
                children: [
                  e.jsxs(Q, {
                    to: "/book",
                    className:
                      "inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-white hover:bg-primary-dark",
                    children: [
                      e.jsx(he, { className: "h-4 w-4" }),
                      " احجز موعدًا",
                    ],
                  }),
                  e.jsxs("a", {
                    href: "#services",
                    className:
                      "inline-flex items-center gap-2 rounded-md border border-line px-5 py-3 text-sm font-medium text-ink hover:bg-line/30",
                    children: [
                      "عرض الخدمات ",
                      e.jsx(Hs, { className: "h-4 w-4 rotate-180" }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-ink/60",
                children: [
                  e.jsxs("span", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(oe, { className: "h-4 w-4 text-primary" }),
                      " مواعيد متاحة لحظيًا",
                    ],
                  }),
                  e.jsxs("span", {
                    className: "flex items-center gap-2",
                    children: [
                      e.jsx(re, { className: "h-4 w-4 text-primary" }),
                      " ملفات مرضى آمنة",
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "relative mx-auto w-full max-w-xl",
            children: [
              e.jsxs("div", {
                className:
                  "overflow-hidden rounded-[24px] border border-primary/25 bg-gradient-to-br from-[#16483f] via-[#0f302f] to-[#0a2228] p-6 shadow-[0_28px_70px_rgba(0,0,0,.35)] sm:p-8",
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between text-white",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className:
                              "text-xs font-semibold tracking-[.14em] text-white/55",
                            children: "موعدك القادم",
                          }),
                          e.jsx("p", {
                            className: "mt-2 font-display text-2xl font-bold",
                            children: "رعاية بدون انتظار",
                          }),
                        ],
                      }),
                      e.jsx("span", {
                        className:
                          "flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10",
                        children: e.jsx(Xe, { className: "h-6 w-6" }),
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className:
                      "mt-8 rounded-2xl border border-line bg-paper p-5 shadow-lg",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-start justify-between gap-4",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className: "text-xs font-semibold text-primary",
                                children: "تم التأكيد",
                              }),
                              e.jsx("h3", {
                                className: "mt-1 font-display text-xl text-ink",
                                children: "كشف جلدية",
                              }),
                              e.jsxs("p", {
                                className: "mt-1 text-sm text-ink/55",
                                children: ["مع ", a.fullName],
                              }),
                            ],
                          }),
                          e.jsx("span", {
                            className:
                              "rounded-xl bg-primary-light p-3 text-primary",
                            children: e.jsx(he, { className: "h-5 w-5" }),
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "mt-5 flex items-center justify-between rounded-xl bg-base px-4 py-3 text-sm",
                        children: [
                          e.jsxs("span", {
                            className:
                              "flex items-center gap-2 font-medium text-ink",
                            children: [
                              e.jsx(_e, { className: "h-4 w-4 text-primary" }),
                              " اليوم، 11:15 ص",
                            ],
                          }),
                          e.jsx("span", {
                            className: "text-ink/45",
                            children: "20 دقيقة",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("div", {
                    className: "mt-4 grid grid-cols-2 gap-3",
                    children: [
                      e.jsxs("div", {
                        className:
                          "rounded-2xl border border-white/10 bg-white/10 p-4 text-white",
                        children: [
                          e.jsx("p", {
                            className: "font-display text-2xl",
                            children: "4.9/5",
                          }),
                          e.jsx("p", {
                            className: "mt-1 text-xs text-white/60",
                            children: "تقييم المرضى",
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className:
                          "rounded-2xl border border-white/10 bg-white/10 p-4 text-white",
                        children: [
                          e.jsx("p", {
                            className: "font-display text-2xl",
                            children: "تخصص دقيق",
                          }),
                          e.jsx("p", {
                            className: "mt-1 text-xs text-white/60",
                            children: "جلدية وتجميل وليزر",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("div", {
                className:
                  "absolute -bottom-5 -left-4 hidden items-center gap-3 rounded-2xl border border-line bg-paper px-4 py-3 shadow-lg sm:flex",
                children: [
                  e.jsx("span", {
                    className:
                      "flex h-9 w-9 items-center justify-center rounded-full bg-primary-light text-primary",
                    children: e.jsx(oe, { className: "h-5 w-5" }),
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-sm font-semibold text-ink",
                        children: "تم تأكيد الحجز",
                      }),
                      e.jsx("p", {
                        className: "text-xs text-ink/50",
                        children: "فورًا وبدون مكالمة هاتفية",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Va() {
  const { doctors: t, patients: s, reviews: a } = H(),
    i = a.length
      ? (a.reduce((x, l) => x + l.rating, 0) / a.length).toFixed(1)
      : "—",
    n = t.reduce((x, l) => x + l.yearsExperience, 0),
    r = [
      {
        label: "مريض تمت رعايته",
        value: `+${(s.length * 340).toLocaleString("ar-EG")}`,
      },
      { label: "رعاية متخصصة", value: "جلدية وتجميل" },
      { label: "متوسط تقييم المرضى", value: `${i} / 5` },
      { label: "زيارة ناجحة هذا العام", value: "+2,180" },
    ];
  return e.jsx("section", {
    className: "bg-base",
    children: e.jsx("div", {
      className:
        "mx-auto grid max-w-7xl grid-cols-2 gap-4 px-5 pb-10 md:grid-cols-4 lg:px-7",
      children: r.map((x) =>
        e.jsxs(
          "div",
          {
            className:
              "rounded-card border border-line bg-paper p-5 shadow-[0_10px_30px_rgba(0,0,0,.12)]",
            children: [
              e.jsx("p", {
                className: "font-display text-2xl font-bold text-ink",
                children: x.value,
              }),
              e.jsx("p", {
                className: "mt-1 text-sm text-ink/60",
                children: x.label,
              }),
            ],
          },
          x.label,
        ),
      ),
    }),
  });
}
function $({ children: t, className: s = "", padded: a = !0 }) {
  return e.jsx("div", {
    className: `rounded-card border border-line bg-paper shadow-[0_12px_32px_rgba(0,0,0,.14)] transition hover:-translate-y-0.5 hover:border-primary/35 ${a ? "p-5" : ""} ${s}`,
    children: t,
  });
}
function Fa() {
  const { services: t } = H();
  return e.jsx("section", {
    id: "services",
    className: "scroll-mt-16 bg-base lg:scroll-mt-0",
    children: e.jsxs("div", {
      className: "mx-auto max-w-7xl px-5 py-12 lg:px-7",
      children: [
        e.jsxs("div", {
          className: "max-w-lg",
          children: [
            e.jsx("p", {
              className: "text-xs font-semibold tracking-[.14em] text-primary",
              children: "خدمات العيادة",
            }),
            e.jsx("h2", {
              className: "mt-2 font-display text-3xl font-bold text-ink",
              children: "رعاية تناسب وقتك واحتياجاتك",
            }),
            e.jsx("p", {
              className: "mt-2 text-ink/60",
              children: "أسعار ومدد واضحة لتعرف كل التفاصيل قبل الحجز.",
            }),
          ],
        }),
        e.jsx("div", {
          className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
          children: t
            .filter((s) => s.isActive !== !1)
            .map((s) =>
              e.jsxs(
                $,
                {
                  className: "flex flex-col justify-between",
                  children: [
                    e.jsxs("div", {
                      children: [
                        e.jsx("h3", {
                          className: "font-display text-lg text-ink",
                          children: s.name,
                        }),
                        e.jsx("p", {
                          className: "mt-2 text-sm text-ink/60",
                          children: s.description,
                        }),
                      ],
                    }),
                    e.jsxs("div", {
                      className:
                        "mt-6 flex items-center justify-between border-t border-line pt-4",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("p", {
                              className: "font-display text-lg text-ink",
                              children: fe(s.priceCents),
                            }),
                            e.jsxs("p", {
                              className:
                                "flex items-center gap-1 text-xs text-ink/50",
                              children: [
                                e.jsx(Ks, { className: "h-3 w-3" }),
                                " ",
                                s.durationMinutes,
                                " دقيقة",
                              ],
                            }),
                          ],
                        }),
                        e.jsx(Q, {
                          to: `/book?service=${s.id}`,
                          className:
                            "rounded-md bg-primary px-3 py-2 text-xs font-medium text-white hover:bg-primary-dark",
                          children: "احجز",
                        }),
                      ],
                    }),
                  ],
                },
                s.id,
              ),
            ),
        }),
      ],
    }),
  });
}
function Ba() {
  const { doctors: t } = H();
  return e.jsx("section", {
    id: "about",
    className: "scroll-mt-16 bg-base lg:scroll-mt-0",
    children: e.jsxs("div", {
      className: "mx-auto max-w-7xl px-5 py-12 lg:px-7",
      children: [
        e.jsx("p", {
          className: "text-xs font-semibold tracking-[.14em] text-primary",
          children: "طبيب العيادة",
        }),
        e.jsx("h2", {
          className: "mt-2 font-display text-3xl font-bold text-ink",
          children: "رعاية جلدية متخصصة تهتم بكل تفاصيل حالتك",
        }),
        e.jsx("div", {
          className: "mt-10 grid gap-6",
          children: t.map((s) =>
            e.jsxs(
              $,
              {
                className: "flex gap-5",
                children: [
                  e.jsx("div", {
                    className:
                      "h-20 w-20 shrink-0 rounded-full bg-primary-light",
                  }),
                  e.jsxs("div", {
                    children: [
                      e.jsx("h3", {
                        className: "font-display text-lg text-ink",
                        children: s.fullName,
                      }),
                      e.jsx("p", {
                        className: "text-sm text-primary",
                        children: s.title,
                      }),
                      e.jsx("p", {
                        className: "mt-2 text-sm text-ink/70",
                        children: s.bio,
                      }),
                      e.jsxs("div", {
                        className:
                          "mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs text-ink/60",
                        children: [
                          s.yearsExperience > 0
                            ? e.jsxs("span", {
                                className: "flex items-center gap-1",
                                children: [
                                  e.jsx(Xe, { className: "h-3.5 w-3.5" }),
                                  " خبرة ",
                                  s.yearsExperience,
                                  " سنة",
                                ],
                              })
                            : null,
                          s.qualifications[0]
                            ? e.jsxs("span", {
                                className: "flex items-center gap-1",
                                children: [
                                  e.jsx(ea, { className: "h-3.5 w-3.5" }),
                                  " ",
                                  s.qualifications[0],
                                ],
                              })
                            : null,
                        ],
                      }),
                      e.jsx("div", {
                        className: "mt-3 flex flex-wrap gap-1.5",
                        children: s.specialties.map((a) =>
                          e.jsx(
                            "span",
                            {
                              className:
                                "rounded-pill bg-primary-light px-2 py-0.5 text-xs text-primary-dark",
                              children: a,
                            },
                            a,
                          ),
                        ),
                      }),
                    ],
                  }),
                ],
              },
              s.id,
            ),
          ),
        }),
      ],
    }),
  });
}
function Ua() {
  const { reviews: t, patients: s } = H(),
    a = t.filter((n) => n.isPublic),
    i = (n) => {
      var r;
      return (
        ((r = s.find((x) => x.id === n)) == null ? void 0 : r.fullName) ||
        "Patient"
      );
    };
  return e.jsx("section", {
    id: "reviews",
    className: "scroll-mt-16 bg-base lg:scroll-mt-0",
    children: e.jsxs("div", {
      className: "mx-auto max-w-7xl px-5 py-12 lg:px-7",
      children: [
        e.jsx("p", {
          className: "text-xs font-semibold tracking-[.14em] text-primary",
          children: "ثقة المرضى",
        }),
        e.jsx("h2", {
          className: "mt-2 font-display text-3xl font-bold text-ink",
          children: "ماذا يقول مرضانا؟",
        }),
        e.jsx("div", {
          className: "mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
          children: a.map((n) =>
            e.jsxs(
              $,
              {
                children: [
                  e.jsx("div", {
                    className: "flex gap-0.5 text-accent",
                    children: Array.from({ length: 5 }).map((r, x) =>
                      e.jsx(
                        pa,
                        {
                          className: "h-4 w-4",
                          fill: x < n.rating ? "currentColor" : "none",
                        },
                        x,
                      ),
                    ),
                  }),
                  e.jsxs("p", {
                    className: "mt-3 text-sm text-ink/80",
                    children: ["“", n.comment, "”"],
                  }),
                  e.jsxs("p", {
                    className: "mt-3 text-sm font-medium text-ink/60",
                    children: ["— ", i(n.patientId)],
                  }),
                ],
              },
              n.id,
            ),
          ),
        }),
      ],
    }),
  });
}
function qa() {
  return e.jsxs(e.Fragment, {
    children: [
      e.jsx(Ra, {}),
      e.jsx(Va, {}),
      e.jsx(Fa, {}),
      e.jsx(Ba, {}),
      e.jsx(Ua, {}),
    ],
  });
}
const Ha = {
  primary: "bg-primary text-white hover:bg-primary-dark",
  accent: "bg-accent text-white hover:brightness-95",
  ghost: "bg-transparent text-ink hover:bg-line/40 border border-line",
  danger:
    "bg-transparent text-danger border border-danger/40 hover:bg-danger/5",
  subtle: "bg-line/40 text-ink hover:bg-line/60",
};
function V({ variant: t = "primary", className: s = "", children: a, ...i }) {
  return e.jsx("button", {
    className: `inline-flex items-center justify-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors disabled:cursor-not-allowed disabled:opacity-50 ${Ha[t]} ${s}`,
    ...i,
    children: a,
  });
}
const Ot =
  typeof window < "u"
    ? window.SpeechRecognition || window.webkitSpeechRecognition
    : null;
function kt({ onResult: t, className: s = "" }) {
  const [a, i] = o.useState(!1),
    n = o.useRef(null),
    r = !!Ot;
  o.useEffect(() => {
    if (!r) return;
    const l = new Ot();
    return (
      (l.continuous = !1),
      (l.interimResults = !1),
      (l.lang = "ar-EG"),
      (l.onresult = (p) => {
        const m = Array.from(p.results)
          .map((u) => u[0].transcript)
          .join(" ");
        t(m);
      }),
      (l.onend = () => i(!1)),
      (l.onerror = () => i(!1)),
      (n.current = l),
      () => l.stop()
    );
  }, [r, t]);
  const x = () => {
    !r ||
      !n.current ||
      (a ? (n.current.stop(), i(!1)) : (n.current.start(), i(!0)));
  };
  return e.jsx("button", {
    type: "button",
    onClick: x,
    disabled: !r,
    title: r
      ? "إملاء صوتي بالعربية"
      : "التسجيل الصوتي غير مدعوم في هذا المتصفح",
    className: `inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-colors ${a ? "border-accent bg-accent-light text-accent" : "border-line text-ink/50 hover:bg-line/30"} disabled:cursor-not-allowed disabled:opacity-40 ${s}`,
    children: r
      ? e.jsx(ca, { className: "h-4 w-4" })
      : e.jsx(ra, { className: "h-4 w-4" }),
  });
}
const $t = {
    fullName: "",
    phone: "",
    email: "",
    serviceId: "",
    doctorId: "",
    date: "",
    time: "",
    notes: "",
  },
  Qa = [
    { id: 1, label: "الخدمة والطبيب", icon: Xe },
    { id: 2, label: "الموعد المناسب", icon: Ie },
    { id: 3, label: "بيانات المريض", icon: jt },
  ];
function Wa() {
  const {
      services: t,
      doctors: s,
      contentPosts: a = [],
      bookAppointment: i,
      joinWaitingList: n,
      suggestNearestSlots: r,
    } = H(),
    [x] = ws(),
    [l, p] = o.useState(() => {
      var L;
      return {
        ...$t,
        serviceId: x.get("service") || "",
        doctorId:
          (s.filter((q) => q.isActive).length === 1 &&
            ((L = s.find((q) => q.isActive)) == null ? void 0 : L.id)) ||
          "",
      };
    }),
    [m, u] = o.useState(1),
    [C, v] = o.useState(null),
    [g, D] = o.useState(null),
    [_, T] = o.useState(!1),
    [z, N] = o.useState(""),
    O = t.find((L) => L.id === l.serviceId),
    I = s.find((L) => L.id === l.doctorId),
    h = a.find((L) => L.slug === x.get("post")),
    R =
      x.get("campaign") ||
      (x.get("ref") ? `ref:${x.get("ref")}` : null) ||
      (h == null ? void 0 : h.campaignCode) ||
      null,
    k = o.useMemo(() => s.filter((L) => L.isActive), [s]),
    P = o.useMemo(
      () => (!l.date || !l.time ? null : new Date(`${l.date}T${l.time}`)),
      [l.date, l.time],
    ),
    F = (L) => (q) => {
      (N(""), v(null), p((ee) => ({ ...ee, [L]: q.target.value })));
    },
    G = () => {
      if (m === 1 && (!l.serviceId || !l.doctorId))
        return N("اختر الخدمة والطبيب أولًا للمتابعة.");
      if (m === 2 && !P) return N("اختر التاريخ والوقت المناسبين للمتابعة.");
      (N(""), u((L) => Math.min(3, L + 1)));
    },
    Y = async (L) => {
      if ((L.preventDefault(), N(""), !l.fullName || !l.phone || !P))
        return N("يرجى إدخال الاسم ورقم الهاتف لإتمام الحجز.");
      const q = await i({
        fullName: l.fullName,
        phone: l.phone,
        email: l.email,
        serviceId: l.serviceId,
        doctorId: l.doctorId,
        startsAt: P.toISOString(),
        notes: l.notes,
        sourcePostId: (h == null ? void 0 : h.id) || null,
        campaignCode: R,
      });
      if (q.ok) {
        (D(q.appointment), v(null));
        return;
      }
      if (q.reason === "error") {
        N("تعذر إتمام الحجز الآن. يرجى المحاولة مرة أخرى بعد قليل.");
        return;
      }
      const ee = await r(
        l.doctorId,
        P,
        (O == null ? void 0 : O.durationMinutes) || 30,
        3,
      );
      v(ee);
    },
    ae = async (L) => {
      const q = await i({
        fullName: l.fullName,
        phone: l.phone,
        email: l.email,
        serviceId: l.serviceId,
        doctorId: l.doctorId,
        startsAt: L.toISOString(),
        notes: l.notes,
        sourcePostId: (h == null ? void 0 : h.id) || null,
        campaignCode: R,
      });
      q.ok && (D(q.appointment), v(null));
    },
    ne = () => {
      (n({
        fullName: l.fullName,
        phone: l.phone,
        email: l.email,
        serviceId: l.serviceId,
        doctorId: l.doctorId,
        preferredStart: P,
      }),
        T(!0));
    },
    ie = () => {
      (D(null), T(!1), v(null), u(1), p($t));
    };
  return g
    ? e.jsx(Pt, {
        portalCode: g.portalCode,
        title: "تم تأكيد حجزك",
        text: `${l.fullName}، تم تأكيد موعد ${O == null ? void 0 : O.name} في ${ce(g.startsAt)}.`,
        onReset: ie,
      })
    : _
      ? e.jsx(Pt, {
          waitlist: !0,
          title: "تمت إضافتك إلى قائمة الانتظار",
          text: `سنتواصل معك فور توفر موعد قريب مع ${I == null ? void 0 : I.fullName}.`,
          onReset: ie,
        })
      : e.jsxs("div", {
          className: "mx-auto max-w-6xl",
          children: [
            e.jsx("div", {
              className:
                "mb-7 grid grid-cols-3 overflow-hidden rounded-card border border-line bg-paper/70",
              children: Qa.map(({ id: L, label: q, icon: ee }) => {
                const xe = m === L,
                  d = m > L;
                return e.jsxs(
                  "button",
                  {
                    type: "button",
                    onClick: () => d && u(L),
                    className: `flex items-center justify-center gap-2 border-l border-line px-2 py-4 text-xs transition last:border-l-0 sm:text-sm ${xe ? "bg-primary/10 font-bold text-primary-dark" : d ? "text-ink" : "text-ink/35"}`,
                    children: [
                      e.jsx("span", {
                        className: `grid h-7 w-7 place-items-center rounded-full ${xe || d ? "bg-primary text-white" : "bg-line text-ink/40"}`,
                        children: d
                          ? e.jsx(Ge, { className: "h-4 w-4" })
                          : e.jsx(ee, { className: "h-4 w-4" }),
                      }),
                      e.jsx("span", {
                        className: "hidden sm:inline",
                        children: q,
                      }),
                    ],
                  },
                  L,
                );
              }),
            }),
            e.jsxs("div", {
              className: "grid gap-6 lg:grid-cols-[1fr_320px]",
              children: [
                e.jsx($, {
                  className: "min-h-[430px]",
                  padded: !1,
                  children: e.jsxs("form", {
                    onSubmit: Y,
                    className: "p-6 sm:p-8",
                    children: [
                      m === 1 &&
                        e.jsxs("div", {
                          children: [
                            e.jsx(tt, { children: "الخطوة الأولى" }),
                            e.jsx("h2", {
                              className: "mt-2 text-2xl font-bold text-ink",
                              children: "اختر نوع الرعاية والطبيب",
                            }),
                            e.jsx("p", {
                              className: "mt-2 text-sm text-ink/55",
                              children:
                                "كل خدمة موضح معها السعر والمدة قبل تأكيد الحجز.",
                            }),
                            e.jsx("div", {
                              className: "mt-7 grid gap-3 sm:grid-cols-2",
                              children: t.map((L) =>
                                e.jsxs(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () =>
                                      p((q) => ({ ...q, serviceId: L.id })),
                                    className: `rounded-xl border p-4 text-right transition ${l.serviceId === L.id ? "border-primary bg-primary/10 shadow-[0_0_0_1px_rgba(31,184,153,.25)]" : "border-line bg-base/40 hover:border-primary/50"}`,
                                    children: [
                                      e.jsx("span", {
                                        className: "block font-bold text-ink",
                                        children: L.name,
                                      }),
                                      e.jsx("span", {
                                        className:
                                          "mt-1 block text-xs leading-5 text-ink/50",
                                        children: L.description,
                                      }),
                                      e.jsxs("span", {
                                        className:
                                          "mt-3 flex items-center justify-between text-xs text-ink/70",
                                        children: [
                                          e.jsx("b", {
                                            className: "text-accent",
                                            children: fe(L.priceCents),
                                          }),
                                          e.jsxs("span", {
                                            children: [
                                              L.durationMinutes,
                                              " دقيقة",
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  L.id,
                                ),
                              ),
                            }),
                            e.jsx("div", {
                              className: "mt-6 grid gap-3 sm:grid-cols-2",
                              children: k.map((L) =>
                                e.jsxs(
                                  "button",
                                  {
                                    type: "button",
                                    onClick: () =>
                                      p((q) => ({ ...q, doctorId: L.id })),
                                    className: `flex items-center gap-3 rounded-xl border p-4 text-right transition ${l.doctorId === L.id ? "border-primary bg-primary/10" : "border-line bg-base/40 hover:border-primary/50"}`,
                                    children: [
                                      e.jsx("span", {
                                        className:
                                          "grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary/15 text-primary-dark",
                                        children: e.jsx(jt, {
                                          className: "h-5 w-5",
                                        }),
                                      }),
                                      e.jsxs("span", {
                                        children: [
                                          e.jsx("b", {
                                            className: "block text-sm text-ink",
                                            children: L.fullName,
                                          }),
                                          e.jsx("small", {
                                            className: "mt-1 block text-ink/50",
                                            children: L.title,
                                          }),
                                        ],
                                      }),
                                    ],
                                  },
                                  L.id,
                                ),
                              ),
                            }),
                          ],
                        }),
                      m === 2 &&
                        e.jsxs("div", {
                          children: [
                            e.jsx(tt, { children: "الخطوة الثانية" }),
                            e.jsx("h2", {
                              className: "mt-2 text-2xl font-bold text-ink",
                              children: "اختر الموعد المناسب",
                            }),
                            e.jsx("p", {
                              className: "mt-2 text-sm text-ink/55",
                              children:
                                "سيبحث النظام تلقائيًا عن أقرب بدائل إذا كان الموعد محجوزًا.",
                            }),
                            e.jsxs("div", {
                              className: "mt-8 grid gap-5 sm:grid-cols-2",
                              children: [
                                e.jsx(ve, {
                                  label: "التاريخ",
                                  children: e.jsx("input", {
                                    type: "date",
                                    value: l.date,
                                    onChange: F("date"),
                                    className: "input h-12",
                                    min: new Date().toISOString().slice(0, 10),
                                  }),
                                }),
                                e.jsx(ve, {
                                  label: "الوقت",
                                  children: e.jsx("input", {
                                    type: "time",
                                    value: l.time,
                                    onChange: F("time"),
                                    className: "input h-12",
                                  }),
                                }),
                              ],
                            }),
                            e.jsxs("div", {
                              className:
                                "mt-6 rounded-xl border border-primary/20 bg-primary/5 p-4 text-sm text-ink/65",
                              children: [
                                e.jsx(_e, {
                                  className: "ml-2 inline h-4 w-4 text-primary",
                                }),
                                " متوسط وقت الانتظار أقل من 12 دقيقة، وستصلك رسالة إذا تأخر الطبيب.",
                              ],
                            }),
                          ],
                        }),
                      m === 3 &&
                        e.jsxs("div", {
                          children: [
                            e.jsx(tt, { children: "الخطوة الأخيرة" }),
                            e.jsx("h2", {
                              className: "mt-2 text-2xl font-bold text-ink",
                              children: "أدخل بيانات التواصل",
                            }),
                            e.jsx("p", {
                              className: "mt-2 text-sm text-ink/55",
                              children:
                                "بياناتك محفوظة بأمان وتُستخدم لتأكيد الموعد فقط.",
                            }),
                            e.jsxs("div", {
                              className: "mt-7 grid gap-4 sm:grid-cols-2",
                              children: [
                                e.jsx(ve, {
                                  label: "الاسم بالكامل",
                                  children: e.jsx("input", {
                                    value: l.fullName,
                                    onChange: F("fullName"),
                                    className: "input h-12",
                                    placeholder: "اكتب اسمك",
                                  }),
                                }),
                                e.jsx(ve, {
                                  label: "رقم الهاتف",
                                  children: e.jsx("input", {
                                    value: l.phone,
                                    onChange: F("phone"),
                                    className: "input h-12",
                                    placeholder: "01xxxxxxxxx",
                                    inputMode: "tel",
                                  }),
                                }),
                              ],
                            }),
                            e.jsx("div", {
                              className: "mt-4",
                              children: e.jsx(ve, {
                                label: "البريد الإلكتروني (اختياري)",
                                children: e.jsx("input", {
                                  value: l.email,
                                  onChange: F("email"),
                                  type: "email",
                                  className: "input h-12",
                                  placeholder: "name@example.com",
                                }),
                              }),
                            }),
                            e.jsx("div", {
                              className: "mt-4",
                              children: e.jsx(ve, {
                                label: "ملاحظات للطبيب (اختياري)",
                                children: e.jsxs("div", {
                                  className: "flex items-start gap-2",
                                  children: [
                                    e.jsx("textarea", {
                                      value: l.notes,
                                      onChange: F("notes"),
                                      rows: 3,
                                      className: "input",
                                      placeholder:
                                        "اكتب سبب الزيارة أو استخدم التسجيل الصوتي",
                                    }),
                                    e.jsx(kt, {
                                      onResult: (L) =>
                                        p((q) => ({
                                          ...q,
                                          notes: q.notes
                                            ? `${q.notes} ${L}`
                                            : L,
                                        })),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      z
                        ? e.jsx("p", {
                            className:
                              "mt-5 rounded-lg border border-danger/30 bg-danger/5 px-3 py-2 text-sm text-danger",
                            children: z,
                          })
                        : null,
                      e.jsxs("div", {
                        className:
                          "mt-8 flex items-center justify-between gap-3 border-t border-line pt-5",
                        children: [
                          m > 1
                            ? e.jsx(V, {
                                type: "button",
                                variant: "ghost",
                                onClick: () => {
                                  (N(""), u((L) => L - 1));
                                },
                                children: "السابق",
                              })
                            : e.jsx("span", {}),
                          m < 3
                            ? e.jsx(V, {
                                type: "button",
                                onClick: G,
                                children: "التالي",
                              })
                            : e.jsx(V, {
                                type: "submit",
                                children: "تأكيد الحجز",
                              }),
                        ],
                      }),
                      C
                        ? e.jsxs("div", {
                            className:
                              "mt-5 rounded-xl border border-warning/30 bg-warning/5 p-4",
                            children: [
                              e.jsx("p", {
                                className: "font-bold text-ink",
                                children: "الموعد المطلوب غير متاح",
                              }),
                              e.jsx("p", {
                                className: "mt-1 text-sm text-ink/60",
                                children: "اختر أحد أقرب ثلاثة مواعيد:",
                              }),
                              e.jsx("div", {
                                className: "mt-3 grid gap-2",
                                children: C.map((L) =>
                                  e.jsx(
                                    "button",
                                    {
                                      type: "button",
                                      onClick: () => ae(L),
                                      className:
                                        "rounded-lg border border-line bg-paper px-3 py-2 text-sm text-ink hover:border-primary",
                                      children: ce(L),
                                    },
                                    L.toISOString(),
                                  ),
                                ),
                              }),
                              e.jsx(V, {
                                type: "button",
                                variant: "ghost",
                                className: "mt-3 w-full",
                                onClick: ne,
                                children: "لا يناسبني — أضفني لقائمة الانتظار",
                              }),
                            ],
                          })
                        : null,
                    ],
                  }),
                }),
                e.jsxs("aside", {
                  className:
                    "h-fit rounded-card border border-line bg-gradient-to-b from-primary/15 to-paper p-6 lg:sticky lg:top-6",
                  children: [
                    e.jsx("p", {
                      className:
                        "text-xs font-bold uppercase tracking-wider text-primary-dark",
                      children: "ملخص الحجز",
                    }),
                    h &&
                      e.jsxs("p", {
                        className:
                          "mt-2 rounded-lg bg-accent/10 px-3 py-2 text-xs text-accent",
                        children: ["جئت من محتوى: ", h.title],
                      }),
                    e.jsx("h3", {
                      className: "mt-2 text-xl font-bold text-ink",
                      children: "موعدك في لمحة",
                    }),
                    e.jsxs("div", {
                      className: "mt-6 space-y-4 text-sm",
                      children: [
                        e.jsx($e, {
                          label: "الخدمة",
                          value: O == null ? void 0 : O.name,
                        }),
                        e.jsx($e, {
                          label: "الطبيب",
                          value: I == null ? void 0 : I.fullName,
                        }),
                        e.jsx($e, { label: "الموعد", value: P ? ce(P) : null }),
                        e.jsx($e, {
                          label: "المدة",
                          value: O ? `${O.durationMinutes} دقيقة` : null,
                        }),
                      ],
                    }),
                    O
                      ? e.jsxs("div", {
                          className:
                            "mt-6 flex items-center justify-between border-t border-line pt-5",
                          children: [
                            e.jsx("span", {
                              className: "text-sm text-ink/50",
                              children: "الإجمالي",
                            }),
                            e.jsx("b", {
                              className: "text-lg text-accent",
                              children: fe(O.priceCents),
                            }),
                          ],
                        })
                      : null,
                    e.jsxs("p", {
                      className:
                        "mt-6 flex gap-2 text-xs leading-5 text-ink/45",
                      children: [
                        e.jsx(oe, {
                          className: "mt-0.5 h-4 w-4 shrink-0 text-primary",
                        }),
                        " يمكنك تعديل أو إلغاء الموعد قبل موعده بسهولة.",
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
}
function tt({ children: t }) {
  return e.jsx("p", {
    className: "text-xs font-bold text-primary-dark",
    children: t,
  });
}
function ve({ label: t, children: s }) {
  return e.jsxs("label", {
    className: "block",
    children: [
      e.jsx("span", {
        className: "mb-2 block text-xs font-bold text-ink/60",
        children: t,
      }),
      s,
    ],
  });
}
function $e({ label: t, value: s }) {
  return e.jsxs("div", {
    className:
      "flex items-start justify-between gap-3 border-b border-line/70 pb-3",
    children: [
      e.jsx("span", { className: "text-ink/40", children: t }),
      e.jsx("b", {
        className: "max-w-[180px] text-left text-ink",
        children: s || "لم يُحدد بعد",
      }),
    ],
  });
}
function Pt({
  title: t,
  text: s,
  onReset: a,
  waitlist: i = !1,
  portalCode: n,
}) {
  const r = i ? _e : oe;
  return e.jsxs($, {
    className: "mx-auto max-w-lg py-10 text-center",
    children: [
      e.jsx("span", {
        className:
          "mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary/15",
        children: e.jsx(r, { className: "h-8 w-8 text-primary" }),
      }),
      e.jsx("h3", {
        className: "mt-5 text-2xl font-bold text-ink",
        children: t,
      }),
      e.jsx("p", {
        className: "mx-auto mt-3 max-w-md text-sm leading-7 text-ink/65",
        children: s,
      }),
      i
        ? null
        : e.jsx("p", {
            className: "mt-2 text-xs text-ink/40",
            children: "سيتم إرسال تذكير قبل الموعد بـ24 ساعة.",
          }),
      n &&
        e.jsxs("div", {
          className:
            "mx-auto mt-6 max-w-sm rounded-xl border border-primary/25 bg-primary/5 p-4",
          children: [
            e.jsxs("p", {
              className:
                "flex items-center justify-center gap-2 text-xs font-bold text-primary-dark",
              children: [
                e.jsx(ht, { className: "h-4 w-4" }),
                " كود بوابة المريض — يظهر الآن فقط",
              ],
            }),
            e.jsxs("div", {
              className: "mt-3 flex items-center gap-2",
              children: [
                e.jsx("code", {
                  dir: "ltr",
                  className:
                    "flex-1 rounded-lg border border-line bg-paper px-3 py-3 font-bold tracking-wider text-ink",
                  children: n,
                }),
                e.jsx("button", {
                  type: "button",
                  "aria-label": "نسخ الكود",
                  className:
                    "grid h-11 w-11 place-items-center rounded-lg border border-line bg-paper text-primary-dark",
                  onClick: () => {
                    var x;
                    return (x = navigator.clipboard) == null
                      ? void 0
                      : x.writeText(n);
                  },
                  children: e.jsx(Xs, { className: "h-4 w-4" }),
                }),
              ],
            }),
            e.jsx("p", {
              className: "mt-3 text-xs leading-5 text-ink/50",
              children:
                "احتفظ به مع رقم هاتفك لفتح العلاج والتنبيهات والمتابعة.",
            }),
            e.jsx(Q, {
              to: "/portal",
              className:
                "mt-3 inline-flex text-sm font-bold text-primary-dark underline",
              children: "فتح بوابة المريض",
            }),
          ],
        }),
      e.jsx(V, { className: "mt-7", onClick: a, children: "حجز موعد آخر" }),
    ],
  });
}
function Ga() {
  return e.jsxs("section", {
    className: "mx-auto max-w-7xl px-5 py-12 sm:py-16",
    children: [
      e.jsxs("div", {
        className: "mx-auto mb-10 max-w-2xl text-center",
        children: [
          e.jsx("p", {
            className: "mb-3 text-xs font-bold text-primary-dark",
            children: "حجز سريع وآمن",
          }),
          e.jsx("h1", {
            className: "font-display text-3xl font-bold text-ink sm:text-4xl",
            children: "موعدك الطبي في أقل من دقيقة",
          }),
          e.jsx("p", {
            className: "mt-3 text-ink/60",
            children:
              "ثلاث خطوات بسيطة، تأكيد فوري، وأقرب بدائل تلقائية إذا كان الموعد مشغولًا.",
          }),
        ],
      }),
      e.jsx(Wa, {}),
    ],
  });
}
const Pe = "tag_patient_portal_session",
  Ka = {
    scheduled: "مجدول",
    confirmed: "مؤكد",
    cancelled: "ملغي",
    waiting: "في الانتظار",
    sent: "بانتظار ردك",
    flagged: "قيد مراجعة الطبيب",
    closed: "تمت المتابعة",
  },
  Xa = {
    appointment_reminder_24h: "تذكير بالموعد",
    clinical_followup: "متابعة بعد الزيارة",
    loyalty_reward: "مكافأة جديدة",
    review_request: "رأيك يهمنا",
    seasonal_campaign: "رسالة من عيادة تاج",
  },
  st = (t) =>
    new Intl.DateTimeFormat("ar-EG", {
      dateStyle: "medium",
      timeStyle: "short",
    }).format(new Date(t));
function Ya() {
  const [t, s] = o.useState({ phone: "", code: "" }),
    [a, i] = o.useState(null),
    [n, r] = o.useState(!1),
    [x, l] = o.useState(""),
    [p, m] = o.useState(""),
    u = async (h, R = !0) => {
      if (!M) return l("الاتصال بقاعدة البيانات غير متاح الآن.");
      (r(!0), l(""));
      const { data: k, error: P } = await M.rpc("patient_portal_snapshot", {
        p_phone: h.phone.trim(),
        p_code: h.code.trim().toUpperCase(),
      });
      if ((r(!1), P))
        return l(
          "رقم الهاتف أو كود الدخول غير صحيح. راجع البيانات وحاول مرة أخرى.",
        );
      const F = { phone: h.phone.trim(), code: h.code.trim().toUpperCase() };
      (s(F), i(k), R && sessionStorage.setItem(Pe, JSON.stringify(F)));
    };
  o.useEffect(() => {
    try {
      const h = JSON.parse(sessionStorage.getItem(Pe));
      h != null && h.phone && h != null && h.code && u(h, !1);
    } catch {
      sessionStorage.removeItem(Pe);
    }
  }, []);
  const C = () => {
      (sessionStorage.removeItem(Pe),
        i(null),
        s({ phone: "", code: "" }),
        l(""));
    },
    v = async (h, R, k = null) => {
      (m(`${h}:${R}`), l(""));
      const { error: P } = await M.rpc("patient_portal_action", {
        p_phone: t.phone,
        p_code: t.code,
        p_action: h,
        p_target_id: R,
        p_value: k,
      });
      (P
        ? l("تعذر تنفيذ الطلب الآن. حاول مرة أخرى أو تواصل مع العيادة.")
        : await u(t, !1),
        m(""));
    };
  if (!a)
    return e.jsxs("section", {
      className:
        "mx-auto grid min-h-[76vh] max-w-5xl items-center gap-7 px-5 py-12 lg:grid-cols-[.9fr_1.1fr]",
      children: [
        e.jsxs("div", {
          children: [
            e.jsxs("p", {
              className:
                "flex items-center gap-2 text-sm font-bold text-primary-dark",
              children: [
                e.jsx(re, { className: "h-5 w-5" }),
                " بوابة خاصة ومشفرة",
              ],
            }),
            e.jsxs("h1", {
              className:
                "mt-4 font-display text-4xl font-bold leading-tight text-ink sm:text-5xl",
              children: [
                "كل تفاصيل رعايتك",
                e.jsx("br", {}),
                e.jsx("span", {
                  className: "text-primary",
                  children: "في مكان واحد.",
                }),
              ],
            }),
            e.jsx("p", {
              className: "mt-5 max-w-lg text-sm leading-7 text-ink/60",
              children:
                "تابع موعدك وخطة العلاج، رد على متابعة الدكتور، واحتفظ بالنصائح المناسبة لحالتك. لا يمكن فتح بياناتك برقم الهاتف وحده.",
            }),
            e.jsxs("div", {
              className: "mt-7 grid grid-cols-2 gap-3 text-sm text-ink/70",
              children: [
                e.jsx(Te, { icon: Le, text: "العلاج والتعليمات" }),
                e.jsx(Te, { icon: Ie, text: "المواعيد القادمة" }),
                e.jsx(Te, { icon: et, text: "التنبيهات والمتابعة" }),
                e.jsx(Te, { icon: je, text: "المحتوى المحفوظ" }),
              ],
            }),
          ],
        }),
        e.jsxs($, {
          className: "border-primary/20 bg-paper/95 p-7 sm:p-9",
          children: [
            e.jsx("span", {
              className:
                "grid h-14 w-14 place-items-center rounded-2xl bg-primary/15 text-primary",
              children: e.jsx(ht, { className: "h-6 w-6" }),
            }),
            e.jsx("h2", {
              className: "mt-5 text-2xl font-bold text-ink",
              children: "دخول المريض",
            }),
            e.jsx("p", {
              className: "mt-2 text-sm leading-6 text-ink/55",
              children: "استخدم رقم الهاتف وكود البوابة الذي ظهر بعد الحجز.",
            }),
            e.jsxs("form", {
              onSubmit: (h) => {
                (h.preventDefault(), u(t));
              },
              className: "mt-7 space-y-4",
              children: [
                e.jsxs("label", {
                  className: "block",
                  children: [
                    e.jsx("span", {
                      className: "mb-2 block text-xs font-bold text-ink/60",
                      children: "رقم الهاتف",
                    }),
                    e.jsx("input", {
                      className: "input h-12",
                      inputMode: "tel",
                      placeholder: "01xxxxxxxxx",
                      value: t.phone,
                      onChange: (h) =>
                        s((R) => ({ ...R, phone: h.target.value })),
                      required: !0,
                    }),
                  ],
                }),
                e.jsxs("label", {
                  className: "block",
                  children: [
                    e.jsx("span", {
                      className: "mb-2 block text-xs font-bold text-ink/60",
                      children: "كود الدخول الخاص",
                    }),
                    e.jsx("input", {
                      className:
                        "input h-12 font-mono uppercase tracking-wider",
                      autoCapitalize: "characters",
                      placeholder: "TAG-••••••••••••",
                      value: t.code,
                      onChange: (h) =>
                        s((R) => ({ ...R, code: h.target.value })),
                      required: !0,
                    }),
                  ],
                }),
                x &&
                  e.jsx("p", {
                    className:
                      "rounded-lg border border-danger/25 bg-danger/5 px-3 py-2 text-sm text-danger",
                    children: x,
                  }),
                e.jsx(V, {
                  className: "h-12 w-full",
                  disabled: n,
                  children: n ? "جاري فتح حسابك..." : "فتح بوابتي",
                }),
              ],
            }),
            e.jsxs("div", {
              className:
                "mt-6 rounded-xl border border-dashed border-primary/30 bg-primary/5 p-4 text-sm",
              children: [
                e.jsx("p", {
                  className: "font-bold text-ink",
                  children: "جرّب الحساب التجريبي",
                }),
                e.jsxs("p", {
                  className: "mt-2 text-ink/60",
                  children: [
                    "الهاتف: ",
                    e.jsx("b", {
                      dir: "ltr",
                      className: "text-ink",
                      children: "01000000001",
                    }),
                  ],
                }),
                e.jsxs("p", {
                  className: "mt-1 text-ink/60",
                  children: [
                    "الكود: ",
                    e.jsx("b", {
                      dir: "ltr",
                      className: "font-mono text-ink",
                      children: "TAG-DEMO-2026",
                    }),
                  ],
                }),
                e.jsx("button", {
                  type: "button",
                  className:
                    "mt-3 text-xs font-bold text-primary-dark underline",
                  onClick: () =>
                    u({ phone: "01000000001", code: "TAG-DEMO-2026" }),
                  children: "الدخول بالحساب التجريبي",
                }),
              ],
            }),
          ],
        }),
      ],
    });
  const {
    patient: g,
    appointments: D = [],
    treatments: _ = [],
    followups: T = [],
    rewards: z = [],
    notifications: N = [],
    assignedContent: O = [],
    savedPosts: I = [],
  } = a;
  return e.jsxs("section", {
    className: "mx-auto max-w-7xl px-5 py-9",
    children: [
      e.jsxs("header", {
        className:
          "flex flex-wrap items-center justify-between gap-4 rounded-card border border-line bg-gradient-to-l from-primary/15 to-paper p-6",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("p", {
                className: "text-xs font-bold text-primary-dark",
                children: "بوابة مريض عيادة تاج",
              }),
              e.jsxs("h1", {
                className: "mt-1 text-3xl font-bold text-ink",
                children: ["أهلًا، ", g.fullName],
              }),
              e.jsx("p", {
                className: "mt-2 text-sm text-ink/55",
                children: "د. زياد محمد يتابع معك خطوات رحلة العلاج.",
              }),
            ],
          }),
          e.jsxs("div", {
            className: "flex gap-2",
            children: [
              e.jsx(Q, {
                to: "/book",
                className:
                  "inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-white",
                children: "حجز موعد",
              }),
              e.jsxs(V, {
                variant: "ghost",
                onClick: C,
                children: [e.jsx(ns, { className: "h-4 w-4" }), " خروج"],
              }),
            ],
          }),
        ],
      }),
      x &&
        e.jsx("p", {
          className:
            "mt-4 rounded-lg border border-danger/25 bg-danger/5 px-4 py-3 text-sm text-danger",
          children: x,
        }),
      e.jsxs("div", {
        className: "mt-5 grid gap-4 sm:grid-cols-3",
        children: [
          e.jsx(at, {
            icon: Ie,
            label: "المواعيد القادمة",
            value: D.filter((h) => h.status !== "cancelled").length,
          }),
          e.jsx(at, {
            icon: St,
            label: "الزيارات المكتملة",
            value: g.completedVisits,
          }),
          e.jsx(at, {
            icon: Ct,
            label: "المكافآت المتاحة",
            value: z.filter((h) => h.status === "available").length,
          }),
        ],
      }),
      e.jsxs("div", {
        className: "mt-6 grid gap-6 lg:grid-cols-2",
        children: [
          e.jsx(ge, {
            icon: Ie,
            title: "مواعيدي",
            empty: "لا توجد مواعيد قادمة.",
            children: D.map((h) =>
              e.jsxs(
                "article",
                {
                  className: "rounded-xl border border-line bg-base/40 p-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-start justify-between gap-3",
                      children: [
                        e.jsxs("div", {
                          children: [
                            e.jsx("b", {
                              className: "text-ink",
                              children: h.serviceName,
                            }),
                            e.jsxs("p", {
                              className: "mt-1 text-xs text-ink/50",
                              children: [h.doctorName, " · ", st(h.startsAt)],
                            }),
                          ],
                        }),
                        e.jsx(Tt, { children: Ka[h.status] || h.status }),
                      ],
                    }),
                    ["scheduled", "confirmed"].includes(h.status) &&
                    new Date(h.startsAt) > new Date()
                      ? e.jsx("button", {
                          disabled: p === `cancel_appointment:${h.id}`,
                          onClick: () => v("cancel_appointment", h.id),
                          className:
                            "mt-4 text-xs font-bold text-danger hover:underline",
                          children: "إلغاء الموعد",
                        })
                      : null,
                  ],
                },
                h.id,
              ),
            ),
          }),
          e.jsx(ge, {
            icon: Le,
            title: "خطة العلاج",
            empty: "لا توجد علاجات نشطة حاليًا.",
            children: _.map((h) =>
              e.jsxs(
                "article",
                {
                  className: "rounded-xl border border-line bg-base/40 p-4",
                  children: [
                    e.jsx("b", {
                      className: "text-ink",
                      children: h.medication,
                    }),
                    e.jsx("p", {
                      dir: "auto",
                      className:
                        "mt-2 min-w-0 whitespace-pre-wrap break-words text-sm leading-7 text-ink/60",
                      children: h.instructions,
                    }),
                    h.reminderSchedule &&
                      e.jsxs("p", {
                        className:
                          "mt-3 flex items-center gap-2 text-xs font-bold text-primary-dark",
                        children: [
                          e.jsx(et, { className: "h-4 w-4" }),
                          " تذكير: ",
                          h.reminderSchedule.replace(
                            "daily_",
                            "يوميًا الساعة ",
                          ),
                        ],
                      }),
                  ],
                },
                h.id,
              ),
            ),
          }),
          e.jsx(ge, {
            icon: St,
            title: "متابعة الدكتور",
            empty: "لا توجد متابعة مطلوبة الآن.",
            children: T.map((h) =>
              e.jsxs(
                "article",
                {
                  className:
                    "rounded-xl border border-primary/20 bg-primary/5 p-4",
                  children: [
                    e.jsx("b", {
                      className: "text-ink",
                      children: "كيف أصبحت حالتك بعد العلاج؟",
                    }),
                    e.jsxs("p", {
                      className: "mt-1 text-xs text-ink/50",
                      children: ["موعد المتابعة: ", st(h.scheduledFor)],
                    }),
                    h.status === "closed" || h.status === "flagged"
                      ? e.jsxs("p", {
                          className:
                            "mt-3 flex items-center gap-2 text-sm font-bold text-primary-dark",
                          children: [
                            e.jsx(oe, { className: "h-4 w-4" }),
                            " تم إرسال ردك للدكتور",
                          ],
                        })
                      : e.jsx("div", {
                          className: "mt-4 flex flex-wrap gap-2",
                          children: [
                            ["better", "أفضل"],
                            ["same", "كما هي"],
                            ["worse", "أسوأ"],
                          ].map(([R, k]) =>
                            e.jsx(
                              "button",
                              {
                                disabled: p.startsWith("followup_response"),
                                onClick: () => v("followup_response", h.id, R),
                                className:
                                  "rounded-full border border-primary/30 bg-paper px-4 py-2 text-xs font-bold text-ink hover:border-primary",
                                children: k,
                              },
                              R,
                            ),
                          ),
                        }),
                  ],
                },
                h.id,
              ),
            ),
          }),
          e.jsx(ge, {
            icon: et,
            title: "التنبيهات",
            empty: "لا توجد تنبيهات جديدة.",
            children: N.map((h) =>
              e.jsxs(
                "article",
                {
                  className:
                    "flex items-start gap-3 rounded-xl border border-line p-4",
                  children: [
                    e.jsx("span", {
                      className:
                        "mt-1 h-2 w-2 shrink-0 rounded-full bg-primary",
                    }),
                    e.jsxs("div", {
                      children: [
                        e.jsx("b", {
                          className: "text-sm text-ink",
                          children: Xa[h.eventType] || "تنبيه من العيادة",
                        }),
                        e.jsx("p", {
                          className: "mt-1 text-xs leading-5 text-ink/50",
                          children: h.message || st(h.scheduledFor),
                        }),
                      ],
                    }),
                  ],
                },
                h.id,
              ),
            ),
          }),
        ],
      }),
      e.jsx(ge, {
        className: "mt-6",
        icon: de,
        title: "نصائح اختارها الدكتور لك",
        empty: "لم يضف الدكتور نصائح مخصصة بعد.",
        children: e.jsx("div", {
          className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
          children: O.map((h) =>
            e.jsx(Et, { item: h, busy: p, action: v }, h.id),
          ),
        }),
      }),
      e.jsx(ge, {
        className: "mt-6",
        icon: je,
        title: "محفوظاتي",
        empty: "احفظ النصائح المهمة لتجدها هنا بسهولة.",
        children: e.jsx("div", {
          className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
          children: I.map((h) =>
            e.jsx(
              Et,
              { item: { ...h, saved: !0 }, busy: p, action: v },
              h.postId,
            ),
          ),
        }),
      }),
      z.length > 0 &&
        e.jsx(ge, {
          className: "mt-6",
          icon: Ct,
          title: "مكافآت الولاء",
          children: e.jsx("div", {
            className: "grid gap-3 sm:grid-cols-2",
            children: z.map((h) =>
              e.jsxs(
                "div",
                {
                  className:
                    "rounded-xl border border-accent/25 bg-accent/5 p-4",
                  children: [
                    e.jsxs("b", {
                      className: "text-accent",
                      children: ["خصم ", h.discountPercent, "%"],
                    }),
                    e.jsx("p", {
                      className: "mt-1 text-sm text-ink/60",
                      children: h.description,
                    }),
                    e.jsx(Tt, {
                      children: h.status === "available" ? "متاحة" : h.status,
                    }),
                  ],
                },
                h.id,
              ),
            ),
          }),
        }),
    ],
  });
}
function Te({ icon: t, text: s }) {
  return e.jsxs("span", {
    className: "flex items-center gap-2",
    children: [e.jsx(t, { className: "h-4 w-4 text-primary" }), s],
  });
}
function at({ icon: t, label: s, value: a }) {
  return e.jsxs($, {
    className: "flex items-center gap-4",
    children: [
      e.jsx("span", {
        className:
          "grid h-11 w-11 place-items-center rounded-xl bg-primary/15 text-primary",
        children: e.jsx(t, { className: "h-5 w-5" }),
      }),
      e.jsxs("div", {
        children: [
          e.jsx("b", { className: "text-2xl text-ink", children: a }),
          e.jsx("p", { className: "text-xs text-ink/50", children: s }),
        ],
      }),
    ],
  });
}
function Tt({ children: t }) {
  return e.jsx("span", {
    className:
      "mt-2 inline-flex rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-bold text-primary-dark",
    children: t,
  });
}
function ge({ icon: t, title: s, empty: a, children: i, className: n = "" }) {
  const r = o.Children.count(i) > 0;
  return e.jsxs($, {
    className: n,
    children: [
      e.jsxs("h2", {
        className: "flex items-center gap-2 text-lg font-bold text-ink",
        children: [e.jsx(t, { className: "h-5 w-5 text-primary" }), s],
      }),
      e.jsx("div", {
        className: "mt-4 space-y-3",
        children: r
          ? i
          : e.jsx("p", {
              className:
                "rounded-xl bg-base/60 p-5 text-center text-sm text-ink/45",
              children: a,
            }),
      }),
    ],
  });
}
function Et({ item: t, busy: s, action: a }) {
  return e.jsxs("article", {
    className: "rounded-xl border border-line bg-base/40 p-4",
    children: [
      e.jsx("span", {
        className: "text-[11px] font-bold text-primary-dark",
        children: t.category,
      }),
      e.jsx(Q, {
        to: `/magazine/${t.slug}`,
        className:
          "mt-2 block font-bold leading-6 text-ink hover:text-primary-dark",
        children: t.title,
      }),
      e.jsx("p", {
        className: "mt-2 line-clamp-2 text-xs leading-5 text-ink/50",
        children: t.note || t.excerpt,
      }),
      e.jsxs("button", {
        disabled: s.includes(t.postId),
        onClick: () => a(t.saved ? "unsave_post" : "save_post", t.postId),
        className:
          "mt-4 flex items-center gap-1.5 text-xs font-bold text-primary-dark",
        children: [
          e.jsx(je, { className: `h-4 w-4 ${t.saved ? "fill-current" : ""}` }),
          t.saved ? "إزالة من المحفوظات" : "حفظ النصيحة",
        ],
      }),
    ],
  });
}
function Za() {
  const { session: t, staffDoctor: s, signIn: a, signUp: i } = Je(),
    [n, r] = o.useState("login"),
    [x, l] = o.useState(""),
    [p, m] = o.useState(""),
    [u, C] = o.useState(!1),
    [v, g] = o.useState(""),
    [D, _] = o.useState(""),
    T = He(),
    z = mt();
  if (t && s) return e.jsx(we, { to: "/dashboard", replace: !0 });
  if (t) return e.jsx(we, { to: "/activate", replace: !0 });
  const N = async (O) => {
    var k;
    (O.preventDefault(), C(!0), _(""), g(""));
    const I = n === "login" ? a : i,
      { data: h, error: R } = await I(x.trim(), p);
    if ((C(!1), R)) {
      _(
        n === "login"
          ? "البريد الإلكتروني أو كلمة المرور غير صحيحة."
          : R.message,
      );
      return;
    }
    if (n === "signup" && !h.session) {
      g("تم إنشاء الحساب. افتح رسالة التأكيد في بريدك ثم ارجع لتسجيل الدخول.");
      return;
    }
    T(((k = z.state) == null ? void 0 : k.from) || "/activate", {
      replace: !0,
    });
  };
  return e.jsx("section", {
    className:
      "mx-auto grid min-h-[calc(100vh-72px)] max-w-6xl items-center px-5 py-14",
    children: e.jsxs("div", {
      className:
        "mx-auto grid w-full max-w-4xl overflow-hidden rounded-2xl border border-line bg-paper shadow-[0_30px_100px_rgba(0,0,0,.28)] md:grid-cols-[.9fr_1.1fr]",
      children: [
        e.jsxs("div", {
          className:
            "hidden bg-gradient-to-br from-primary/30 via-primary/10 to-accent/10 p-10 md:block",
          children: [
            e.jsx("span", {
              className:
                "grid h-12 w-12 place-items-center rounded-xl bg-primary text-white",
              children: e.jsx(re, {}),
            }),
            e.jsx("h1", {
              className: "mt-8 text-3xl font-bold text-ink",
              children: "دخول آمن للطبيب",
            }),
            e.jsx("p", {
              className: "mt-4 text-sm leading-7 text-ink/60",
              children:
                "بيانات المرضى والمواعيد محمية بسياسات صلاحيات تربط كل طبيب بعيادته فقط.",
            }),
            e.jsxs("div", {
              className: "mt-10 space-y-4 text-sm text-ink/65",
              children: [
                e.jsxs("p", {
                  className: "flex gap-2",
                  children: [
                    e.jsx(re, { className: "h-5 w-5 text-primary" }),
                    " تشفير الجلسة وتسجيل دخول آمن",
                  ],
                }),
                e.jsxs("p", {
                  className: "flex gap-2",
                  children: [
                    e.jsx(re, { className: "h-5 w-5 text-primary" }),
                    " لا يمكن للزوار قراءة ملفات المرضى",
                  ],
                }),
                e.jsxs("p", {
                  className: "flex gap-2",
                  children: [
                    e.jsx(re, { className: "h-5 w-5 text-primary" }),
                    " كود التفعيل يُستخدم مرة واحدة",
                  ],
                }),
              ],
            }),
          ],
        }),
        e.jsxs("form", {
          onSubmit: N,
          className: "p-7 sm:p-10",
          children: [
            e.jsx("p", {
              className: "text-xs font-bold text-primary-dark",
              children: "لوحة إدارة العيادة",
            }),
            e.jsx("h2", {
              className: "mt-2 text-2xl font-bold text-ink",
              children:
                n === "login" ? "تسجيل دخول الطبيب" : "إنشاء حساب الطبيب",
            }),
            e.jsx("p", {
              className: "mt-2 text-sm text-ink/50",
              children:
                n === "login"
                  ? "أدخل بيانات حسابك للوصول إلى الداش بورد."
                  : "أنشئ حسابًا ثم فعّله باستخدام كود العيادة.",
            }),
            e.jsxs("label", {
              className: "mt-7 block",
              children: [
                e.jsx("span", {
                  className: "mb-2 block text-xs font-bold text-ink/60",
                  children: "البريد الإلكتروني",
                }),
                e.jsxs("span", {
                  className: "relative block",
                  children: [
                    e.jsx(aa, {
                      className: "absolute right-3 top-3.5 h-4 w-4 text-ink/30",
                    }),
                    e.jsx("input", {
                      value: x,
                      onChange: (O) => l(O.target.value),
                      type: "email",
                      required: !0,
                      autoComplete: "email",
                      className: "input h-12 pr-10",
                      placeholder: "doctor@example.com",
                    }),
                  ],
                }),
              ],
            }),
            e.jsxs("label", {
              className: "mt-4 block",
              children: [
                e.jsx("span", {
                  className: "mb-2 block text-xs font-bold text-ink/60",
                  children: "كلمة المرور",
                }),
                e.jsxs("span", {
                  className: "relative block",
                  children: [
                    e.jsx(sa, {
                      className: "absolute right-3 top-3.5 h-4 w-4 text-ink/30",
                    }),
                    e.jsx("input", {
                      value: p,
                      onChange: (O) => m(O.target.value),
                      type: "password",
                      required: !0,
                      minLength: 8,
                      autoComplete:
                        n === "login" ? "current-password" : "new-password",
                      className: "input h-12 pr-10",
                      placeholder: "8 أحرف على الأقل",
                    }),
                  ],
                }),
              ],
            }),
            D
              ? e.jsx("p", {
                  className:
                    "mt-4 rounded-lg border border-danger/30 bg-danger/5 p-3 text-sm text-danger",
                  children: D,
                })
              : null,
            v
              ? e.jsx("p", {
                  className:
                    "mt-4 rounded-lg border border-success/30 bg-success/5 p-3 text-sm text-success",
                  children: v,
                })
              : null,
            e.jsx(V, {
              type: "submit",
              disabled: u,
              className: "mt-6 h-12 w-full",
              children: u
                ? "جاري التحقق..."
                : n === "login"
                  ? "دخول آمن"
                  : "إنشاء الحساب",
            }),
            e.jsx("button", {
              type: "button",
              onClick: () => {
                (r(n === "login" ? "signup" : "login"), _(""), g(""));
              },
              className:
                "mt-5 w-full text-center text-sm text-primary-dark hover:underline",
              children:
                n === "login"
                  ? "أول مرة؟ أنشئ حساب الطبيب"
                  : "لديك حساب بالفعل؟ سجل الدخول",
            }),
          ],
        }),
      ],
    }),
  });
}
function Ja() {
  const { session: t, staffDoctor: s, claimAccess: a, loading: i } = Je(),
    [n, r] = o.useState(""),
    [x, l] = o.useState(!1),
    [p, m] = o.useState(""),
    u = He();
  if (!i && !t) return e.jsx(we, { to: "/login", replace: !0 });
  if (s) return e.jsx(we, { to: "/dashboard", replace: !0 });
  const C = async (v) => {
    (v.preventDefault(), l(!0), m(""));
    try {
      const g = n
        .trim()
        .toUpperCase()
        .replace(/[–—−]/g, "-")
        .replace(/\s+/g, "");
      if (
        (
          await Promise.race([
            a(g),
            new Promise((_, T) =>
              setTimeout(() => T(new Error("activation_timeout")), 15e3),
            ),
          ])
        ).error
      ) {
        m("كود التفعيل غير صحيح أو تم استخدامه من قبل.");
        return;
      }
      u("/dashboard", { replace: !0 });
    } catch {
      m("تعذر الاتصال الآن. أعد تحميل الصفحة وحاول مرة أخرى.");
    } finally {
      l(!1);
    }
  };
  return e.jsx("section", {
    className:
      "mx-auto grid min-h-[calc(100vh-72px)] max-w-xl place-items-center px-5 py-14",
    children: e.jsxs("form", {
      onSubmit: C,
      className:
        "w-full rounded-2xl border border-line bg-paper p-8 text-center shadow-[0_30px_100px_rgba(0,0,0,.25)]",
      children: [
        e.jsx("span", {
          className:
            "mx-auto grid h-16 w-16 place-items-center rounded-2xl bg-primary/15 text-primary",
          children: e.jsx(ht, { className: "h-7 w-7" }),
        }),
        e.jsx("p", {
          className: "mt-6 text-xs font-bold text-primary-dark",
          children: "تفعيل صلاحية الطبيب",
        }),
        e.jsx("h1", {
          className: "mt-2 text-2xl font-bold text-ink",
          children: "اربط حسابك بعيادة تاج",
        }),
        e.jsx("p", {
          className: "mx-auto mt-3 max-w-md text-sm leading-7 text-ink/55",
          children:
            "أدخل كود العيادة لمرة واحدة. بعد التفعيل ستظهر لك المواعيد والمرضى الحقيقيون.",
        }),
        e.jsx("input", {
          value: n,
          onChange: (v) => r(v.target.value.toUpperCase()),
          required: !0,
          className: "input mt-7 h-12 text-center font-mono tracking-widest",
          placeholder: "MERIDIAN-XXXX-XX",
          autoComplete: "one-time-code",
        }),
        p
          ? e.jsx("p", { className: "mt-4 text-sm text-danger", children: p })
          : null,
        e.jsxs(V, {
          type: "submit",
          disabled: x,
          className: "mt-5 h-12 w-full",
          children: [
            e.jsx(re, { className: "h-4 w-4" }),
            x ? "جاري التفعيل..." : "تفعيل حساب الطبيب",
          ],
        }),
      ],
    }),
  });
}
const gs = { reel: "ريل", post: "مقال", tip: "نصيحة" };
function en() {
  const { contentPosts: t = [], contentQuizzes: s = [] } = H(),
    [a, i] = o.useState("الكل"),
    n = o.useMemo(() => t.filter((m) => m.status === "published"), [t]),
    r = ["الكل", ...new Set(n.map((m) => m.category))],
    x = a === "الكل" ? n : n.filter((m) => m.category === a),
    l = x[0],
    p = Object.entries(
      n.reduce((m, u) => {
        var C;
        return (
          u.seriesTitle && (m[(C = u.seriesTitle)] || (m[C] = [])).push(u),
          m
        );
      }, {}),
    ).filter(([, m]) => m.length > 1);
  return e.jsxs("section", {
    className: "mx-auto max-w-7xl px-5 py-10 sm:py-14",
    children: [
      e.jsxs("div", {
        className:
          "rounded-[28px] border border-line bg-gradient-to-bl from-primary/20 via-paper to-accent/10 p-7 sm:p-10",
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-2 text-primary-dark",
            children: [
              e.jsx(de, { className: "h-4 w-4" }),
              e.jsx("span", {
                className: "text-xs font-bold",
                children: "محتوى طبي موثوق من عيادة تاج",
              }),
            ],
          }),
          e.jsx("h1", {
            className:
              "mt-4 max-w-2xl font-display text-4xl font-bold leading-tight text-ink sm:text-5xl",
            children: "مجلة تاج",
          }),
          e.jsx("p", {
            className: "mt-3 max-w-2xl leading-8 text-ink/60",
            children:
              "نصائح قصيرة ومبسطة عن البشرة والشعر والتجميل، يراجعها د. زياد محمد ويربطها بخطوة واضحة للحجز عند الحاجة.",
          }),
        ],
      }),
      e.jsx("div", {
        className: "mt-7 flex gap-2 overflow-x-auto pb-2",
        children: r.map((m) =>
          e.jsx(
            "button",
            {
              onClick: () => i(m),
              className: `shrink-0 rounded-full px-4 py-2 text-sm ${a === m ? "bg-primary text-white" : "border border-line bg-paper text-ink/60"}`,
              children: m,
            },
            m,
          ),
        ),
      }),
      l &&
        e.jsxs(Q, {
          to: `/magazine/${l.slug}`,
          className:
            "mt-5 grid overflow-hidden rounded-[26px] border border-line bg-paper shadow-[0_20px_60px_rgba(0,0,0,.18)] transition hover:border-primary/50 lg:grid-cols-[.9fr_1.1fr]",
          children: [
            e.jsxs("div", {
              className:
                "relative grid min-h-72 place-items-center overflow-hidden bg-gradient-to-br from-[#123C4A] via-[#1D736E] to-[#53C9AD] p-8 text-white",
              children: [
                e.jsx("div", {
                  className:
                    "absolute -left-16 -top-16 h-48 w-48 rounded-full border-[32px] border-white/10",
                }),
                e.jsx("span", {
                  className:
                    "grid h-20 w-20 place-items-center rounded-full bg-white/15 backdrop-blur",
                  children: e.jsx(Ke, {
                    className: "h-8 w-8",
                    fill: "currentColor",
                  }),
                }),
                e.jsx("p", {
                  className:
                    "absolute bottom-5 right-5 rounded-full bg-black/20 px-3 py-1 text-xs",
                  children: gs[l.contentType],
                }),
              ],
            }),
            e.jsxs("div", {
              className: "flex flex-col justify-center p-7 sm:p-10",
              children: [
                e.jsx("p", {
                  className: "text-xs font-bold text-primary",
                  children: l.category,
                }),
                e.jsx("h2", {
                  className: "mt-3 text-3xl font-bold leading-snug text-ink",
                  children: l.title,
                }),
                e.jsx("p", {
                  className: "mt-4 leading-7 text-ink/60",
                  children: l.excerpt,
                }),
                e.jsxs("div", {
                  className: "mt-7 flex items-center gap-5 text-xs text-ink/45",
                  children: [
                    e.jsxs("span", {
                      className: "flex gap-1",
                      children: [e.jsx(Me, { className: "h-4 w-4" }), l.views],
                    }),
                    e.jsxs("span", {
                      className: "flex gap-1",
                      children: [e.jsx(De, { className: "h-4 w-4" }), l.likes],
                    }),
                    e.jsxs("span", {
                      className: "flex gap-1",
                      children: [e.jsx(je, { className: "h-4 w-4" }), l.saves],
                    }),
                    e.jsxs("span", {
                      className:
                        "mr-auto flex items-center gap-1 font-bold text-primary-dark",
                      children: [
                        "اقرأ الآن ",
                        e.jsx(Ne, { className: "h-4 w-4" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      e.jsx("div", {
        className: "mt-7 grid gap-5 sm:grid-cols-2 xl:grid-cols-3",
        children: x
          .slice(1)
          .map((m, u) => e.jsx(tn, { post: m, index: u }, m.id)),
      }),
      p.length > 0 &&
        e.jsxs("div", {
          className: "mt-14",
          children: [
            e.jsx("p", {
              className: "text-xs font-bold text-primary",
              children: "تابع خطوة بخطوة",
            }),
            e.jsx("h2", {
              className: "mt-2 text-3xl font-bold text-ink",
              children: "سلاسل تاج الطبية",
            }),
            e.jsx("div", {
              className: "mt-6 grid gap-5 md:grid-cols-2",
              children: p.map(([m, u]) =>
                e.jsxs(
                  "div",
                  {
                    className: "rounded-2xl border border-line bg-paper p-6",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-center justify-between",
                        children: [
                          e.jsx("h3", {
                            className: "text-xl font-bold text-ink",
                            children: m,
                          }),
                          e.jsxs("span", {
                            className:
                              "rounded-full bg-primary-light px-3 py-1 text-xs text-primary-dark",
                            children: [u.length, " حلقات"],
                          }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "mt-4 space-y-2",
                        children: u
                          .sort((C, v) => C.episodeNumber - v.episodeNumber)
                          .map((C) =>
                            e.jsxs(
                              Q,
                              {
                                to: `/magazine/${C.slug}`,
                                className:
                                  "flex items-center gap-3 rounded-xl bg-base/50 p-3 hover:bg-primary/5",
                                children: [
                                  e.jsx("span", {
                                    className:
                                      "grid h-8 w-8 place-items-center rounded-full bg-primary text-xs font-bold text-white",
                                    children: C.episodeNumber,
                                  }),
                                  e.jsx("span", {
                                    className: "text-sm font-medium text-ink",
                                    children: C.title,
                                  }),
                                  e.jsx(Ne, {
                                    className: "mr-auto h-4 w-4 text-ink/25",
                                  }),
                                ],
                              },
                              C.id,
                            ),
                          ),
                      }),
                    ],
                  },
                  m,
                ),
              ),
            }),
          ],
        }),
      e.jsxs("div", {
        className: "mt-14",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("p", {
                className: "text-xs font-bold text-primary",
                children: "تجربة تفاعلية",
              }),
              e.jsx("h2", {
                className: "mt-2 text-3xl font-bold text-ink",
                children: "اختبارات توعوية في دقيقة",
              }),
              e.jsx("p", {
                className: "mt-2 text-sm text-ink/55",
                children: "تفهمك الخطوة المناسبة بدون تشخيص أو وصف علاج.",
              }),
            ],
          }),
          e.jsx("div", {
            className: "mt-6 grid gap-5 md:grid-cols-2",
            children: s
              .filter((m) => m.isActive !== !1)
              .map((m) =>
                e.jsxs(
                  Q,
                  {
                    to: `/quiz/${m.slug}`,
                    className:
                      "group flex items-center gap-5 rounded-2xl border border-line bg-paper p-6 transition hover:border-primary/50",
                    children: [
                      e.jsx("span", {
                        className:
                          "grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-accent/10 text-accent",
                        children: e.jsx(oe, { className: "h-7 w-7" }),
                      }),
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "text-xs font-bold text-primary",
                            children: m.category,
                          }),
                          e.jsx("h3", {
                            className: "mt-1 text-lg font-bold text-ink",
                            children: m.title,
                          }),
                          e.jsx("p", {
                            className: "mt-1 text-sm text-ink/50",
                            children: m.description,
                          }),
                        ],
                      }),
                      e.jsx(Ne, {
                        className:
                          "mr-auto h-5 w-5 text-ink/25 transition group-hover:-translate-x-1 group-hover:text-primary",
                      }),
                    ],
                  },
                  m.id,
                ),
              ),
          }),
        ],
      }),
    ],
  });
}
function tn({ post: t, index: s }) {
  const a = [
    "from-[#3A276A] to-[#9C70D7]",
    "from-[#6B3B2B] to-[#D58A62]",
    "from-[#183F55] to-[#4695A8]",
  ];
  return e.jsxs(Q, {
    to: `/magazine/${t.slug}`,
    className:
      "group overflow-hidden rounded-2xl border border-line bg-paper transition hover:-translate-y-1 hover:border-primary/50",
    children: [
      e.jsxs("div", {
        className: `relative h-44 bg-gradient-to-br ${a[s % a.length]} p-5 text-white`,
        children: [
          e.jsx("span", {
            className: "rounded-full bg-black/15 px-3 py-1 text-xs",
            children: gs[t.contentType],
          }),
          e.jsx("p", {
            className: "absolute bottom-5 right-5 text-sm font-bold",
            children: t.category,
          }),
        ],
      }),
      e.jsxs("div", {
        className: "p-5",
        children: [
          e.jsx("h3", {
            className: "text-lg font-bold leading-7 text-ink",
            children: t.title,
          }),
          e.jsx("p", {
            className: "mt-2 line-clamp-2 text-sm leading-6 text-ink/55",
            children: t.excerpt,
          }),
          e.jsxs("div", {
            className: "mt-4 flex gap-4 text-xs text-ink/40",
            children: [
              e.jsxs("span", {
                className: "flex gap-1",
                children: [e.jsx(Me, { className: "h-3.5 w-3.5" }), t.views],
              }),
              e.jsxs("span", {
                className: "flex gap-1",
                children: [e.jsx(De, { className: "h-3.5 w-3.5" }), t.likes],
              }),
              e.jsxs("span", {
                className: "flex gap-1",
                children: [e.jsx(je, { className: "h-3.5 w-3.5" }), t.saves],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function se({
  icon: t,
  title: s,
  description: a,
  action: i,
  className: n = "",
}) {
  return e.jsxs("div", {
    className: `flex flex-col items-center justify-center gap-2 rounded-card border border-dashed border-line py-12 text-center ${n}`,
    children: [
      t &&
        e.jsx(t, { className: "mb-1 h-8 w-8 text-ink/30", strokeWidth: 1.5 }),
      e.jsx("p", { className: "font-medium text-ink", children: s }),
      a &&
        e.jsx("p", { className: "max-w-sm text-sm text-ink/60", children: a }),
      i,
    ],
  });
}
const sn = {
  alert: Ye,
  calendar: he,
  clock: _e,
  droplet: Ys,
  shield: re,
  sparkles: de,
  sun: ha,
};
function an({ scenes: t = [], title: s }) {
  const a = o.useMemo(
      () =>
        t.length
          ? t
          : [{ title: s, text: "نصيحة طبية من عيادة تاج", icon: "sparkles" }],
      [t, s],
    ),
    [i, n] = o.useState(0),
    [r, x] = o.useState(!0),
    l = a[i],
    p = sn[l.icon] || de;
  return (
    o.useEffect(() => {
      if (!r) return;
      const m = setInterval(() => n((u) => (u + 1) % a.length), 3e3);
      return () => clearInterval(m);
    }, [r, a.length]),
    e.jsxs("div", {
      className:
        "relative mx-auto aspect-[9/16] w-full max-w-[390px] overflow-hidden rounded-[28px] border border-white/15 bg-gradient-to-br from-[#071C25] via-[#15535A] to-[#2CA98F] text-white shadow-[0_30px_90px_rgba(0,0,0,.38)]",
      children: [
        e.jsx("div", {
          className:
            "absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(105,225,200,.35),transparent_30%),radial-gradient(circle_at_90%_85%,rgba(245,190,93,.22),transparent_35%)]",
        }),
        e.jsx("div", {
          className: "absolute inset-x-0 top-0 z-10 flex gap-1 p-3",
          children: a.map((m, u) =>
            e.jsx(
              "span",
              {
                className:
                  "h-1 flex-1 overflow-hidden rounded-full bg-white/20",
                children: e.jsx("span", {
                  className: `block h-full bg-white transition-all duration-500 ${u < i ? "w-full" : u === i ? "w-2/3" : "w-0"}`,
                }),
              },
              u,
            ),
          ),
        }),
        e.jsxs(
          "div",
          {
            className:
              "relative z-10 flex h-full animate-[fadeIn_.45s_ease-out] flex-col items-center justify-center px-8 text-center",
            children: [
              e.jsx("span", {
                className:
                  "grid h-20 w-20 place-items-center rounded-3xl border border-white/20 bg-white/10 backdrop-blur",
                children: e.jsx(p, { className: "h-9 w-9" }),
              }),
              e.jsx("p", {
                className: "mt-7 text-3xl font-extrabold leading-tight",
                children: l.title,
              }),
              e.jsx("p", {
                className: "mt-4 text-lg leading-8 text-white/75",
                children: l.text,
              }),
            ],
          },
          i,
        ),
        e.jsxs("div", {
          className:
            "absolute inset-x-0 bottom-0 z-20 flex items-center justify-between p-5",
          children: [
            e.jsxs("div", {
              className: "text-right",
              children: [
                e.jsx("p", {
                  className: "text-sm font-bold",
                  children: "د. زياد محمد",
                }),
                e.jsx("p", {
                  className: "text-[11px] text-white/60",
                  children: "عيادة تاج للجلدية والتجميل",
                }),
              ],
            }),
            e.jsx("button", {
              onClick: () => x((m) => !m),
              className:
                "grid h-11 w-11 place-items-center rounded-full bg-black/25 backdrop-blur",
              "aria-label": r ? "إيقاف" : "تشغيل",
              children: r
                ? e.jsx(da, { className: "h-5 w-5" })
                : e.jsx(Ke, { className: "h-5 w-5", fill: "currentColor" }),
            }),
          ],
        }),
      ],
    })
  );
}
function zt() {
  let t = window.localStorage.getItem("tag_visitor_key");
  return (
    t ||
      ((t = crypto.randomUUID()),
      window.localStorage.setItem("tag_visitor_key", t)),
    t
  );
}
function nn() {
  const { slug: t } = Qe(),
    {
      contentPosts: s = [],
      trackContentInteraction: a,
      submitContentQuestion: i,
    } = H(),
    n = o.useMemo(
      () => s.find((g) => g.slug === t && g.status === "published"),
      [s, t],
    ),
    [r, x] = o.useState({}),
    [l, p] = o.useState(""),
    [m, u] = o.useState(!1);
  if (
    (o.useEffect(() => {
      n && a(n.id, "view", zt());
    }, [n == null ? void 0 : n.id]),
    !n)
  )
    return e.jsx("div", {
      className: "mx-auto max-w-3xl px-5 py-20",
      children: e.jsx(se, { title: "المحتوى غير موجود" }),
    });
  const C = async (g) => {
      r[g] || (await a(n.id, g, zt()), x((D) => ({ ...D, [g]: !0 })));
    },
    v = async () => {
      var g;
      (navigator.share
        ? await navigator
            .share({ title: n.title, url: window.location.href })
            .catch(() => {})
        : await ((g = navigator.clipboard) == null
            ? void 0
            : g.writeText(window.location.href)),
        C("share"));
    };
  return e.jsxs("article", {
    className: "mx-auto max-w-4xl px-5 py-10 sm:py-14",
    children: [
      e.jsxs("div", {
        className:
          "rounded-[28px] bg-gradient-to-br from-[#123C4A] via-[#1D736E] to-[#53C9AD] p-8 text-white sm:p-12",
        children: [
          e.jsxs("p", {
            className: "text-xs font-bold text-white/70",
            children: [n.category, " · محتوى د. زياد محمد"],
          }),
          e.jsx("h1", {
            className:
              "mt-4 max-w-3xl text-3xl font-bold leading-snug sm:text-5xl",
            children: n.title,
          }),
          e.jsx("p", {
            className: "mt-5 max-w-2xl leading-8 text-white/75",
            children: n.excerpt,
          }),
        ],
      }),
      e.jsxs("div", {
        className: "mx-auto max-w-3xl py-8",
        children: [
          n.contentType === "reel" &&
            e.jsx("div", {
              className: "mb-10",
              children: e.jsx(an, { scenes: n.scenes, title: n.title }),
            }),
          e.jsx("p", {
            className: "whitespace-pre-line text-lg leading-10 text-ink/80",
            children: n.content,
          }),
          e.jsxs("div", {
            className:
              "mt-6 flex flex-wrap items-center gap-2 text-xs text-ink/45",
            children: [
              e.jsx("span", {
                className: "rounded-full border border-line px-3 py-1.5",
                children: "راجعه طبيًا: د. زياد محمد",
              }),
              n.seriesTitle &&
                e.jsxs("span", {
                  className: "rounded-full border border-line px-3 py-1.5",
                  children: [n.seriesTitle, " · الحلقة ", n.episodeNumber],
                }),
            ],
          }),
          e.jsxs("div", {
            className: "mt-8 flex flex-wrap gap-2 border-y border-line py-5",
            children: [
              e.jsxs(Ee, {
                icon: De,
                active: r.like,
                onClick: () => C("like"),
                children: ["أعجبني · ", n.likes || 0],
              }),
              e.jsxs(Ee, {
                icon: je,
                active: r.save,
                onClick: () => C("save"),
                children: ["حفظ · ", n.saves || 0],
              }),
              e.jsxs(Ee, {
                icon: as,
                active: r.helpful,
                onClick: () => C("helpful"),
                children: ["مفيد · ", n.helpful || 0],
              }),
              e.jsx(Ee, { icon: ls, onClick: v, children: "مشاركة" }),
            ],
          }),
          e.jsxs("div", {
            className:
              "mt-8 rounded-2xl border border-primary/25 bg-primary/10 p-6 sm:flex sm:items-center sm:justify-between",
            children: [
              e.jsxs("div", {
                children: [
                  e.jsx("h2", {
                    className: "text-xl font-bold text-ink",
                    children: "هل المشكلة قريبة من حالتك؟",
                  }),
                  e.jsx("p", {
                    className: "mt-1 text-sm text-ink/55",
                    children: "المحتوى للتوعية ولا يغني عن التشخيص الطبي.",
                  }),
                ],
              }),
              e.jsxs(Q, {
                to: `/book?post=${n.slug}&campaign=${n.campaignCode}`,
                className:
                  "mt-4 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-bold text-white sm:mt-0",
                children: [e.jsx(he, { className: "h-4 w-4" }), n.ctaLabel],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "mt-8 rounded-2xl border border-line bg-paper p-6",
            children: [
              e.jsx("h2", {
                className: "font-bold text-ink",
                children: "عايز د. زياد يتكلم عن إيه؟",
              }),
              e.jsx("p", {
                className: "mt-1 text-sm text-ink/50",
                children: "سؤالك يصل للعيادة بشكل خاص ولن يظهر للناس.",
              }),
              m
                ? e.jsx("p", {
                    className: "mt-4 text-sm font-bold text-primary-dark",
                    children: "وصل سؤالك، شكرًا لمشاركتك.",
                  })
                : e.jsxs("div", {
                    className: "mt-4 flex gap-2",
                    children: [
                      e.jsx("input", {
                        className: "input",
                        value: l,
                        onChange: (g) => p(g.target.value),
                        placeholder: "اكتب موضوعًا أو سؤالًا طبيًا عامًا",
                      }),
                      e.jsx(V, {
                        onClick: async () => {
                          if (!l.trim()) return;
                          (
                            await i({
                              question: l.trim(),
                              category: n.category,
                            })
                          ).ok && u(!0);
                        },
                        children: "إرسال",
                      }),
                    ],
                  }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ee({ icon: t, active: s, children: a, onClick: i }) {
  return e.jsxs("button", {
    onClick: i,
    className: `inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm ${s ? "border-primary bg-primary/10 text-primary-dark" : "border-line text-ink/60 hover:border-primary/50"}`,
    children: [
      e.jsx(t, { className: "h-4 w-4", fill: s ? "currentColor" : "none" }),
      a,
    ],
  });
}
function ln() {
  const { slug: t } = Qe(),
    { contentQuizzes: s = [], services: a } = H(),
    i = o.useMemo(
      () => s.find((v) => v.slug === t && v.isActive !== !1),
      [s, t],
    ),
    [n, r] = o.useState(0),
    [x, l] = o.useState(0),
    [p, m] = o.useState(!1);
  if (!i)
    return e.jsx("div", {
      className: "mx-auto max-w-2xl px-5 py-20",
      children: e.jsx(se, { title: "الاختبار غير موجود" }),
    });
  const u = a.find((v) => v.id === i.serviceId),
    C = (v) => {
      const g = x + v;
      (l(g), n === i.questions.length - 1 ? m(!0) : r(n + 1));
    };
  return e.jsxs("section", {
    className: "mx-auto max-w-2xl px-5 py-12",
    children: [
      e.jsxs("div", {
        className: "mb-6 flex items-center gap-2 text-xs text-primary-dark",
        children: [
          e.jsx(re, { className: "h-4 w-4" }),
          "اختبار توعوي آمن — لا يقدم تشخيصًا",
        ],
      }),
      e.jsx($, {
        className: "overflow-hidden",
        padded: !1,
        children: p
          ? e.jsxs("div", {
              className: "p-8 text-center sm:p-12",
              children: [
                e.jsx("span", {
                  className:
                    "mx-auto grid h-16 w-16 place-items-center rounded-full bg-primary-light text-primary",
                  children: e.jsx(oe, { className: "h-8 w-8" }),
                }),
                e.jsx("h1", {
                  className: "mt-5 text-2xl font-bold text-ink",
                  children:
                    x >= 4
                      ? "يفضل مراجعة الروتين مع الطبيب"
                      : x >= 2
                        ? "هناك نقاط تستحق الانتباه"
                        : "إجاباتك مطمئنة بشكل عام",
                }),
                e.jsx("p", {
                  className:
                    "mx-auto mt-3 max-w-md text-sm leading-7 text-ink/60",
                  children:
                    x >= 4
                      ? "ظهرت أكثر من علامة تحتاج تقييمًا مناسبًا لحالتك بدل تجربة علاجات عشوائية."
                      : "استمر في العناية البسيطة، وإذا استمرت الأعراض أو ازدادت احجز تقييمًا طبيًا.",
                }),
                e.jsxs("div", {
                  className: "mt-7 flex justify-center gap-3",
                  children: [
                    e.jsxs(Q, {
                      to: "/magazine",
                      className:
                        "inline-flex items-center gap-2 rounded-lg border border-line px-4 py-2 text-sm text-ink",
                      children: [e.jsx(Ne, { className: "h-4 w-4" }), "المجلة"],
                    }),
                    e.jsx(Q, {
                      to: `/book?campaign=quiz-${i.slug}${u ? `&service=${u.id}` : ""}`,
                      className:
                        "rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white",
                      children: u ? `حجز ${u.name}` : "حجز استشارة",
                    }),
                  ],
                }),
              ],
            })
          : e.jsxs("div", {
              children: [
                e.jsx("div", {
                  className: "h-2 bg-line",
                  children: e.jsx("div", {
                    className: "h-full bg-primary transition-all",
                    style: {
                      width: `${((n + 1) / i.questions.length) * 100}%`,
                    },
                  }),
                }),
                e.jsxs("div", {
                  className: "p-7 sm:p-10",
                  children: [
                    e.jsxs("p", {
                      className: "text-xs font-bold text-primary",
                      children: ["سؤال ", n + 1, " من ", i.questions.length],
                    }),
                    e.jsx("h1", {
                      className: "mt-4 text-2xl font-bold leading-10 text-ink",
                      children: i.questions[n].text,
                    }),
                    e.jsx("div", {
                      className: "mt-7 grid gap-3",
                      children: i.questions[n].options.map((v) =>
                        e.jsx(
                          "button",
                          {
                            onClick: () => C(v.score),
                            className:
                              "rounded-xl border border-line bg-base/40 p-4 text-right font-medium text-ink transition hover:border-primary hover:bg-primary/5",
                            children: v.label,
                          },
                          v.label,
                        ),
                      ),
                    }),
                  ],
                }),
              ],
            }),
      }),
    ],
  });
}
function rn(t, s = new Date()) {
  const a = t.filter((i) => Ze(i.startsAt, s));
  return {
    total: a.length,
    completed: a.filter((i) => i.status === "completed").length,
    cancelled: a.filter((i) => i.status === "cancelled").length,
    waiting: a.filter((i) =>
      ["scheduled", "confirmed", "waiting"].includes(i.status),
    ).length,
    inProgress: a.filter((i) => i.status === "in_progress").length,
  };
}
function nt(t, s, a) {
  const i = Object.fromEntries(s.map((n) => [n.id, n.priceCents]));
  return t
    .filter((n) => n.status === "completed" && a(n))
    .reduce((n, r) => n + (i[r.serviceId] || 0), 0);
}
function cn(t, s, a = new Date()) {
  const i = Nt(a),
    n = new Date(a.getFullYear(), a.getMonth(), 1);
  return {
    today: nt(t, s, (r) => Ze(r.startsAt, a)),
    week: nt(t, s, (r) => new Date(r.startsAt) >= i),
    month: nt(t, s, (r) => new Date(r.startsAt) >= n),
  };
}
function on(t, s, a = new Date()) {
  const i = Object.fromEntries(s.map((r) => [r.id, r.priceCents])),
    n = Nt(a);
  return Array.from({ length: 7 }).map((r, x) => {
    const l = J(n, x),
      p = t
        .filter((m) => m.status === "completed" && Ze(m.startsAt, l))
        .reduce((m, u) => m + (i[u.serviceId] || 0), 0);
    return {
      day: l.toLocaleDateString("ar-EG", { weekday: "short" }),
      revenue: p / 100,
    };
  });
}
function fs(t, s) {
  var n;
  const a = {};
  t.forEach((r) => {
    a[r.serviceId] = (a[r.serviceId] || 0) + 1;
  });
  const i =
    (n = Object.entries(a).sort((r, x) => x[1] - r[1])[0]) == null
      ? void 0
      : n[0];
  return s.find((r) => r.id === i) || null;
}
function Rt(t, s) {
  const a = J(Nt(t), s * 7),
    i = J(a, 7);
  return { start: a, end: i };
}
function dn(t, s, a = new Date()) {
  const i = [],
    n = Rt(a, 0),
    r = Rt(a, -1),
    x = Object.fromEntries(s.map((_) => [_.id, _.priceCents])),
    l = (_, T) =>
      t
        .filter(
          (z) =>
            z.status === "completed" &&
            new Date(z.startsAt) >= _ &&
            new Date(z.startsAt) < T,
        )
        .reduce((z, N) => z + (x[N.serviceId] || 0), 0),
    p = l(n.start, n.end),
    m = l(r.start, r.end);
  if (m > 0) {
    const _ = Math.round(((p - m) / m) * 100);
    Math.abs(_) >= 5 &&
      i.push({
        tone: _ >= 0 ? "positive" : "warning",
        message: `${_ >= 0 ? "ارتفع" : "انخفض"} الإيراد بنسبة ${Math.abs(_)}% مقارنة بالأسبوع الماضي.`,
      });
  }
  const u = (_, T) =>
      t.filter(
        (z) =>
          z.status === "cancelled" &&
          new Date(z.startsAt) >= _ &&
          new Date(z.startsAt) < T,
      ).length,
    C = u(n.start, n.end),
    v = u(r.start, r.end);
  C > v &&
    C >= 2 &&
    i.push({
      tone: "warning",
      message: "زادت الإلغاءات هذا الأسبوع؛ يُفضّل مراجعة توقيت رسائل التذكير.",
    });
  const g = fs(t, s);
  g &&
    i.push({
      tone: "neutral",
      message: `${g.name} هي الخدمة الأكثر طلبًا خلال هذه الفترة.`,
    });
  const D = t.filter(
    (_) =>
      _.status === "no_show" &&
      new Date(_.startsAt) >= n.start &&
      new Date(_.startsAt) < n.end,
  ).length;
  return (
    D >= 1 &&
      i.push({
        tone: "warning",
        message: `تم تسجيل ${D} حالة عدم حضور هذا الأسبوع؛ يُفضّل إرسال تأكيد أقرب إلى الموعد.`,
      }),
    i.length === 0 &&
      i.push({
        tone: "neutral",
        message: "أداء العيادة مستقر ولا توجد تغيّرات ملحوظة هذا الأسبوع.",
      }),
    i
  );
}
const Vt = {
    scheduled: "bg-line/60 text-ink",
    confirmed: "bg-primary-light text-primary-dark",
    waiting: "bg-warning/15 text-warning",
    in_progress: "bg-accent-light text-accent",
    completed: "bg-success/15 text-success",
    cancelled: "bg-danger/10 text-danger",
    no_show: "bg-danger/10 text-danger",
    positive: "bg-success/15 text-success",
    warning: "bg-warning/15 text-warning",
    neutral: "bg-primary-light text-primary-dark",
    new: "bg-line/60 text-ink",
    unlocked: "bg-primary-light text-primary-dark",
    gold: "bg-warning/15 text-warning",
    vip: "bg-accent-light text-accent",
  },
  xn = {
    scheduled: "مجدول",
    confirmed: "مؤكد",
    waiting: "في الانتظار",
    in_progress: "جاري الكشف",
    completed: "مكتمل",
    cancelled: "ملغي",
    no_show: "لم يحضر",
    new: "جديد",
    unlocked: "مميز",
    gold: "ذهبي",
    vip: "VIP",
  };
function ue({ tone: t = "neutral", children: s }) {
  const a = xn[t] ?? s ?? t.replace(/_/g, " ");
  return e.jsx("span", {
    className: `inline-flex items-center gap-1.5 rounded-pill px-2.5 py-1 text-xs font-medium capitalize ${Vt[t] || Vt.neutral}`,
    children: a,
  });
}
function mn() {
  const { appointments: t } = H(),
    s = o.useMemo(() => rn(t), [t]),
    a = [
      { label: "مواعيد اليوم", value: s.total },
      { label: "في الانتظار", value: s.waiting },
      { label: "مكتملة", value: s.completed },
      { label: "ملغاة", value: s.cancelled },
    ];
  return e.jsxs($, {
    children: [
      e.jsx("h3", { className: "font-medium text-ink", children: "اليوم" }),
      e.jsx("div", {
        className: "mt-4 grid grid-cols-2 gap-4 sm:grid-cols-4",
        children: a.map((i) =>
          e.jsxs(
            "div",
            {
              children: [
                e.jsx("p", {
                  className: "font-display text-2xl text-ink",
                  children: i.value,
                }),
                e.jsx("p", {
                  className: "mt-0.5 text-xs text-ink/50",
                  children: i.label,
                }),
              ],
            },
            i.label,
          ),
        ),
      }),
    ],
  });
}
function pn() {
  var u, C, v, g, D;
  const {
      appointments: t,
      patients: s,
      doctors: a,
      services: i,
      visits: n,
    } = H(),
    r = o.useMemo(() => {
      const _ = new Date();
      return t
        .filter(
          (T) =>
            ["scheduled", "confirmed", "waiting"].includes(T.status) &&
            new Date(T.startsAt) >= _,
        )
        .sort((T, z) => new Date(T.startsAt) - new Date(z.startsAt))[0];
    }, [t]);
  if (!r)
    return e.jsx(se, {
      icon: ba,
      title: "لا يوجد مرضى قادمون",
      description: "تم الانتهاء من مواعيد اليوم.",
    });
  const x = s.find((_) => _.id === r.patientId),
    l = a.find((_) => _.id === r.doctorId),
    p = i.find((_) => _.id === r.serviceId),
    m = n
      .filter((_) => _.patientId === (x == null ? void 0 : x.id))
      .sort((_, T) => new Date(T.visitDate) - new Date(_.visitDate))[0];
  return e.jsxs($, {
    className: "border-primary/30",
    children: [
      e.jsxs("div", {
        className: "flex items-center justify-between",
        children: [
          e.jsx("h3", {
            className: "font-medium text-ink",
            children: "المريض القادم",
          }),
          e.jsx(ue, { tone: r.status, children: r.status }),
        ],
      }),
      e.jsxs("div", {
        className: "mt-3",
        children: [
          e.jsx("p", {
            className: "font-display text-lg text-ink",
            children: x == null ? void 0 : x.fullName,
          }),
          e.jsxs("p", {
            className: "text-sm text-ink/60",
            children: [
              cs(r.startsAt),
              " · ",
              p == null ? void 0 : p.name,
              " مع ",
              l == null ? void 0 : l.fullName,
              x != null && x.dateOfBirth ? ` · ${vt(x.dateOfBirth)} سنة` : "",
            ],
          }),
        ],
      }),
      (((u = x == null ? void 0 : x.allergies) == null ? void 0 : u.length) >
        0 ||
        ((C = x == null ? void 0 : x.chronicConditions) == null
          ? void 0
          : C.length) > 0) &&
        e.jsxs("div", {
          className:
            "mt-3 flex items-start gap-2 rounded-md bg-danger/5 p-3 text-sm text-danger",
          children: [
            e.jsx(Jt, { className: "mt-0.5 h-4 w-4 shrink-0" }),
            e.jsxs("div", {
              children: [
                ((v = x.allergies) == null ? void 0 : v.length) > 0 &&
                  e.jsxs("p", {
                    children: [
                      e.jsx("span", {
                        className: "font-medium",
                        children: "الحساسية:",
                      }),
                      " ",
                      x.allergies.join(", "),
                    ],
                  }),
                ((g = x.chronicConditions) == null ? void 0 : g.length) > 0 &&
                  e.jsxs("p", {
                    children: [
                      e.jsx("span", {
                        className: "font-medium",
                        children: "الأمراض المزمنة:",
                      }),
                      " ",
                      x.chronicConditions.join(", "),
                    ],
                  }),
              ],
            }),
          ],
        }),
      ((D = x == null ? void 0 : x.currentMedications) == null
        ? void 0
        : D.length) > 0 &&
        e.jsxs("p", {
          className: "mt-2 flex items-center gap-1.5 text-sm text-ink/70",
          children: [
            e.jsx(Le, { className: "h-3.5 w-3.5" }),
            " ",
            x.currentMedications.join(", "),
          ],
        }),
      m
        ? e.jsxs("div", {
            className: "mt-3 flex items-start gap-2 text-sm text-ink/70",
            children: [
              e.jsx(ts, { className: "mt-0.5 h-3.5 w-3.5 shrink-0" }),
              e.jsxs("p", {
                children: [
                  e.jsx("span", {
                    className: "font-medium text-ink",
                    children: "آخر زيارة:",
                  }),
                  " ",
                  m.diagnosis || "—",
                  ". ",
                  m.doctorNotes,
                ],
              }),
            ],
          })
        : e.jsx("p", {
            className: "mt-3 text-sm text-ink/40",
            children: "لا توجد زيارات سابقة مسجلة.",
          }),
    ],
  });
}
function hn() {
  const { appointments: t, services: s } = H(),
    a = o.useMemo(() => cn(t, s), [t, s]),
    i = [
      { label: "إيراد اليوم", value: a.today },
      { label: "هذا الأسبوع", value: a.week },
      { label: "هذا الشهر", value: a.month },
    ];
  return e.jsxs($, {
    children: [
      e.jsx("h3", {
        className: "font-medium text-ink",
        children: "الملخص المالي",
      }),
      e.jsx("div", {
        className: "mt-4 grid grid-cols-3 gap-3",
        children: i.map((n) =>
          e.jsxs(
            "div",
            {
              children: [
                e.jsx("p", {
                  className: "font-display text-xl text-ink",
                  children: fe(n.value),
                }),
                e.jsx("p", {
                  className: "mt-0.5 text-xs text-ink/50",
                  children: n.label,
                }),
              ],
            },
            n.label,
          ),
        ),
      }),
    ],
  });
}
function un() {
  const { appointments: t, services: s } = H(),
    a = o.useMemo(() => on(t, s), [t, s]),
    i = o.useMemo(() => fs(t, s), [t, s]),
    n = t.length,
    r = t.filter((x) => x.status === "cancelled").length;
  return e.jsxs($, {
    children: [
      e.jsxs("div", {
        className: "flex flex-wrap items-baseline justify-between gap-2",
        children: [
          e.jsx("h3", {
            className: "font-medium text-ink",
            children: "إيرادات هذا الأسبوع",
          }),
          e.jsxs("div", {
            className: "flex gap-4 text-xs text-ink/50",
            children: [
              e.jsxs("span", {
                children: [
                  e.jsx("span", {
                    className: "font-medium text-ink",
                    children: n,
                  }),
                  " حجوزات",
                ],
              }),
              e.jsxs("span", {
                children: [
                  e.jsx("span", {
                    className: "font-medium text-ink",
                    children: r,
                  }),
                  " إلغاءات",
                ],
              }),
              i &&
                e.jsxs("span", {
                  children: [
                    "الأكثر طلبًا: ",
                    e.jsx("span", {
                      className: "font-medium text-ink",
                      children: i.name,
                    }),
                  ],
                }),
            ],
          }),
        ],
      }),
      e.jsx("div", {
        className: "mt-4 h-56",
        children: e.jsx(As, {
          width: "100%",
          height: "100%",
          children: e.jsxs(Ms, {
            data: a,
            margin: { left: -20 },
            children: [
              e.jsx(Ds, {
                strokeDasharray: "3 3",
                stroke: "#23344E",
                vertical: !1,
              }),
              e.jsx(Ls, {
                dataKey: "day",
                tick: { fontSize: 12, fill: "#8493AA" },
                axisLine: !1,
                tickLine: !1,
              }),
              e.jsx(Os, {
                tick: { fontSize: 12, fill: "#8493AA" },
                axisLine: !1,
                tickLine: !1,
                tickFormatter: (x) => `$${x}`,
              }),
              e.jsx($s, {
                formatter: (x) => [`$${x}`, "الإيراد"],
                cursor: { fill: "#1FB89912" },
                contentStyle: {
                  background: "#0D242D",
                  border: "1px solid #1C3A42",
                  borderRadius: 10,
                },
                labelStyle: { color: "#F2F7F5" },
                itemStyle: { color: "#69E1C8" },
              }),
              e.jsx(Ps, {
                dataKey: "revenue",
                fill: "#1FB899",
                radius: [6, 6, 0, 0],
              }),
            ],
          }),
        }),
      }),
    ],
  });
}
const gn = { positive: qe, warning: ga, neutral: ss },
  fn = {
    positive: "text-success",
    warning: "text-warning",
    neutral: "text-primary",
  };
function jn() {
  const { appointments: t, services: s } = H(),
    a = o.useMemo(() => dn(t, s), [t, s]);
  return e.jsxs($, {
    className:
      "border-primary/20 bg-gradient-to-br from-primary-light/40 to-transparent",
    children: [
      e.jsxs("div", {
        className: "flex items-center gap-2",
        children: [
          e.jsx(de, { className: "h-4 w-4 text-primary" }),
          e.jsx("h3", {
            className: "font-medium text-ink",
            children: "تحليلات العيادة الذكية",
          }),
        ],
      }),
      e.jsx("ul", {
        className: "mt-3 space-y-2",
        children: a.map((i, n) => {
          const r = gn[i.tone] || ss;
          return e.jsxs(
            "li",
            {
              className: `flex items-start gap-2 text-sm ${fn[i.tone] || "text-ink/70"}`,
              children: [
                e.jsx(r, { className: "mt-0.5 h-4 w-4 shrink-0" }),
                e.jsx("span", {
                  className: "text-ink/80",
                  children: i.message,
                }),
              ],
            },
            n,
          );
        }),
      }),
    ],
  });
}
function bn() {
  const {
    doctors: t,
    dayStatus: s,
    setDoctorDayStatus: a,
    countPatientsAheadToday: i,
  } = H();
  return e.jsxs($, {
    children: [
      e.jsxs("div", {
        className: "flex items-center gap-2",
        children: [
          e.jsx(ua, { className: "h-4 w-4 text-primary" }),
          e.jsx("h3", {
            className: "font-medium text-ink",
            children: "حالة غرفة الانتظار",
          }),
        ],
      }),
      e.jsx("div", {
        className: "mt-3 space-y-3",
        children: t.map((n) =>
          e.jsx(
            yn,
            {
              doctor: n,
              status: s[n.id] || { runningLateMinutes: 0 },
              ahead: i(n.id),
              onChange: (r) => a(n.id, { runningLateMinutes: r }),
            },
            n.id,
          ),
        ),
      }),
    ],
  });
}
function yn({ doctor: t, status: s, ahead: a, onChange: i }) {
  const [n, r] = o.useState(s.runningLateMinutes || 0);
  return e.jsxs("div", {
    className:
      "flex items-center justify-between gap-3 border-t border-line pt-3 first:border-0 first:pt-0",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("p", {
            className: "text-sm font-medium text-ink",
            children: t.fullName,
          }),
          e.jsxs("p", {
            className: "text-xs text-ink/50",
            children: ["يوجد ", a, " مريض قبله اليوم"],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex items-center gap-2",
        children: [
          e.jsx("input", {
            type: "number",
            min: 0,
            step: 5,
            value: n,
            onChange: (x) => r(Number(x.target.value)),
            className: "input w-20 text-center",
          }),
          e.jsx("span", {
            className: "text-xs text-ink/50",
            children: "دقيقة تأخير",
          }),
          e.jsx(V, {
            variant: "ghost",
            onClick: () => i(n),
            children: "تحديث",
          }),
        ],
      }),
    ],
  });
}
function vn() {
  const { followups: t, patients: s, closeFollowup: a } = H(),
    i = o.useMemo(() => t.filter((r) => r.status === "flagged"), [t]),
    n = Object.fromEntries(s.map((r) => [r.id, r]));
  return e.jsxs($, {
    className: "border-danger/30",
    children: [
      e.jsxs("div", {
        className: "flex items-center gap-2 text-danger",
        children: [
          e.jsx(Ye, { className: "h-4 w-4" }),
          e.jsx("h3", {
            className: "font-medium",
            children: "تحتاج إلى متابعة",
          }),
        ],
      }),
      i.length === 0
        ? e.jsx(se, {
            className: "mt-3 border-none py-6",
            title: "لا توجد تنبيهات",
            description: "ستظهر المتابعات والتقييمات المهمة هنا.",
          })
        : e.jsx("div", {
            className: "mt-3 space-y-3",
            children: i.map((r) => {
              const x = n[r.patientId];
              return e.jsxs(
                "div",
                {
                  className:
                    "flex items-start justify-between gap-3 border-t border-line pt-3 first:border-0 first:pt-0",
                  children: [
                    e.jsxs("div", {
                      className: "text-sm",
                      children: [
                        e.jsx(Q, {
                          to: `/dashboard/patients/${r.patientId}`,
                          className: "font-medium text-ink hover:underline",
                          children:
                            (x == null ? void 0 : x.fullName) ||
                            "مريض غير معروف",
                        }),
                        e.jsxs("p", {
                          className: "text-ink/60",
                          children: [
                            r.kind === "clinical"
                              ? "أبلغ عن استمرار الأعراض في المتابعة"
                              : "ترك تقييمًا منخفضًا",
                            " · ",
                            ke(r.scheduledFor),
                          ],
                        }),
                      ],
                    }),
                    e.jsx(V, {
                      variant: "ghost",
                      onClick: () => a(r.id),
                      children: "تمت المراجعة",
                    }),
                  ],
                },
                r.id,
              );
            }),
          }),
    ],
  });
}
function Nn() {
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("h1", {
            className: "font-display text-2xl font-bold text-ink",
            children: "نظرة عامة",
          }),
          e.jsx("p", {
            className: "text-sm text-ink/60",
            children: "ملخص أداء العيادة اليوم.",
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid gap-6 lg:grid-cols-3",
        children: [
          e.jsxs("div", {
            className: "space-y-6 lg:col-span-2",
            children: [e.jsx(mn, {}), e.jsx(un, {}), e.jsx(hn, {})],
          }),
          e.jsxs("div", {
            className: "space-y-6",
            children: [
              e.jsx(pn, {}),
              e.jsx(jn, {}),
              e.jsx(bn, {}),
              e.jsx(vn, {}),
            ],
          }),
        ],
      }),
    ],
  });
}
function wt({
  open: t,
  title: s,
  description: a,
  confirmLabel: i = "Confirm",
  variant: n = "primary",
  onConfirm: r,
  onCancel: x,
}) {
  return t
    ? e.jsx("div", {
        className:
          "fixed inset-0 z-50 flex items-center justify-center bg-ink/40 p-4",
        children: e.jsxs("div", {
          className: "w-full max-w-sm rounded-card bg-paper p-6 shadow-xl",
          children: [
            e.jsx("h3", {
              className: "font-display text-lg text-ink",
              children: s,
            }),
            a &&
              e.jsx("p", {
                className: "mt-2 text-sm text-ink/60",
                children: a,
              }),
            e.jsxs("div", {
              className: "mt-6 flex justify-end gap-2",
              children: [
                e.jsx(V, { variant: "ghost", onClick: x, children: "Cancel" }),
                e.jsx(V, { variant: n, onClick: r, children: i }),
              ],
            }),
          ],
        }),
      })
    : null;
}
const kn = [
  "all",
  "scheduled",
  "confirmed",
  "waiting",
  "in_progress",
  "completed",
  "cancelled",
  "no_show",
];
function wn() {
  const {
      appointments: t,
      patients: s,
      doctors: a,
      services: i,
      confirmAppointment: n,
      cancelAppointment: r,
      startVisit: x,
    } = H(),
    l = He(),
    [p, m] = o.useState(""),
    [u, C] = o.useState("all"),
    [v, g] = o.useState(""),
    [D, _] = o.useState(null),
    T = Object.fromEntries(s.map((I) => [I.id, I])),
    z = Object.fromEntries(a.map((I) => [I.id, I])),
    N = Object.fromEntries(i.map((I) => [I.id, I])),
    O = o.useMemo(
      () =>
        t
          .filter((I) => (u === "all" ? !0 : I.status === u))
          .filter((I) =>
            v ? new Date(I.startsAt).toISOString().slice(0, 10) === v : !0,
          )
          .filter((I) => {
            if (!p) return !0;
            const h = T[I.patientId];
            return (
              (h == null
                ? void 0
                : h.fullName.toLowerCase().includes(p.toLowerCase())) ||
              (h == null ? void 0 : h.phone.includes(p))
            );
          })
          .sort((I, h) => new Date(I.startsAt) - new Date(h.startsAt)),
      [t, u, v, p, T],
    );
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("h1", {
            className: "font-display text-2xl font-bold text-ink",
            children: "المواعيد",
          }),
          e.jsx("p", {
            className: "text-sm text-ink/60",
            children: "عرض جدول العيادة وتأكيد المواعيد وإدارتها.",
          }),
        ],
      }),
      e.jsx($, {
        children: e.jsxs("div", {
          className: "flex flex-col gap-3 sm:flex-row sm:items-center",
          children: [
            e.jsxs("div", {
              className: "relative flex-1",
              children: [
                e.jsx(gt, {
                  className:
                    "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40",
                }),
                e.jsx("input", {
                  value: p,
                  onChange: (I) => m(I.target.value),
                  placeholder: "ابحث باسم المريض أو رقم الهاتف",
                  className: "input pr-9",
                }),
              ],
            }),
            e.jsx("input", {
              type: "date",
              value: v,
              onChange: (I) => g(I.target.value),
              className: "input sm:w-44",
            }),
            e.jsx("select", {
              value: u,
              onChange: (I) => C(I.target.value),
              className: "input sm:w-44",
              children: kn.map((I) =>
                e.jsx(
                  "option",
                  {
                    value: I,
                    children: I === "all" ? "كل الحالات" : I.replace("_", " "),
                  },
                  I,
                ),
              ),
            }),
          ],
        }),
      }),
      O.length === 0
        ? e.jsx(se, {
            icon: Ws,
            title: "لا توجد مواعيد مطابقة",
            description: "جرّب تعديل البحث أو إزالة الفلاتر.",
          })
        : e.jsx($, {
            padded: !1,
            className: "overflow-hidden",
            children: e.jsx("div", {
              className: "divide-y divide-line",
              children: O.map((I) => {
                const h = T[I.patientId],
                  R = z[I.doctorId],
                  k = N[I.serviceId];
                return e.jsxs(
                  "div",
                  {
                    className:
                      "flex flex-col gap-3 p-4 sm:flex-row sm:items-center sm:justify-between",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "font-medium text-ink",
                            children: h == null ? void 0 : h.fullName,
                          }),
                          e.jsxs("p", {
                            className: "text-sm text-ink/60",
                            children: [
                              ce(I.startsAt),
                              " · ",
                              k == null ? void 0 : k.name,
                              " · ",
                              R == null ? void 0 : R.fullName,
                            ],
                          }),
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex flex-wrap items-center gap-2",
                        children: [
                          e.jsx(ue, { tone: I.status }),
                          I.status === "scheduled" &&
                            e.jsxs(V, {
                              variant: "ghost",
                              onClick: () => n(I.id),
                              children: [
                                e.jsx(Ge, { className: "h-3.5 w-3.5" }),
                                " تأكيد",
                              ],
                            }),
                          ["scheduled", "confirmed", "waiting"].includes(
                            I.status,
                          ) &&
                            e.jsxs(V, {
                              variant: "primary",
                              onClick: () => {
                                (x(I.id), l(`/dashboard/visits/${I.id}`));
                              },
                              children: [
                                e.jsx(Ke, { className: "h-3.5 w-3.5" }),
                                " بدء الكشف",
                              ],
                            }),
                          I.status === "in_progress" &&
                            e.jsx(V, {
                              variant: "primary",
                              onClick: () => l(`/dashboard/visits/${I.id}`),
                              children: "متابعة الكشف",
                            }),
                          !["completed", "cancelled", "no_show"].includes(
                            I.status,
                          ) &&
                            e.jsxs(V, {
                              variant: "danger",
                              onClick: () => _(I),
                              children: [
                                e.jsx(be, { className: "h-3.5 w-3.5" }),
                                " إلغاء",
                              ],
                            }),
                        ],
                      }),
                    ],
                  },
                  I.id,
                );
              }),
            }),
          }),
      e.jsx(wt, {
        open: !!D,
        title: "إلغاء هذا الموعد؟",
        description: "سيتم إخطار المريض وإتاحة الموعد للحجز من جديد.",
        confirmLabel: "إلغاء الموعد",
        variant: "danger",
        onCancel: () => _(null),
        onConfirm: () => {
          (r(D.id, "Cancelled by clinic"), _(null));
        },
      }),
    ],
  });
}
function _n() {
  const { patients: t } = H(),
    [s, a] = o.useState(""),
    i = o.useMemo(
      () =>
        t.filter(
          (n) =>
            n.fullName.toLowerCase().includes(s.toLowerCase()) ||
            n.phone.includes(s),
        ),
      [t, s],
    );
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("h1", {
            className: "font-display text-2xl font-bold text-ink",
            children: "المرضى",
          }),
          e.jsxs("p", {
            className: "text-sm text-ink/60",
            children: ["يوجد ", t.length, " مرضى مسجلين."],
          }),
        ],
      }),
      e.jsx($, {
        children: e.jsxs("div", {
          className: "relative",
          children: [
            e.jsx(gt, {
              className:
                "pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40",
            }),
            e.jsx("input", {
              value: s,
              onChange: (n) => a(n.target.value),
              placeholder: "ابحث بالاسم أو رقم الهاتف",
              className: "input pr-9",
            }),
          ],
        }),
      }),
      i.length === 0
        ? e.jsx(se, { icon: rs, title: "لم يتم العثور على مرضى" })
        : e.jsx($, {
            padded: !1,
            children: e.jsx("div", {
              className: "divide-y divide-line",
              children: i.map((n) =>
                e.jsxs(
                  Q,
                  {
                    to: `/dashboard/patients/${n.id}`,
                    className:
                      "flex items-center justify-between gap-3 p-4 hover:bg-line/20",
                    children: [
                      e.jsxs("div", {
                        children: [
                          e.jsx("p", {
                            className: "font-medium text-ink",
                            children: n.fullName,
                          }),
                          e.jsxs("p", {
                            className: "text-sm text-ink/60",
                            children: [
                              n.phone,
                              " · ",
                              n.completedVisits,
                              " زيارات",
                              n.lastVisitAt
                                ? ` · آخر زيارة ${ke(n.lastVisitAt)}`
                                : "",
                            ],
                          }),
                        ],
                      }),
                      e.jsx(ue, {
                        tone: n.loyaltyLevel,
                        children: n.loyaltyLevel,
                      }),
                    ],
                  },
                  n.id,
                ),
              ),
            }),
          }),
    ],
  });
}
function Cn() {
  const { id: t } = Qe(),
    {
      patients: s,
      visits: a,
      doctors: i,
      services: n,
      rewards: r,
      treatments: x,
      media: l = [],
      contentPosts: p = [],
      patientContent: m = [],
      saveTreatment: u,
      uploadPatientMedia: C,
      assignContentToPatient: v,
    } = H(),
    g = s.find((c) => c.id === t),
    [D, _] = o.useState(!1),
    [T, z] = o.useState("before"),
    [N, O] = o.useState(!1),
    [I, h] = o.useState(""),
    [R, k] = o.useState(""),
    [P, F] = o.useState(""),
    [G, Y] = o.useState(""),
    ae = o.useMemo(
      () =>
        a
          .filter((c) => c.patientId === t)
          .sort((c, b) => new Date(b.visitDate) - new Date(c.visitDate)),
      [a, t],
    ),
    ne = r.filter((c) => c.patientId === t),
    ie = x.filter((c) => c.patientId === t),
    L = l.filter((c) => c.patientId === t),
    q = m.filter((c) => c.patientId === t),
    ee = p.filter((c) => c.status === "published"),
    xe = async () => {
      if (!R) return;
      const c = await v({ patientId: t, postId: R, note: P });
      (Y(c.ok ? "تمت إضافة المحتوى لخطة المريض." : "تعذر حفظ المحتوى."),
        c.ok && (k(""), F("")));
    },
    d = async (c) => {
      var E;
      const b = (E = c.target.files) == null ? void 0 : E[0];
      if (!b) return;
      if ((h(""), !b.type.startsWith("image/") || b.size > 5 * 1024 * 1024)) {
        h("اختر صورة بحجم أقل من 5 ميجابايت.");
        return;
      }
      O(!0);
      const A = await C({ patientId: t, stage: T, file: b });
      (O(!1),
        h(A.ok ? "تم حفظ الصورة بأمان." : "تعذر رفع الصورة. حاول مرة أخرى."),
        (c.target.value = ""));
    };
  if (!g) return e.jsx(se, { title: "Patient not found" });
  const j = Object.fromEntries(i.map((c) => [c.id, c])),
    y = Object.fromEntries(n.map((c) => [c.id, c]));
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs(Q, {
        to: "/dashboard/patients",
        className:
          "inline-flex items-center gap-1 text-sm text-ink/60 hover:text-ink",
        children: [e.jsx(Ne, { className: "h-3.5 w-3.5" }), " كل المرضى"],
      }),
      e.jsxs("div", {
        className: "flex flex-wrap items-center justify-between gap-3",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("h1", {
                className: "font-display text-2xl text-ink",
                children: g.fullName,
              }),
              e.jsxs("p", {
                className: "text-sm text-ink/60",
                children: [
                  g.gender || "غير محدد",
                  g.dateOfBirth ? ` · ${vt(g.dateOfBirth)} سنة` : "",
                  " · ",
                  g.phone,
                ],
              }),
            ],
          }),
          e.jsx(ue, { tone: g.loyaltyLevel, children: g.loyaltyLevel }),
        ],
      }),
      e.jsxs("div", {
        className: "grid gap-6 lg:grid-cols-3",
        children: [
          e.jsxs("div", {
            className: "space-y-6 lg:col-span-2",
            children: [
              e.jsxs($, {
                children: [
                  e.jsx("h3", {
                    className: "font-medium text-ink",
                    children: "المعلومات الطبية",
                  }),
                  e.jsxs("div", {
                    className: "mt-3 grid gap-3 sm:grid-cols-3",
                    children: [
                      e.jsx(it, {
                        label: "الحساسية",
                        values: g.allergies,
                        empty: "لا توجد حساسية مسجلة",
                      }),
                      e.jsx(it, {
                        label: "الأمراض المزمنة",
                        values: g.chronicConditions,
                        empty: "لا توجد أمراض مسجلة",
                      }),
                      e.jsx(it, {
                        label: "الأدوية الحالية",
                        values: g.currentMedications,
                        empty: "لا توجد أدوية مسجلة",
                      }),
                    ],
                  }),
                  g.notes &&
                    e.jsx("p", {
                      className:
                        "mt-3 border-t border-line pt-3 text-sm text-ink/70",
                      children: g.notes,
                    }),
                ],
              }),
              e.jsxs($, {
                children: [
                  e.jsx("h3", {
                    className: "font-medium text-ink",
                    children: "سجل الزيارات",
                  }),
                  ae.length === 0
                    ? e.jsx(se, {
                        className: "mt-3",
                        title: "لا توجد زيارات سابقة",
                      })
                    : e.jsx("div", {
                        className: "mt-3 space-y-4",
                        children: ae.map((c) => {
                          var b, A;
                          return e.jsxs(
                            "div",
                            {
                              className:
                                "border-b border-line pb-4 last:border-0 last:pb-0",
                              children: [
                                e.jsxs("div", {
                                  className:
                                    "flex flex-wrap items-center justify-between gap-2",
                                  children: [
                                    e.jsxs("p", {
                                      className: "text-sm font-medium text-ink",
                                      children: [
                                        ce(c.visitDate),
                                        " · ",
                                        (b = y[c.serviceId]) == null
                                          ? void 0
                                          : b.name,
                                      ],
                                    }),
                                    e.jsx("span", {
                                      className: "text-xs text-ink/50",
                                      children:
                                        (A = j[c.doctorId]) == null
                                          ? void 0
                                          : A.fullName,
                                    }),
                                  ],
                                }),
                                e.jsxs("p", {
                                  className: "mt-1 text-sm text-ink/80",
                                  children: [
                                    e.jsx("span", {
                                      className: "text-ink/50",
                                      children: "التشخيص:",
                                    }),
                                    " ",
                                    c.diagnosis || "—",
                                  ],
                                }),
                                e.jsxs("p", {
                                  className: "text-sm text-ink/80",
                                  children: [
                                    e.jsx("span", {
                                      className: "text-ink/50",
                                      children: "العلاج:",
                                    }),
                                    " ",
                                    c.treatment || "—",
                                  ],
                                }),
                                c.doctorNotes &&
                                  e.jsx("p", {
                                    className: "text-sm text-ink/60",
                                    children: c.doctorNotes,
                                  }),
                                c.followUpDate &&
                                  e.jsxs("p", {
                                    className: "mt-1 text-xs text-primary",
                                    children: [
                                      "المتابعة القادمة: ",
                                      ke(c.followUpDate),
                                    ],
                                  }),
                              ],
                            },
                            c.id,
                          );
                        }),
                      }),
                ],
              }),
              e.jsxs($, {
                children: [
                  e.jsxs("div", {
                    className: "flex items-center justify-between",
                    children: [
                      e.jsxs("h3", {
                        className:
                          "flex items-center gap-2 font-medium text-ink",
                        children: [
                          e.jsx(Le, { className: "h-4 w-4" }),
                          " العلاجات والتذكيرات",
                        ],
                      }),
                      e.jsxs(V, {
                        variant: "ghost",
                        onClick: () => _((c) => !c),
                        children: [
                          e.jsx(xt, { className: "h-3.5 w-3.5" }),
                          " إضافة",
                        ],
                      }),
                    ],
                  }),
                  D &&
                    e.jsx(Sn, {
                      onCancel: () => _(!1),
                      onSave: (c) => {
                        (u({ patientId: t, ...c }), _(!1));
                      },
                    }),
                  ie.length === 0 && !D
                    ? e.jsx(se, {
                        className: "mt-3",
                        title: "لا توجد علاجات مسجلة",
                      })
                    : e.jsx("div", {
                        className: "mt-3 space-y-3",
                        children: ie.map((c) =>
                          e.jsxs(
                            "div",
                            {
                              className:
                                "rounded-md border border-line p-3 text-sm",
                              children: [
                                e.jsx("p", {
                                  className: "font-medium text-ink",
                                  children: c.medication,
                                }),
                                e.jsx("p", {
                                  dir: "auto",
                                  className:
                                    "min-w-0 whitespace-pre-wrap break-words leading-7 text-ink/60",
                                  children: c.instructions,
                                }),
                                e.jsxs("p", {
                                  className: "mt-1 text-xs text-ink/40",
                                  children: [
                                    c.startDate,
                                    " → ",
                                    c.endDate || "ongoing",
                                    " · reminder: ",
                                    c.reminderSchedule || "none",
                                  ],
                                }),
                              ],
                            },
                            c.id,
                          ),
                        ),
                      }),
                ],
              }),
              e.jsxs($, {
                children: [
                  e.jsxs("div", {
                    className:
                      "flex flex-wrap items-center justify-between gap-3",
                    children: [
                      e.jsxs("h3", {
                        className:
                          "flex items-center gap-2 font-medium text-ink",
                        children: [
                          e.jsx(It, { className: "h-4 w-4" }),
                          " متابعة الحالة بالصور",
                        ],
                      }),
                      e.jsxs("div", {
                        className: "flex items-center gap-2",
                        children: [
                          e.jsxs("select", {
                            className: "input w-auto",
                            value: T,
                            onChange: (c) => z(c.target.value),
                            children: [
                              e.jsx("option", {
                                value: "before",
                                children: "قبل العلاج",
                              }),
                              e.jsx("option", {
                                value: "after",
                                children: "بعد العلاج",
                              }),
                            ],
                          }),
                          e.jsxs("label", {
                            className:
                              "inline-flex cursor-pointer items-center gap-2 rounded-md bg-primary px-3 py-2 text-sm font-medium text-white hover:bg-primary-dark",
                            children: [
                              e.jsx(fa, { className: "h-4 w-4" }),
                              " ",
                              N ? "جاري الرفع..." : "رفع صورة",
                              e.jsx("input", {
                                type: "file",
                                accept: "image/jpeg,image/png,image/webp",
                                className: "sr-only",
                                disabled: N,
                                onChange: d,
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                  I &&
                    e.jsx("p", {
                      className: "mt-3 text-sm text-primary-dark",
                      children: I,
                    }),
                  L.length === 0
                    ? e.jsx(se, {
                        className: "mt-3",
                        icon: Gs,
                        title: "لا توجد صور للحالة",
                        description:
                          "ارفع صور قبل وبعد لمتابعة تحسن الحالة، وستظل متاحة للطبيب فقط.",
                      })
                    : e.jsx("div", {
                        className: "mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3",
                        children: L.map((c) =>
                          e.jsxs(
                            "figure",
                            {
                              className:
                                "overflow-hidden rounded-xl border border-line bg-base",
                              children: [
                                c.url
                                  ? e.jsx("img", {
                                      src: c.url,
                                      alt:
                                        c.stage === "before"
                                          ? "قبل العلاج"
                                          : "بعد العلاج",
                                      className:
                                        "aspect-square w-full object-cover",
                                    })
                                  : e.jsx("div", {
                                      className:
                                        "grid aspect-square place-items-center text-ink/30",
                                      children: e.jsx(It, {}),
                                    }),
                                e.jsxs("figcaption", {
                                  className:
                                    "flex items-center justify-between p-2 text-xs",
                                  children: [
                                    e.jsx(ue, {
                                      tone:
                                        c.stage === "before"
                                          ? "scheduled"
                                          : "completed",
                                      children:
                                        c.stage === "before" ? "قبل" : "بعد",
                                    }),
                                    e.jsx("span", {
                                      className: "text-ink/45",
                                      children: ke(c.takenAt),
                                    }),
                                  ],
                                }),
                              ],
                            },
                            c.id,
                          ),
                        ),
                      }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-6",
            children: [
              e.jsxs($, {
                children: [
                  e.jsx("h3", {
                    className: "font-medium text-ink",
                    children: "الولاء والخصومات",
                  }),
                  e.jsx("p", {
                    className: "mt-2 font-display text-3xl text-ink",
                    children: g.completedVisits,
                  }),
                  e.jsxs("p", {
                    className: "text-xs text-ink/50",
                    children: [
                      "زيارة مكتملة من أصل ",
                      g.totalVisits,
                      " حجوزات",
                    ],
                  }),
                  e.jsx("div", {
                    className: "mt-4 space-y-2",
                    children:
                      ne.length === 0
                        ? e.jsx("p", {
                            className: "text-sm text-ink/40",
                            children:
                              "لا توجد مكافآت بعد — الخصومات عند 3 و5 و10 زيارات.",
                          })
                        : ne.map((c) =>
                            e.jsxs(
                              "div",
                              {
                                className: "flex items-start gap-2 text-sm",
                                children: [
                                  e.jsx(Yt, {
                                    className:
                                      "mt-0.5 h-4 w-4 shrink-0 text-accent",
                                  }),
                                  e.jsxs("div", {
                                    children: [
                                      e.jsx("p", {
                                        className: "text-ink",
                                        children: c.rewardDescription,
                                      }),
                                      e.jsxs("p", {
                                        className: "text-xs text-ink/40",
                                        children: [
                                          "at ",
                                          c.milestoneVisits,
                                          " visits · ",
                                          ke(c.grantedAt),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              c.id,
                            ),
                          ),
                  }),
                ],
              }),
              e.jsxs($, {
                children: [
                  e.jsxs("h3", {
                    className: "flex items-center gap-2 font-medium text-ink",
                    children: [
                      e.jsx(Ae, { className: "h-4 w-4" }),
                      " محتوى موصى به للمريض",
                    ],
                  }),
                  e.jsx("p", {
                    className: "mt-1 text-xs leading-5 text-ink/45",
                    children:
                      "اختر نصيحة تظهر للمريض مع تعليماتك بعد تفعيل بوابته الآمنة.",
                  }),
                  e.jsxs("select", {
                    className: "input mt-4",
                    value: R,
                    onChange: (c) => k(c.target.value),
                    children: [
                      e.jsx("option", { value: "", children: "اختر المحتوى" }),
                      ee.map((c) =>
                        e.jsx(
                          "option",
                          { value: c.id, children: c.title },
                          c.id,
                        ),
                      ),
                    ],
                  }),
                  e.jsx("textarea", {
                    className: "input mt-2",
                    rows: "2",
                    value: P,
                    onChange: (c) => F(c.target.value),
                    placeholder: "ملاحظة خاصة للمريض (اختياري)",
                  }),
                  e.jsxs(V, {
                    className: "mt-3 w-full",
                    onClick: xe,
                    children: [
                      e.jsx(ft, { className: "h-4 w-4" }),
                      "إضافة لخطة المريض",
                    ],
                  }),
                  G &&
                    e.jsx("p", {
                      className: "mt-2 text-xs text-primary-dark",
                      children: G,
                    }),
                  q.length > 0 &&
                    e.jsx("div", {
                      className: "mt-4 space-y-2 border-t border-line pt-3",
                      children: q.map((c) => {
                        const b = p.find((A) => A.id === c.postId);
                        return e.jsxs(
                          "div",
                          {
                            className: "rounded-lg bg-base p-2 text-xs",
                            children: [
                              e.jsx("p", {
                                className: "font-bold text-ink",
                                children:
                                  (b == null ? void 0 : b.title) || "محتوى طبي",
                              }),
                              c.note &&
                                e.jsx("p", {
                                  className: "mt-1 text-ink/50",
                                  children: c.note,
                                }),
                            ],
                          },
                          c.id,
                        );
                      }),
                    }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function it({ label: t, values: s, empty: a }) {
  return e.jsxs("div", {
    children: [
      e.jsx("p", { className: "text-xs font-medium text-ink/50", children: t }),
      s != null && s.length
        ? e.jsx("ul", {
            className: "mt-1 space-y-0.5 text-sm text-ink",
            children: s.map((i) => e.jsx("li", { children: i }, i)),
          })
        : e.jsx("p", { className: "mt-1 text-sm text-ink/40", children: a }),
    ],
  });
}
function Sn({ onSave: t, onCancel: s }) {
  const [a, i] = o.useState(""),
    [n, r] = o.useState(""),
    [x, l] = o.useState(new Date().toISOString().slice(0, 10)),
    [p, m] = o.useState(""),
    [u, C] = o.useState("daily_08:00");
  return e.jsxs("div", {
    className: "mt-3 space-y-3 rounded-md border border-line p-3",
    children: [
      e.jsx("input", {
        className: "input",
        placeholder: "اسم الدواء أو العلاج",
        value: a,
        onChange: (v) => i(v.target.value),
      }),
      e.jsxs("div", {
        className: "flex items-start gap-2",
        children: [
          e.jsx("textarea", {
            className: "input",
            rows: 2,
            placeholder: "تعليمات الاستخدام — مثال: بعد الأكل",
            value: n,
            onChange: (v) => r(v.target.value),
          }),
          e.jsx(kt, { onResult: (v) => r((g) => (g ? `${g} ${v}` : v)) }),
        ],
      }),
      e.jsxs("div", {
        className: "grid grid-cols-1 gap-2 sm:grid-cols-2",
        children: [
          e.jsx("input", {
            type: "date",
            className: "input",
            value: x,
            onChange: (v) => l(v.target.value),
          }),
          e.jsx("input", {
            type: "date",
            className: "input",
            value: p,
            onChange: (v) => m(v.target.value),
          }),
        ],
      }),
      e.jsxs("select", {
        className: "input",
        value: u,
        onChange: (v) => C(v.target.value),
        children: [
          e.jsx("option", {
            value: "daily_08:00",
            children: "مرة يوميًا — الساعة 8 صباحًا",
          }),
          e.jsx("option", {
            value: "daily_08:00,daily_20:00",
            children: "مرتين يوميًا — 8 صباحًا و8 مساءً",
          }),
          e.jsx("option", {
            value: "weekly_mon_08:00",
            children: "أسبوعيًا — الاثنين الساعة 8 صباحًا",
          }),
        ],
      }),
      e.jsxs("div", {
        className: "flex justify-end gap-2",
        children: [
          e.jsx(V, { variant: "ghost", onClick: s, children: "إلغاء" }),
          e.jsx(V, {
            onClick: () =>
              a &&
              t({
                medication: a,
                instructions: n,
                startDate: x,
                endDate: p || null,
                reminderSchedule: u,
              }),
            children: "حفظ العلاج",
          }),
        ],
      }),
    ],
  });
}
const In = [
  {
    keys: ["حب الشباب", "acne"],
    title: "مسار دعم قرار — حب الشباب",
    assessment: [
      "تحديد الشدة والتوزيع ووجود ندبات",
      "مراجعة الحمل/التخطيط للحمل والحساسية والأدوية الحالية",
      "توثيق صور baseline بعد موافقة المريض",
    ],
    plan: [
      "عناية لطيفة وواقي شمس غير كوميدوجيني",
      "اختيار علاج موضعي مناسب للشدة والتحمل وفق تقييم الطبيب",
      "مناقشة العلاج الجهازي فقط عند وجود داعٍ وبعد الفحوصات اللازمة",
    ],
    safety: [
      "تجنب الريتينويدات أثناء الحمل",
      "مراجعة التداخلات وموانع الاستعمال قبل وصف أي دواء",
    ],
    followUp: "متابعة الاستجابة والتحمل خلال 6–8 أسابيع",
  },
  {
    keys: ["اكزيما", "إكزيما", "eczema", "atopic"],
    title: "مسار دعم قرار — الإكزيما",
    assessment: [
      "تقييم المساحة والشدة وتأثير الحكة على النوم",
      "البحث عن علامات العدوى الثانوية والمهيجات",
      "مراجعة التاريخ التحسسي والعلاجات السابقة",
    ],
    plan: [
      "مرطب خالٍ من العطر مع تجنب المهيجات",
      "اختيار قوة ومدة العلاج الموضعي حسب المكان والعمر",
      "خطة واضحة للتعامل مع النوبات والمحافظة",
    ],
    safety: [
      "الوجه والثنيات تحتاج اختيارات أقل قوة ومتابعة أدق",
      "وجود قشور عسلية أو ألم متزايد يستلزم تقييم العدوى",
    ],
    followUp: "متابعة خلال 2–4 أسابيع أو أسرع عند التدهور",
  },
  {
    keys: ["تساقط", "صلع", "hair loss", "alopecia"],
    title: "مسار دعم قرار — تساقط الشعر",
    assessment: [
      "تحديد النمط والمدة والمعدل مع فحص فروة الرأس",
      "مراجعة تغذية، ولادة حديثة، ضغط نفسي، وأدوية",
      "طلب الفحوصات فقط حسب التاريخ والفحص",
    ],
    plan: [
      "علاج السبب المحدد قبل إضافة علاجات نمو الشعر",
      "تصوير معياري لمقارنة الكثافة بعد موافقة المريض",
      "شرح أن تقييم الاستجابة يحتاج عدة أشهر",
    ],
    safety: [
      "استبعاد التساقط الندبي أو الالتهاب النشط",
      "مراجعة الحمل والضغط وأمراض القلب قبل بعض الخيارات",
    ],
    followUp: "متابعة موثقة بالصور خلال 8–12 أسبوعًا",
  },
  {
    keys: ["صدفية", "psoriasis"],
    title: "مسار دعم قرار — الصدفية",
    assessment: [
      "تقدير مساحة وشدة الإصابة وتأثيرها على الحياة",
      "السؤال عن ألم أو تيبس المفاصل",
      "مراجعة الأمراض المصاحبة والعلاجات السابقة",
    ],
    plan: [
      "اختيار علاج موضعي حسب المكان والشدة",
      "بحث العلاج الضوئي أو الجهازي للحالات المتوسطة/الشديدة",
      "خطة صيانة وتثقيف حول المحفزات",
    ],
    safety: [
      "أي اشتباه في التهاب مفاصل يستلزم تقييمًا مبكرًا",
      "العلاجات الجهازية تحتاج تحاليل ومراجعة موانع الاستعمال",
    ],
    followUp: "إعادة تقييم الشدة والاستجابة خلال 4–8 أسابيع",
  },
];
function An(t, s = {}) {
  var r, x, l;
  const a = t.trim().toLowerCase(),
    i = In.find((p) => p.keys.some((m) => a.includes(m)));
  if (!i) return null;
  const n = [
    ...((r = s.allergies) != null && r.length
      ? [`حساسية مسجلة: ${s.allergies.join("، ")}`]
      : []),
    ...((x = s.chronicConditions) != null && x.length
      ? [`أمراض مزمنة: ${s.chronicConditions.join("، ")}`]
      : []),
    ...((l = s.currentMedications) != null && l.length
      ? [`أدوية حالية: ${s.currentMedications.join("، ")}`]
      : []),
  ];
  return { ...i, flags: n };
}
function Mn(t) {
  return [...t.plan, `المتابعة: ${t.followUp}`].map((s) => `• ${s}`).join(`
`);
}
function Dn({ diagnosis: t, patient: s, onApply: a }) {
  const [i, n] = o.useState(null),
    [r, x] = o.useState(""),
    l = () => {
      if (t.trim().length < 3) {
        x("اكتب التشخيص أولًا للحصول على اقتراح مناسب.");
        return;
      }
      const p = An(t, s);
      (n(p),
        x(
          p
            ? ""
            : "التشخيص يحتاج مراجعة يدوية؛ لا يوجد مسار موثوق جاهز له حاليًا.",
        ));
    };
  return e.jsxs("div", {
    className:
      "rounded-card border border-primary/25 bg-gradient-to-br from-primary/10 to-paper p-5",
    children: [
      e.jsxs("div", {
        className: "flex flex-wrap items-center justify-between gap-3",
        children: [
          e.jsxs("div", {
            children: [
              e.jsxs("p", {
                className: "flex items-center gap-2 font-bold text-ink",
                children: [
                  e.jsx(de, { className: "h-5 w-5 text-primary" }),
                  " مساعد الخطة العلاجية",
                ],
              }),
              e.jsx("p", {
                className: "mt-1 text-xs text-ink/50",
                children: "دعم قرار للطبيب — لا يصف أو يحفظ علاجًا تلقائيًا.",
              }),
            ],
          }),
          e.jsx(V, { type: "button", onClick: l, children: "اقتراح خطة" }),
        ],
      }),
      r &&
        e.jsx("p", {
          className:
            "mt-4 rounded-lg bg-warning/10 px-3 py-2 text-sm text-warning",
          children: r,
        }),
      i &&
        e.jsxs("div", {
          className: "mt-5 space-y-4",
          children: [
            e.jsxs("div", {
              className: "flex items-start justify-between gap-3",
              children: [
                e.jsx("h3", {
                  className: "font-bold text-primary-dark",
                  children: i.title,
                }),
                e.jsx("button", {
                  type: "button",
                  onClick: () => n(null),
                  "aria-label": "إغلاق",
                  children: e.jsx(be, { className: "h-4 w-4 text-ink/40" }),
                }),
              ],
            }),
            i.flags.length > 0 &&
              e.jsxs("div", {
                className: "rounded-lg border border-danger/25 bg-danger/5 p-3",
                children: [
                  e.jsxs("p", {
                    className:
                      "flex items-center gap-2 text-xs font-bold text-danger",
                    children: [
                      e.jsx(Ye, { className: "h-4 w-4" }),
                      " بيانات يجب مراجعتها",
                    ],
                  }),
                  i.flags.map((p) =>
                    e.jsxs(
                      "p",
                      {
                        className: "mt-1 text-xs text-ink/65",
                        children: ["• ", p],
                      },
                      p,
                    ),
                  ),
                ],
              }),
            e.jsx(lt, { title: "نقاط التقييم", items: i.assessment }),
            e.jsx(lt, { title: "خيارات يناقشها الطبيب", items: i.plan }),
            e.jsx(lt, { title: "تنبيهات السلامة", items: i.safety }),
            e.jsxs("p", {
              className: "rounded-lg bg-base px-3 py-2 text-sm text-ink/70",
              children: [
                e.jsx("b", { children: "المتابعة المقترحة:" }),
                " ",
                i.followUp,
              ],
            }),
            e.jsxs(V, {
              type: "button",
              variant: "ghost",
              onClick: () => a(Mn(i)),
              children: [
                e.jsx(Ge, { className: "h-4 w-4" }),
                " اعتماد وإضافتها لخانة العلاج",
              ],
            }),
            e.jsxs("p", {
              className:
                "flex items-start gap-2 text-[11px] leading-5 text-ink/45",
              children: [
                e.jsx(re, { className: "mt-0.5 h-4 w-4 shrink-0" }),
                " يجب على الطبيب التحقق من الجرعات، الموانع والتداخلات وفق حالة المريض والمراجع المعتمدة.",
              ],
            }),
          ],
        }),
    ],
  });
}
function lt({ title: t, items: s }) {
  return e.jsxs("div", {
    children: [
      e.jsx("p", { className: "text-xs font-bold text-ink/55", children: t }),
      e.jsx("ul", {
        className: "mt-2 space-y-1.5",
        children: s.map((a) =>
          e.jsxs(
            "li",
            {
              className: "flex gap-2 text-sm leading-6 text-ink/75",
              children: [
                e.jsx("span", { className: "text-primary", children: "•" }),
                a,
              ],
            },
            a,
          ),
        ),
      }),
    ],
  });
}
function ClinicSafetyPanel({ patient: t, diagnosis: s, treatment: a }) {
  var C, v, g;
  const i = (t == null ? void 0 : t.allergies) || [],
    n = (t == null ? void 0 : t.chronicConditions) || [],
    r = (t == null ? void 0 : t.currentMedications) || [],
    x = (t == null ? void 0 : t.gender) === "Female",
    l = `clinic-pregnancy-${(t == null ? void 0 : t.id) || "visit"}`,
    [p, m] = o.useState(() => sessionStorage.getItem(l) || "unknown"),
    [u, D] = o.useState(!1),
    _ = `${s || ""} ${a || ""}`.toLowerCase(),
    T = (h) => h.some((R) => _.includes(R)),
    z = [...i, ...n, ...r].join(" ").toLowerCase(),
    N = [];
  (i.length > 0 &&
    N.push({
      level: "danger",
      title: "حساسية دوائية مسجلة",
      text: `راجع المادة الفعالة والمكونات قبل الوصف: ${i.join("، ")}`,
    }),
    n.length > 0 &&
      N.push({
        level: "warning",
        title: "أمراض مزمنة تحتاج مراجعة",
        text: n.join("، "),
      }),
    r.length > 0 &&
      N.push({
        level: "info",
        title: "أدوية حالية",
        text: `راجع التداخلات مع: ${r.join("، ")}`,
      }),
    x &&
      p === "unknown" &&
      N.push({
        level: "warning",
        title: "حالة الحمل/الرضاعة غير محددة",
        text: "أكد الحالة قبل اعتماد أي دواء يحتاج احتياطات خاصة.",
      }),
    T(["isotretinoin", "ايزوتريتينوين", "ريتينويد", "retinoid", "تريتينوين"]) &&
      N.push({
        level: p === "pregnant" || p === "planning" ? "danger" : "warning",
        title: "مراجعة الريتينويدات",
        text:
          p === "pregnant" || p === "planning"
            ? "الخطة تتضمن ريتينويدًا مع حمل أو تخطيط للحمل — لا تعتمدها قبل مراجعة موانع الاستعمال والبروتوكول المعتمد."
            : "راجع الحمل، وظائف الكبد، الدهون والتداخلات حسب نوع الريتينويد وطريقة استخدامه.",
      }),
    T(["doxy", "دوكس", "tetracycline", "تتراسيكلين", "مينوسايكلين"]) &&
      N.push({
        level: p === "pregnant" ? "danger" : "warning",
        title: "مراجعة التتراسيكلينات",
        text: "راجع الحمل والعمر، وتجنب الجمع مع الإيزوتريتينوين، وراجع التداخلات الدوائية.",
      }),
    T(["spironolactone", "سبيرونولاكتون", "الداكتون"]) &&
      N.push({
        level:
          p === "pregnant" || /lisinopril|ليزينوبريل|potassium|بوتاسيوم|kidney|كلى/.test(z)
            ? "danger"
            : "warning",
        title: "مراجعة السبيرونولاكتون",
        text: "راجع الحمل، ضغط الدم، وظائف الكلى والبوتاسيوم والأدوية التي ترفعه.",
      }),
    T(["methotrexate", "ميثوتركسات"]) &&
      N.push({
        level: p === "pregnant" || p === "planning" ? "danger" : "warning",
        title: "مراجعة الميثوتركسات",
        text: "راجع الحمل، الكبد وصورة الدم والتداخلات وخطة المتابعة المعملية قبل الاعتماد.",
      }),
    T(["كورتيزون", "corticosteroid", "prednisone", "بريدنيزون", "steroid"]) &&
      /diabetes|سكري|hypertension|ضغط/.test(z) &&
      N.push({
        level: "warning",
        title: "كورتيزون مع مرض مزمن",
        text: "الخطة تتضمن كورتيزونًا مع سكري أو ضغط مسجل؛ راجع الطريق والمدة والمتابعة.",
      }),
    /penicillin|بنسلين/.test(i.join(" ").toLowerCase()) &&
      T(["penicillin", "بنسلين", "amoxicillin", "أموكسيسيلين"]) &&
      N.push({
        level: "danger",
        title: "تطابق محتمل مع حساسية البنسلين",
        text: "اسم دواء من مجموعة البنسلين ظهر في الخطة مع حساسية مسجلة.",
      }),
    /sulfa|سلفا/.test(i.join(" ").toLowerCase()) &&
      T(["sulfamethoxazole", "سلفاميثوكسازول", "sulfonamide", "سلفوناميد"]) &&
      N.push({
        level: "danger",
        title: "تطابق محتمل مع حساسية السلفا",
        text: "اسم دواء من مجموعة السلفا ظهر في الخطة مع حساسية مسجلة.",
      }));
  const O = N.filter((h) => h.level === "danger").length,
    I = (h) => {
      (m(h), sessionStorage.setItem(l, h), D(!1));
    };
  return e.jsxs("section", {
    className:
      "rounded-card border border-danger/25 bg-gradient-to-br from-danger/5 to-paper p-5",
    children: [
      e.jsxs("div", {
        className: "flex flex-wrap items-start justify-between gap-3",
        children: [
          e.jsxs("div", {
            children: [
              e.jsxs("h3", {
                className: "flex items-center gap-2 font-bold text-ink",
                children: [
                  e.jsx(Ye, { className: "h-5 w-5 text-danger" }),
                  " مركز تنبيهات السلامة",
                ],
              }),
              e.jsx("p", {
                className: "mt-1 text-xs leading-5 text-ink/50",
                children:
                  "يفحص بيانات المريض ونص الخطة لتحديد نقاط المراجعة قبل اعتمادها.",
              }),
            ],
          }),
          e.jsxs("span", {
            className: `rounded-full px-3 py-1 text-xs font-bold ${O > 0 ? "bg-danger/10 text-danger" : N.length > 0 ? "bg-warning/10 text-warning" : "bg-primary/10 text-primary-dark"}`,
            children: [N.length, " تنبيه", O > 0 ? ` · ${O} مهم` : ""],
          }),
        ],
      }),
      x &&
        e.jsxs("label", {
          className: "mt-4 block",
          children: [
            e.jsx("span", {
              className: "mb-1 block text-xs font-bold text-ink/60",
              children: "حالة الحمل والرضاعة",
            }),
            e.jsxs("select", {
              className: "input max-w-md",
              value: p,
              onChange: (h) => I(h.target.value),
              children: [
                e.jsx("option", { value: "unknown", children: "غير مسجلة — يلزم السؤال" }),
                e.jsx("option", { value: "none", children: "لا يوجد حمل أو رضاعة" }),
                e.jsx("option", { value: "pregnant", children: "حامل" }),
                e.jsx("option", { value: "breastfeeding", children: "رضاعة طبيعية" }),
                e.jsx("option", { value: "planning", children: "تخطط للحمل" }),
              ],
            }),
          ],
        }),
      N.length === 0
        ? e.jsx("p", {
            className: "mt-4 rounded-lg bg-primary/10 px-3 py-2 text-sm text-primary-dark",
            children:
              "لا توجد تنبيهات تلقائية من البيانات المسجلة أو نص الخطة الحالي.",
          })
        : e.jsx("div", {
            className: "mt-4 space-y-2",
            children: N.map((h, R) =>
              e.jsxs(
                "div",
                {
                  className: `rounded-lg border p-3 ${h.level === "danger" ? "border-danger/25 bg-danger/5" : h.level === "warning" ? "border-warning/25 bg-warning/5" : "border-line bg-base/60"}`,
                  children: [
                    e.jsx("p", {
                      className: `text-xs font-bold ${h.level === "danger" ? "text-danger" : h.level === "warning" ? "text-warning" : "text-ink/70"}`,
                      children: h.title,
                    }),
                    e.jsx("p", {
                      className: "mt-1 text-xs leading-5 text-ink/65",
                      children: h.text,
                    }),
                  ],
                },
                `${h.title}-${R}`,
              ),
            ),
          }),
      N.length > 0 &&
        e.jsxs("label", {
          className:
            "mt-4 flex cursor-pointer items-start gap-2 rounded-lg border border-line bg-base/60 px-3 py-2 text-xs leading-5 text-ink/70",
          children: [
            e.jsx("input", {
              type: "checkbox",
              className: "mt-1 accent-primary",
              checked: u,
              onChange: (h) => D(h.target.checked),
            }),
            u
              ? "تمت مراجعة التنبيهات — راجع الخطة النهائية قبل إنهاء الكشف."
              : "أؤكد أنني راجعت الحساسية والتداخلات والحمل والأمراض المزمنة.",
          ],
        }),
      e.jsx("p", {
        className: "mt-3 text-[11px] leading-5 text-ink/40",
        children:
          "تنبيهات دعم قرار وليست فحصًا شاملًا للتداخلات؛ المرجع الدوائي والتقييم السريري للطبيب هما الأساس.",
      }),
    ],
  });
}
function Ln() {
  var L, q, ee, xe;
  const { appointmentId: t } = Qe(),
    s = He(),
    {
      appointments: a,
      patients: i,
      doctors: n,
      services: r,
      visits: x,
      completeVisit: l,
    } = H(),
    p = a.find((d) => d.id === t),
    m = i.find((d) => d.id === (p == null ? void 0 : p.patientId)),
    u = n.find((d) => d.id === (p == null ? void 0 : p.doctorId)),
    C = r.find((d) => d.id === (p == null ? void 0 : p.serviceId)),
    v = o.useMemo(
      () =>
        x
          .filter((d) => d.patientId === (p == null ? void 0 : p.patientId))
          .sort((d, j) => new Date(j.visitDate) - new Date(d.visitDate)),
      [x, p],
    ),
    [g, D] = o.useState(""),
    [_, T] = o.useState(""),
    [z, N] = o.useState(""),
    [O, I] = o.useState(""),
    [h, R] = o.useState(null),
    [k, P] = o.useState(!1),
    [F, G] = o.useState(!1),
    [Y, ae] = o.useState("");
  if (!p) return e.jsx(se, { title: "Appointment not found" });
  if (p.status === "completed")
    return e.jsxs("div", {
      className: "space-y-4",
      children: [
        e.jsx(Ft, {}),
        e.jsx(se, {
          icon: oe,
          title: "This visit is already completed",
          description: "Find it in the patient's visit history.",
        }),
      ],
    });
  const ne = () => R(new Date()),
    ie = async () => {
      (G(!0), ae(""));
      const d = await l(p.id, {
        diagnosis: g,
        treatment: _,
        notes: z,
        followUpDate: O || null,
      });
      if ((G(!1), !(d != null && d.ok))) {
        (ae("تعذر حفظ الزيارة. حاول مرة أخرى."), P(!1));
        return;
      }
      s("/dashboard/appointments");
    };
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsx(Ft, {}),
      e.jsxs("div", {
        className: "flex flex-wrap items-center justify-between gap-3",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("h1", {
                className: "font-display text-2xl text-ink",
                children: m == null ? void 0 : m.fullName,
              }),
              e.jsxs("p", {
                className: "text-sm text-ink/60",
                children: [
                  ce(p.startsAt),
                  " · ",
                  C == null ? void 0 : C.name,
                  " with ",
                  u == null ? void 0 : u.fullName,
                  m != null && m.dateOfBirth
                    ? ` · ${vt(m.dateOfBirth)} yrs`
                    : "",
                ],
              }),
            ],
          }),
          e.jsx(ue, { tone: p.status, children: p.status }),
        ],
      }),
      e.jsxs("div", {
        className: "grid gap-6 lg:grid-cols-3",
        children: [
          e.jsxs("div", {
            className: "space-y-4 lg:col-span-2",
            children: [
              e.jsx($, {
                children: e.jsx(rt, {
                  label: "التشخيص",
                  value: g,
                  onChange: D,
                  placeholder: "مثال: حب شباب متوسط بالوجه",
                }),
              }),
              e.jsx(Dn, {
                diagnosis: g,
                patient: m,
                onApply: (d) =>
                  T((j) =>
                    j
                      ? `${j}
${d}`
                      : d,
                  ),
              }),
              e.jsx(ClinicSafetyPanel, {
                patient: m,
                diagnosis: g,
                treatment: _,
              }),
              e.jsx($, {
                children: e.jsx(rt, {
                  label: "الخطة العلاجية المعتمدة",
                  value: _,
                  onChange: T,
                  placeholder: "اكتب الخطة أو راجع اقتراح المساعد ثم اعتمده",
                  rows: 5,
                }),
              }),
              e.jsx($, {
                children: e.jsx(rt, {
                  label: "ملاحظات الطبيب",
                  value: z,
                  onChange: N,
                  placeholder: "ملاحظات إضافية عن الحالة",
                  rows: 3,
                }),
              }),
              e.jsx($, {
                children: e.jsxs("label", {
                  className: "block",
                  children: [
                    e.jsx("span", {
                      className: "mb-1 block text-xs font-medium text-ink/60",
                      children: "موعد المتابعة (اختياري)",
                    }),
                    e.jsx("input", {
                      type: "date",
                      className: "input max-w-xs",
                      value: O,
                      onChange: (d) => I(d.target.value),
                    }),
                  ],
                }),
              }),
              e.jsxs("div", {
                className: "flex items-center gap-3",
                children: [
                  e.jsxs(V, {
                    variant: "ghost",
                    onClick: ne,
                    children: [e.jsx(is, { className: "h-4 w-4" }), " Save"],
                  }),
                  e.jsxs(V, {
                    onClick: () => P(!0),
                    children: [
                      e.jsx(oe, { className: "h-4 w-4" }),
                      " Complete visit",
                    ],
                  }),
                  h &&
                    e.jsxs("span", {
                      className: "text-xs text-ink/40",
                      children: ["Saved at ", h.toLocaleTimeString()],
                    }),
                ],
              }),
              Y &&
                e.jsx("p", { className: "text-sm text-danger", children: Y }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-4",
            children: [
              (((L = m == null ? void 0 : m.allergies) == null
                ? void 0
                : L.length) > 0 ||
                ((q = m == null ? void 0 : m.chronicConditions) == null
                  ? void 0
                  : q.length) > 0) &&
                e.jsxs($, {
                  className: "border-danger/30 bg-danger/5",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-center gap-2 text-danger",
                      children: [
                        e.jsx(Jt, { className: "h-4 w-4" }),
                        e.jsx("h3", {
                          className: "font-medium",
                          children: "Clinical flags",
                        }),
                      ],
                    }),
                    ((ee = m.allergies) == null ? void 0 : ee.length) > 0 &&
                      e.jsxs("p", {
                        className: "mt-2 text-sm text-danger",
                        children: ["Allergies: ", m.allergies.join(", ")],
                      }),
                    ((xe = m.chronicConditions) == null ? void 0 : xe.length) >
                      0 &&
                      e.jsxs("p", {
                        className: "text-sm text-danger",
                        children: ["Chronic: ", m.chronicConditions.join(", ")],
                      }),
                  ],
                }),
              e.jsxs($, {
                children: [
                  e.jsx("h3", {
                    className: "font-medium text-ink",
                    children: "Previous visits",
                  }),
                  v.length === 0
                    ? e.jsx("p", {
                        className: "mt-2 text-sm text-ink/40",
                        children: "No previous visits.",
                      })
                    : e.jsx("div", {
                        className: "mt-2 space-y-3",
                        children: v
                          .slice(0, 3)
                          .map((d) =>
                            e.jsxs(
                              "div",
                              {
                                className:
                                  "border-b border-line pb-2 text-sm last:border-0",
                                children: [
                                  e.jsx("p", {
                                    className: "text-ink/50",
                                    children: ce(d.visitDate),
                                  }),
                                  e.jsx("p", {
                                    className: "text-ink",
                                    children: d.diagnosis,
                                  }),
                                ],
                              },
                              d.id,
                            ),
                          ),
                      }),
                ],
              }),
            ],
          }),
        ],
      }),
      e.jsx(wt, {
        open: k,
        title: "Complete this visit?",
        description:
          "This will save the visit to the patient's record and trigger review + follow-up workflows.",
        confirmLabel: F ? "جاري الحفظ..." : "إنهاء الكشف",
        onCancel: () => P(!1),
        onConfirm: ie,
      }),
    ],
  });
}
function Ft() {
  return e.jsxs("button", {
    onClick: () => window.history.back(),
    className:
      "inline-flex items-center gap-1 text-sm text-ink/60 hover:text-ink",
    children: [
      e.jsx(Ne, { className: "h-3.5 w-3.5" }),
      " Back to appointments",
    ],
  });
}
function rt({ label: t, value: s, onChange: a, placeholder: i, rows: n = 2 }) {
  return e.jsxs("label", {
    className: "block",
    children: [
      e.jsx("span", {
        className: "mb-1 block text-xs font-medium text-ink/60",
        children: t,
      }),
      e.jsxs("div", {
        className: "flex items-start gap-2",
        children: [
          e.jsx("textarea", {
            className: "input",
            rows: n,
            value: s,
            onChange: (r) => a(r.target.value),
            placeholder: i,
          }),
          e.jsx(kt, { onResult: (r) => a(s ? `${s} ${r}` : r) }),
        ],
      }),
    ],
  });
}
function On() {
  const {
      waitingList: t,
      patients: s,
      services: a,
      doctors: i,
      suggestNearestSlots: n,
      convertWaitingListEntry: r,
      cancelWaitingListEntry: x,
    } = H(),
    [l, p] = o.useState(null),
    m = o.useMemo(() => t.filter((g) => g.status === "open"), [t]),
    u = Object.fromEntries(s.map((g) => [g.id, g])),
    C = Object.fromEntries(a.map((g) => [g.id, g])),
    v = Object.fromEntries(i.map((g) => [g.id, g]));
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("h1", {
            className: "font-display text-2xl text-ink",
            children: "Waiting list",
          }),
          e.jsx("p", {
            className: "text-sm text-ink/60",
            children:
              "Convert an entry to a confirmed appointment as soon as a slot opens.",
          }),
        ],
      }),
      m.length === 0
        ? e.jsx(se, {
            icon: _e,
            title: "Waiting list is empty",
            description:
              "Patients who couldn't find an open slot will appear here.",
          })
        : e.jsx($, {
            padded: !1,
            children: e.jsx("div", {
              className: "divide-y divide-line",
              children: m.map((g) => {
                const D = u[g.patientId],
                  _ = C[g.serviceId],
                  T = v[g.doctorId],
                  z = l === g.id,
                  N = z
                    ? n(
                        g.doctorId,
                        g.preferredStart
                          ? new Date(g.preferredStart)
                          : new Date(),
                        (_ == null ? void 0 : _.durationMinutes) || 30,
                        3,
                      )
                    : [];
                return e.jsxs(
                  "div",
                  {
                    className: "p-4",
                    children: [
                      e.jsxs("div", {
                        className:
                          "flex flex-wrap items-center justify-between gap-3",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className: "font-medium text-ink",
                                children: D == null ? void 0 : D.fullName,
                              }),
                              e.jsxs("p", {
                                className: "text-sm text-ink/60",
                                children: [
                                  _ == null ? void 0 : _.name,
                                  " with ",
                                  T == null ? void 0 : T.fullName,
                                  g.preferredStart &&
                                    ` · preferred ${ce(g.preferredStart)}`,
                                ],
                              }),
                            ],
                          }),
                          e.jsxs("div", {
                            className: "flex gap-2",
                            children: [
                              e.jsxs(V, {
                                variant: "ghost",
                                onClick: () => p(z ? null : g.id),
                                children: [
                                  e.jsx(Ge, { className: "h-3.5 w-3.5" }),
                                  " ",
                                  z ? "Hide slots" : "Find a slot",
                                ],
                              }),
                              e.jsxs(V, {
                                variant: "danger",
                                onClick: () => x(g.id),
                                children: [
                                  e.jsx(be, { className: "h-3.5 w-3.5" }),
                                  " Remove",
                                ],
                              }),
                            ],
                          }),
                        ],
                      }),
                      z &&
                        e.jsx("div", {
                          className:
                            "mt-3 flex flex-wrap gap-2 border-t border-line pt-3",
                          children:
                            N.length === 0
                              ? e.jsx("p", {
                                  className: "text-sm text-ink/40",
                                  children: "No openings in the next 10 days.",
                                })
                              : N.map((O) =>
                                  e.jsx(
                                    "button",
                                    {
                                      onClick: () => {
                                        (r(g.id, {
                                          doctorId: g.doctorId,
                                          startsAt: O,
                                        }),
                                          p(null));
                                      },
                                      className:
                                        "rounded-md border border-line px-3 py-2 text-sm hover:border-primary hover:text-primary",
                                      children: ce(O),
                                    },
                                    O.toISOString(),
                                  ),
                                ),
                        }),
                    ],
                  },
                  g.id,
                );
              }),
            }),
          }),
    ],
  });
}
const ze = [
  {
    name: "تهنئة عيد الفطر",
    message:
      "كل عام وأنتم بخير من عيادة تاج 🌙 نتمنى لكم بشرة صحية وأيامًا سعيدة.",
  },
  {
    name: "تهنئة عيد الأضحى",
    message: "عيد أضحى مبارك من عيادة تاج ✨ كل عام وأنتم بصحة وسعادة.",
  },
  {
    name: "العناية الصيفية بالبشرة",
    message:
      "الصيف بدأ ☀️ حافظ على بشرتك باستخدام واقي الشمس، وعيادة تاج موجودة لأي استشارة.",
  },
  {
    name: "العناية الشتوية بالبشرة",
    message:
      "مع برودة الجو، الترطيب اليومي يحمي بشرتك من الجفاف. عيادة تاج تتمنى لك صحة دائمة.",
  },
];
function $n() {
  const {
      patients: t,
      followups: s,
      rewards: a,
      notifications: i,
      campaigns: n = [],
      scheduleSeasonalCampaign: r,
    } = H(),
    [x, l] = o.useState(0),
    [p, m] = o.useState(ze[0].message),
    [u, C] = o.useState("all"),
    [v, g] = o.useState(() => {
      const h = new Date(Date.now() + 864e5);
      return (h.setHours(10, 0, 0, 0), h.toISOString().slice(0, 16));
    }),
    [D, _] = o.useState(!1),
    [T, z] = o.useState(""),
    N = o.useMemo(
      () => ({
        followups: s.filter((h) => ["pending", "sent"].includes(h.status))
          .length,
        flagged: s.filter((h) => h.status === "flagged").length,
        rewarded: new Set(a.map((h) => h.patientId)).size,
        scheduled: i.filter((h) => ["pending", "queued"].includes(h.status))
          .length,
      }),
      [s, a, i],
    ),
    O = (h) => {
      const R = Number(h);
      (l(R), m(ze[R].message));
    },
    I = async () => {
      if (!p.trim() || !v) return;
      (_(!0), z(""));
      const h = await r({
        name: ze[x].name,
        message: p.trim(),
        scheduledFor: v,
        audience: u,
      });
      (_(!1),
        z(
          h.ok
            ? "تمت جدولة الرسالة بنجاح."
            : "تعذر جدولة الرسالة. حاول مرة أخرى.",
        ));
    };
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("h1", {
            className: "font-display text-2xl font-bold text-ink",
            children: "المتابعة والخصومات",
          }),
          e.jsx("p", {
            className: "text-sm text-ink/60",
            children: "نظام ذكي يحافظ على المريض ويتابع حالته بعد الكشف.",
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
        children: [
          e.jsx(Re, { icon: ta, label: "متابعات قادمة", value: N.followups }),
          e.jsx(Re, { icon: Zt, label: "رسائل مجدولة", value: N.scheduled }),
          e.jsx(Re, {
            icon: Yt,
            label: "مرضى حصلوا على مكافآت",
            value: N.rewarded,
          }),
          e.jsx(Re, {
            icon: At,
            label: "تحتاج تدخل الطبيب",
            value: N.flagged,
            danger: N.flagged > 0,
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid gap-6 lg:grid-cols-[1.2fr_.8fr]",
        children: [
          e.jsxs($, {
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(At, { className: "h-5 w-5 text-primary" }),
                  e.jsx("h2", {
                    className: "font-bold text-ink",
                    children: "إرسال رسالة مناسبة",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "mt-5 grid gap-4 sm:grid-cols-2",
                children: [
                  e.jsxs("label", {
                    className: "block",
                    children: [
                      e.jsx("span", {
                        className: "mb-2 block text-xs font-bold text-ink/60",
                        children: "المناسبة",
                      }),
                      e.jsx("select", {
                        className: "input",
                        value: x,
                        onChange: (h) => O(h.target.value),
                        children: ze.map((h, R) =>
                          e.jsx(
                            "option",
                            { value: R, children: h.name },
                            h.name,
                          ),
                        ),
                      }),
                    ],
                  }),
                  e.jsxs("label", {
                    className: "block",
                    children: [
                      e.jsx("span", {
                        className: "mb-2 block text-xs font-bold text-ink/60",
                        children: "المستلمون",
                      }),
                      e.jsxs("select", {
                        className: "input",
                        value: u,
                        onChange: (h) => C(h.target.value),
                        children: [
                          e.jsxs("option", {
                            value: "all",
                            children: ["كل المرضى (", t.length, ")"],
                          }),
                          e.jsx("option", {
                            value: "loyal",
                            children: "عملاء الولاء فقط",
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs("label", {
                className: "mt-4 block",
                children: [
                  e.jsx("span", {
                    className: "mb-2 block text-xs font-bold text-ink/60",
                    children: "نص الرسالة",
                  }),
                  e.jsx("textarea", {
                    className: "input min-h-28",
                    value: p,
                    onChange: (h) => m(h.target.value),
                  }),
                ],
              }),
              e.jsxs("label", {
                className: "mt-4 block max-w-sm",
                children: [
                  e.jsx("span", {
                    className: "mb-2 block text-xs font-bold text-ink/60",
                    children: "موعد الإرسال",
                  }),
                  e.jsx("input", {
                    type: "datetime-local",
                    className: "input",
                    value: v,
                    onChange: (h) => g(h.target.value),
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "mt-5 flex items-center gap-3",
                children: [
                  e.jsxs(V, {
                    onClick: I,
                    disabled: D,
                    children: [
                      e.jsx(ft, { className: "h-4 w-4" }),
                      " ",
                      D ? "جاري الجدولة..." : "جدولة الرسالة",
                    ],
                  }),
                  T &&
                    e.jsx("p", {
                      className: "text-sm text-primary-dark",
                      children: T,
                    }),
                ],
              }),
            ],
          }),
          e.jsxs($, {
            children: [
              e.jsx("h2", {
                className: "font-bold text-ink",
                children: "برنامج ولاء تاج",
              }),
              e.jsx("p", {
                className: "mt-1 text-sm text-ink/55",
                children: "تُضاف المكافأة تلقائيًا عند إنهاء الكشف.",
              }),
              e.jsxs("div", {
                className: "mt-5 space-y-3",
                children: [
                  e.jsx(ct, {
                    visits: "3 زيارات",
                    title: "خصم 5%",
                    text: "على الزيارة التالية",
                  }),
                  e.jsx(ct, {
                    visits: "5 زيارات",
                    title: "خصم 10%",
                    text: "على الزيارة التالية",
                  }),
                  e.jsx(ct, {
                    visits: "10 زيارات",
                    title: "خصم 15%",
                    text: "مع أولوية في الحجز",
                  }),
                ],
              }),
              e.jsx("div", {
                className:
                  "mt-5 rounded-xl bg-primary-light p-4 text-sm leading-7 text-primary-dark",
                children:
                  "بعد كل كشف: طلب تقييم بعد ساعتين، ثم رسالة اطمئنان بعد 7 أيام. إذا اختار المريض «لم أتحسن» يظهر تنبيه للطبيب فورًا.",
              }),
            ],
          }),
        ],
      }),
      e.jsxs($, {
        children: [
          e.jsx("h2", {
            className: "font-bold text-ink",
            children: "آخر الحملات",
          }),
          n.length === 0
            ? e.jsx("p", {
                className: "mt-3 text-sm text-ink/45",
                children: "لم تتم جدولة حملات بعد.",
              })
            : e.jsx("div", {
                className: "mt-3 divide-y divide-line",
                children: n
                  .slice(0, 6)
                  .map((h) =>
                    e.jsxs(
                      "div",
                      {
                        className:
                          "flex flex-wrap items-center justify-between gap-3 py-3",
                        children: [
                          e.jsxs("div", {
                            children: [
                              e.jsx("p", {
                                className: "font-medium text-ink",
                                children: h.name,
                              }),
                              e.jsx("p", {
                                className: "text-xs text-ink/50",
                                children: ce(h.scheduledFor),
                              }),
                            ],
                          }),
                          e.jsx(ue, {
                            tone: h.status,
                            children:
                              h.status === "scheduled" ? "مجدولة" : h.status,
                          }),
                        ],
                      },
                      h.id,
                    ),
                  ),
              }),
        ],
      }),
    ],
  });
}
function Re({ icon: t, label: s, value: a, danger: i }) {
  return e.jsx($, {
    children: e.jsxs("div", {
      className: "flex items-center justify-between",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx("p", { className: "text-xs text-ink/50", children: s }),
            e.jsx("p", {
              className: `mt-1 text-2xl font-bold ${i ? "text-danger" : "text-ink"}`,
              children: a,
            }),
          ],
        }),
        e.jsx("span", {
          className:
            "grid h-10 w-10 place-items-center rounded-xl bg-primary-light text-primary",
          children: e.jsx(t, { className: "h-5 w-5" }),
        }),
      ],
    }),
  });
}
function ct({ visits: t, title: s, text: a }) {
  return e.jsxs("div", {
    className:
      "flex items-center justify-between rounded-xl border border-line p-3",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("p", { className: "font-bold text-ink", children: s }),
          e.jsx("p", { className: "text-xs text-ink/50", children: a }),
        ],
      }),
      e.jsx(ue, { tone: "gold", children: t }),
    ],
  });
}
const Bt = {
  reel: (t) => ({
    title: `3 حاجات لازم تعرفها عن ${t}`,
    excerpt: `معلومات سريعة ومبسطة تساعد المريض يفهم ${t} ويتصرف بشكل صحيح.`,
    content: `Hook: لو بتعاني من ${t}، متعملش الخطأ ده!

1) متجربش علاجات عشوائية.
2) راقب مدة وشدة الأعراض.
3) استشير طبيب الجلدية لو المشكلة مستمرة.

CTA: احجز تقييمًا لحالتك في عيادة تاج.`,
    scenes: [
      {
        title: `بتعاني من ${t}؟`,
        text: "خلي بالك من النقاط دي",
        icon: "sparkles",
      },
      {
        title: "بلاش علاج عشوائي",
        text: "نفس المشكلة قد يكون لها أكثر من سبب",
        icon: "alert",
      },
      {
        title: "تابع الأعراض ومدتها",
        text: "المعلومة تساعد الطبيب في التقييم",
        icon: "clock",
      },
      {
        title: "التشخيص هو البداية",
        text: "احجز تقييمًا في عيادة تاج",
        icon: "calendar",
      },
    ],
  }),
  post: (t) => ({
    title: `دليل مبسط لفهم ${t}`,
    excerpt: `أهم المعلومات التي يحتاجها المريض عن ${t}.`,
    content: `${t} قد يكون له أكثر من سبب، لذلك يختلف العلاج من شخص لآخر. التشخيص الصحيح يبدأ بفهم الأعراض ومدتها والعوامل المصاحبة، ثم وضع خطة مناسبة للحالة بدل تجربة وصفات عشوائية.`,
  }),
  tip: (t) => ({
    title: `نصيحة تاج عن ${t}`,
    excerpt: "خطوة بسيطة وآمنة للعناية اليومية.",
    content: `حافظ على روتين بسيط وثابت عند التعامل مع ${t}، وتوقف عن أي منتج يسبب تهيجًا واضحًا. إذا استمرت المشكلة، استشر الطبيب لتجنب تأخير التشخيص.`,
  }),
};
function Pn() {
  const {
      contentPosts: t = [],
      contentQuestions: s = [],
      saveContentPost: a,
    } = H(),
    [i, n] = o.useState("تساقط الشعر"),
    [r, x] = o.useState("reel"),
    [l, p] = o.useState("الشعر"),
    [m, u] = o.useState(() => Bt.reel("تساقط الشعر")),
    [C, v] = o.useState(!1),
    [g, D] = o.useState(""),
    _ = o.useMemo(
      () => [...s].sort((N, O) => O.occurrences - N.occurrences),
      [s],
    ),
    T = () => {
      const N = Bt[r](i || "العناية بالبشرة");
      (u({
        ...N,
        platformVariants: {
          instagram: `${N.title}

${N.excerpt}

احجز من الرابط في البايو. #عيادة_تاج #جلدية`,
          facebook: `${N.title}

${N.content}

للحجز والاستفسار اضغط على زر الحجز.`,
          tiktok: `${N.title}
${N.excerpt}
تابع د. زياد لمعلومات جلدية موثوقة.`,
          story: `هل تعرف المعلومة دي عن ${i}؟ | اسحب لمعرفة الإجابة | احجز تقييمك في تاج`,
        },
      }),
        D("تم تجهيز المسودة ونسخ السوشيال."));
    },
    z = async (N) => {
      var I, h;
      if (
        !((I = m.title) != null && I.trim()) ||
        !((h = m.content) != null && h.trim())
      )
        return;
      (v(!0), D(""));
      const O = await a({ ...m, contentType: r, category: l, status: N });
      (v(!1),
        D(
          O.ok
            ? N === "published"
              ? "تم النشر في مجلة تاج."
              : "تم حفظ المسودة."
            : "تعذر الحفظ.",
        ));
    };
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        children: [
          e.jsx("h1", {
            className: "font-display text-2xl font-bold text-ink",
            children: "استوديو المحتوى",
          }),
          e.jsx("p", {
            className: "text-sm text-ink/60",
            children:
              "حوّل خبرة د. زياد وأسئلة المرضى إلى محتوى طبي يجذب حجوزات حقيقية.",
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid gap-6 xl:grid-cols-[1.25fr_.75fr]",
        children: [
          e.jsxs($, {
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(ya, { className: "h-5 w-5 text-primary" }),
                  e.jsx("h2", {
                    className: "font-bold text-ink",
                    children: "مولّد المحتوى الذكي",
                  }),
                ],
              }),
              e.jsxs("div", {
                className: "mt-5 grid gap-3 sm:grid-cols-3",
                children: [
                  e.jsxs("label", {
                    children: [
                      e.jsx("span", {
                        className: "mb-2 block text-xs font-bold text-ink/55",
                        children: "الموضوع",
                      }),
                      e.jsx("input", {
                        className: "input",
                        value: i,
                        onChange: (N) => n(N.target.value),
                      }),
                    ],
                  }),
                  e.jsxs("label", {
                    children: [
                      e.jsx("span", {
                        className: "mb-2 block text-xs font-bold text-ink/55",
                        children: "النوع",
                      }),
                      e.jsxs("select", {
                        className: "input",
                        value: r,
                        onChange: (N) => x(N.target.value),
                        children: [
                          e.jsx("option", {
                            value: "reel",
                            children: "سكريبت Reel",
                          }),
                          e.jsx("option", {
                            value: "post",
                            children: "منشور طبي",
                          }),
                          e.jsx("option", {
                            value: "tip",
                            children: "نصيحة قصيرة",
                          }),
                        ],
                      }),
                    ],
                  }),
                  e.jsxs("label", {
                    children: [
                      e.jsx("span", {
                        className: "mb-2 block text-xs font-bold text-ink/55",
                        children: "التصنيف",
                      }),
                      e.jsxs("select", {
                        className: "input",
                        value: l,
                        onChange: (N) => p(N.target.value),
                        children: [
                          e.jsx("option", { children: "البشرة" }),
                          e.jsx("option", { children: "الشعر" }),
                          e.jsx("option", { children: "حب الشباب" }),
                          e.jsx("option", { children: "الليزر والتجميل" }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              e.jsxs(V, {
                className: "mt-4",
                variant: "ghost",
                onClick: T,
                children: [
                  e.jsx(de, { className: "h-4 w-4" }),
                  "تجهيز المسودة",
                ],
              }),
              e.jsxs("div", {
                className: "mt-6 space-y-3 border-t border-line pt-5",
                children: [
                  e.jsxs("label", {
                    children: [
                      e.jsx("span", {
                        className: "mb-2 block text-xs font-bold text-ink/55",
                        children: "العنوان",
                      }),
                      e.jsx("input", {
                        className: "input",
                        value: m.title || "",
                        onChange: (N) =>
                          u((O) => ({ ...O, title: N.target.value })),
                      }),
                    ],
                  }),
                  e.jsxs("label", {
                    children: [
                      e.jsx("span", {
                        className: "mb-2 block text-xs font-bold text-ink/55",
                        children: "الوصف المختصر",
                      }),
                      e.jsx("textarea", {
                        className: "input",
                        rows: "2",
                        value: m.excerpt || "",
                        onChange: (N) =>
                          u((O) => ({ ...O, excerpt: N.target.value })),
                      }),
                    ],
                  }),
                  e.jsxs("label", {
                    children: [
                      e.jsx("span", {
                        className: "mb-2 block text-xs font-bold text-ink/55",
                        children: "النص أو السكريبت",
                      }),
                      e.jsx("textarea", {
                        className: "input min-h-48",
                        value: m.content || "",
                        onChange: (N) =>
                          u((O) => ({ ...O, content: N.target.value })),
                      }),
                    ],
                  }),
                  m.platformVariants &&
                    e.jsxs("div", {
                      className: "rounded-xl border border-line bg-base/40 p-4",
                      children: [
                        e.jsx("p", {
                          className: "text-xs font-bold text-primary",
                          children: "جاهز للتوزيع على المنصات",
                        }),
                        e.jsx("div", {
                          className: "mt-3 grid gap-2 sm:grid-cols-2",
                          children: Object.entries(m.platformVariants).map(
                            ([N, O]) =>
                              e.jsxs(
                                "div",
                                {
                                  className: "rounded-lg bg-paper p-3",
                                  children: [
                                    e.jsx("p", {
                                      className:
                                        "text-xs font-bold uppercase text-ink/45",
                                      children: N,
                                    }),
                                    e.jsx("p", {
                                      className:
                                        "mt-1 line-clamp-3 whitespace-pre-line text-xs leading-5 text-ink/65",
                                      children: O,
                                    }),
                                  ],
                                },
                                N,
                              ),
                          ),
                        }),
                      ],
                    }),
                ],
              }),
              e.jsxs("div", {
                className: "mt-5 flex flex-wrap items-center gap-3",
                children: [
                  e.jsx(V, {
                    variant: "ghost",
                    disabled: C,
                    onClick: () => z("draft"),
                    children: "حفظ كمسودة",
                  }),
                  e.jsx(V, {
                    disabled: C,
                    onClick: () => z("published"),
                    children: "نشر في مجلة تاج",
                  }),
                  g &&
                    e.jsx("span", {
                      className: "text-sm text-primary-dark",
                      children: g,
                    }),
                ],
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-6",
            children: [
              e.jsxs($, {
                children: [
                  e.jsxs("h2", {
                    className: "flex items-center gap-2 font-bold text-ink",
                    children: [
                      e.jsx(as, { className: "h-5 w-5 text-accent" }),
                      "أسئلة تتحول إلى محتوى",
                    ],
                  }),
                  _.length
                    ? e.jsx("div", {
                        className: "mt-4 space-y-3",
                        children: _.slice(0, 5).map((N) =>
                          e.jsxs(
                            "button",
                            {
                              onClick: () => {
                                (n(N.question), T());
                              },
                              className:
                                "w-full rounded-xl border border-line p-3 text-right hover:border-primary",
                              children: [
                                e.jsx("p", {
                                  className: "text-sm font-medium text-ink",
                                  children: N.question,
                                }),
                                e.jsxs("p", {
                                  className: "mt-1 text-xs text-ink/40",
                                  children: [
                                    "تكرر ",
                                    N.occurrences,
                                    " مرة · ",
                                    N.category,
                                  ],
                                }),
                              ],
                            },
                            N.id,
                          ),
                        ),
                      })
                    : e.jsx("p", {
                        className: "mt-4 text-sm text-ink/45",
                        children: "ستظهر هنا أسئلة المرضى الخاصة من مجلة تاج.",
                      }),
                ],
              }),
              e.jsxs($, {
                children: [
                  e.jsx("h2", {
                    className: "font-bold text-ink",
                    children: "مكتبة المحتوى",
                  }),
                  e.jsx("div", {
                    className: "mt-4 space-y-3",
                    children: t
                      .slice(0, 6)
                      .map((N) =>
                        e.jsxs(
                          "div",
                          {
                            className:
                              "flex items-center gap-3 rounded-xl border border-line p-3",
                            children: [
                              e.jsx("span", {
                                className:
                                  "grid h-9 w-9 place-items-center rounded-lg bg-primary-light text-primary",
                                children:
                                  N.contentType === "reel"
                                    ? e.jsx(Ke, { className: "h-4 w-4" })
                                    : N.contentType === "post"
                                      ? e.jsx(ts, { className: "h-4 w-4" })
                                      : e.jsx(Ae, { className: "h-4 w-4" }),
                              }),
                              e.jsxs("div", {
                                className: "min-w-0 flex-1",
                                children: [
                                  e.jsx("p", {
                                    className:
                                      "truncate text-sm font-medium text-ink",
                                    children: N.title,
                                  }),
                                  e.jsx("p", {
                                    className: "text-xs text-ink/40",
                                    children: N.category,
                                  }),
                                ],
                              }),
                              e.jsx(ue, {
                                tone: N.status,
                                children:
                                  N.status === "published" ? "منشور" : "مسودة",
                              }),
                            ],
                          },
                          N.id,
                        ),
                      ),
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Tn() {
  const {
      contentPosts: t = [],
      contentQuestions: s = [],
      appointments: a,
      services: i,
    } = H(),
    n = Object.fromEntries(i.map((l) => [l.id, l.priceCents])),
    r = o.useMemo(() => {
      const l = a.filter((m) => m.sourcePostId || m.campaignCode),
        p = l.filter((m) => m.status === "completed");
      return {
        views: t.reduce((m, u) => m + (u.views || 0), 0),
        engagement: t.reduce(
          (m, u) => m + (u.likes || 0) + (u.saves || 0) + (u.shares || 0),
          0,
        ),
        bookings: l.length,
        revenue: p.reduce((m, u) => m + (n[u.serviceId] || 0), 0),
        attended: p.length,
        referrals: a.filter((m) => {
          var u;
          return (u = m.campaignCode) == null ? void 0 : u.startsWith("ref:");
        }).length,
      };
    }, [t, a, n]),
    x = t
      .filter((l) => l.status === "published")
      .map((l) => {
        const p = a.filter(
            (u) => u.sourcePostId === l.id || u.campaignCode === l.campaignCode,
          ),
          m = p
            .filter((u) => u.status === "completed")
            .reduce((u, C) => u + (n[C.serviceId] || 0), 0);
        return { ...l, bookings: p.length, revenue: m };
      })
      .sort((l, p) => p.revenue - l.revenue || p.views - l.views);
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        className: "flex flex-wrap items-end justify-between gap-3",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("h1", {
                className: "font-display text-2xl font-bold text-ink",
                children: "مركز النمو",
              }),
              e.jsx("p", {
                className: "text-sm text-ink/60",
                children: "من المحتوى والتفاعل إلى الحجز والإيراد.",
              }),
            ],
          }),
          e.jsxs(Q, {
            to: "/dashboard/content",
            className:
              "inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white",
            children: [
              "إنشاء محتوى جديد ",
              e.jsx(Xt, { className: "h-4 w-4" }),
            ],
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid gap-4 sm:grid-cols-2 xl:grid-cols-4",
        children: [
          e.jsx(Ve, {
            icon: Me,
            label: "إجمالي المشاهدات",
            value: r.views.toLocaleString("ar-EG"),
          }),
          e.jsx(Ve, {
            icon: De,
            label: "التفاعلات",
            value: r.engagement.toLocaleString("ar-EG"),
          }),
          e.jsx(Ve, {
            icon: he,
            label: "حجوزات من المحتوى",
            value: r.bookings,
          }),
          e.jsx(Ve, {
            icon: Dt,
            label: "إيراد من المحتوى",
            value: fe(r.revenue),
          }),
        ],
      }),
      e.jsxs($, {
        children: [
          e.jsx("h2", {
            className: "font-bold text-ink",
            children: "رحلة المريض من المشاهدة إلى الإيراد",
          }),
          e.jsxs("div", {
            className: "mt-5 grid gap-3 sm:grid-cols-5",
            children: [
              e.jsx(Se, { icon: Me, label: "مشاهدة", value: r.views }),
              e.jsx(Se, { icon: De, label: "تفاعل", value: r.engagement }),
              e.jsx(Se, { icon: he, label: "حجز", value: r.bookings }),
              e.jsx(Se, { icon: ja, label: "حضر", value: r.attended }),
              e.jsx(Se, { icon: Dt, label: "إيراد", value: fe(r.revenue) }),
            ],
          }),
        ],
      }),
      e.jsxs($, {
        children: [
          e.jsxs("div", {
            className: "flex items-center gap-2",
            children: [
              e.jsx(qe, { className: "h-5 w-5 text-primary" }),
              e.jsx("h2", {
                className: "font-bold text-ink",
                children: "المحتوى → الحجز → الإيراد",
              }),
            ],
          }),
          e.jsx("div", {
            className: "mt-5 overflow-x-auto",
            children: e.jsxs("table", {
              className: "w-full min-w-[680px] text-right text-sm",
              children: [
                e.jsx("thead", {
                  className: "border-b border-line text-xs text-ink/45",
                  children: e.jsxs("tr", {
                    children: [
                      e.jsx("th", {
                        className: "pb-3 font-medium",
                        children: "المحتوى",
                      }),
                      e.jsx("th", {
                        className: "pb-3 font-medium",
                        children: "المشاهدات",
                      }),
                      e.jsx("th", {
                        className: "pb-3 font-medium",
                        children: "إعجاب",
                      }),
                      e.jsx("th", {
                        className: "pb-3 font-medium",
                        children: "حفظ",
                      }),
                      e.jsx("th", {
                        className: "pb-3 font-medium",
                        children: "الحجوزات",
                      }),
                      e.jsx("th", {
                        className: "pb-3 font-medium",
                        children: "الإيراد",
                      }),
                    ],
                  }),
                }),
                e.jsx("tbody", {
                  children: x.map((l) =>
                    e.jsxs(
                      "tr",
                      {
                        className: "border-b border-line/70 last:border-0",
                        children: [
                          e.jsxs("td", {
                            className: "py-4",
                            children: [
                              e.jsx("p", {
                                className: "max-w-xs font-medium text-ink",
                                children: l.title,
                              }),
                              e.jsx("p", {
                                className: "text-xs text-ink/40",
                                children: l.category,
                              }),
                            ],
                          }),
                          e.jsx("td", { children: l.views || 0 }),
                          e.jsx("td", { children: l.likes || 0 }),
                          e.jsx("td", { children: l.saves || 0 }),
                          e.jsx("td", {
                            className: "font-bold text-primary-dark",
                            children: l.bookings,
                          }),
                          e.jsx("td", {
                            className: "font-bold text-accent",
                            children: fe(l.revenue),
                          }),
                        ],
                      },
                      l.id,
                    ),
                  ),
                }),
              ],
            }),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid gap-6 lg:grid-cols-2",
        children: [
          e.jsxs($, {
            className: "bg-gradient-to-l from-primary/15 to-paper",
            children: [
              e.jsx("h2", {
                className: "font-bold text-ink",
                children: "اقتراح النمو هذا الأسبوع",
              }),
              e.jsx("p", {
                className: "mt-2 text-sm leading-7 text-ink/60",
                children: s[0]
                  ? `سؤال «${s[0].question}» وصل من المرضى. اقترح تحويله إلى Reel قصير مع رابط حجز مباشر.`
                  : "محتوى واقي الشمس هو الأعلى حفظًا ومشاركة. اقترح نشر Reel قصير عن أخطاء استخدامه وربطه بكشف الجلدية.",
              }),
              e.jsxs("div", {
                className: "mt-4 flex gap-5 text-xs text-ink/45",
                children: [
                  e.jsxs("span", {
                    className: "flex gap-1",
                    children: [
                      e.jsx(je, { className: "h-4 w-4" }),
                      "نية عالية للرجوع",
                    ],
                  }),
                  e.jsxs("span", {
                    className: "flex gap-1",
                    children: [
                      e.jsx(qe, { className: "h-4 w-4" }),
                      "طلب حقيقي",
                    ],
                  }),
                ],
              }),
            ],
          }),
          e.jsxs($, {
            children: [
              e.jsxs("h2", {
                className: "flex items-center gap-2 font-bold text-ink",
                children: [
                  e.jsx(ls, { className: "h-5 w-5 text-primary" }),
                  "برنامج الإحالة",
                ],
              }),
              e.jsx("p", {
                className: "mt-2 text-sm leading-7 text-ink/60",
                children:
                  "كل مريض راضٍ يمكن منحه رابط حجز خاص. النظام يسجل الحجوزات القادمة منه ويجهز مكافأته تلقائيًا عند حضور المريض الجديد.",
              }),
              e.jsxs("div", {
                className:
                  "mt-4 flex items-end justify-between rounded-xl bg-primary-light p-4",
                children: [
                  e.jsxs("div", {
                    children: [
                      e.jsx("p", {
                        className: "text-xs text-ink/45",
                        children: "حجوزات الإحالة",
                      }),
                      e.jsx("p", {
                        className: "mt-1 text-2xl font-bold text-primary-dark",
                        children: r.referrals,
                      }),
                    ],
                  }),
                  e.jsx("span", {
                    className: "text-xs font-bold text-primary-dark",
                    children: "مكافأة بعد الحضور فقط",
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Ve({ icon: t, label: s, value: a }) {
  return e.jsx($, {
    children: e.jsxs("div", {
      className: "flex items-center justify-between",
      children: [
        e.jsxs("div", {
          children: [
            e.jsx("p", { className: "text-xs text-ink/45", children: s }),
            e.jsx("p", {
              className: "mt-2 text-2xl font-bold text-ink",
              children: a,
            }),
          ],
        }),
        e.jsx("span", {
          className:
            "grid h-11 w-11 place-items-center rounded-xl bg-primary-light text-primary",
          children: e.jsx(t, { className: "h-5 w-5" }),
        }),
      ],
    }),
  });
}
function Se({ icon: t, label: s, value: a }) {
  return e.jsxs("div", {
    className:
      "relative rounded-xl border border-line bg-base/30 p-4 text-center after:absolute after:-left-2 after:top-1/2 after:hidden after:h-px after:w-4 after:bg-line sm:after:block sm:last:after:hidden",
    children: [
      e.jsx(t, { className: "mx-auto h-5 w-5 text-primary" }),
      e.jsx("p", { className: "mt-2 text-xs text-ink/45", children: s }),
      e.jsx("p", {
        className: "mt-1 font-bold text-ink",
        children: typeof a == "number" ? a.toLocaleString("ar-EG") : a,
      }),
    ],
  });
}
const Ue = (t = "", s = 0) => ({ label: t, score: s }),
  js = () => ({
    text: "",
    options: [Ue("نعم", 2), Ue("أحيانًا", 1), Ue("لا", 0)],
  }),
  Ut = () => ({
    title: "",
    description: "",
    category: "البشرة",
    serviceId: "",
    isActive: !0,
    questions: [js()],
  });
function En() {
  const {
      contentQuizzes: t = [],
      services: s,
      saveQuiz: a,
      toggleQuiz: i,
      deleteQuiz: n,
    } = H(),
    [r, x] = o.useState(null),
    [l, p] = o.useState(Ut),
    [m, u] = o.useState(!1),
    [C, v] = o.useState(""),
    [g, D] = o.useState(null),
    _ = () => {
      (x("new"), p(Ut()), v(""));
    },
    T = (k) => {
      (x(k.id),
        p({
          ...k,
          questions: k.questions.map((P) => ({
            ...P,
            options: P.options.map((F) => ({ ...F })),
          })),
        }),
        v(""));
    },
    z = (k, P) =>
      p((F) => ({
        ...F,
        questions: F.questions.map((G, Y) => (Y === k ? { ...G, ...P } : G)),
      })),
    N = (k, P, F) =>
      p((G) => ({
        ...G,
        questions: G.questions.map((Y, ae) =>
          ae === k
            ? {
                ...Y,
                options: Y.options.map((ne, ie) =>
                  ie === P ? { ...ne, ...F } : ne,
                ),
              }
            : Y,
        ),
      })),
    O = (k) =>
      p((P) => ({ ...P, questions: P.questions.filter((F, G) => G !== k) })),
    I = (k) => z(k, { options: [...l.questions[k].options, Ue()] }),
    h = (k, P) =>
      z(k, { options: l.questions[k].options.filter((F, G) => G !== P) }),
    R = async () => {
      if ((v(""), l.title.trim().length < 5))
        return v("اكتب عنوانًا واضحًا للاختبار.");
      if (!l.questions.length) return v("أضف سؤالًا واحدًا على الأقل.");
      if (
        l.questions.some(
          (P) =>
            P.text.trim().length < 5 ||
            P.options.length < 2 ||
            P.options.some((F) => !F.label.trim()),
        )
      )
        return v("أكمل نص كل سؤال وأضف اختيارين على الأقل.");
      u(!0);
      const k = await a({ ...l, id: r === "new" ? void 0 : r });
      if ((u(!1), !k.ok)) return v("تعذر الحفظ. ربما يوجد اختبار بنفس الرابط.");
      (v("تم حفظ الاختبار بنجاح."), x(null));
    };
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        className: "flex flex-wrap items-end justify-between gap-3",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("h1", {
                className: "font-display text-2xl font-bold text-ink",
                children: "إدارة الاختبارات",
              }),
              e.jsx("p", {
                className: "text-sm text-ink/60",
                children:
                  "أنشئ اختبارات توعوية آمنة واربط النتيجة بالخدمة المناسبة.",
              }),
            ],
          }),
          e.jsxs(V, {
            onClick: _,
            children: [e.jsx(xt, { className: "h-4 w-4" }), "اختبار جديد"],
          }),
        ],
      }),
      r &&
        e.jsxs($, {
          className: "border-primary/30",
          children: [
            e.jsxs("div", {
              className: "flex items-center justify-between",
              children: [
                e.jsxs("div", {
                  children: [
                    e.jsx("p", {
                      className: "text-xs font-bold text-primary",
                      children: r === "new" ? "اختبار جديد" : "تعديل الاختبار",
                    }),
                    e.jsx("h2", {
                      className: "mt-1 text-xl font-bold text-ink",
                      children: "بيانات وأسئلة الاختبار",
                    }),
                  ],
                }),
                e.jsx("button", {
                  onClick: () => x(null),
                  className: "rounded-lg border border-line p-2 text-ink/50",
                  children: e.jsx(be, { className: "h-4 w-4" }),
                }),
              ],
            }),
            e.jsxs("div", {
              className: "mt-6 grid gap-4 sm:grid-cols-2",
              children: [
                e.jsx(Fe, {
                  label: "عنوان الاختبار",
                  children: e.jsx("input", {
                    className: "input",
                    value: l.title,
                    onChange: (k) => p({ ...l, title: k.target.value }),
                    placeholder: "مثال: هل بشرتك محتاجة كشف؟",
                  }),
                }),
                e.jsx(Fe, {
                  label: "التصنيف",
                  children: e.jsxs("select", {
                    className: "input",
                    value: l.category,
                    onChange: (k) => p({ ...l, category: k.target.value }),
                    children: [
                      e.jsx("option", { children: "البشرة" }),
                      e.jsx("option", { children: "الشعر" }),
                      e.jsx("option", { children: "حب الشباب" }),
                      e.jsx("option", { children: "الليزر والتجميل" }),
                      e.jsx("option", { children: "عام" }),
                    ],
                  }),
                }),
                e.jsx(Fe, {
                  label: "وصف قصير",
                  children: e.jsx("input", {
                    className: "input",
                    value: l.description || "",
                    onChange: (k) => p({ ...l, description: k.target.value }),
                    placeholder: "اختبار توعوي في أقل من دقيقة",
                  }),
                }),
                e.jsx(Fe, {
                  label: "الخدمة المقترحة بعد النتيجة",
                  children: e.jsxs("select", {
                    className: "input",
                    value: l.serviceId || "",
                    onChange: (k) => p({ ...l, serviceId: k.target.value }),
                    children: [
                      e.jsx("option", {
                        value: "",
                        children: "بدون خدمة محددة",
                      }),
                      s.map((k) =>
                        e.jsx(
                          "option",
                          { value: k.id, children: k.name },
                          k.id,
                        ),
                      ),
                    ],
                  }),
                }),
              ],
            }),
            e.jsxs("label", {
              className:
                "mt-4 flex items-center gap-3 rounded-xl border border-line bg-base/40 p-4",
              children: [
                e.jsx("input", {
                  type: "checkbox",
                  checked: l.isActive,
                  onChange: (k) => p({ ...l, isActive: k.target.checked }),
                  className: "h-4 w-4 accent-primary",
                }),
                e.jsxs("span", {
                  children: [
                    e.jsx("b", {
                      className: "block text-sm text-ink",
                      children: "نشر الاختبار في مجلة تاج",
                    }),
                    e.jsx("small", {
                      className: "text-ink/45",
                      children: "يمكن حفظه متوقفًا وتشغيله لاحقًا.",
                    }),
                  ],
                }),
              ],
            }),
            e.jsx("div", {
              className: "mt-7 space-y-4",
              children: l.questions.map((k, P) =>
                e.jsxs(
                  "div",
                  {
                    className:
                      "rounded-2xl border border-line bg-base/30 p-4 sm:p-5",
                    children: [
                      e.jsxs("div", {
                        className: "flex items-start gap-3",
                        children: [
                          e.jsx("span", {
                            className:
                              "grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-xs font-bold text-white",
                            children: P + 1,
                          }),
                          e.jsx("input", {
                            className: "input",
                            value: k.text,
                            onChange: (F) => z(P, { text: F.target.value }),
                            placeholder: "اكتب السؤال",
                          }),
                          l.questions.length > 1 &&
                            e.jsx("button", {
                              onClick: () => O(P),
                              className: "mt-1 text-danger",
                              "aria-label": "حذف السؤال",
                              children: e.jsx(Mt, { className: "h-4 w-4" }),
                            }),
                        ],
                      }),
                      e.jsx("div", {
                        className: "mt-4 space-y-2 sm:mr-11",
                        children: k.options.map((F, G) =>
                          e.jsxs(
                            "div",
                            {
                              className: "grid grid-cols-[1fr_88px_28px] gap-2",
                              children: [
                                e.jsx("input", {
                                  className: "input",
                                  value: F.label,
                                  onChange: (Y) =>
                                    N(P, G, { label: Y.target.value }),
                                  placeholder: "نص الاختيار",
                                }),
                                e.jsxs("select", {
                                  className: "input",
                                  value: F.score,
                                  onChange: (Y) =>
                                    N(P, G, { score: Number(Y.target.value) }),
                                  children: [
                                    e.jsx("option", {
                                      value: 0,
                                      children: "0 آمن",
                                    }),
                                    e.jsx("option", {
                                      value: 1,
                                      children: "1 متوسط",
                                    }),
                                    e.jsx("option", {
                                      value: 2,
                                      children: "2 يحتاج انتباه",
                                    }),
                                  ],
                                }),
                                e.jsx("button", {
                                  disabled: k.options.length <= 2,
                                  onClick: () => h(P, G),
                                  className: "text-ink/30 disabled:opacity-20",
                                  "aria-label": "حذف الاختيار",
                                  children: e.jsx(be, { className: "h-4 w-4" }),
                                }),
                              ],
                            },
                            G,
                          ),
                        ),
                      }),
                      e.jsx("button", {
                        onClick: () => I(P),
                        className: "mt-3 text-xs font-bold text-primary-dark",
                        children: "+ إضافة اختيار",
                      }),
                    ],
                  },
                  P,
                ),
              ),
            }),
            e.jsxs("button", {
              onClick: () =>
                p((k) => ({ ...k, questions: [...k.questions, js()] })),
              className:
                "mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-primary/40 p-4 text-sm font-bold text-primary-dark",
              children: [e.jsx(xt, { className: "h-4 w-4" }), "إضافة سؤال"],
            }),
            C &&
              e.jsx("p", {
                className: `mt-4 text-sm ${C.startsWith("تم") ? "text-success" : "text-danger"}`,
                children: C,
              }),
            e.jsxs("div", {
              className: "mt-5 flex justify-end gap-2",
              children: [
                e.jsx(V, {
                  variant: "ghost",
                  onClick: () => x(null),
                  children: "إلغاء",
                }),
                e.jsxs(V, {
                  disabled: m,
                  onClick: R,
                  children: [
                    e.jsx(is, { className: "h-4 w-4" }),
                    m ? "جاري الحفظ..." : "حفظ الاختبار",
                  ],
                }),
              ],
            }),
          ],
        }),
      e.jsx("div", {
        className: "grid gap-4 lg:grid-cols-2",
        children: t.map((k) => {
          var P;
          return e.jsxs(
            $,
            {
              children: [
                e.jsxs("div", {
                  className: "flex items-start gap-4",
                  children: [
                    e.jsx("span", {
                      className:
                        "grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary-light text-primary",
                      children: e.jsx(es, { className: "h-6 w-6" }),
                    }),
                    e.jsxs("div", {
                      className: "min-w-0 flex-1",
                      children: [
                        e.jsxs("div", {
                          className: "flex flex-wrap items-center gap-2",
                          children: [
                            e.jsx("h2", {
                              className: "font-bold text-ink",
                              children: k.title,
                            }),
                            e.jsx("span", {
                              className: `rounded-full px-2 py-1 text-[10px] font-bold ${k.isActive ? "bg-success/15 text-success" : "bg-line text-ink/50"}`,
                              children: k.isActive ? "منشور" : "متوقف",
                            }),
                          ],
                        }),
                        e.jsx("p", {
                          className: "mt-1 text-sm text-ink/50",
                          children: k.description,
                        }),
                        e.jsxs("p", {
                          className: "mt-3 text-xs text-ink/40",
                          children: [
                            k.questions.length,
                            " أسئلة · ",
                            k.category,
                            " · ",
                            ((P = s.find((F) => F.id === k.serviceId)) == null
                              ? void 0
                              : P.name) || "بدون خدمة",
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                e.jsxs("div", {
                  className:
                    "mt-5 flex flex-wrap gap-2 border-t border-line pt-4",
                  children: [
                    e.jsxs(V, {
                      variant: "ghost",
                      onClick: () => T(k),
                      children: [
                        e.jsx(xa, { className: "h-3.5 w-3.5" }),
                        "تعديل",
                      ],
                    }),
                    e.jsxs(V, {
                      variant: "ghost",
                      onClick: () => i(k.id, !k.isActive),
                      children: [
                        k.isActive
                          ? e.jsx(Js, { className: "h-3.5 w-3.5" })
                          : e.jsx(Me, { className: "h-3.5 w-3.5" }),
                        k.isActive ? "إيقاف" : "نشر",
                      ],
                    }),
                    k.isActive &&
                      e.jsxs(Q, {
                        to: `/quiz/${k.slug}`,
                        target: "_blank",
                        className:
                          "inline-flex items-center gap-2 rounded-md border border-line px-4 py-2 text-sm font-medium text-ink",
                        children: [
                          e.jsx(oe, { className: "h-3.5 w-3.5" }),
                          "معاينة",
                        ],
                      }),
                    e.jsxs(V, {
                      variant: "danger",
                      onClick: () => D(k),
                      children: [
                        e.jsx(Mt, { className: "h-3.5 w-3.5" }),
                        "حذف",
                      ],
                    }),
                  ],
                }),
              ],
            },
            k.id,
          );
        }),
      }),
      e.jsx(wt, {
        open: !!g,
        title: "حذف الاختبار؟",
        description: `سيتم حذف «${(g == null ? void 0 : g.title) || ""}» نهائيًا من لوحة الطبيب والمجلة.`,
        confirmLabel: "حذف الاختبار",
        variant: "danger",
        onCancel: () => D(null),
        onConfirm: async () => {
          (await n(g.id), D(null));
        },
      }),
    ],
  });
}
function Fe({ label: t, children: s }) {
  return e.jsxs("label", {
    className: "block",
    children: [
      e.jsx("span", {
        className: "mb-2 block text-xs font-bold text-ink/55",
        children: t,
      }),
      s,
    ],
  });
}
const zn = [
    {
      title: "أجهزة الطاقة لعلاج حب الشباب في البشرة الملونة",
      source: "DermWorld Weekly — AAD",
      date: "19 أغسطس 2026",
      category: "حب الشباب",
      url: "https://www.aad.org/dw/weekly",
    },
    {
      title: "طفح دوائي جلدي مرتبط باستخدام Tirzepatide",
      source: "DermWorld Weekly — AAD",
      date: "19 أغسطس 2026",
      category: "تفاعلات دوائية",
      url: "https://www.aad.org/dw/weekly",
    },
    {
      title: "أحدث الأبحاث المنشورة Online First في الجلدية",
      source: "JAMA Dermatology",
      date: "تحديث مستمر",
      category: "أبحاث",
      url: "https://jamanetwork.com/journals/jamadermatology/pages/rss/",
    },
    {
      title: "الإرشادات السريرية الحالية للأمراض الجلدية",
      source: "American Academy of Dermatology",
      date: "مرجع متجدد",
      category: "إرشادات",
      url: "https://www.aad.org/member/clinical-quality/guidelines",
    },
  ],
  Rn = [
    {
      title: "البحث عن مستحضر مسجل وسعره الرسمي",
      text: "قاعدة بحث المستحضرات التابعة لهيئة الدواء المصرية.",
      url: "https://eservices.edaegypt.gov.eg/EDASearch/SearchRegDrugs.aspx",
      label: "فتح البحث الرسمي",
    },
    {
      title: "الاستعلام عن توافر دواء أو الإبلاغ عن نقصه",
      text: "طلب رسمي مجاني؛ ويمكن التواصل عبر الخط الساخن 15301.",
      url: "https://edaegypt.gov.eg/en/about-us/home-page-services/home-page-services/inquire-about-the-availability-of-pharmaceutical-products/",
      label: "استعلام عن التوافر",
    },
    {
      title: "البدائل المحلية للمستحضرات المتوقفة أو المعلقة",
      text: "قائمة رسمية تساعد الطبيب في مراجعة البدائل المحلية المتاحة.",
      url: "https://edaegypt.gov.eg/en/media-center/announcements/list-of-pharmaceutical-products-with-local-equivalents/",
      label: "مراجعة البدائل",
    },
  ];
function Vn() {
  const [t, s] = o.useState(""),
    [a, i] = o.useState([]),
    [n, r] = o.useState("loading"),
    [x, l] = o.useState(null);
  o.useEffect(() => {
    const u = new AbortController();
    return (
      fetch("/api/clinical-updates", { signal: u.signal })
        .then((C) => {
          if (!C.ok) throw new Error("unavailable");
          return C.json();
        })
        .then((C) => {
          (i(C.articles || []), l(C.updatedAt), r("ready"));
        })
        .catch((C) => {
          C.name !== "AbortError" && r("fallback");
        }),
      () => u.abort()
    );
  }, []);
  const p = a.length ? a : zn,
    m = o.useMemo(
      () =>
        p.filter((u) =>
          `${u.title} ${u.category} ${u.summary || ""}`.includes(t.trim()),
        ),
      [p, t],
    );
  return e.jsxs("div", {
    className: "space-y-6",
    children: [
      e.jsxs("div", {
        className: "flex flex-wrap items-end justify-between gap-4",
        children: [
          e.jsxs("div", {
            children: [
              e.jsx("p", {
                className: "text-xs font-bold text-primary-dark",
                children: "المعرفة السريرية",
              }),
              e.jsx("h1", {
                className: "mt-1 font-display text-3xl font-bold text-ink",
                children: "تحديثات الجلدية والأدوية",
              }),
              e.jsx("p", {
                className: "mt-2 text-sm text-ink/55",
                children:
                  "مصادر عالمية موثوقة وروابط هيئة الدواء المصرية، مع تاريخ ومصدر واضحين.",
              }),
            ],
          }),
          e.jsxs("span", {
            className:
              "flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 text-xs font-bold text-success",
            children: [
              e.jsx(Zt, { className: "h-4 w-4" }),
              " مراجعة يومية للمصادر",
            ],
          }),
        ],
      }),
      e.jsxs($, {
        className:
          "border-primary/20 bg-gradient-to-l from-primary/10 to-paper",
        children: [
          e.jsxs("div", {
            className: "flex flex-wrap items-center justify-between gap-3",
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(oa, { className: "h-5 w-5 text-primary" }),
                  e.jsx("h2", {
                    className: "text-lg font-bold text-ink",
                    children: "أحدث ما يهم طبيب الجلدية",
                  }),
                ],
              }),
              e.jsx("p", {
                className: "text-[11px] text-ink/40",
                children:
                  n === "loading"
                    ? "جاري جلب أحدث الأبحاث..."
                    : n === "ready" && x
                      ? `آخر مزامنة: ${new Intl.DateTimeFormat("ar-EG", { dateStyle: "medium", timeStyle: "short" }).format(new Date(x))}`
                      : "تعرض الآن المصادر المختارة لحين عودة التحديث الحي",
              }),
            ],
          }),
          e.jsxs("label", {
            className: "relative mt-4 block",
            children: [
              e.jsx(gt, {
                className: "absolute right-3 top-3 h-4 w-4 text-ink/35",
              }),
              e.jsx("input", {
                className: "input h-10 pr-9",
                value: t,
                onChange: (u) => s(u.target.value),
                placeholder: "ابحث: حب الشباب، الشعر، أبحاث...",
              }),
            ],
          }),
          e.jsx("div", {
            className: "mt-4 grid gap-3 sm:grid-cols-2",
            children: m.map((u) =>
              e.jsxs(
                "article",
                {
                  className: "rounded-xl border border-line bg-paper p-4",
                  children: [
                    e.jsxs("div", {
                      className: "flex items-start justify-between gap-3",
                      children: [
                        e.jsx("span", {
                          className:
                            "rounded-full bg-primary/10 px-2.5 py-1 text-[10px] font-bold text-primary-dark",
                          children: u.category,
                        }),
                        e.jsx(Ae, { className: "h-4 w-4 text-primary/50" }),
                      ],
                    }),
                    e.jsx("h3", {
                      className: "mt-3 font-bold leading-6 text-ink",
                      children: u.title,
                    }),
                    u.summary &&
                      e.jsx("p", {
                        className: "mt-2 text-sm leading-6 text-ink/60",
                        children: u.summary,
                      }),
                    u.authors &&
                      e.jsx("p", {
                        className: "mt-2 line-clamp-1 text-[11px] text-ink/35",
                        children: u.authors,
                      }),
                    e.jsxs("div", {
                      className: "mt-4 flex items-end justify-between gap-3",
                      children: [
                        e.jsxs("p", {
                          className: "text-xs text-ink/45",
                          children: [u.source, " · ", u.date],
                        }),
                        e.jsxs("a", {
                          href: u.url,
                          target: "_blank",
                          rel: "noreferrer",
                          className:
                            "flex shrink-0 items-center gap-1 text-xs font-bold text-primary-dark",
                          children: [
                            "البحث الأصلي ",
                            e.jsx(Xt, { className: "h-3 w-3" }),
                          ],
                        }),
                      ],
                    }),
                  ],
                },
                u.id || u.title,
              ),
            ),
          }),
        ],
      }),
      e.jsxs("div", {
        className: "grid gap-6 lg:grid-cols-[1.3fr_.7fr]",
        children: [
          e.jsxs($, {
            children: [
              e.jsxs("div", {
                className: "flex items-center gap-2",
                children: [
                  e.jsx(Le, { className: "h-5 w-5 text-primary" }),
                  e.jsx("h2", {
                    className: "text-lg font-bold text-ink",
                    children: "أسعار وتوافر الأدوية في مصر",
                  }),
                ],
              }),
              e.jsx("p", {
                className: "mt-2 text-sm leading-6 text-ink/55",
                children:
                  "السعر أو حالة التوافر تُعرض من المصدر الرسمي عند فتحه؛ المنصة لا تخمّن سعرًا ولا تعلن نقصًا غير مؤكد.",
              }),
              e.jsx("div", {
                className: "mt-5 space-y-3",
                children: Rn.map((u) =>
                  e.jsx(
                    "a",
                    {
                      href: u.url,
                      target: "_blank",
                      rel: "noreferrer",
                      className:
                        "flex items-start justify-between gap-4 rounded-xl border border-line p-4 hover:border-primary/40",
                      children: e.jsxs("div", {
                        children: [
                          e.jsx("b", {
                            className: "text-sm text-ink",
                            children: u.title,
                          }),
                          e.jsx("p", {
                            className: "mt-1 text-xs leading-5 text-ink/50",
                            children: u.text,
                          }),
                          e.jsxs("span", {
                            className:
                              "mt-2 inline-flex items-center gap-1 text-xs font-bold text-primary-dark",
                            children: [
                              u.label,
                              e.jsx(Zs, { className: "h-3 w-3" }),
                            ],
                          }),
                        ],
                      }),
                    },
                    u.title,
                  ),
                ),
              }),
            ],
          }),
          e.jsxs("div", {
            className: "space-y-4",
            children: [
              e.jsxs($, {
                className: "border-warning/25 bg-warning/5",
                children: [
                  e.jsxs("p", {
                    className: "flex items-center gap-2 font-bold text-warning",
                    children: [
                      e.jsx(Ye, { className: "h-5 w-5" }),
                      " تنبيه مهني",
                    ],
                  }),
                  e.jsx("p", {
                    className: "mt-3 text-sm leading-7 text-ink/65",
                    children:
                      "توفر الدواء يختلف بين الصيدليات والمناطق. راجع الصيدلية أو هيئة الدواء قبل تغيير الخطة، واعتمد البديل حسب المادة الفعالة والحالة.",
                  }),
                ],
              }),
              e.jsxs($, {
                children: [
                  e.jsxs("p", {
                    className: "flex items-center gap-2 font-bold text-ink",
                    children: [
                      e.jsx(Ae, { className: "h-5 w-5 text-primary" }),
                      " مصادر القسم",
                    ],
                  }),
                  e.jsxs("ul", {
                    className: "mt-3 space-y-2 text-sm text-ink/60",
                    children: [
                      e.jsx("li", {
                        children: "• American Academy of Dermatology",
                      }),
                      e.jsx("li", { children: "• JAMA Dermatology" }),
                      e.jsx("li", { children: "• هيئة الدواء المصرية" }),
                    ],
                  }),
                  e.jsxs("p", {
                    className: "mt-4 flex gap-2 text-xs leading-5 text-ink/40",
                    children: [
                      e.jsx(re, { className: "h-4 w-4 shrink-0" }),
                      " كل بطاقة تفتح المرجع الأصلي للمراجعة.",
                    ],
                  }),
                ],
              }),
            ],
          }),
        ],
      }),
    ],
  });
}
function Fn() {
  return e.jsxs("div", {
    className:
      "flex min-h-screen flex-col items-center justify-center gap-3 bg-base text-center",
    children: [
      e.jsx("p", {
        className: "font-display text-5xl text-ink",
        children: "404",
      }),
      e.jsx("p", {
        className: "text-ink/60",
        children: "That page doesn't exist.",
      }),
      e.jsx(Q, { to: "/", children: e.jsx(V, { children: "Back home" }) }),
    ],
  });
}
function Bn({ label: t = "Loading…" }) {
  return e.jsxs("div", {
    className: "flex items-center gap-3 py-10 text-ink/60",
    children: [
      e.jsx("span", {
        className:
          "h-4 w-4 animate-spin rounded-full border-2 border-line border-t-primary",
      }),
      e.jsx("span", { className: "text-sm", children: t }),
    ],
  });
}
function Un({ children: t }) {
  const { loading: s, session: a, staffDoctor: i } = Je(),
    n = mt();
  return s
    ? e.jsx("div", {
        className: "grid min-h-screen place-items-center bg-base",
        children: e.jsx(Bn, {}),
      })
    : a
      ? i
        ? t
        : e.jsx(we, { to: "/activate", replace: !0 })
      : e.jsx(we, { to: "/login", replace: !0, state: { from: n.pathname } });
}
function qn() {
  return e.jsxs(_s, {
    children: [
      e.jsxs(X, {
        element: e.jsx(Pa, {}),
        children: [
          e.jsx(X, { path: "/", element: e.jsx(qa, {}) }),
          e.jsx(X, { path: "/book", element: e.jsx(Ga, {}) }),
          e.jsx(X, { path: "/portal", element: e.jsx(Ya, {}) }),
          e.jsx(X, { path: "/login", element: e.jsx(Za, {}) }),
          e.jsx(X, { path: "/activate", element: e.jsx(Ja, {}) }),
          e.jsx(X, { path: "/magazine", element: e.jsx(en, {}) }),
          e.jsx(X, { path: "/magazine/:slug", element: e.jsx(nn, {}) }),
          e.jsx(X, { path: "/quiz/:slug", element: e.jsx(ln, {}) }),
        ],
      }),
      e.jsxs(X, {
        path: "/dashboard",
        element: e.jsx(Un, { children: e.jsx(Ea, {}) }),
        children: [
          e.jsx(X, { index: !0, element: e.jsx(Nn, {}) }),
          e.jsx(X, { path: "appointments", element: e.jsx(wn, {}) }),
          e.jsx(X, { path: "patients", element: e.jsx(_n, {}) }),
          e.jsx(X, { path: "patients/:id", element: e.jsx(Cn, {}) }),
          e.jsx(X, { path: "visits/:appointmentId", element: e.jsx(Ln, {}) }),
          e.jsx(X, { path: "waiting-list", element: e.jsx(On, {}) }),
          e.jsx(X, { path: "automations", element: e.jsx($n, {}) }),
          e.jsx(X, { path: "content", element: e.jsx(Pn, {}) }),
          e.jsx(X, { path: "growth", element: e.jsx(Tn, {}) }),
          e.jsx(X, { path: "quizzes", element: e.jsx(En, {}) }),
          e.jsx(X, { path: "clinical-updates", element: e.jsx(Vn, {}) }),
        ],
      }),
      e.jsx(X, { path: "*", element: e.jsx(Fn, {}) }),
    ],
  });
}
ot.createRoot(document.getElementById("root")).render(
  e.jsx(Cs.StrictMode, {
    children: e.jsx(Ss, {
      children: e.jsx(Ta, { children: e.jsx(Aa, { children: e.jsx(qn, {}) }) }),
    }),
  }),
);
