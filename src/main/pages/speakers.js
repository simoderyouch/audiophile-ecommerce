import { useContext, useEffect } from 'react';
import { MyContext } from '../Context/context';
import Aside from '../helper/aside';
import ProductList from '../helper/productList';
import ProductMark from '../helper/ProductMark';
import Header from '../helper/CustomHeader';


function Speakers() {

    const { speakersProduct } = useContext(MyContext);
    useEffect(() => {
        document.title = 'Audiophile shop - Speakers';
    }, []);



    return (
        <div>
            <Header titre="Speakers" />
            <div className="container max-lg:px-6">



                {speakersProduct.map((pr, index) => {
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

export default Speakers;