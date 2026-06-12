import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header>
      <h1>Angular 22 Feature Demos</h1>
      <nav>
        <a routerLink="/user-profile" routerLinkActive="active">User Profile (httpResource)</a>
        <a routerLink="/product-search" routerLinkActive="active">Product Search (Signal Forms)</a>
        <a routerLink="/checkout" routerLinkActive="active">Checkout (injectAsync)</a>
      </nav>
    </header>
    <main><router-outlet /></main>
  `,
})
export class AppComponent {}
