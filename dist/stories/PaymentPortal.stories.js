"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _prototypes = require("../prototypes");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Prototypes/Payment Portal',
  component: _prototypes.PaymentPortal,
  parameters: {
    layout: 'centered'
  }
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_prototypes.PaymentPortal, args);
};
var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  headingText: 'Add a new card'
};
//# sourceMappingURL=PaymentPortal.stories.js.map