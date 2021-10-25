import React, { FunctionComponent } from "react";

import classmames from "classnames";
import "./style.module.scss";

interface Props {
  icon: string;
  logo: string;
  subtitle?: string;
}

export const Banner: FunctionComponent<Props> = ({ icon, logo, subtitle }) => {
  return (
    <div className={classmames(["banner-container", "banner-flexVertical"])}>
      <div className={"banner-empty"} />
      <div className={"banner-flexHorizontal"}>
        <div className={"banner-empty"} />
        <div className={"banner-flexVertical"}>
          <img className={"banner-icon"} src={icon} />
          <img className={"banner-logo"} src={logo} />
          {subtitle && <div className={"banner-subtitle"}>{subtitle}</div>}
        </div>
        <div className={"banner-empty"} />
      </div>
      <div className={"banner-empty"} />
    </div>
  );
};
