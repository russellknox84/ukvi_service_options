'use strict';

module.exports = {
  name: 'prototype_one',
  baseUrl: '/prototype_one',
  steps: {
    '/': {
      behaviours: [require('./behaviours/start')],
      next: '/start'
    },
    '/start': {
      next: '/what-visa-do-you-currently-hold'
    },
    '/understand-my-options': {
      next: '/what-visa-do-you-currently-hold'
    },
    '/what-visa-do-you-currently-hold': {
      fields: ['what-visa-do-you-currently-hold'],
      next: '/what-is-the-country-of-your-nationality'
    },
    '/what-is-the-country-of-your-nationality': {
      fields: ['what-is-the-country-of-your-nationality'],
      behaviours: require('../common/behaviours/countries'),
      next: '/what-is-your-age'
    },
    '/no-visa-required': {
      backLink: false
    },
    '/do-you-have-grandparents-in-the-uk': {
      fields: ['do-you-have-grandparents-in-the-uk'],
      next: '/what-is-your-age'
    },
    '/what-is-your-age': {
      fields: ['what-is-your-age'],
      next: '/how-long-have-you-been-in-the-UK'
    },
    '/how-long-have-you-been-in-the-UK': {
      fields: ['how-long-have-you-been-in-the-UK'],
      forks: [{
        target: '/have-you-spent-6-months-or-more-outside-uk',
        condition: {
          field: 'how-long-have-you-been-in-the-UK',
          value: 'false'
        }
      }],
      next: '/do-you-have-a-family-member-in-the-uk'
    },
    '/have-you-spent-6-months-or-more-outside-uk': {
      fields: ['have-you-spent-6-months-or-more-outside-uk'],
      next: '/do-you-have-a-family-member-in-the-uk'
    },
    '/do-you-have-a-family-member-in-the-uk': {
      fields: ['do-you-have-a-family-member-in-the-uk'],
      forks: [{
        target: '/what-visa-do-they-hold',
        condition: {
          field: 'do-you-have-a-family-member-in-the-uk',
          value: 'true'
        }
      }],
      next: '/what-do-you-want-to-do-in-the-UK'
    },
    '/what-visa-do-they-hold': {
      fields: ['what-visa-do-they-hold'],
      forks: [{
        target: '/what-visa-does-your-family-member-currently-hold',
        condition: {
          field: 'what-visa-do-they-hold',
          value: 'other'
        }
      }],
      next: '/what-do-you-want-to-do-in-the-UK'
    },
    '/what-visa-does-your-family-member-currently-hold': {
      fields: ['what-visa-does-your-family-member-currently-hold'],
      next: '/what-do-you-want-to-do-in-the-UK'
    },
    '/what-do-you-want-to-do-in-the-UK': {
      fields: ['what-do-you-want-to-do-in-the-UK'],
      behaviours: [require('../common/behaviours/intentions')],
      next: '/visa-options',
    },
    '/what-industry-are-you-going-to-work-in': {
      fields: ['what-industry-are-you-going-to-work-in'],
      next: '/visa-options',
      backLink: '/stay-in-the-uk/what-do-you-want-to-do-in-the-UK'
    },
    '/visa-options': {
      behaviours: [require('../common/behaviours/visa-options')],
    }
  }
};