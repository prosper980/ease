import { Form, useActionData } from "react-router-dom";

const SignUpForm = () => {

    const errors = useActionData();

    return(
        <>
            <div className="flex justify-center items-center h-screen p-4">

                    <div className="flex justify-center items-center p-2  space-x-10">

                        <div className=" p-4">
                            <div className=" space-y-1">
                                <h2 className="text-black font-semibold text-2xl font-plus-font">Welcome to the shop</h2>
                                <h3 className=" text-slate-600 font-plus-font">Sign up for an account</h3>
                            </div>

                            <Form className="space-y-4" method="post">
                                <div className="flex space-x-2">
                                    <label className="block" htmlFor="first-name-id">
                                        <span className="block text-sm font-medium text-slate-600 font-plus-font"> First Name </span>
                                        <input className="block mt-1 px-3 py-2 bg-white border text-slate-700 border-slate-300 text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-500" 
                                        type="text" name="first_name" id="first-name-id" placeholder="e.g John" required autoFocus />
                                    </label>
                                    <label className="block" htmlFor="last-name-id">
                                        <span className="block text-sm font-medium text-slate-600 font-plus-font"> Last Name </span>
                                        <input className="block mt-1 px-3 py-2 bg-white border text-slate-700  border-slate-300 text-sm shadow-sm placeholder-slate-400
                                        focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-500" type="text" name="last_name" id="last-name-id" placeholder="e.g Doe" required/>
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="register-email">
                                        <span className="block text-sm font-medium text-slate-600 font-plus-font"> Email </span>
                                        <input className="block w-full mt-1 px-3 py-2 bg-white border text-slate-700 border-slate-300 text-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-500" type="email" name="new_user_email" id="register-email" placeholder="e.g johndoe@email.com" required/>
                                    </label>
                                </div>

                                <div>
                                    <label htmlFor="first-password">
                                        <span className="block text-sm font-medium text-slate-600 font-plus-font"> Password </span>
                                        <input className="block w-full mt-1 px-3 py-2 bg-white border text-slate-700 border-slate-300 text-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-500" type="password" name="new_user_first_password" id="first-password" placeholder="Choose a password" required/>
                                    </label>
                                </div>

                                <div>
                                    {typeof errors === 'string' && <span className="text-xs text-red-500" > {errors} </span>}
                                </div>

                                <div>
                                    <label htmlFor="second-password">
                                        <span className="block text-sm font-medium text-slate-600 font-plus-font"> Confirm Password </span>
                                        <input className="block w-full mt-1 px-3 py-2 bg-white border text-slate-700 border-slate-300 text-sm shadow-sm placeholder-slate-400
                                            focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-500" type="password" name="new_user_second_password" id="second-password" placeholder="Repeat password" required/>
                                    </label>
                                </div>

                                <div>
                                    <button className="w-full bg-slate-900 text-white text-center p-2 hover:bg-slate-800 font-plus-font" type="submit"> Submit </button>
                                </div>


                            </Form>

                        </div>

                        <div>
                            <div className="p-1 ">
                                <img className=" object-cover w-100 h-full" src="https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0." alt="image" />
                            </div>
                        </div>

                    </div>

            </div>
        </>
    )
}

export default SignUpForm;