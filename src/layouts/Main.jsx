import Header from '../pages/shared/Header';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <div className='container mx-auto'>
            <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;