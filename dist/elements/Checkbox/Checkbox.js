"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Checkbox = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("./styledComponents");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Checkbox = function Checkbox(_ref) {
  var id = _ref.id,
    name = _ref.name;
  return /*#__PURE__*/_react.default.createElement(_styledComponents.StyledCheckbox, {
    type: "checkbox",
    id: id,
    name: name
  });
};
exports.Checkbox = Checkbox;
//# sourceMappingURL=Checkbox.js.map