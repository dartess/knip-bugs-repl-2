import { CacheFirst, NetworkFirst, NetworkOnly, StaleWhileRevalidate } from 'workbox-strategies';
import { Route } from 'workbox-routing';
import type { RouteMatchCallback } from 'workbox-core';

type CacheType =
  | typeof CacheFirst
  | typeof NetworkFirst
  | typeof NetworkOnly
  | typeof StaleWhileRevalidate;

type CacheDetails = {
  Cache: CacheType;
  capture: RegExp | string | RouteMatchCallback | Route;
  maxEntries?: number; // safe amount = amount at the time of development * multiplier (usually 2.5 or 3)
  maxAgeSeconds?: number;
  purgeOnQuotaError?: true;
  networkTimeoutSeconds?: number; // only for NetworkFirst
};

export function cacheInternalAssets(): void {
}

declare const self: ServiceWorkerGlobalScope;

self.addEventListener('install', () => {
  self.skipWaiting();
});

cacheInternalAssets();
