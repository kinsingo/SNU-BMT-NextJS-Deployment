//MUI 와 충돌 방지를 위해서 CSS 를 Global 하게 적용하지는 말자 .. !
//꼭 필요하면, xxx.module.css 를 통해 지역적으로 적용하고, MUI 가 아닌 다른 component 만 사용
//아래는 기존 react project global css 부분
//import "@/global/css/animate.css";
//import "@/global/css/linearicons.css";
//import "@/global/css/style.css";

//slick import
import "./global.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//roboto for MUI typography
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

//nextJS15 + MUI6
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Head from "next/head";
import theme from "../theme";
import BMTFooter from "@/components/Footer";
import BMTNavbar from "@/components/Navbar";
import { ReactNode } from "react";

export const metadata = {
  title: "SNU AI BMT",
  description: "Created by Jonghyun Shin",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};


export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <body>
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <BMTNavbar />
            {children}
            <BMTFooter />
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
