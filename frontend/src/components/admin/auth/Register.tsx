import { Form } from 'react-router-dom';


const AdminRegister = () => {

    return (
        <div className="flex justify-center items-center h-screen p-4">
        <Form className='p-3 border border-slate-400 space-y-3'>
            <h2 className='text-2xl text-center text-slate-700'> Register An Admin Account </h2>
            <div>
                <label htmlFor="admin_user_name">
                    <span className="block text-slate-700">User name</span>
                    <input type="text" className="p-2 border outline-none text-slate-600" name="adminUserName" id="admin_user_name" placeholder='User name'/>
                </label>
            </div>

            <div>
                <label htmlFor="admin_password">
                    <span className="block text-slate-700"> Password </span>
                    <input className="p-2 border outline-none text-slate-600" type="password" name="adminPassword" id="admin_password" placeholder="Create a password"/>
                </label>
            </div>

            <div>
                <label htmlFor="_admin_password_repeate">
                    <span className="block text-slate-700"> Repeat password </span>
                    <input className="p-2 border outline-none text-slate-600" type="password" name="adminPassword" id="_admin_password_repeate" placeholder="Repeat password"/>
                </label>
            </div>
        </Form>
    </div>

    )
}

export default AdminRegister;