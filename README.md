# ASP.Net Core Web App with React
[source](https://www.youtube.com/watch?v=4RKuyp_bOhY&ab_channel=freeCodeCamp.org)

--- ---
## ASP.Net Core and React

- React for frontend
- ASP.Net Core for backend

--- ---

## Routing in ASP.Net Core Web API with React

- In **_Model_** folder add **_ItemModel.js_**

```c#
namespace DemoReact.Models
{
    public class ItemModel
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int ImageId { get; set; }
        public int Ranking { get; set; }
        public int ItemType { get; set; }

    }
}

```

- In **_Controller_** section, we will be adding **_controller_** for our model class

```C#
using DemoReact.Models;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

namespace DemoReact.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ItemController : ControllerBase
    {
        private static readonly IEnumerable<ItemModel> Items = new[]
        {
            new ItemModel{Id =1, Title = "The Godfather", ImageId=1, Ranking=0,ItemType=1 },
            new ItemModel{Id =2, Title = "Highlander", ImageId=2, Ranking=0,ItemType=1 },
            new ItemModel{Id =3, Title = "Highlander II", ImageId=3, Ranking=0,ItemType=1 },
            new ItemModel{Id =4, Title = "The Last of the Mohicans", ImageId=4, Ranking=0,ItemType=1 },
            new ItemModel{Id =5, Title = "Police Academy 6", ImageId=5, Ranking=0,ItemType=1 },
            new ItemModel{Id =6, Title = "Rear Window", ImageId=6, Ranking=0,ItemType=1 },
            new ItemModel{Id =7, Title = "Road House", ImageId=7, Ranking=0,ItemType=1 },
            new ItemModel{Id =8, Title = "The Shawshank Redemption", ImageId=8, Ranking=0,ItemType=1 },
            new ItemModel{Id =9, Title = "Star Treck IV", ImageId=9, Ranking=0,ItemType=1 },
            new ItemModel{Id =10, Title = "Superman 4", ImageId=10, Ranking=0,ItemType=1 },
            new ItemModel{Id = 11, Title = "Abbey Road", ImageId=11, Ranking=0,ItemType=2 },
            new ItemModel{Id = 12, Title = "Adrenalize", ImageId=12, Ranking=0,ItemType=2 },
            new ItemModel{Id = 13, Title = "Back in Black", ImageId=13, Ranking=0,ItemType=2 },
            new ItemModel{Id = 14, Title = "Enjoy the Silence", ImageId=14, Ranking=0,ItemType=2 },
            new ItemModel{Id = 15, Title = "Parachutes", ImageId=15, Ranking=0,ItemType=2 },
            new ItemModel{Id = 16, Title = "Ride the Lightning", ImageId=16, Ranking=0,ItemType=2 },
            new ItemModel{Id = 17, Title = "Rock or Bust", ImageId=17, Ranking=0,ItemType=2 },
            new ItemModel{Id = 18, Title = "Rust in Peace", ImageId=18, Ranking=0,ItemType=2 },
            new ItemModel{Id = 19, Title = "St. Anger", ImageId=19, Ranking=0,ItemType=2 },
            new ItemModel{Id = 20, Title = "The Final Countdown", ImageId=20, Ranking=0,ItemType=2 }

        };

        [HttpGet("{itemType:int}")]
        public ItemModel[] Get(int itemType)
        {
            // iterate over all items list 
            // ItemModel[] items = (ItemModel[])itemModels.Where(i=> i.ItemType== itemType);
            ItemModel[] items = Items.Where(i => i.ItemType == itemType).ToArray();
            return items;
        }
    }
}

```

--- ---

## React Settings


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