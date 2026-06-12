# Angular 22 — What's New: Feature Demos

Companion repository for the blog post **"Angular 22 Is Here: Signal Forms, Stable Resources, and the Signal-First Era"** on [habitualcs.io](https://habitualcs.io).

This project demonstrates the key production-stable features shipped in Angular 22, including the stable `resource()` / `httpResource()` APIs, Signal Forms, the `@Service` decorator, and `injectAsync()` for lazy-loaded services.

## Features Demonstrated

| Demo | Route | Feature |
|---|---|---|
| User Profile | `/user-profile` | `httpResource()` — stable reactive HTTP |
| Product Search | `/product-search` | Signal Forms — stable, no boilerplate |
| Checkout | `/checkout` | `@Service` + `injectAsync()` lazy DI |

## Prerequisites

- Node.js 22+
- Angular CLI 22+
- TypeScript 6+

## Setup

```bash
# Clone the repo
git clone https://github.com/deepakrout/angular22-whats-new.git
cd angular22-whats-new

# Install dependencies
npm install

# Start dev server
npm start
# → http://localhost:4200
```

## Build

```bash
npm run build
```

## Project Structure

```
src/
├── app/
│   ├── core/
│   │   └── services/
│   │       ├── user.store.ts          # @Service() decorator demo
│   │       └── analytics.service.ts   # lazy-loaded via injectAsync()
│   ├── features/
│   │   ├── user-profile/              # httpResource() demo
│   │   ├── product-search/            # Signal Forms demo
│   │   └── checkout/                  # injectAsync() demo
│   ├── app.component.ts
│   ├── app.config.ts
│   └── app.routes.ts
└── main.ts
```

## Related Posts

- [Angular Signal Forms (v21)](https://habitualcs.io/blog/angular-signal-forms-v21-the-future-of-form-handling-is-here) — now stable in v22
- [Angular resource() API](https://habitualcs.io/blog/angulars-experimental-resource-api-declarative-async-data-fetching-with-signals) — now stable in v22

## License

MIT
