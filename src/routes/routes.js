import Home from '../views/home/home.jsx';
import AboutUs from '../views/aboutUs/aboutUs.jsx';
import Detail from '../views/detail/detail.jsx';
import NotFound from '../views/notfound/notFound.jsx';

const routes = [
    {
        path:'/',
        component: Home, 
        exact:true,
        name: 'Home'
    },
    {
        path:'/aboutus',
        component: AboutUs,
        name:'About us'
       
    },
    {
        path:'/know-more',
        component: Detail,
        name:'Know more'
    },
    {
        component: NotFound
    }
];

export {
    routes
}