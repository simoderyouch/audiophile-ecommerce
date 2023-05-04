
import HomeHero from '../helper/homeHero';
import ProductList from "../helper/productList";
import Product from "../helper/product";
import Aside from '../helper/aside';


function Home() {

    return (
        <>
            <HomeHero />
            <div className="container  max-sm:px-[2rem] max-[580px]:mt-[4rem] mt-[11rem]">
                <ProductList />
                <Product />
                <Aside />

            </div>

        </>
    );
}



export default Home;