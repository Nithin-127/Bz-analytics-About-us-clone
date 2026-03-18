import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Plus_Jakarta_Sans } from "next/font/google";


const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "About Us - BzAnalytics",
  description:
    "Learn more about BzAnalytics, our mission, vision, and journey in digital transformation and IT consulting.",
  keywords: "About BzAnalytics, company information, IT consulting company",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/bz/bq.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/bz/favicon.jpg" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/bz/favicon.jpg" />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <meta
          name="google-site-verification"
          content="YTZMYs1VxIs5uT13VrO_ZmcdNIQvmxLmU_av54zx8Ow"
        />

        <link rel="preconnect" href="https://fonts.gstatic.com/" />

        <link
          href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />

        <link rel="stylesheet" href="/assets/css/slick.css" />
        <link rel="stylesheet" href="/assets/vendors/bootstrap/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/vendors/bootstrap-select/bootstrap-select.min.css" />
        <link rel="stylesheet" href="/assets/vendors/jquery-ui/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/vendors/animate/animate.min.css" />
        <link rel="stylesheet" href="/assets/vendors/fontawesome/css/all.min.css" />
        <link rel="stylesheet" href="/assets/vendors/ogency-icons/style.css" />
        <link rel="stylesheet" href="/assets/vendors/jarallax/jarallax.css" />
        <link
          rel="stylesheet"
          href="/assets/vendors/jquery-magnific-popup/jquery.magnific-popup.css"
        />
        <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.min.css" />
        <link rel="stylesheet" href="/assets/vendors/nouislider/nouislider.pips.css" />
        <link rel="stylesheet" href="/assets/vendors/odometer/odometer.min.css" />
        <link rel="stylesheet" href="/assets/vendors/tiny-slider/tiny-slider.min.css" />
        <link rel="stylesheet" href="/assets/vendors/owl-carousel/assets/owl.carousel.min.css" />
        <link
          rel="stylesheet"
          href="/assets/vendors/owl-carousel/assets/owl.theme.default.min.css"
        />

        {/* Theme styles */}

        <link
          rel="stylesheet"
          href="/assets/css/ogency.css?v=2026031307"
          id="darkTheme"
          suppressHydrationWarning
        />

        <link
          rel="stylesheet"
          href="/assets/css/ogency-light.css?v=2026031307"
          id="lightTheme"
          {...{ disabled: true }}
          suppressHydrationWarning
        />

        <link
          id="hr-dark"
          href="/assets/css/voice-with-hr-dark.css?v=2026031307"
          rel="stylesheet"
          suppressHydrationWarning
        />

        <link
          id="hr-light"
          href="/assets/css/voice-with-hr.css?v=2026031307"
          rel="stylesheet"
          {...{ disabled: true }}
          suppressHydrationWarning
        />

        <link
          id="theme-dark"
          href="/assets/css/whatsapp-dark.css?v=2026031307"
          rel="stylesheet"
          suppressHydrationWarning
        />

        <link
          id="theme-light"
          href="/assets/css/whatsapp-light.css?v=2026031307"
          rel="stylesheet"
          {...{ disabled: true }}
          suppressHydrationWarning
        />

        <link
          rel="stylesheet"
          href="/assets/css/digital-dark.css?v=2026031307"
          id="dm-darkTheme"
          suppressHydrationWarning
        />

        <link
          rel="stylesheet"
          href="/assets/css/digital.css?v=2026031307"
          id="dm-lightTheme"
          {...{ disabled: true }}
          suppressHydrationWarning
        />

        <link rel="stylesheet" href="/assets/3d/style.css" />
        <link rel="stylesheet" href="/assets/css/style.css" />

        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css"
        />

        <Script src="https://www.google.com/recaptcha/api.js" strategy="lazyOnload" />

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-VPV7SZD614"
          strategy="lazyOnload"
        />

        <Script id="google-analytics" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-VPV7SZD614');
          `}
        </Script>

        <Script
          type="module"
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer.js"
          strategy="lazyOnload"
        />

        <script
          noModule
          src="https://unpkg.com/@google/model-viewer/dist/model-viewer-legacy.js"
        ></script>

        {/* Theme loader */}
        <Script id="theme-loader" strategy="beforeInteractive">
          {`
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
          `}
        </Script>

        {/* Theme toggler */}
        <Script id="theme-toggler" strategy="lazyOnload">
          {`
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
          `}
        </Script>
      </head>

      <body className="custom-cursor">{children}</body>
    </html>
  );
}