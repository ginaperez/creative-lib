"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledDropdownLabel = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTools = require("styled-tools");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledDropdownLabel = _styledComponents.default.label(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  font-family: ", ";\n  font-size: 0.8rem;\n  font-weight: bold;\n  position: relative;\n  left: 0.5rem;\n  bottom: 0.3rem;\n  color: ", ";\n"])), (0, _styledTools.theme)("fonts.nunito"), (0, _styledTools.theme)("colors.softBlack"));
exports.StyledDropdownLabel = StyledDropdownLabel;
//# sourceMappingURL=StyledDropdownLabel.js.map