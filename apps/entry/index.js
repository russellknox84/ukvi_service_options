'use strict';

module.exports = {
  name: 'entry',
  baseUrl: '/',
  steps: {
    '/': {
      behaviours: [require('./behaviours/start')],
      next: '/entry'
    },
    '/entry': {
      next: '/prototype_one'
    },
  },
};