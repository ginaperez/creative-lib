"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledInput = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTools = require("styled-tools");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledInput = _styledComponents.default.input(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    border: none;\n    height: 100%;\n    width: 90%;\n    outline: none;\n    /* justify-content: center; */\n    font-family: ", ";\n    font-size: 0.875rem;\n    margin-left: 0.75rem;\n    /* padding: 0.8rem;\n    border: solid 0.1rem ", ";\n    border-radius: 0.4rem;\n    color: ", "; */\n    &:disabled {\n        cursor: not-allowed;\n    }\n"])), (0, _styledTools.theme)("fonts.nunito"), (0, _styledTools.theme)("colors.borderGray"), (0, _styledTools.theme)("colors.softBlack"));
exports.StyledInput = StyledInput;
//# sourceMappingURL=StyledInput.js.map