import Home from "../home";
import Contact from "../contact";
import NotFound from "../notfound"
import Signin from "../Admin/Signin";
import GeneralLayout from "../layouts/GeneralLayout";

const routesAdmin = [
    {path:"/Admin",layout:GeneralLayout,component:Signin},
    {path:"/Admin/contact",layout:GeneralLayout,component:Contact }
];

const routesGeneral = [
    {path:"/",layout:GeneralLayout,component:Home},
    {path:"*",layout:GeneralLayout,component:NotFound}
];

const projectRoutes = [...routesAdmin,...routesGeneral];

export default projectRoutes;