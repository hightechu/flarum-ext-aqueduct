import {extend} from "flarum/extend";
import EditTagModal from "flarum/components/EditTagModal";

export default function () {
    extend(EditTagModal.prototype, 'fields', function(fields) {

        fields.add('board', <div className="Form-group">
            <div>
                <label className="checkbox">
                    <input type="checkbox" value="1" checked={this.isHidden()} onchange={m.withAttr('checked', this.isHidden)}/>
                    {app.translator.trans('flarum-tags.admin.edit_tag.hide_label')}
                </label>
            </div>
        </div>, 9);

        return fields;
    })
}
