import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-smart-city-ui',
  outputTargets: [
    { type: 'dist' },
    { type: 'www', serviceWorker: null }
  ]
};
