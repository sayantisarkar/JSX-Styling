import React from "react";
import ReactDOM from "react-dom";

const random = "https://picsum.photos/seed/picsum/200/300";

ReactDOM.render(
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="false">
      My Favourite Foods
    </h1>
    <ul>
      <li>Bacon</li>
      <li>Jamon</li>
      <li>Noodles</li>
    </ul>
    <img className="food-img" src={random + "/?grayscale"} alt="No" />
    <img
      className="food-img"
      src="https://c.ndtvimg.com/2020-04/dih4ifhg_pasta_625x300_22_April_20.jpg"
      alt="No"
    />
    <img
      className="food-img"
      src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/20190503-delish-pineapple-baked-salmon-horizontal-ehg-450-1557771120.jpg?crop=1.00xw:0.753xh;0,0.132xh&resize=980:*"
      alt="No"
    />
    <img
      className="food-img"
      src="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/slideshows/great_food_combos_for_losing_weight_slideshow/650x350_great_food_combos_for_losing_weight_slideshow.jpg"
      alt="No"
    />
  </div>,
  document.getElementById("root")
);
