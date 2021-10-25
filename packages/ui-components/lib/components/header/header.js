var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import React from "react";
import classnames from "classnames";
import "./style";
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Header.prototype.render = function () {
        var _a = this.props, fixed = _a.fixed, left = _a.left, right = _a.right, children = _a.children;
        return (React.createElement("div", { className: classnames(["header", { fixed: fixed }]) },
            React.createElement("div", { className: "header-menu-left" }, left),
            React.createElement("div", { className: "header-section" }, children),
            React.createElement("div", { className: "header-menu-right" }, right)));
    };
    return Header;
}(React.Component));
export { Header };
