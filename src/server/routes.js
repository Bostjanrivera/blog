import Home from '../pages/Home';
import Biography from '../pages/Biography';
import Articles from '../pages/Articles';
import ViewArticle from '../pages/ViewArticle'

const routes = {
    '/': Home,
    '/biography': Biography,
    '/articles': Articles,
    '/article/:id': ViewArticle,
};

export default routes;