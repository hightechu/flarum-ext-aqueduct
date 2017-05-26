var gulp = require('flarum-gulp');

gulp({
    modules: {
        'flagrow/aqueduct': [
            'src/**/*.js'
        ]
    }
});
