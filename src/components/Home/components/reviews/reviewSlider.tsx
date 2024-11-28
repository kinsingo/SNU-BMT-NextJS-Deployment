"use client"; //for react-slick slider
import Slider from "react-slick";
import { reviewers } from "./components/reviewers";
import { sliderSettings } from "./components/silderSettings";
import SingleReview from "./components/singleReview";

export default function ReviewSlider() {
  return (
    <Slider {...sliderSettings}>
      {reviewers.map((reviewer) => (
        <SingleReview key={reviewer.name + "-review"} {...reviewer} />
      ))}
    </Slider>
  );
}
