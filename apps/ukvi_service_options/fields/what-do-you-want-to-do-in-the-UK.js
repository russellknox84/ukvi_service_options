module.exports = {
    'what-do-you-want-to-do-in-the-UK': {
        validate: 'required',
        mixin: 'checkbox-group',
        legend: {
            className: 'legend-padding'
        },
        'options': {
            'british': {
            'label': 'become a British Citizen',
            'value': 'british'
            },
            'family': {
            'label': 'live with my family',
            'value': 'family'
            },
            'retire': {
            'label': 'retire',
            'value': 'retire'
            },
            'business': {
            'label': 'start a business',
            'value': 'business'
            },
            'study': {
            'label': 'study',
            'value': 'study'
            },
            'volunteer for a charity': {
            'label': 'volunteer for a charity',
            'value': 'charity'
            },
            'work': {
            'label': 'work',
            'value': 'working'
            }
        }
    }
}