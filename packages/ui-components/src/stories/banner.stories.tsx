import React from "react";
import { Banner } from "../components/banner";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Banner", module);

stories.add("Default", () => (
  <Banner
    subtitle="Banner"
    icon="https://cdn.iconscout.com/icon/premium/png-256-thumb/online-url-encoder-decod-53406.png"
    logo="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Logo_TV_2015.svg/1200px-Logo_TV_2015.svg.png"
  />
));
