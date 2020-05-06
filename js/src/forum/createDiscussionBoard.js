import {override} from "flarum/extend";
import SplitDropdown from 'flarum/components/SplitDropdown';
import Button from 'flarum/components/Button';
import ItemList from 'flarum/utils/ItemList';
import DiscussionPage from "flarum/components/DiscussionPage";
import Board from './components/Board'

export default function() {

    override(DiscussionPage.prototype, 'view', function (original) {
        if(this.discussion && this.discussion.posts().length > 0
            && this.discussion.tags().some(t => t.name() === 'board')) {

            try {
                return Board.component({
                    discussion: this.discussion
                });
            } catch(e) {
                console.warn(e);
            }
        }

        return original();
    });
}
