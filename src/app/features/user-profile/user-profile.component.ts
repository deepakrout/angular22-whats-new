import { Component, signal } from '@angular/core';
import { httpResource } from '@angular/common/http';
import { JsonPipe } from '@angular/common';

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <h2>User Profile — httpResource() Demo</h2>
    <label>
      User ID (1–10):
      <input type="number" [value]="userId()" min="1" max="10"
             (input)="userId.set(+$any($event.target).value)" />
    </label>
    @if (userResource.isLoading()) {
      <p>Loading…</p>
    } @else if (userResource.error()) {
      <p class="error">Error loading user</p>
    } @else {
      <pre>{{ userResource.value() | json }}</pre>
    }
  `,
})
export class UserProfileComponent {
  readonly userId = signal(1);
  // Angular 22: httpResource() is now stable
  readonly userResource = httpResource<User>(
    () => `https://jsonplaceholder.typicode.com/users/${this.userId()}`
  );
}
