export const oktaConfig = {
    clientId: `0oaeipctl0ybitsTn5d7`,
    issuer: 'https://dev-45139547.okta.com/oauth2/default',
    redirectUri: 'http://localhost:3000/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,
    disableHttpsCheck: true,
}