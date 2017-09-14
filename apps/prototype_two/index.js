'use strict';

module.exports = {
  name: 'prototype_two',
  baseUrl: '/prototype_two',
  steps: {
    '/': {
      behaviours: [require('./behaviours/start')],
      next: '/visa_list'
    },
    '/visa_list': {
      behaviours: require('../common/behaviours/visa-options'),
      next: '/visa_options'
    },
    '/visa_options': {
        behaviours: [require('./behaviours/visa-options')],
        fields: [
            'visa',
            'nationality',
            'age',
            'residency',
            'familyVisa',
            'industry',
            'intentions',
            'grandparent',
            'family'
        ],
        next: '/filtered_list',
    },
    '/filtered_list': {
      behaviours: require('../common/behaviours/visa-options'),
      template: 'visa_list',
      next: '/visa_options',
    }
  },
};