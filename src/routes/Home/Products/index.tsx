import HeaderProducts from "../../../components/HeaderProducts";
import { Outlet } from 'react-router-dom';

function Products() {
    return(
        <main className="container pt">
            <HeaderProducts/>
            <Outlet/>
        </main>
    );
}

export default Products