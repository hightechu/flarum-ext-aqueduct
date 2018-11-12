import Board from './pages/Board';

export default function (app) {
    app.routes['flagrow.aqueduct.board'] = {path: '/board/:tag', component: Board.component()};
}
