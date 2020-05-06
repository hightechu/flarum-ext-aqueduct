import YAML from 'yaml'
import {override} from "flarum/extend";
import SplitDropdown from 'flarum/components/SplitDropdown';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';
import DiscussionPage from "flarum/components/DiscussionPage";
import Board from './components/Board'

function createBoardConfig(yaml) {
    let data = {};
    try {
        data = YAML.parse(yaml);
        // TODO check version
    } catch(e) {
        data.description = YAML.stringify(yaml);
    }
    return data;
}

function dumpBoardConfig(config) {
    config.version = "1.0"; // TODO find a way to retrieve version
    return YAML.stringify(config);
}

export default function() {

    override(DiscussionPage.prototype, 'view', function (original) {
        if(this.discussion && this.discussion.posts().length > 0
            && this.discussion.tags().some(t => t.name() === 'board')) {

            try {
                let content = this.discussion.posts()[0].content();
                return Board.component(createBoardConfig(content));
            } catch(e) {
                console.warn(e);
            }
        }

        return original();
    });
}
