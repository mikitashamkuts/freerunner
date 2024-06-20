// Declare a TypeScript module for environment variables
// This module '@env' allows us to type and manage environment variables in a type-safe manner

// The '@env' module is used to manage environment variables in a React Native project
// This ensures that sensitive data such as API keys and endpoints are not hard-coded

declare module '@env' {
  // Define the type for the SENTRY_DSN environment variable
  // Sentry DSN (Data Source Name) is a unique URL that identifies your Sentry project
  // It's used to configure Sentry to monitor and report errors for your application
  export const SENTRY_DSN: string;

  // Define the type for the DEVELOPMENT_ORIGIN environment variable
  // DEVELOPMENT_ORIGIN is typically the base URL of your API server during development
  // Using a variable allows you to switch environments without changing code
  export const DEVELOPMENT_ORIGIN: string;

  // Define the type for the PRODUCTION_ORIGIN environment variable
  // PRODUCTION_ORIGIN is the base URL of your API server in a production environment
  // This helps ensure that you use the correct server configuration in production
  export const PRODUCTION_ORIGIN: string;
}
