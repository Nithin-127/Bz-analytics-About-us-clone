module.exports = [
"[project]/src/app/layout.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>RootLayout,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
(()=>{
    const e = new Error("Cannot find module 'html-react-parser'");
    e.code = 'MODULE_NOT_FOUND';
    throw e;
})();
;
;
;
const metadata = {
    title: 'About Us - BzAnalytics'
};
const headString = `
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>About Us - BzAnalytics</title>
    <meta name="description" content="Learn more about BzAnalytics, our mission, vision, and journey in digital transformation and IT consulting.">
    <meta name="keywords" content="About BzAnalytics, company information, IT consulting company">
    <meta name="robots" content="index, follow">
    <!-- favicons Icons -->
    <link rel="apple-touch-icon" sizes="180x180" href="/assets/bz/bq.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/assets/bz/favicon.jpg">
    <link rel="icon" type="image/png" sizes="16x16" href="/assets/bz/favicon.jpg">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css" integrity="sha512-z3gLpd7yknf1YoNbCzqRKc4qyor8gaKU1qmn+CShxbuBusANI9QpRohGBreCFkKxLhei6S9CQXFEbbKuqLg0DA==" crossorigin="anonymous" referrerpolicy="no-referrer">
    <!-- <link rel="manifest" href="/assets/images/favicons/site.webmanifest" /> -->
    <!-- <meta name="description" content="BzAnalytics – Transform Digitally with Our Technology and IT Consulting Services" /> -->
    <meta name="google-site-verification" content="YTZMYs1VxIs5uT13VrO_ZmcdNIQvmxLmU_av54zx8Ow"  ="">
    <!-- fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com/">
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap" rel="stylesheet">

    <link rel="stylesheet" href="/assets/css/slick.css">
    <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css">
    <link rel="stylesheet" href="/assets/vendors/bootstrap-select/bootstrap-select.min.css">
    <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css">
    <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css">
    <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css">
    <link rel="stylesheet" href="/assets/vendors/ogency-icons/style.css">
    <link rel="stylesheet" href="/assets/vendors/jarallax/jarallax.css">
    <link rel="stylesheet" href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css">
    <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.min.css">
    <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.pips.css">
    <link rel="stylesheet" href="/assets/vendors/odometer/odometer.min.css">
    <link rel="stylesheet" href="/assets/vendors/tiny-slider/tiny-slider.min.css">
    <link rel="stylesheet" href="/assets/vendors/owl-carousel/assets/owl.carousel.min.css">
    <link rel="stylesheet" href="/assets/vendors/owl-carousel/assets/owl.theme.default.min.css">

    <!-- template styles -->
    <link rel="stylesheet" href="/assets/css/ogency.css?v=2026031307" id="darkTheme">
    <link rel="stylesheet" href="/assets/css/ogency-light.css?v=2026031307" id="lightTheme" disabled="">


    <link id="hr-dark" href="/assets/css/voice-with-hr-dark.css?v=2026031307" rel="stylesheet">
    <link id="hr-light" href="/assets/css/voice-with-hr.css?v=2026031307" rel="stylesheet" disabled="">


    <!-- whatsapp styles -->
    <link id="theme-dark" href="/assets/css/whatsapp-dark.css?v=2026031307" rel="stylesheet">
    <link id="theme-light" href="/assets/css/whatsapp-light.css?v=2026031307" rel="stylesheet" disabled="">

    <!-- dm-links -->
    <link rel="stylesheet" href="/assets/css/digital-dark.css?v=2026031307" id="dm-darkTheme">
    <link rel="stylesheet" href="/assets/css/digital.css?v=2026031307" id="dm-lightTheme" disabled="">

    <script src="https://www.google.com/recaptcha/api.js" async="" defer=""></script>

    <!-- Google tag (gtag.js) -->
    <script async="" src="https://www.googletagmanager.com/gtag/js?id=G-VPV7SZD614"></script>
    <script>
        window.dataLayer = window.dataLayer || [];

        function gtag() {
            dataLayer.push(arguments);
        }
        gtag('js', new Date());
        gtag('config', 'G-VPV7SZD614');
    </script>
    <script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.js"></script>
    <script nomodule="" src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"></script>
    <link rel="stylesheet" href="/assets/3d/style.css">
    <link rel="stylesheet" href="/assets/css/style.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css">
    <script>
        const userTheme = localStorage.getItem('theme');
        if (userTheme === 'light') {
            enableLightTheme();
        } else {
            enableDarkTheme();
        }

        function enableLightTheme() {
            document.getElementById('lightTheme').removeAttribute('disabled');

            document.getElementById('hr-light').removeAttribute('disabled');

            document.getElementById('theme-light').removeAttribute('disabled');

            document.getElementById('dm-lightTheme').removeAttribute('disabled');
            document.getElementById('dm-darkTheme').setAttribute('disabled', 'true');

        }

        function enableDarkTheme() {
            document.getElementById('darkTheme').removeAttribute('disabled');
            document.getElementById('lightTheme').setAttribute('disabled', 'true');


            document.getElementById('hr-dark').removeAttribute('disabled');
            document.getElementById('hr-light').setAttribute('disabled', 'true');

            document.getElementById('theme-dark').removeAttribute('disabled');
            document.getElementById('theme-light').setAttribute('disabled', 'true');

            document.getElementById('dm-darkTheme').removeAttribute('disabled');
            document.getElementById('dm-lightTheme').setAttribute('disabled', 'true');

            // const svgImage = document.getElementById('svgImage');
            // svgImage.src = 'assets/images/digital-marketing/dm-external/isolationmode1158-wzal-white.svg';

        }

        function toggleTheme() {
            var currentUrl = window.location.href;
            var endpoints = ["consult", "contact", "whatsapp", "voice-with-hr"];

            function checkUrlEndsWith(url, endpoints) {
                for (var i = 0; i < endpoints.length; i++) {
                    if (url.endsWith(endpoints[i])) {
                        return true;
                    }
                }
                return false;
            }
            if (checkUrlEndsWith(currentUrl, endpoints)) {
                window.location.reload();
            }
            const lightThemeLink = document.getElementById('lightTheme');

            if (lightThemeLink.disabled) {
                enableLightTheme();
                localStorage.setItem('theme', 'light');
            } else {
                enableDarkTheme();
                localStorage.setItem('theme', 'dark');
            }
        }
        // JavaScript function to handle arrow clicks and show/hide arrows
        function scrollCards(direction) {
            const cardContainer = document.getElementById('cardContainer');
            const leftArrow = document.querySelector('.left');
            const rightArrow = document.querySelector('.right');

            // Get the current scroll position
            const currentScroll = cardContainer.scrollLeft;

            // Calculate the new scroll position based on the direction
            const newScroll = currentScroll + direction * 400; // Adjust the value based on your card width

            // Scroll the card container
            cardContainer.scrollTo({
                left: newScroll,
                behavior: 'smooth', // Use smooth scrolling effect
            });

            // Check if there are more cards to the left
            if (newScroll > 0) {
                // Show the left arrow
                leftArrow.style.opacity = 1;
            } else {
                // Hide the left arrow
                leftArrow.style.opacity = 0;
            }

            const atLastCard = false;

            if (atLastCard || newScroll + cardContainer.offsetWidth >= cardContainer.scrollWidth) {
                rightArrow.style.opacity = 0;
            } else {
                rightArrow.style.opacity = 1;
            }
        }
    </script>

`;
function RootLayout({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("head", {
                children: parse(headString.replace(/>\s+</g, "><").trim())
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 191,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("body", {
                className: "custom-cursor",
                children: children
            }, void 0, false, {
                fileName: "[project]/src/app/layout.tsx",
                lineNumber: 194,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/layout.tsx",
        lineNumber: 190,
        columnNumber: 5
    }, this);
}
}),
"[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/server/route-modules/app-page/module.compiled.js [app-rsc] (ecmascript)").vendored['react-rsc'].ReactJsxDevRuntime; //# sourceMappingURL=react-jsx-dev-runtime.js.map
}),
];

//# sourceMappingURL=_ce9a95c8._.js.map