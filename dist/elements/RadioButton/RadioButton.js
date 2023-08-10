"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.RadioButton = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("./styledComponents");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var RadioButton = function RadioButton(_ref) {
  var id = _ref.id,
    name = _ref.name,
    disabled = _ref.disabled,
    speed = _ref.speed;
  return /*#__PURE__*/_react.default.createElement(_styledComponents.StyledRadioButton, {
    type: "radio",
    id: id,
    name: name,
    disabled: disabled,
    speed: speed
  });
};
exports.RadioButton = RadioButton;
//# sourceMappingURL=RadioButton.js.map