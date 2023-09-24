import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import ItemListContainer from '../components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from '../components/ItemDetailContainer/ItemDetailContainer';

const Navigation = () => {
    const router = createBrowserRouter([{
        path: '/',
        element: <ItemListContainer/>
    },
    {
        path:'/category/:idCategory',
        element: <ItemListContainer/>
    },
    {
        path:'/item/:idProduct',
        element: <ItemDetailContainer/>
    }
]);
    return(
        <RouterProvider router={router} />
    )
}

export default Navigation