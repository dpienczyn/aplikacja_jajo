import {bootstrap, Component, CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';
import {Decoration} from "./decoration.ts";


@Component({
    directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
    selector: 'egg',
    template: `
      <div class="col-lg-6">
        <div class="jajko">
          <div class="oval">
         <div class="triangle"></div>
         <div class="triangle1"></div>
         <div class="triangle2"></div>
         <div class="triangle3"></div>
         <div class="triangle4"></div>
         <div class="triangle5"></div>
         <div class="triangle6"></div>
         <div class="triangle7"></div>
         <div class="triangle8"></div>
         <div class="triangle9"></div>
         <div class="triangle10"></div>
        </div>
        </div>
        <div class="decorations">
          <div 
          *ng-for="#decoration of decorations; #i = index" 
          class="decoration item-{{i}}"
          [ng-style]="{
              'background-color': decoration.color,
              'width': decoration.size,
              'margin-top': decoration.marginTop,
              'margin-left': decoration.marginleft,
              'height': decoration.size}"
          (click)="selectedDecoration = decoration">
          </div>
        </div>
      </div>
      <div class="col-lg-3">
        <div class="panel panel-success decoration-form">
          <div class="panel-heading">
            Edycja ozdób
          </div>
          <div class="panel-body">
            <div class="form-group">
              <div class="input-group input-group-sm">
                <span class="input-group-addon">Kolor</span>
                <input type="color" class="form-control" [(ng-model)]="selectedDecoration.color" />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group input-group-sm">
                <span class="input-group-addon">Rozmiar</span>
                <input type="range" min="0" max="50" class="form-control" [(ng-model)]="selectedDecoration.size" />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group input-group-sm">
                <span class="input-group-addon">Margines górny</span>
                <input type="number" class="form-control" [(ng-model)]="selectedDecoration.marginTop" />
              </div>
            </div>
            <div class="form-group">
              <div class="input-group input-group-sm">
                <span class="input-group-addon">Margines lewy</span>
                <input type="number" class="form-control" [(ng-model)]="selectedDecoration.marginleft" />
              </div>
            </div>
          </div>
          <div class="panel-footer">
            <small>*zaznacz ozdobe, aby zacząć ją edytować</small>
          </div>
        </div>
      </div>
      </div>

    `
})
class Eggs {
    public decorations: Decoration[] = [
        new Decoration('#000000', -100,355, 26),
        new Decoration('#FFCCFF', -160, 260, 26),
        new Decoration('#CC99CC', 90, 391, 25),
        new Decoration('#ff8080', -90, 290, 25),
        new Decoration('#97004b', -110, 322, 27),
        new Decoration('#ff8000', 26, 430, 25),
        new Decoration('#0080c0', 10, 255, 25),
        new Decoration('#b30000', -21, 340, 24),
        new Decoration('#6600FF', -25, 400, 21),
        new Decoration('#66FFCC', 28, 330, 29),
        new Decoration('#CCFF33', -19, 390, 25),
        new Decoration('#CCFFCC', -15, 300, 22),
        new Decoration('#FF66CC', -200, 400, 26),
        new Decoration('#0099CC', 28, 360, 24),
        new Decoration('#9933FF', -210, 370, 27),
        new Decoration('#66FF33', -30, 320, 26),
        new Decoration('#CC66FF', 60, 340, 22),
        new Decoration('#99FFFF', 30, 260, 26),
        new Decoration('#FF3399 ', -90, 400, 50),
        new Decoration('#993366', -110, 400, 35),
        new Decoration('#FF6666', 20, 240, 40),
        new Decoration('#CC66FF', -110, 250, 55),
        new Decoration('#0000CC', -110, 320, 35),
        new Decoration('#FFCC99', -30, 380, 35)
    ];
    public selectedDecoration: Decoration= this.decorations[0];
 }

bootstrap(Eggs);
