# WebAssembly AI Smart City Analysis

This WebAssembly module powers AI-driven urban planning, traffic management, and environmental analytics.

## Build Instructions

1. Install Rust and WebAssembly target:
   ```bash
   rustup target add wasm32-unknown-unknown
   ```

2. Build the WebAssembly module:
   ```bash
   cargo build --target wasm32-unknown-unknown --release
   ```

3. Integrate with frontend applications.