"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.PaymentPortal = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("./styledComponents");
var _elements = require("../../elements");
var _reactFontawesome = require("@fortawesome/react-fontawesome");
var _freeSolidSvgIcons = require("@fortawesome/free-solid-svg-icons");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var PaymentPortal = function PaymentPortal(_ref) {
  var headingText = _ref.headingText,
    addButtonClick = _ref.addButtonClick,
    cancelButtonClick = _ref.cancelButtonClick;
  return /*#__PURE__*/_react.default.createElement(_styledComponents.StyledPortalContainer, null, /*#__PURE__*/_react.default.createElement(_styledComponents.StyledPortalHeading, null, headingText), /*#__PURE__*/_react.default.createElement(_styledComponents.StyledLineBreak, null), /*#__PURE__*/_react.default.createElement(_styledComponents.StyledPortalBodyContainer, null, /*#__PURE__*/_react.default.createElement(_styledComponents.StyledTopInputs, null, /*#__PURE__*/_react.default.createElement(_elements.Input, {
    type: "text",
    labelText: "Card number",
    placeholder: "0000 0000 0000 0000",
    width: "19rem",
    icon: /*#__PURE__*/_react.default.createElement(_reactFontawesome.FontAwesomeIcon, {
      icon: _freeSolidSvgIcons.faCreditCard
    })
  }), /*#__PURE__*/_react.default.createElement(_elements.Input, {
    type: "password",
    labelText: "CVV",
    maxLength: 3,
    width: "5rem",
    placeholder: "CVV"
  })), /*#__PURE__*/_react.default.createElement(_styledComponents.StyledBottomInputs, null, /*#__PURE__*/_react.default.createElement(_elements.Input, {
    type: "text",
    labelText: "Name on card",
    placeholder: "Eg. Jane Smith",
    width: "19rem"
  }), /*#__PURE__*/_react.default.createElement(_elements.Input, {
    type: "text",
    labelText: "Exp",
    width: "5rem",
    placeholder: "MM/YY"
  })), /*#__PURE__*/_react.default.createElement(_styledComponents.StyledButtonsContainer, null, /*#__PURE__*/_react.default.createElement(_elements.Button, {
    type: "square",
    onClick: addButtonClick
  }, "Add Card"), /*#__PURE__*/_react.default.createElement(_elements.Button, {
    type: "text",
    onClick: cancelButtonClick
  }, "Cancel"))));
};
exports.PaymentPortal = PaymentPortal;
var _default = PaymentPortal;
exports.default = _default;
//# sourceMappingURL=PaymentPortal.js.map