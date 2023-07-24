/* eslint-disable import/no-default-export */

import type { KnipConfig } from 'knip';

const config: KnipConfig = {
  entry: [
    'src/core/serviceWorker/service-worker.ts', // service-worker
  ],
  rules: {
    types: 'off',
    nsTypes: 'off',
    enumMembers: 'off',
  },
};

export default config;
