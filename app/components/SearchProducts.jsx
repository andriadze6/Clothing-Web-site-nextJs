import '../assets/css/shopLayout.css'
import ShopLayoutDiv from '@/app/components/ShopLayout';
async function getProduct(props) {
    let {category, nestedCategory} = props.params;
    let searchParams = props.searchParams.query
    if(category=='woman'){
        if(!nestedCategory){
            let [dresses, bags,jewellery,shoes,watches] = await Promise.all([
                fetch('https://dummyjson.com/products/category/womens-dresses'),
                fetch('https://dummyjson.com/products/category/womens-bags'),
                fetch('https://dummyjson.com/products/category/womens-jewellery'),
                fetch('https://dummyjson.com/products/category/womens-shoes'),
                fetch('https://dummyjson.com/products/category/womens-watches'),
            ])
            let [dressesJ, bagsJ,jewelleryJ,shoesJ,watcheJ] = await Promise.all([
                dresses.json(), bags.json(), jewellery.json(), shoes.json(), watches.json()
            ])
            var data = [...dressesJ.products, ...bagsJ.products, ...jewelleryJ.products, ...shoesJ.products, ...watcheJ.products]
            return data;
        }
        else{
            data = await fetch(`https://dummyjson.com/products/category/${nestedCategory}`);
            let dataJ =  await data.json()
            return dataJ.products
        }
    }else{
        data = await fetch(`https://dummyjson.com/products/search?q=${searchParams}`);
        var dataJson = await data.json();
        if(dataJson.products.length > 0){
            return dataJson.products
        }else{
            data = await fetch(`https://dummyjson.com/products`)
            var dataJson = await data.json();
            return dataJson.products
        }
    }   
}   
async function ShopLayout(props){   
    console.log("ShopLayout");  
    const Product = await getProduct(props.parametrs);
    return(
        <ShopLayoutDiv Product={Product}></ShopLayoutDiv>
    )
}
export default ShopLayout;