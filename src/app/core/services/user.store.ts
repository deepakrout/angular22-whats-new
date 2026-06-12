import { Service, signal, computed } from '@angular/core';

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

// Angular 22: @Service() replaces @Injectable({ providedIn: 'root' })
@Service()
export class UserStore {
  readonly currentUser = signal<User | null>(null);
  readonly isLoggedIn = computed(() => this.currentUser() !== null);

  setUser(user: User) { this.currentUser.set(user); }
  clearUser() { this.currentUser.set(null); }
}
