import extract from 'flarum/utils/extract';
import assigneeLabel from 'flagrow/aqueduct/labels/assigneeLabel';

export default function assigneesLabel(assignees, attrs = {}) {
    const children = [];
    const link = extract(attrs, 'link');

    attrs.className = 'AssigneesLabel ' + (attrs.className || '');

    if (assignees) {
        assignees.forEach(assignee => {
            children.push(assigneeLabel(assignee, {link}));
        });
    } else {
        children.push(assigneeLabel());
    }

    return <span {...attrs}>{children}</span>;
}
