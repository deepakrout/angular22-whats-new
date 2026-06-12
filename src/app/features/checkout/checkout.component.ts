import { Component, signal, injectAsync } from '@angular/core';

@Component({
  selector: 'app-checkout',
  standalone: true,
  template: `
    <h2>Checkout — injectAsync() Demo</h2>
    <p>AnalyticsService is NOT in the initial bundle. It loads on-demand.</p>
    @if (orderPlaced()) {
      <div class="success">✅ Order placed! Analytics event fired (check console).</div>
    } @else {
      <button (click)="placeOrder()">Complete Order</button>
    }
  `,
})
export class CheckoutComponent {
  readonly orderPlaced = signal(false);

  private readonly analytics = injectAsync(
    () => import('../../core/services/analytics.service').then(m => m.AnalyticsService),
    { onIdle: true }
  );

  async placeOrder() {
    const analytics = await this.analytics();
    analytics.track('checkout_completed', { timestamp: Date.now() });
    this.orderPlaced.set(true);
  }
}
