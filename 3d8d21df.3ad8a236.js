(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{177:function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return m}));var n=a(0),o=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),d=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=d(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},p=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=d(a),p=n,m=h["".concat(i,".").concat(p)]||h[p]||u[p]||r;return a?o.a.createElement(m,s(s({ref:t},c),{},{components:a})):o.a.createElement(m,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,i=new Array(r);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<r;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}p.displayName="MDXCreateElement"},86:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return d}));var n=a(2),o=a(6),r=(a(0),a(177)),i={id:"about",title:"About React Native Reanimated",sidebar_label:"About"},s={id:"about",title:"About React Native Reanimated",description:"This is a documentation website of Reanimated 2 alpha release.",source:"@site/docs/about.md",permalink:"/react-native-reanimated/docs/next/about",editUrl:"https://github.com/software-mansion/react-native-reanimated/tree/master/docs/docs/about.md",version:"next",sidebar_label:"About",sidebar:"docs",next:{title:"Installation",permalink:"/react-native-reanimated/docs/next/installation"}},l=[{value:"Motivation",id:"motivation",children:[]},{value:"Library overview",id:"library-overview",children:[]},{value:"Known problems and limitations",id:"known-problems-and-limitations",children:[]}],c={rightToc:l};function d(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"This is a documentation website of Reanimated 2 alpha release.\nIf you are looking for Reanimated 1 docs ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.swmansion.com/react-native-reanimated/docs/"}),"please follow this link"),".")),Object(r.b)("p",null,"Reanimated is a React Native library that allows for creating smooth animations and interactions that runs on the UI thread."),Object(r.b)("h3",{id:"motivation"},"Motivation"),Object(r.b)("p",null,"In React Native apps, the application code is executed outside of the application main thread.\nThis is one of the key elements of React Native architecture and helps with preventing frame drops in cases where JavaScript has some heavy work to do.\nUnfortunately this design does not play well when it comes to event driven interactions.\nWhen interacting with a touch screen, the user expects effects on screen to be immediate.\nIf updates are happening in a separate thread it is often a case that changes done in the JavaScript thread cannot be reflected in the same frame.\nIn React Native by default all updates are delayed by at least one frame as the communication between UI and JavaScript thread is asynchronous and UI thread never waits for the JavaScript thread to finish processing events.\nOn top of the lag with JavaScript playing many roles like running react diffing and updates, executing app\u2019s business logic, processing network requests, etc., it is often the case that events can\u2019t be immediately processed thus causing even more significant delays.\nReanimated aims to provide ways of offloading animation and event handling logic off of the JavaScript thread and onto the UI thread.\nThis is achieved by defining Reanimated worklets \u2013 a tiny chunks of JavaScript code that can be moved to a separate JavaScript VM and executed synchronously on the UI thread.\nThis makes it possible to respond to touch events immediately and update the UI within the same frame when the event happens without worrying about the load that is put on the main JavaScript thread."),Object(r.b)("h3",{id:"library-overview"},"Library overview"),Object(r.b)("p",null,"Version 1 of Reanimated has been designed to match React Native's Animated API while providing a more complete set of primitives for defining interactions.\nIn version 2 we decided to change the approach in order to address some limitation of version 1 that comes from the declarative API design.\nBelow we present an overview of things that are new in Reanimated 2 and different from Reanimated 1.\nThis is a tl;dr of the remaining parts of the documentation.\nWe recommend that you check the full articles to learn the details about each of the listed aspects:"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"interactions and animations are no longer written using unintuitive declarative API, instead they can be written in pure JS, in a form of so-called \u201cworklets\u201d.\nWorklets are pieces of JS code that we extract from the main react-native code and run in a separate JS context on the main thread.\nBecause of that, worklets have some limitations as to what part of the JS context they can access (we don\u2019t want to load the entire JS bundle into the context which runs on the UI thread)."),Object(r.b)("li",{parentName:"ol"},"It is still possible to define and pass around \u201cAnimated Values\u201d, however thanks to the new API, we expect that you\u2019ll create much fewer of those for a single animation.\nAlso, now, they are actually called \u201cShared Values\u201d and can carry not only primitive types but also arrays, objects and functions."),Object(r.b)("li",{parentName:"ol"},"Shared Values are no longer directly connected to view props.\nInstead, we expose a ",Object(r.b)("inlineCode",{parentName:"li"},"useAnimatedStyle")," hook that returns a style object which can be passed as a View\u2019s style param.\nThe ",Object(r.b)("inlineCode",{parentName:"li"},"useAnimatedStyle")," hook takes a worklet that, when executed, should return styles that will be applied to the connected View.\nThe style worklet will update whenever shared values used by that worklet change (we detect dependencies on shared values automatically)."),Object(r.b)("li",{parentName:"ol"},"Animations can be started in two ways: by triggering animated change on a shared value, or by returning animated value from ",Object(r.b)("inlineCode",{parentName:"li"},"useAnimatedStyle")," hook."),Object(r.b)("li",{parentName:"ol"},"With reanimated, we can hook worklets to serve as event handlers.\nMost common case for an event worklet is to modify some shared values.\nAs a result, changes made to those values will be reflected in the animated style worklet being triggered, which in turn will result in some view properties being updated.\nFor convenience, Reanimated provides event hook that is tailored to work together with Gesture Handler library and allow you to define a separate worklet for handling different handler states (e.g., onStart, onActive, etc.)")),Object(r.b)("h3",{id:"known-problems-and-limitations"},"Known problems and limitations"),Object(r.b)("p",null,"Reanimated 2 is in an early version.\nAs we wanted to share it with the community as soon as we could, the library still has some rough edges and limitations that we plan to address soon.\nUnfortunately some of the limitations come from maturity of React Native\u2019s TurboModule architecture that Reanimated 2 relies on.\nAs a consequence we won\u2019t be able to support older versions of React Native and some issues that we yet plan to resolve may require full support of TurboModules which is not yet available to the public."),Object(r.b)("p",null,"Below we highlight some of the problems that we are aware of (in most of the cases we actively work on improving these):"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Installation of the library requires many steps and is complicated.\nThis comes from the fact that TurboModules are not yet rolled out in the React Native app template.\nBut even without that there are a few ways how we can simplify the installation."),Object(r.b)("li",{parentName:"ul"},"We currently only support Hermes JS VM on Android."),Object(r.b)("li",{parentName:"ul"},"As the library uses JSI for synchronous native methods access, remote debugging is no longer possible.\nYou can use Flipper for debugging your JS code, however connecting debugger to JS context which runs on the UI thread is not currently supported."),Object(r.b)("li",{parentName:"ul"},"The library causes occasional crashes in development mode while reloading JS bundle or upon hot reload.\nWe are looking into this problem and hope to have it resolved really soon."),Object(r.b)("li",{parentName:"ul"},"JavaScript exceptions thrown inside of worklets sometimes give non-descriptive errors and may also result in the app crashing."),Object(r.b)("li",{parentName:"ul"},"Recursive worklets aren\u2019t supported (however there are simple workarounds for this problem)"),Object(r.b)("li",{parentName:"ul"},"Objects passed to worklets from React Native don\u2019t have the correct prototype set in JavaScript.\nAs a result, such objects aren\u2019t enumerable, that is you can\u2019t use \u201cfor in\u201d constructs, spread operator (three dots), or functions like Object.assign with them."),Object(r.b)("li",{parentName:"ul"},"Expo support is not ready yet, next SDK release will support React Native 0.62 \u2013 this will allow you to use Reanimated 2 in the ejected Expo app."),Object(r.b)("li",{parentName:"ul"},"Web support is missing for now as well, we plan to work on adding react-native-web support in the near future.")))}d.isMDXComponent=!0}}]);