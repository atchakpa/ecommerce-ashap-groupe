module.exports = {
  apps : [{
    name: 'ecom_ashab_group',
    script: './node_modules/next/dist/bin/next',
    args: 'start -p 3231'
  }],

  deploy : {
    production : {
      user : 'atchakpa',
      host : '161.97.91.248',
      ref  : 'origin/master',
      repo : 'git@github.com:atchakpa/ecommerce-ashap-groupe.git',
      path : '/home/atchakpa/node_app/ecom_ashab_group',
      'pre-deploy-local': '',
      'post-deploy' : 'pnpm i && pnpm run build && pm2 start && pm2 restart ecom_ashab_group',
      'pre-setup': ''
    }
  }
};
