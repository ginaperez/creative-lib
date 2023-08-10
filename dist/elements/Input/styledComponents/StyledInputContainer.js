"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInputContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTools = require("styled-tools");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledInputContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: row;\n  /* justify-content: center; */\n  align-items: center;\n  font-family: ", ";\n  font-size: 0.875rem;\n  padding: 0.8rem;\n  border: solid 0.1rem ", ";\n  border-radius: 0.4rem;\n  color: ", ";\n  width: ", ";\n  &:focus {\n    outline: rebeccapurple;\n    background-color: red;\n  }\n"])), (0, _styledTools.theme)("fonts.nunito"), (0, _styledTools.theme)("colors.borderGray"), (0, _styledTools.theme)("colors.softBlack"), function (props) {
  return props.width ? props.width : "5rem";
});
exports.StyledInputContainer = StyledInputContainer;
//# sourceMappingURL=StyledInputContainer.js.map