import React from "react";
import classmames from "classnames";
import "./style.module.scss";
export var Banner = function (_a) {
    var icon = _a.icon, logo = _a.logo, subtitle = _a.subtitle;
    return (React.createElement("div", { className: classmames(["banner-container", "banner-flexVertical"]) },
        React.createElement("div", { className: "banner-empty" }),
        React.createElement("div", { className: "banner-flexHorizontal" },
            React.createElement("div", { className: "banner-empty" }),
            React.createElement("div", { className: "banner-flexVertical" },
                React.createElement("img", { className: "banner-icon", src: icon }),
                React.createElement("img", { className: "banner-logo", src: logo }),
                subtitle && React.createElement("div", { className: "banner-subtitle" }, subtitle)),
            React.createElement("div", { className: "banner-empty" })),
        React.createElement("div", { className: "banner-empty" })));
};
