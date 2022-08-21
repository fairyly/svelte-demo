// Import the wrap method
import {wrap} from 'svelte-spa-router/wrap'

// Note that Author and Book are not imported here anymore, so they can be imported at runtime
import Home from './routes/Home.svelte'
import NotFound from './routes/NotFound.svelte'

const routes = {
    '/': Home,

    // Wrapping the Book component
    '/book/*': wrap({
        asyncComponent: () => import('./routes/Book.svelte')
    }),

    // Catch-all route last
    '*': NotFound,
}

export default routes;