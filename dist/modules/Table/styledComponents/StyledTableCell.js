"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.StyledTableCell = void 0;
var _styledComponents = _interopRequireDefault(require("styled-components"));
var _styledTools = require("styled-tools");
var _templateObject;
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
var StyledTableCell = _styledComponents.default.td(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n    display: flex;\n    border: 0.1rem solid ", ";\n"])), (0, _styledTools.theme)('colors.borderGray'));
exports.StyledTableCell = StyledTableCell;
//# sourceMappingURL=StyledTableCell.js.map