import React from "react";
import WelcomeHero from "./components/welcomeHero/welcomeHero";
//import ListTopics from "./components/listTopics/listTopics";
import GetStarted from "./components/getStarted/getStarted";
import Reviews from "./components/reviews/reviews";
import Statistics from "./components/statistics/statistics";
import Blogs from "./components/blogs/blogs";

export default function HomePage() {
  return (
    <>
      <main>
        <WelcomeHero />
        {/*<ListTopics />*/}
        <GetStarted />
        <Reviews />
        <Blogs />
        <Statistics />
      </main>
    </>
  );
}
