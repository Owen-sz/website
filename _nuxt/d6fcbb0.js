(window.webpackJsonp=window.webpackJsonp||[]).push([[5,2,3],{268:function(t,e,r){"use strict";r.r(e);var n={methods:{setColorMode:function(t){this.$emit("set-color-mode",t)}}},l=r(31),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",{staticClass:"\n    flex flex-col md:flex-row gap-4 md:gap-0\n    w-full\n    justify-between\n    px-6\n    py-4\n    text-gray-600\n    dark:text-gray-300\n    bg-gray-100\n    dark:bg-gray-900\n  "},[t._m(0),t._v(" "),r("div",{staticClass:"md:text-right text-left font-semibold",attrs:{id:"color-mode-toggle"}},[r("h2",[t._v("Theme:")]),t._v(" "),r("button",{staticClass:"pr-2 hover:text-blue-600 dark:hover:text-blue-200",on:{click:function(e){return t.setColorMode("system")}}},[t._v("\n      System\n    ")]),t._v(" "),r("button",{staticClass:"pr-2 hover:text-blue-600 dark:hover:text-blue-200",on:{click:function(e){return t.setColorMode("light")}}},[t._v("\n      Light\n    ")]),t._v(" "),r("button",{staticClass:"hover:text-blue-600 dark:hover:text-blue-200",on:{click:function(e){return t.setColorMode("dark")}}},[t._v("\n      Dark\n    ")])])])}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"flex flex-col"},[r("h1",{staticClass:"font-semibold tracking-wide"},[t._v("\n      Copyright © 2021 - 2022 Ultramarine Linux Team\n    ")]),t._v(" "),r("h2",[t._v("\n      Linux® is the registered trademark of Linus Torvalds in the U.S. and\n      other countries.\n    ")]),t._v(" "),r("h2",[t._v("\n      Fedora® and the Infinity design logo are trademarks of Red Hat, Inc. in\n      the U.S. and elsewhere.\n    ")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Footer:r(268).default})},269:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyBpZD0ic3ZnNSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMjI0IDIyNCI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiMwMDA3OGY7ZmlsbC1ydWxlOmV2ZW5vZGQ7fS5jbHMtMntmaWxsOiNmZGZkZmY7fTwvc3R5bGU+PC9kZWZzPjxnIGlkPSJsYXllcjEiPjxnIGlkPSJzdXJmYWNlODU3NTMiPjxwYXRoIGlkPSJwYXRoMTk4NCIgY2xhc3M9ImNscy0xIiBkPSJNMTEyLDBBMTEyLDExMiwwLDEsMSwwLDExMiwxMTIsMTEyLDAsMCwxLDExMiwwIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSgwIDApIi8+PHBhdGggaWQ9InBhdGgxOTg2IiBjbGFzcz0iY2xzLTIiIGQ9Ik0yMDYuNDksMTQ3LjhjLTE2LjY3LTMuODQtMzMtOS41My00NC4xMy0xNkMxMzEuODUsMTE0LDEyMS4yOSw3NS4xNSw3OC4yNiw4OS42YzM0LDM5LjY1LTIzLDUyLTYxLjY0LDU1Ljc2YTEwMSwxMDEsMCwwLDAsMTg5Ljg3LDIuNDQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAgMCkiLz48L2c+PC9nPjwvc3ZnPg=="},270:function(t,e,r){"use strict";r.r(e);var n={name:"Navbar"},l=r(31),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",{staticClass:"flex flex-row justify-between items-center w-full 2xl:px-72 xl:px-48 lg:px-40 md:px-20 px-4 pt-4 pb-2 text-gray-800 dark:text-gray-200 sticky top-0 z-50 bg-clip-padding bg-gray-100 bg-opacity-30 dark:bg-gray-900 dark:bg-opacity-40 backdrop-filter backdrop-blur-xl",attrs:{id:"nav"}},[n("nuxt-link",{staticClass:" flex flex-row items-center font-bold hover:text-blue-600 dark:hover:text-blue-200",attrs:{to:"/"}},[n("img",{staticClass:"w-11 h-auto mr-2",attrs:{src:r(269),alt:"Logo"}}),t._v(" "),n("h1",{staticClass:"text-xl font-montserrat-bolld"},[t._v("\n      Ultramarine\n    ")])]),t._v(" "),t._m(0)],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"links-right flex flex-row gap-4 justify-center align-middle items-center font-semibold"},[r("a",{staticClass:"hover:text-blue-600 dark:hover:text-blue-200",attrs:{href:"#about"}},[t._v("About")]),t._v(" "),r("a",{staticClass:"hover:text-blue-600 dark:hover:text-blue-200",attrs:{href:"https://wiki.ultramarine-linux.org"}},[t._v("Wiki")])])}],!1,null,null,null);e.default=component.exports},278:function(t,e,r){"use strict";r.r(e);var n={methods:{setColorMode:function(t){this.$colorMode.preference=t},onCopy:function(t){var text=document.getElementById("migrate-script").textContent;this.$copyText(text)}}},l=r(31),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"min-h-screen text-gray-900 bg-gray-100  dark:text-gray-200 dark:bg-gray-900"},[r("Navbar"),t._v(" "),r("div",{staticClass:"flex flex-col items-center content"},[r("section",{staticClass:"flex flex-col items-center px-8 mt-8 md:mt-6 xl:mx-42 lg:mx-40 md:mx-20 2xl:py-4",attrs:{id:"hero"}},[r("h1",{staticClass:"self-start text-5xl font-montserrat-bold tracking-wide text-blue-700 md:self-center md:text-6xl dark:text-blue-200"},[t._v("\n        Ultramarine Linux\n      ")]),t._v(" "),r("h2",{staticClass:"self-start pl-1 text-xl md:self-center md:pl-0"},[t._v("\n        A simplified yet powerful Linux® experience for all.\n      ")]),t._v(" "),r("div",{staticClass:"flex flex-col gap-4 md:flex-row self-start justify-between mt-4 md:self-center",attrs:{id:"buttons"}},[r("nuxt-link",{staticClass:"flex flex-row items-center justify-center px-4 py-2 mr-2 bg-blue-500 rounded-lg  text-gray-50 hover:bg-blue-700",attrs:{to:"/download"}},[r("button",{staticClass:"flex flex-row items-center justify-center"},[r("svg",{staticClass:"w-6 h-6 mr-2",attrs:{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"}},[r("path",{attrs:{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"}})]),t._v(" "),r("p",[t._v("Download")])])]),t._v(" "),t._m(0)],1),t._v(" "),r("div",{staticClass:"hidden screenshot md:flex md:flex-col md:justify-center"},[r("nuxt-img",{staticClass:"self-center w-4/5 mt-6 bg-gray-800 rounded-md lg:h-96 lg:w-auto",attrs:{src:"ultramarine.png",alt:"Desktop Environment Screenshot",quality:"70"}}),t._v(" "),r("p",{staticClass:"pt-1 text-center text-gray-400 dark:text-gray-500"},[t._v("\n          Current Release: Ultramarine Flagship 22.04 (Rhode Island)\n        ")])],1),t._v(" "),r("div",{staticClass:"hidden md:flex md:flex-col md:justify-center mt-6",attrs:{id:"migration"}},[r("p",{staticClass:"pt- pb-2 text-xl text-center"},[t._v("\n          You can also migrate from an existing Fedora installation!\n        ")]),t._v(" "),r("div",{staticClass:"p-2"},[r("div",{staticClass:"inline-flex items-center bg-gray-600 rounded-xl"},[t._m(1),t._v(" "),r("div",{staticClass:"relative px-3 py-4 mx-1 text-gray-400 bg-gray-600 cursor-pointer rounded-xl dark:text-gray-200 hover:bg-gray-500 dark:hover:text-gray-100",on:{click:t.onCopy}},[t._m(2)])])])])]),t._v(" "),t._m(3),t._v(" "),r("section",{staticClass:"flex flex-col items-center px-4 py-8",attrs:{id:"sponsors"}},[r("h1",{staticClass:"mb-6 text-3xl font-semibold tracking-wide text-blue-500  dark:text-blue-200"},[t._v("\n        Our Sponsors\n      ")]),t._v(" "),r("div",{staticClass:"flex flex-col md:grid grid-flow-row-dense grid-cols-2 place-items-center items-center justify-end gap-10 sponsors"},[t._m(4),t._v(" "),r("a",{staticClass:"object-scale",attrs:{href:"https://webhorizon.in"}},[r("nuxt-img",{staticClass:"w-72 h-auto rounded-md bg-gray-800 p-1",attrs:{src:"webhorizon.png",alt:"WebHorizon",quality:"50"}}),t._v(" "),r("h2",{staticClass:"text-center"},[t._v("webhorizon.in")])],1)])]),t._v(" "),t._m(5)]),t._v(" "),r("Footer",{on:{"set-color-mode":t.setColorMode}}),t._v(" "),r("link",{attrs:{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css",integrity:"sha512-Fo3rlrZj/k7ujTnHg4CGR2D7kSs0v4LLanw2qksYuRlEzO+tcaEPQogQ0KaoGN26/zrn20ImR1DfuLWnOo7aBA==",crossorigin:"anonymous",referrerpolicy:"no-referrer"}})],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"flex flex-row items-center justify-center rounded-lg",attrs:{href:"https://wiki.ultramarine-linux.org/en/guide"}},[r("button",{staticClass:"px-4 py-2 text-blue-300 bg-transparent border-2 border-blue-500 rounded-lg  dark:text-blue-100 dark:border-blue-400 hover:bg-blue-400 hover:text-gray-50 dark:hover:text-gray-50"},[t._v("\n            Installation Guide\n          ")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"p-6 text-gray-400 bg-gray-700 rounded-xl"},[r("p",{staticClass:"font-mono",attrs:{id:"migrate-script"}},[t._v("bash <(curl -s https://ultramarine-linux.org/migrate.sh)")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"copy-button fa fa-copy",attrs:{type:"button"}},[r("span",{staticClass:"hidden"},[t._v("Copy")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"flex flex-col items-start md:items-center text-left w-full px-8 py-8 mt-8 mx-auto bg-gray-200 dark:bg-gray-800 xl:mx-42 lg:mx-40 md:mx-20",attrs:{id:"about"}},[r("h1",{staticClass:"pt-2 text-3xl font-semibold tracking-wide text-blue-500  md:text-4xl dark:text-blue-200"},[t._v("\n        Why Ultramarine?\n      ")]),t._v(" "),r("p",{staticClass:"max-w-2xl mt-2 mb-4 text-lg text-left md:text-justify lg:max-w-4xl md:mx-20"},[t._v("\n        Ultramarine Linux is a Linux® distribution based on Fedora® Linux. Our\n        goal is to design an experience which satisfies the beginner with the\n        simplicity, while retaining the features a power user would demand.\n        Here's what we offer:\n        ")]),t._v(" "),r("div",{staticClass:"flex flex-col md:items-center md:justify-center mt-4 mb-4",attrs:{id:"features"}},[r("div",{staticClass:"flex flex-col items-start justify-between gap-20 md:gap-20 pt-2 md:flex-row text-7xl",attrs:{id:"icons"}},[r("div",{staticClass:"flex flex-col items-start md:items-center"},[r("div",{staticClass:"mb-2 text-blue-600 fab fa-fedora dark:text-blue-50"}),t._v(" "),r("h3",{staticClass:"mb-1 text-xl font-semibold tracking-wide"},[t._v("\n              Based on Fedora®\n            ")]),t._v(" "),r("p",{staticClass:"max-w-sm text-lg text-left md:text-justify"},[t._v("\n              As a Fedora® Remix, Ultramarine provides you with all advantages\n              of Fedora, but with the freedom of choice and our tweaks to make\n              your experience even better.\n            ")])]),t._v(" "),r("div",{staticClass:"flex flex-col items-start md:items-center"},[r("div",{staticClass:"mb-2 text-blue-600 fas fa-lock-open dark:text-blue-50"}),t._v(" "),r("h3",{staticClass:"mb-1 text-xl font-semibold tracking-wide"},[t._v("\n              Open Source\n            ")]),t._v(" "),r("p",{staticClass:"max-w-sm text-lg text-left md:text-justify"},[t._v("\n              Just like any other good Linux® distributions, we are free and\n              open source, so you can always take a look under the hood and\n              see what's going on behind the curtains.\n            ")])]),t._v(" "),r("div",{staticClass:"flex flex-col items-start md:items-center"},[r("div",{staticClass:"mb-2 text-blue-600 far fa-check-circle dark:text-blue-50"}),t._v(" "),r("h3",{staticClass:"mb-1 text-xl font-semibold tracking-wide"},[t._v("\n              Sane Defaults\n            ")]),t._v(" "),r("p",{staticClass:"max-w-sm text-lg text-left md:text-justify"},[t._v("\n              Fedora® Linux is great, but it is even better with our included\n              defaults. From a preinstalled NVIDIA driver to more software\n              repositories like RPM Fusion, we have them all.\n            ")])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"object-cover",attrs:{href:"https://tensordock.com/"}},[r("img",{staticClass:"w-72 h-auto rounded-md bg-gray-100 p-1",attrs:{src:"https://tensordock.com/assets/img/brand.png",alt:"Tensordock Logo"}}),t._v(" "),r("h2",{staticClass:"text-center"},[t._v("tensordock.com")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"flex flex-col items-center justify-start w-full px-6 py-12 bg-gray-200  dark:bg-gray-800",attrs:{id:"contact"}},[r("h1",{staticClass:"mb-2 text-3xl font-semibold tracking-wide text-blue-500  dark:text-blue-200"},[t._v("\n        Want to know more?\n      ")]),t._v(" "),r("p",{staticClass:"max-w-4xl mb-6 text-lg text-justify"},[t._v("\n        You can read a more detailed description of our goal in our wiki.\n        There you can also find documentation on the changes and guides on how\n        to get your things done. For any other inquiries, check out our\n        contact channels:\n      ")]),t._v(" "),r("div",{staticClass:"flex flex-row gap-12 text-5xl icons"},[r("a",{staticClass:"text-gray-600 fab fa-twitter dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-200",attrs:{href:"https://twitter.com/UltramarineProj","aria-label":"Ultramarine Twitter Link"}}),t._v(" "),r("a",{staticClass:"text-gray-600 fab fa-discord dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-200",attrs:{href:"https://discord.gg/bUuQasHdrF","aria-label":"Ultramarine Discord Server Link"}}),t._v(" "),r("a",{staticClass:"text-gray-600 fab fa-github dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-200",attrs:{href:"https://github.com/ultramarine-linux","aria-label":"Ultramarine GitHub Organization Link"}})])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{Navbar:r(270).default,Footer:r(268).default})}}]);