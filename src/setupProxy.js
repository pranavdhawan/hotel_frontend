const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://hotel-backend-q4cx.onrender.com',
      changeOrigin: true,
    })
  );
};