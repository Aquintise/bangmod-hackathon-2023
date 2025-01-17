declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';

      DB_URL: string;

      GOOGLE_OAUTH_REDIRECT_URL: string;
      GOOGLE_OAUTH_CLIENT_ID: string;
      GOOGLE_OAUTH_CLIENT_SECRET: string;
    }
  }

  declare namespace Express {
    export interface Request {
      session?: {
        id: string,
      }
    }
  }
}

export { };
