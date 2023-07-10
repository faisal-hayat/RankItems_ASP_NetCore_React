# ASP.Net Core Web App with React
[source](https://www.youtube.com/watch?v=4RKuyp_bOhY&ab_channel=freeCodeCamp.org)

--- ---
## ASP.Net Core and React

- React for frontend
- ASP.Net Core for backend

--- ---

## Routing in ASP.Net Core Web API with React

- In **_setuptProxy.js_**

```js
const context =  [
    "/weatherforecast",
    "/item", // This is where we have added our Route
];
```

- After that go to **_AppRoutes.js_**

```js
import { Counter } from "./components/Counter";
import { FetchData } from "./components/FetchData";
import { Home } from "./components/Home";
import RankItems from "./components/RankItems";


const AppRoutes = [
  {
    index: true,
    element: <Home />
  },
  {
    path: '/counter',
    element: <Counter />
  },
  {
    path: '/fetch-data',
    element: <FetchData />
   },
   {
     path: '/rank-items',
     element: <RankItems />
   },
];

export default AppRoutes;

```



--- ---