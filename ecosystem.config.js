module.exports = {
  /**
   * Application configuration section
   * http://pm2.keymetrics.io/docs/usage/application-declaration/
   */
  apps : [
    {
      name      : 'bayesianas',
      script    : 'index.js',
      watch     : true,
      env: {
        PORT: 5000
      }
    }
  ]
};