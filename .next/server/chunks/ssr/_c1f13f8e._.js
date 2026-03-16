module.exports=[72123,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/script.js <module evaluation>"))},44536,(a,b,c)=>{let{createClientModuleProxy:d}=a.r(11857);a.n(d("[project]/node_modules/next/dist/client/script.js"))},11153,a=>{"use strict";a.i(72123);var b=a.i(44536);a.n(b)},71618,(a,b,c)=>{b.exports=a.r(11153)},27572,a=>{"use strict";var b=a.i(7997),c=a.i(71618);function d({children:a}){return(0,b.jsxs)("html",{lang:"en",suppressHydrationWarning:!0,children:[(0,b.jsxs)("head",{children:[(0,b.jsx)("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/bz/bq.png"}),(0,b.jsx)("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/bz/favicon.jpg"}),(0,b.jsx)("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/bz/favicon.jpg"}),(0,b.jsx)("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css",crossOrigin:"anonymous",referrerPolicy:"no-referrer"}),(0,b.jsx)("meta",{name:"google-site-verification",content:"YTZMYs1VxIs5uT13VrO_ZmcdNIQvmxLmU_av54zx8Ow"}),(0,b.jsx)("link",{rel:"preconnect",href:"https://fonts.gstatic.com/"}),(0,b.jsx)("link",{href:"https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap",rel:"stylesheet"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/css/slick.css"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/vendors/bootstrap/css/bootstrap.min.css"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/vendors/bootstrap-select/bootstrap-select.min.css"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/vendors/jquery-ui/jquery-ui.css"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/vendors/animate/animate.min.css"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/vendors/fontawesome/css/all.min.css"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/vendors/ogency-icons/style.css"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/vendors/jarallax/jarallax.css"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/vendors/nouislider/nouislider.min.css"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/vendors/nouislider/nouislider.pips.css"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/vendors/odometer/odometer.min.css"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/vendors/tiny-slider/tiny-slider.min.css"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/vendors/owl-carousel/assets/owl.carousel.min.css"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/vendors/owl-carousel/assets/owl.theme.default.min.css"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/css/ogency.css?v=2026031307",id:"darkTheme"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/css/ogency-light.css?v=2026031307",id:"lightTheme",disabled:!0,suppressHydrationWarning:!0}),(0,b.jsx)("link",{id:"hr-dark",href:"/assets/css/voice-with-hr-dark.css?v=2026031307",rel:"stylesheet"}),(0,b.jsx)("link",{id:"hr-light",href:"/assets/css/voice-with-hr.css?v=2026031307",rel:"stylesheet",disabled:!0,suppressHydrationWarning:!0}),(0,b.jsx)("link",{id:"theme-dark",href:"/assets/css/whatsapp-dark.css?v=2026031307",rel:"stylesheet"}),(0,b.jsx)("link",{id:"theme-light",href:"/assets/css/whatsapp-light.css?v=2026031307",rel:"stylesheet",disabled:!0,suppressHydrationWarning:!0}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/css/digital-dark.css?v=2026031307",id:"dm-darkTheme"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/css/digital.css?v=2026031307",id:"dm-lightTheme",disabled:!0,suppressHydrationWarning:!0}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/3d/style.css"}),(0,b.jsx)("link",{rel:"stylesheet",href:"/assets/css/style.css"}),(0,b.jsx)("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"}),(0,b.jsx)(c.default,{src:"https://www.google.com/recaptcha/api.js",strategy:"lazyOnload"}),(0,b.jsx)(c.default,{src:"https://www.googletagmanager.com/gtag/js?id=G-VPV7SZD614",strategy:"lazyOnload"}),(0,b.jsx)(c.default,{id:"google-analytics",strategy:"lazyOnload",children:`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VPV7SZD614');
          `}),(0,b.jsx)(c.default,{type:"module",src:"https://unpkg.com/@google/model-viewer/dist/model-viewer.js",strategy:"lazyOnload"}),(0,b.jsx)("script",{noModule:!0,src:"https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"}),(0,b.jsx)(c.default,{id:"theme-loader",strategy:"beforeInteractive",children:`
            (function(){
              const userTheme = window.localStorage.getItem('theme');

              if(userTheme === 'light'){
                const elements = ['lightTheme','hr-light','theme-light','dm-lightTheme'];

                elements.forEach(id=>{
                  const el = document.getElementById(id);
                  if(el) el.disabled = false;
                });

                const dmDark = document.getElementById('dm-darkTheme');
                if(dmDark) dmDark.disabled = true;
              }
            })();
          `}),(0,b.jsx)(c.default,{id:"theme-toggler",strategy:"lazyOnload",children:`
            window.toggleTheme = function(){

              const lightThemeLink = document.getElementById('lightTheme');

              const isCurrentlyLight =
                lightThemeLink && !lightThemeLink.disabled;

              if(isCurrentlyLight){
                window.localStorage.setItem('theme','dark');
              }else{
                window.localStorage.setItem('theme','light');
              }

              window.location.reload();
            }
          `})]}),(0,b.jsx)("body",{className:"custom-cursor",children:a})]})}a.s(["default",()=>d,"metadata",0,{title:"About Us - BzAnalytics",description:"Learn more about BzAnalytics, our mission, vision, and journey in digital transformation and IT consulting.",keywords:"About BzAnalytics, company information, IT consulting company",robots:"index, follow"}])}];

//# sourceMappingURL=_c1f13f8e._.js.map