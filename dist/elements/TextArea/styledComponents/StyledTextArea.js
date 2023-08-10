"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTextArea = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTools = require("styled-tools");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledTextArea = _styledComponents.default.textarea(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    justify-content: center;\n    font-family: ", ";\n    font-size: 0.9rem;\n    padding: 0.8rem;\n    border: solid 0.1rem ", ";\n    border-radius: 0.4rem;\n    width: 20rem;\n    height: 5rem;\n    color: ", ";\n"])), (0, _styledTools.theme)("fonts.nunito"), (0, _styledTools.theme)("colors.borderGray"), (0, _styledTools.theme)("colors.softBlack"));
exports.StyledTextArea = StyledTextArea;
//# sourceMappingURL=StyledTextArea.js.map