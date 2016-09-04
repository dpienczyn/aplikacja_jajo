System.register(['angular2/angular2', "./decoration.ts"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var angular2_1, decoration_ts_1;
    var Eggs;
    return {
        setters:[
            function (angular2_1_1) {
                angular2_1 = angular2_1_1;
            },
            function (decoration_ts_1_1) {
                decoration_ts_1 = decoration_ts_1_1;
            }],
        execute: function() {
            Eggs = (function () {
                function Eggs() {
                    this.decorations = [
                        new decoration_ts_1.Decoration('#000000', -100, 355, 26),
                        new decoration_ts_1.Decoration('#FFCCFF', -160, 260, 26),
                        new decoration_ts_1.Decoration('#CC99CC', 90, 391, 25),
                        new decoration_ts_1.Decoration('#ff8080', -90, 290, 25),
                        new decoration_ts_1.Decoration('#97004b', -110, 322, 27),
                        new decoration_ts_1.Decoration('#ff8000', 26, 430, 25),
                        new decoration_ts_1.Decoration('#0080c0', 10, 255, 25),
                        new decoration_ts_1.Decoration('#b30000', -21, 340, 24),
                        new decoration_ts_1.Decoration('#6600FF', -25, 400, 21),
                        new decoration_ts_1.Decoration('#66FFCC', 28, 330, 29),
                        new decoration_ts_1.Decoration('#CCFF33', -19, 390, 25),
                        new decoration_ts_1.Decoration('#CCFFCC', -15, 300, 22),
                        new decoration_ts_1.Decoration('#FF66CC', -200, 400, 26),
                        new decoration_ts_1.Decoration('#0099CC', 28, 360, 24),
                        new decoration_ts_1.Decoration('#9933FF', -210, 370, 27),
                        new decoration_ts_1.Decoration('#66FF33', -30, 320, 26),
                        new decoration_ts_1.Decoration('#CC66FF', 60, 340, 22),
                        new decoration_ts_1.Decoration('#99FFFF', 30, 260, 26),
                        new decoration_ts_1.Decoration('#FF3399 ', -90, 400, 50),
                        new decoration_ts_1.Decoration('#993366', -110, 400, 35),
                        new decoration_ts_1.Decoration('#FF6666', 20, 240, 40),
                        new decoration_ts_1.Decoration('#CC66FF', -110, 250, 55),
                        new decoration_ts_1.Decoration('#0000CC', -110, 320, 35),
                        new decoration_ts_1.Decoration('#FFCC99', -30, 380, 35)
                    ];
                    this.selectedDecoration = this.decorations[0];
                }
                Eggs = __decorate([
                    angular2_1.Component({
                        directives: [angular2_1.CORE_DIRECTIVES, angular2_1.FORM_DIRECTIVES],
                        selector: 'egg',
                        template: "\n      <div class=\"col-lg-6\">\n        <div class=\"jajko\">\n          <div class=\"oval\">\n         <div class=\"triangle\"></div>\n         <div class=\"triangle1\"></div>\n         <div class=\"triangle2\"></div>\n         <div class=\"triangle3\"></div>\n         <div class=\"triangle4\"></div>\n         <div class=\"triangle5\"></div>\n         <div class=\"triangle6\"></div>\n         <div class=\"triangle7\"></div>\n         <div class=\"triangle8\"></div>\n         <div class=\"triangle9\"></div>\n         <div class=\"triangle10\"></div>\n        </div>\n        </div>\n        <div class=\"decorations\">\n          <div \n          *ng-for=\"#decoration of decorations; #i = index\" \n          class=\"decoration item-{{i}}\"\n          [ng-style]=\"{\n              'background-color': decoration.color,\n              'width': decoration.size,\n              'margin-top': decoration.marginTop,\n              'margin-left': decoration.marginleft,\n              'height': decoration.size}\"\n          (click)=\"selectedDecoration = decoration\">\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-3\">\n        <div class=\"panel panel-success decoration-form\">\n          <div class=\"panel-heading\">\n            Edycja ozd\u00F3b\n          </div>\n          <div class=\"panel-body\">\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-sm\">\n                <span class=\"input-group-addon\">Kolor</span>\n                <input type=\"color\" class=\"form-control\" [(ng-model)]=\"selectedDecoration.color\" />\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-sm\">\n                <span class=\"input-group-addon\">Rozmiar</span>\n                <input type=\"range\" min=\"0\" max=\"50\" class=\"form-control\" [(ng-model)]=\"selectedDecoration.size\" />\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-sm\">\n                <span class=\"input-group-addon\">Margines g\u00F3rny</span>\n                <input type=\"number\" class=\"form-control\" [(ng-model)]=\"selectedDecoration.marginTop\" />\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <div class=\"input-group input-group-sm\">\n                <span class=\"input-group-addon\">Margines lewy</span>\n                <input type=\"number\" class=\"form-control\" [(ng-model)]=\"selectedDecoration.marginleft\" />\n              </div>\n            </div>\n          </div>\n          <div class=\"panel-footer\">\n            <small>*zaznacz ozdobe, aby zacz\u0105\u0107 j\u0105 edytowa\u0107</small>\n          </div>\n        </div>\n      </div>\n      </div>\n\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], Eggs);
                return Eggs;
            }());
            angular2_1.bootstrap(Eggs);
        }
    }
});
//# sourceMappingURL=egg.js.map