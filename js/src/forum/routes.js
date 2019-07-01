import Board from './pages/Board';

export default function (app) {
    app.routes['aqueduct.board'] = {path: '/board/:tag', component: Board.component()};
}
