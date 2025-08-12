import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import * as Sentry from "@sentry/react";
import './index.css'
import App from './App.tsx'

// -- Sentry Configuration --
// This initializes Sentry for error monitoring and performance tracking.
// IMPORTANT: You must replace the placeholder DSN below with your actual DSN from your Sentry project.
// You can find your DSN in your Sentry project settings under "Client Keys (DSN)".
Sentry.init({
  dsn: "YOUR_SENTRY_DSN_GOES_HERE",
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      // This sets the sample rate for session replay.
      // 0.1 means we'll capture 10% of sessions.
      // Adjust this value based on your needs and Sentry plan.
      maskAllText: false,
      blockAllMedia: false,
    }),
  ],
  // Performance Monitoring
  tracesSampleRate: 1.0, // Capture 100% of transactions for performance monitoring.
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
