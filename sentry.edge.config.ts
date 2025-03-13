import * as Sentry from '@sentry/nextjs';

Sentry.init({
  dsn: 'https://e2fb05fb5d80d2c4c45cb194d1935bc5@o4505578901929984.ingest.us.sentry.io/4508811743330304',
  tracesSampleRate: 1,
  debug: false,
});
