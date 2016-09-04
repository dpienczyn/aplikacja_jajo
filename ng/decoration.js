System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Decoration;
    return {
        setters:[],
        execute: function() {
            Decoration = (function () {
                function Decoration(color, marginTop, marginleft, size) {
                    if (size === void 0) { size = 20; }
                    this.color = color;
                    this.marginTop = marginTop;
                    this.marginleft = marginleft;
                    this.size = size;
                }
                return Decoration;
            }());
            exports_1("Decoration", Decoration);
        }
    }
});
//# sourceMappingURL=decoration.js.map