import {extend} from 'flarum/extend';
import routes from 'flagrow/aqueduct/routes';
import addsBoardToDiscussion from 'flagrow/aqueduct/addsBoardToDiscussion';

app.initializers.add('flagrow-aqueduct', function(app) {
    routes(app);

    addsBoardToDiscussion();
});
