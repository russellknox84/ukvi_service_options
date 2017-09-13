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
      next: '/visa_options'
    },
    '/visa_options': {
        behaviours: [require('./behaviours/visa-options'), require('../common/behaviours/visa-options')],
        fields: [
            'visa',
            'nationality',
            'age',
            'residency',
            'familyVisa',
            'industry'
        ],
        next: '/visa_options',
    },
  },
};