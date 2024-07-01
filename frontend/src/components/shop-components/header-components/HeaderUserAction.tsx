import { SignedIn, UserButton } from "@clerk/clerk-react";


const HeaderUserActions = () => {

    return(
        <div className=" flex justify-between items-center space-x-3">
            <div>
                <h2>search icon here</h2>
            </div>

            <div>
                <SignedIn>
                    <UserButton afterSignOutUrl='/sign-in' />
                </SignedIn>
            </div>

            <div>
                <h2>user cart</h2>
            </div>
        </div>
    )
}

export default HeaderUserActions;