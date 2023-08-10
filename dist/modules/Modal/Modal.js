"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Modal = void 0;
var _react = _interopRequireDefault(require("react"));
var _styledComponents = require("./styledComponents");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var Modal = function Modal(_ref) {
  var content = _ref.content;
  return /*#__PURE__*/_react.default.createElement(_styledComponents.StyledModalContainer, null, /*#__PURE__*/_react.default.createElement(_styledComponents.StyledModalContent, null, content));
};
exports.Modal = Modal;
var _default = Modal;
exports.default = _default;
//# sourceMappingURL=Modal.js.map