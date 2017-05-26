import {extend} from 'flarum/extend';
import routes from 'flagrow/aqueduct/routes';

app.initializers.add('flagrow-aqueduct', function(app) {
    routes(app);
});
