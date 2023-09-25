const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/boundaries?camp=doro',
    createProxyMiddleware({
      target: 'http://localhost:1337',
      changeOrigin: true,
    })
  );
};

module.exports = function(app) {
    app.use(
      '/boundaries?camp=pamir',
      createProxyMiddleware({
        target: 'http://localhost:1337',
        changeOrigin: true,
      })
    );
  };