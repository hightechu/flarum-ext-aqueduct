import app from "flarum/app";
import addPermissions from './addPermissions';
import allowConfigurationPerTag from './allowConfigurationPerTag';


app.initializers.add('hyn-aqueduct', app => {
    addPermissions();
    // allowConfigurationPerTag();
});
