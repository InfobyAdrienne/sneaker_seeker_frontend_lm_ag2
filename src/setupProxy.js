const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://sneaker-seeker-backend-lm-ag2.herokuapp.com/api',
      changeOrigin: true,
    })
  );
};