import { Form, useActionData } from 'react-router-dom';


const AdminRegister = () => {
    const actionError = useActionData();
    return (
        <div className="flex justify-center items-center h-screen">
            <Form method='post' className='p-3 border border-slate-400 space-y-3'>
                <h2 className='text-2xl text-center font-bold text-slate-700'> Register Admin Account </h2>
                <div>
                    <label htmlFor="admin_user_name">
                        <span className="block text-sm font-medium text-slate-700">User name</span>
                        <input type="text" className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500                    
                        " name="username" id="admin_user_name" placeholder='User name' required autoFocus/>
                    </label>
                </div>

                <div>
                    <label htmlFor="admin_password">
                        <span className="block text-sm font-medium text-slate-700"> Password </span>
                        <input className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="password" name="password" id="admin_password" placeholder="Create a password" required/>
                    </label>
                </div>

                <div>
                    <label htmlFor="_admin_password_repeate">
                        <span className="block text-sm font-medium text-slate-700"> Repeat password </span>
                        <input className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
                        focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500" type="password" name="passwordConfirm" id="_admin_password_repeate" required placeholder="Repeat password"/>
                    </label>
                </div>

                <button className='w-full rounded p-2 text-center text-white transition border-0 bg-green-500 hover:bg-green-300' type='submit'> Register </button>

                <span className="text-red-500 text-xs font-plus-font"> {typeof actionError === "string" && actionError} </span>
            </Form>
        </div>

    )
}

export default AdminRegister;