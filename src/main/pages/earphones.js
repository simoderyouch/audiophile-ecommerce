import { useContext, useEffect } from 'react';
import { MyContext } from '../Context/context';
import Aside from '../helper/aside';
import ProductList from '../helper/productList';
import ProductMark from '../helper/ProductMark';
import Header from '../helper/CustomHeader';


function Earphones() {

    const { earphonesProduct } = useContext(MyContext);
    useEffect(() => {
        document.title = 'Audiophile shop - Earphones';
    }, []);



    return (
        <div>
            <Header titre="Earphones" />
            <div className="container max-lg:px-6">



                {earphonesProduct.map((pr, index) => {
                    return <ProductMark data={pr} index={index} key={index} />

                })}
                <div className='mt-[13rem] max-sm:mt-[8rem]'>
                    <ProductList />
                </div>
            </div>
            <Aside />

        </div>

    );
}

export default Earphones;
