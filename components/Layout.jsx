import { Sora } from "next/font/google";
import Head from "next/head";

import Header from "../components/Header";
import Nav from "../components/Nav";
// import TopLeftImg from "../components/TopLeftImg";

// setup font
const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
});

const Layout = ({ children }) => {
  return (
    <main
      className={`page bg-site text-white bg-cover bg-no-repeat ${sora.variable} font-sora relative min-h-screen overflow-x-hidden`}
    >
      {/* metadata */}
      <Head>
        <title>Pavansai Rangdal | Portfolio</title>
        <meta
          name="description"
          content="Pavansai Rangdal is a passionate computer science student focused on Machine Learning, Generative AI, and Agentic AI."
        />
        <meta
          name="keywords"
          content="react, next, nextjs, html, css, javascript, js, modern-ui, modern-ux, portfolio, framer-motion, machine-learning, ai, python, open-source"
        />
        <meta name="author" content="Pavansai Rangdal" />
        <meta name="theme-color" content="#F13024" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* <TopLeftImg /> */}
      <Nav />
      <Header />

      {/* main content */}
      <div className="pb-[70px] sm:pb-[80px] xl:pb-0">
        {children}
      </div>
    </main>
  );
};

export default Layout;
