const baseauthEndpoint = '/v1/auth';
const baseEndpoint = '/api/category';
const baseEndPointProduct='/api/v1/product'
const apiRoutes = {
  category: {
    all: `${baseEndpoint}/`,
    create: `${baseEndpoint}/create`,
    update: `${baseEndpoint}/update`,
    delete: `${baseEndpoint}/delete`,
    toggle:`${baseEndpoint}/toggle`
  },
  product: {
    all: `${baseEndPointProduct}`,
    create: `${baseEndPointProduct}`,
    update: `${baseEndPointProduct}`,
    delete: `${baseEndPointProduct}`,
    toggle:`${baseEndPointProduct}/toggle`
  },
  auth:{
    login:`${baseauthEndpoint}/`,
    forgetPassword:`${baseauthEndpoint}/forget-password`,
    resetPassword:`${baseauthEndpoint}/reset-password`,
    verifyEmail:`${baseauthEndpoint}/verify-email`,
  }
};

export default apiRoutes;