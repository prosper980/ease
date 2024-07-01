import { FilterMain } from "./filter-components/FilterMain";
import {HeaderMain} from "./header-components/HeaderMain";


const ShopHome = () => {

    return (
        <div className="mt-5  mx-44">

            <header>
                <HeaderMain />
            </header>

            <div className="mt-16">
                <FilterMain />
            </div>
            
        </div>
    )
}

export default ShopHome;