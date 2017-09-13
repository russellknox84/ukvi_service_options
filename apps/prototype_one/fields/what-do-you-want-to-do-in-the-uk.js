'use strict';

module.exports = {
    'what-do-you-want-to-do-in-the-UK': {
        validate: 'required',
        mixin: 'checkbox-group',
        legend: {
            className: 'legend-padding'
        },
        'options': {
            'family': {
                'label': 'Live with my family',
                'value': 'family'
            },
            'retire': {
                'label': 'Retire',
                'value': 'retire'
            },
            'business': {
                'label': 'Start a business',
                'value': 'business'
            },
            'study': {
                'label': 'Study',
                'value': 'study'
            },
            'volunteer for a charity': {
                'label': 'Volunteer for a charity',
                'value': 'charity'
            },
            'work': {
                'label': 'Work',
                'value': 'work'
            }
        }
    }
};