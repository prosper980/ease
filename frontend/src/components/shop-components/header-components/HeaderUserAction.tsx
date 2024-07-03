import { SignedIn, UserButton } from "@clerk/clerk-react";
import ProductSearch from "./ProductSearch";
import Cart from "./HeaderUserCart";


const HeaderUserActions = () => {

    return(
        <div className=" flex justify-between items-center space-x-3">
            <div>
                <ProductSearch />
            </div>

            <div>
                <SignedIn>
                    <UserButton afterSignOutUrl='/sign-in' />
                </SignedIn>
            </div>

            <div>
                <Cart />
            </div>
        </div>
    )
}

export default HeaderUserActions;