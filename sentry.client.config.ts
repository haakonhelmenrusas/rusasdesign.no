import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://e2fb05fb5d80d2c4c45cb194d1935bc5@o4505578901929984.ingest.us.sentry.io/4508811743330304',

  integrations: [
    Sentry.replayIntegration(),
  ],

  tracesSampleRate: 1,

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
