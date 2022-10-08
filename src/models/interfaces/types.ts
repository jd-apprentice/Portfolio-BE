export type Config = {
  app: {
    port: typeof process.env.DB_PORT;
    url: typeof process.env.BASE_URL;
  };
  db: {
    mongoURL: typeof process.env.DB_HOST;
  };
  jwt: {
    secret: typeof process.env.TOKEN;
  };
};
export interface IInfo {
  save: () => Promise<void>;
  first_name?: string;
  last_name?: string;
  about?: string;
  role?: string;
  picture?: string;
  date_of_birth?: Date;
  full_name?: string;
  socials?: Record<string, string>;
}
