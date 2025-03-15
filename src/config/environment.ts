export const environment = {
  production: process.env.NODE_ENV === "production",
  apiBaseUrl:
    process.env.NODE_ENV === "production"
      ? "https://api.mailzen.com"
      : "http://localhost:4000",
};
