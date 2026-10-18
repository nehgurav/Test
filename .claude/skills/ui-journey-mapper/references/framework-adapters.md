# Framework adapter checklist

The adapter's role is to identify the framework's conventions and guide targeted discovery. The common output model remains framework-neutral.

| Framework | Discover | Trace |
|---|---|---|
| React | JSX/TSX, router config, page components | event handlers, hooks, context/store, navigation |
| Next.js | app/pages routes, layouts, server/client boundaries | links/router, server actions, client state, loading/error boundaries |
| Angular | routes, standalone components/modules, templates | bindings, event handlers, guards, resolvers, services, RxJS |
| Vue | SFCs, router, composables, stores | emits, handlers, reactive state, route changes |
| Nuxt | file routes, layouts, middleware, server/client boundaries | composables, navigation, data loading, form actions |
| Svelte | components, stores/runes, route files | events, state updates, navigation |
| SvelteKit | route files, load functions, form actions | client/server transitions, redirects, error states |
| Web Components | custom elements, shadow DOM, event listeners | dispatched events, attributes, property changes |
| Legacy/custom | HTML templates, route tables, navigation helpers | event listeners, custom state, URLs, browser tests |

For unknown frameworks:
1. identify entry points and package/build metadata;
2. find route registration and navigation helpers;
3. identify page/view components and visible controls;
4. search event bindings and state management;
5. use existing browser tests and runtime observations where available;
6. state the adapter's confidence and gaps.

Never claim complete framework coverage from filename detection alone.
