"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _modules = require("../modules/");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
var _default = {
  title: 'Modules/Dialog',
  component: _modules.Dialog,
  parameters: {
    layout: 'centered'
  }
};
exports.default = _default;
var Template = function Template(args) {
  return /*#__PURE__*/_react.default.createElement(_modules.Dialog, args);
};
var Default = Template.bind({});
exports.Default = Default;
Default.args = {
  bodyContent: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nulla posuere sollicitudin aliquam ultrices sagittis orci a scelerisque. Consectetur adipiscing elit pellentesque habitant morbi tristique senectus et. Scelerisque felis imperdiet proin fermentum leo vel orci porta.',
  dialogButtonText: 'Click for Dialog'
};
//# sourceMappingURL=Dialog.stories.js.map