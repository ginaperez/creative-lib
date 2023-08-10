"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
require("../sass/index.scss");
var _excluded = ["primary", "size", "backgroundColor", "label"];
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }
function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }
var Button = function Button(_ref) {
  var _ref$primary = _ref.primary,
    primary = _ref$primary === void 0 ? false : _ref$primary,
    _ref$size = _ref.size,
    size = _ref$size === void 0 ? 'medium' : _ref$size,
    backgroundColor = _ref.backgroundColor,
    label = _ref.label,
    props = _objectWithoutProperties(_ref, _excluded);
  var mode = primary ? 'button--primary' : 'button--secondary';
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    type: "button",
    className: ['button', "button--".concat(size), mode].join(' '),
    style: {
      backgroundColor: backgroundColor
    }
  }, props), label);
};
exports.Button = Button;
//# sourceMappingURL=OldButton.js.map