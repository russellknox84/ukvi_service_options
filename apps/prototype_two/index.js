'use strict';

module.exports = {
  name: 'prototype_two',
  baseUrl: '/prototype_two',
  steps: {
    '/': {
      behaviours: [require('./behaviours/start')],
      next: '/start'
    },
    '/start': {
      next: '/prototype_one'
    },
  },
};