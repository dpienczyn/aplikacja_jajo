import {bootstrap, Component,} from 'angular2/angular2';

@Component({
    selector: 'message',
    template: `
    <div class="col-lg-3">
    	<div class="message">
        <h1>Wesołego Alleluja!</h1>
        </div>
    `
})
class Message {}
bootstrap(Message);