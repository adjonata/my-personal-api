declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PRODUCTION_PORT: string;
      NODE_ENV: "production" | "development";
      CONNECTION: string;
    }
  }
}

export {};
