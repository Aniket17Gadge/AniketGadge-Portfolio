import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './index.scss';

const Layout = () => {
    return <div className='App'>
        <Sidebar />
        <div className='page'>
            <span className='tags top-tags'>
                &lt;body&gt;
            </span>
            <Outlet></Outlet>
            <span  className='tags bottom-tags'>&lt;/body&gt;</span>
           <br/>
           
           
        </div>
    </div>
}

export default Layout 