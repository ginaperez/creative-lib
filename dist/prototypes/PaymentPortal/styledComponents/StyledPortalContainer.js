"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledPortalContainer = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTools = require("styled-tools");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledPortalContainer = _styledComponents.default.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    flex-direction: column;\n    font-family: ", ";\n    border: transparent;\n    border-radius: 1.5rem;\n    height: 25rem;\n    width: 33rem;\n    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;\n"])), (0, _styledTools.theme)('fonts.nunito'));
exports.StyledPortalContainer = StyledPortalContainer;
//# sourceMappingURL=StyledPortalContainer.js.map