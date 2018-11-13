import Board from './pages/Board';

export default function (app) {
    app.routes['flagrow.kanban.board'] = {path: '/board/:tag', component: Board.component()};
}
