export const environment = {
  appId: '',
  production: true,
  env: '',
  configSource: '',
  recaptcha: {
    scriptUrl: '',
    siteKey: ''
  },
  authMechanisms: {
    azureAD: false,
    huella: false,
    colaboradorDigital: false,
    authCode: false
  },
  authIdp: {
    AAD: {
      tenantId: '',
      clientId: '',
      authorityUrl: '',
      redirectUri: '',
      graphUrl: ''
    },
    SSO: {
      appId: '',
      channel: '',
      apiUrl: ''
    }
  },
  interceptorApproach: [],
  idpSpecificationRequired: false
};