import React from "react";
import { Header } from "../components/header";
import { storiesOf } from "@storybook/react";

const stories = storiesOf("Header", module);

stories.add("Default", () => (
  <Header left={<div>left</div>} right={<div>right</div>}>
    SomeHeaderContent
  </Header>
));
