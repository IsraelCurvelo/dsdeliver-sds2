import { checkIsSelected } from "./helpers";
import ProductCard from "./ProductCard";
import { Product } from "./types";

type Props = {
    products: Product[];
    selectProducts: Product[];
    onSelectProduct: (product: Product) => void;
}

function ProductsList({products, selectProducts, onSelectProduct}:Props){
    return(
        <div className="orders-list-container">
            <div className="orders-list-items">
               {products.map(product => (
                   <ProductCard 
                    key={product.id}
                    product={product}
                    onSelectProduct={onSelectProduct}
                    isSelected={checkIsSelected(selectProducts, product)}
                    />
               ))}
               
            </div>

        </div>
  
    );
}

export default ProductsList;