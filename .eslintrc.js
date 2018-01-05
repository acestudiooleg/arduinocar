module.exports = {
  "parser": "babel-eslint",
  "extends": "standard",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module"
  },
  "extends": "airbnb-base",
  'settings': {
    'import/resolver': {
      'webpack': {
        'config': 'webpack.config.js'
      }
    }
  },
  "env": {
    "browser": true
  },
  "rules": {
    "global-require": 0,
    "import/first": 0,
    "no-param-reassign": 0,
    "no-multi-assign": 0,
    "comma-dangle": 0,
    "arrow-body-style": 0,
    "no-plusplus": 0,
    "no-unused-vars": 1,
    "spaced-comment": 1,
    "object-curly-spacing": 0,
    "arrow-parens": 0,
    "no-shadow": 0,
    "import/no-named-as-default-member": 0
  },
  "globals": {
    "phaser": true
  },
  "settings": {
    "import/core-modules": ["phaser", "pixi", "p2"]
  }
};