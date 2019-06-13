module.exports = {
  apps : [{
    name: 'server',
    script: 'bin/www',
    args: '',
    instances: 1,
    autorestart: true,
    watch: true,
    max_memory_restart: '1G',
    ignore_watch : ["logs"],
    log_file: "logs/combined.outerr.log",
    error_file:'logs/errors.log',
    out_file:'logs/output.log',
    env: {
      NODE_ENV: 'development'
    },
    env_production: {
      NODE_ENV: 'production'
    }
  }]
};
