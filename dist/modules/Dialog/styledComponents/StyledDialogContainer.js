"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledDialogContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTools = require("styled-tools");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledDialogContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: space-evenly;\n    font-family: ", ";\n    line-height: 1.5;\n    height: 18rem;\n    width: 34rem;\n    color: ", ";\n    border: 0.1rem solid ", ";\n    box-shadow: 0 0 0 50vmax rgba(0,0,0,.5);\n    border-radius: 2rem;\n    padding: 0 3rem 0 3rem;\n"])), (0, _styledTools.theme)('fonts.nunito'), (0, _styledTools.theme)('colors.softBlack'), (0, _styledTools.theme)('colors.borderGray'));
exports.StyledDialogContainer = StyledDialogContainer;
//# sourceMappingURL=StyledDialogContainer.js.map