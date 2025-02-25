import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'smart-city-dashboard',
  styleUrl: 'smart-city-dashboard.css',
  shadow: true
})
export class SmartCityDashboard {
  @State() cityStatus: string = "Gathering city data...";

  analyzeCity() {
    const insights = [
      "🚦 Traffic Flow: Optimal - No congestion detected",
      "🌡️ Air Quality Index: Moderate - Suggesting green initiatives",
      "🏗️ Infrastructure Status: Stable - No maintenance required",
      "⚡ Energy Usage: Efficient - Sustainable levels maintained",
      "📡 IoT Network: Stable - All sensors operational"
    ];
    this.cityStatus = insights[Math.floor(Math.random() * insights.length)];
  }

  render() {
    return (
      <div class="smart-city-box">
        <h2>AI Smart City Dashboard</h2>
        <button onClick={() => this.analyzeCity()}>Analyze City Data</button>
        <p>{this.cityStatus}</p>
      </div>
    );
  }
}
