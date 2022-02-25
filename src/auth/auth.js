import { Auth0Client } from "@auth0/auth0-spa-js";

export const redirectUri = "http://localhost:3000/oauth-callback";
export const baseUrl = "https://id-sandbox.cashtoken.africa";
export const clientId = "wprQYMZBqqx-dgszFUfQG";

export const auth = new Auth0Client({
  domain: `${baseUrl}/oauth`,
  client_id: clientId,
  cacheLocation: "localstorage",
});

export const signout = new Auth0Client({
  domain: `${baseUrl}/account/signout`,
  client_id: clientId,
});
