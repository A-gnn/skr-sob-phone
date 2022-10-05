import { useRoutes } from 'react-router-dom'
import Denglu from '../Pages/Denglu'
import Login from '../Pagess/Zhuce'
interface Route {
    path: string;
    element: React.ReactNode;
    children?: Route[]
}
function Router(){
    let Routes:Route[]=[
        {
            path:'/denglu',
            element:< Denglu/>      
        },
        {
            path:'/login',
            element:<Login/>
        }
    ]
    return useRoutes(Routes)
}
export default Router
