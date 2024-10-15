'Use client'
import '../assets/css/shopLayout.css'
import Image from "next/image";
import { useEffect, useState } from 'react';

function ShopLayout(){
    const [product, setProduct] = useState([]);
    const [fProduct, setFProduct] = useState([]);
    const [searchField, setSearchField] = useState('');

    useEffect(()=>{
        (async function GetHomePageData() {
            debugger
            const data = await fetch('https://dummyjson.com/products')
            const dataJson = await data.json();
            setProduct(dataJson.products)
        })();
    },[]);    
    useEffect(() => {
        const newFilteredProduct = product.filter((pro) => {
            debugger
            var tags = pro.tags
            let reult = tags.some((element)=>element.includes(searchField.toLocaleLowerCase()));
            return reult
        });
    
        setFProduct(newFilteredProduct);
      }, [product, searchField]);
    
      const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
      };
    return(
        <div className='shopLayout'>
            <input
                type='search'
                placeholder="searh products"
                onChange={onSearchChange}
            />           
            <div className="shop_toolbar_wrapper">
                <div className="shop_toolbar_btn">
                    <button type="button" className="btn-grid-3" title="3"></button>
                    <button type="button" className="active btn-grid-4" title="4"></button>
                    <button type="button" className="btn-list"></button>
                </div>
                <div>
                    <select>
                        <option>Sort by</option>
                    </select>
                </div>
                <div class="page_amount">
                    <p>Showing 1–9 of 21 results</p>
                </div>
            </div>
            <div className='cardList'>
                {
                    fProduct.length > 0 &&(
                        fProduct.map((element)=>{
                            return(
                                <div className='card' key={element.id}>
                                    <Image alt='' src={element.images[0]} width={200} height={200}/>
                                    <p>{element.title}</p>
                                </div>
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}
export default ShopLayout;