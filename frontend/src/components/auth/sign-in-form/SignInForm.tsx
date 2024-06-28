import { SignedOut, SignIn } from "@clerk/clerk-react";

const SignInForm = () => {

    return(
        <>
        <div className="flex items-center h-screen space-x-1">
            <div className="h-full w-1/2 flex justify-center items-center">
                    <SignedOut>
                        <SignIn />
                    </SignedOut>
            </div>

            <div className="h-full w-1/2">
                <div className="p-2 h-full">
                    <img className="object-cover w-full h-full" src="https://img.freepik.com/premium-photo/nature-seascapes_925962-9676.jpg" alt="image" />
                </div>
            </div>
        </div>
    </>
    )
}

export default SignInForm;