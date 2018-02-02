var gulp = require('flarum-gulp');

gulp({
    files: [
        'node_modules/html5sortable/dist/html.sortable.js',
    ],
    modules: {
        'flagrow/aqueduct': [
            'src/**/*.js'
        ]
    }
});
