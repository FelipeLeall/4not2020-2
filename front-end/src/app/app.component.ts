import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <app-main-toolbar appName={{title}}></app-main-toolbar>
    <router-outlet></router-outlet>
    <app-main-footer></app-main-footer>
  `,
  styles: []
})
export class AppComponent {
  title = 'Escola AGORA VAI';
}
