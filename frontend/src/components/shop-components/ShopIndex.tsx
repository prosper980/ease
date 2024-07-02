import { FilterMain } from "./filter-components/FilterMain";
import { HeaderMain } from "./header-components/HeaderMain";
import { ProductsMain } from "./products-components/ProductMain";


const ShopHome = () => {

    return (
        <div className="mt-5  mx-44">
            <header>
                <HeaderMain />
            </header>

            <div className="mt-16 sticky top-0">
                <FilterMain />
            </div>
            
            <div className="mt-16">
                <ProductsMain />
            </div>
        </div>
    )
}

export default ShopHome;