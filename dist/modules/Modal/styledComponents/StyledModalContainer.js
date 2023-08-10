"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledModalContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTools = require("styled-tools");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledModalContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  height: 10rem;\n  width: 30rem;\n  border: 0.1rem solid ", ";\n  border-radius: 2rem;\n  position: relative;\n  left: 25vw;\n  top: 25vh;\n  box-shadow: 0 0 0 50vmax rgba(0,0,0,.5);\n"])), (0, _styledTools.theme)('colors.borderGray'));
exports.StyledModalContainer = StyledModalContainer;
//# sourceMappingURL=StyledModalContainer.js.map