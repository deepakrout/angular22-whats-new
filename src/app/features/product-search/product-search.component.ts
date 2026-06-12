import { Component, computed } from '@angular/core';
import { formGroup, formControl } from '@angular/forms';
import { JsonPipe } from '@angular/common';

// Angular 22: Signal Forms are now stable
@Component({
  selector: 'app-product-search',
  standalone: true,
  imports: [JsonPipe],
  template: `
    <h2>Product Search — Signal Forms Demo</h2>
    <div [formGroup]="searchForm">
      <input [formControl]="searchForm.controls.query" placeholder="Search products…" />
      <select [formControl]="searchForm.controls.category">
        <option value="">All categories</option>
        <option value="electronics">Electronics</option>
        <option value="clothing">Clothing</option>
        <option value="books">Books</option>
      </select>
      <label>
        <input type="checkbox" [formControl]="searchForm.controls.inStockOnly" />
        In stock only
      </label>
    </div>
    <p>Form valid: {{ searchForm.valid() }}</p>
    <pre>{{ searchForm.value() | json }}</pre>
    @for (item of results(); track item.id) {
      <div>{{ item.name }} — {{ item.category }}</div>
    }
  `,
})
export class ProductSearchComponent {
  readonly searchForm = formGroup({
    query: formControl('', { required: true, minLength: 2 }),
    category: formControl(''),
    inStockOnly: formControl(false),
  });

  readonly results = computed(() => {
    const { query, category, inStockOnly } = this.searchForm.value();
    if (!query || query.length < 2) return [];
    return MOCK_PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(query.toLowerCase()) &&
      (!category || p.category === category) &&
      (!inStockOnly || p.inStock)
    );
  });
}

const MOCK_PRODUCTS = [
  { id: 1, name: 'Wireless Headphones', category: 'electronics', inStock: true },
  { id: 2, name: 'Angular T-Shirt', category: 'clothing', inStock: false },
  { id: 3, name: 'TypeScript Handbook', category: 'books', inStock: true },
  { id: 4, name: 'Mechanical Keyboard', category: 'electronics', inStock: true },
];
