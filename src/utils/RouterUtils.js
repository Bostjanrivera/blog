import routes from '../server/routes';
import Error404 from '../pages/Error404';
const getHash = () => {
  const hash = location.hash.slice(1).toLocaleLowerCase().split('/')
  if (hash[2]) {
    return `${hash[1]}/${hash[2]}`
  } else if (hash[1]) {
    return location.hash.slice(1).toLocaleLowerCase().split('/')[1]
  } else {
    return '/'
  }
}
const resolveRoute = (hash) => {
  if (hash.length <= 3) {
    const route = hash === '/' ? hash : hash === 'articles' ? '/articles' : hash === 'biography' ? '/biography' : '/article/:id';
    return route;
  }
  return `/${hash}`;
}

async function toRender(){
  const hash = getHash();
  const route = resolveRoute(hash);

  const render = routes[route] || Error404;
  return render();
}

export { toRender };