import { Service } from '@angular/core';

// Heavy analytics service — kept out of the initial bundle via injectAsync
@Service()
export class AnalyticsService {
  track(event: string, payload?: Record<string, unknown>) {
    console.log('[Analytics]', event, payload ?? {});
  }
}
