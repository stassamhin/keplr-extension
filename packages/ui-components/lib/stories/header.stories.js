import React from 'react';
import { Header } from "../components/header";
import { storiesOf } from "@storybook/react";
var stories = storiesOf("Header", module);
stories.add("Default", function () { return React.createElement(Header, { left: React.createElement("div", null, "left"), right: React.createElement("div", null, "right") }, "SomeHeaderContent"); });
