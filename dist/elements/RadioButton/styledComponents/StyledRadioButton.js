"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledRadioButton = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTools = require("styled-tools");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledRadioButton = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  --s: 1em; /* control the size */\n  --c: ", "; /* the active color */\n  \n  height: 1.25rem;\n  aspect-ratio: 1;\n  border: calc(var(--s)/8) solid ", ";\n  padding: calc(var(--s)/8);\n  background: \n     radial-gradient(farthest-side,var(--c) 94%, ", ") \n     50%/0 0 no-repeat content-box;\n  border-radius: 50%;\n  outline-offset: calc(var(--s)/10);\n  -webkit-appearance: none;\n  -moz-appearance: none;\n  appearance: none;\n  cursor: pointer;\n  font-size: inherit;\n  transition: ", "s;\n\n  &:checked {\n    border-color: var(--c);\n    background-size: 100% 100%;\n  }\n\n  &:disabled {\n    background: \n      linear-gradient(", " 0 0) \n      50%/100% 20% no-repeat content-box;\n    opacity: .5;\n    cursor: not-allowed;\n  };\n"])), (0, _styledTools.theme)('colors.darkBlue'), (0, _styledTools.theme)('colors.borderGray'), (0, _styledTools.theme)('colors.white'), function (props) {
  return props.speed ? props.speed : 0.3;
}, (0, _styledTools.theme)('colors.disabled'));
exports.StyledRadioButton = StyledRadioButton;
//# sourceMappingURL=StyledRadioButton.js.map