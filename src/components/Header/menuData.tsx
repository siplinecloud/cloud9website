import { Menu } from "@/types/menu";

const menuData: Menu[] = [
{
id: 1,
title: "Home",
path: "/",
newTab: false,
},
{
id: 2,
title: "About",
path: "/about",
newTab: false,
},
{
id: 4,
title: "Support",
path: "/contact",
newTab: false,
},
{
id: 5,
title: "Solutions",
newTab: false,
submenu: [
{
id: 51,
title: "Mate24/7",
path: "/solutions/mate24-7",
newTab: false,
},
],
},
{
id: 6,
title: "API Documentation",
path: "/api-documentation",
newTab: false,
},
];
export default menuData;
