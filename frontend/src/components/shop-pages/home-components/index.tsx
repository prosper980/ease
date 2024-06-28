import { SignedIn, UserButton } from "@clerk/clerk-react";


const ShopHome = () => {

    return (
        <div>
            <header>
                <SignedIn>
                    <UserButton afterSignOutUrl='/sign-in' />
                </SignedIn>
            </header>
        </div>
    )
}

export default ShopHome;