'use strict';

module.exports = {
  name: 'ukvi_service_options',
  baseUrl: '/ukvi_service_options',
  steps: {
    '/name': {
      fields: ['name'],
      next: '/confirm'
    },
    '/confirm': {
      behaviours: ['complete', require('hof-behaviour-summary-page')],
      next: '/complete'
    },
    '/complete': {
      template: 'confirmation'
    }
  }
};
