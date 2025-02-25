import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <h1>AI Smart City UI Dashboard</h1>
    <div class="dashboard">
      <smart-city-dashboard></smart-city-dashboard>
      <wasm-city-analysis></wasm-city-analysis>
    </div>
  `,
  styles: ['.dashboard { display: flex; gap: 20px; justify-content: center; padding: 20px; }']
})
export class AppComponent { }