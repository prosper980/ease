import { Form, useActionData } from 'react-router-dom';


const AdminRegister = () => {
    const actionError = useActionData();
    return (
        <div className="flex justify-center items-center h-screen p-4">
        <Form method='post' className='p-3 border border-slate-400 space-y-3'>
            <h2 className='text-2xl text-center text-slate-700'> Register Admin Account </h2>
            <div>
                <label htmlFor="admin_user_name">
                    <span className="block text-slate-700">User name</span>
                    <input type="text" className="p-2 border outline-none text-slate-600" name="adminUserName" id="admin_user_name" placeholder='User name' required autoFocus/>
                </label>
            </div>

            <div>
                <label htmlFor="admin_password">
                    <span className="block text-slate-700"> Password </span>
                    <input className="p-2 border outline-none text-slate-600" type="password" name="adminPassword" id="admin_password" placeholder="Create a password" required/>
                </label>
            </div>

            <div>
                <label htmlFor="_admin_password_repeate">
                    <span className="block text-slate-700"> Repeat password </span>
                    <input className="p-2 border outline-none text-slate-600" type="password" name="adminPasswordConfirm" id="_admin_password_repeate" required placeholder="Repeat password"/>
                </label>
            </div>

            <button className='w-full p-2 text-center text-white transition border-0 bg-green-500 hover:bg-green-300' type='submit'> Register </button>

            <h3> {typeof actionError === "string" && actionError} </h3>
        </Form>
    </div>

    )
}

export default AdminRegister;