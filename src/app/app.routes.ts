import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'user-profile', pathMatch: 'full' },
  {
    path: 'user-profile',
    loadComponent: () =>
      import('./features/user-profile/user-profile.component').then(m => m.UserProfileComponent),
  },
  {
    path: 'product-search',
    loadComponent: () =>
      import('./features/product-search/product-search.component').then(m => m.ProductSearchComponent),
  },
  {
    path: 'checkout',
    loadComponent: () =>
      import('./features/checkout/checkout.component').then(m => m.CheckoutComponent),
  },
];
