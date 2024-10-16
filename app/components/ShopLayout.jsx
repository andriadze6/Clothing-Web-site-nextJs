import Card from './Card';
import '../assets/css/shopLayout.css'
async function ShopLayout({Product}){   
    console.log("ShopLayout");  
    return(
        <div className='shopLayout'>
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
                    Product.length > 0 &&(
                        Product.map((element)=>{
                            return(
                                <Card key={element.id} Product={element}></Card>
                            )
                        })
                    )
                }
            </div>
        </div>
    )
}
export default ShopLayout;