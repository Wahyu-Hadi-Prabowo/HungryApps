import Value from '../views/pages/value';
import Favorite from '../views/pages/favorite';
import Detail from '../views/pages/detail';

const routes = {
  '/': Value,
  '/value': Value,
  '/favorite': Favorite,
  '/detail/:id': Detail,
};

export default routes;
