import { NavLink , useLoaderData} from "react-router-dom";

type Data = {
    id : number,
    userName : string,
    createdAt : string
}


const NavLinks = () => {

    const loaderData = useLoaderData() as Data;
    let id = "";
    if(typeof loaderData === "object"){
        id = loaderData?.userName
    }

    const isNavActiveStyle = "text-slate-50 hover:text-slate-200 font-bold transition flex space-x-1"

    const isNavPendingStyle = "text-slate-700 hover:text-slate-200 flex space-x-1"

    return (
         <div>
            <ul className="flex space-x-6 text-slate-300  font-plus-font">

                <li className="">
                    <NavLink className={( {isActive, isPending }) => isActive ? isNavActiveStyle : isPending ? isNavPendingStyle : "flex space-x-1 transition-all" }  to={`/admin/${id}/dashboard`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3v11.25A2.25 2.25 0 0 0 6 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0 1 18 16.5h-2.25m-7.5 0h7.5m-7.5 0-1 3m8.5-3 1 3m0 0 .5 1.5m-.5-1.5h-9.5m0 0-.5 1.5m.75-9 3-3 2.148 2.148A12.061 12.061 0 0 1 16.5 7.605" />
                        </svg>

                        <span className="">Dashboard</span>

                    </NavLink>
                
                 </li>
                <li>


                    <NavLink className={( {isActive, isPending }) => isActive ? isNavActiveStyle : isPending ? isNavPendingStyle : "flex space-x-1 transition-all" }  to={`/admin/${id}/addItems`}> 

                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 0 0-3.375-3.375h-1.5a1.125 1.125 0 0 1-1.125-1.125v-1.5A3.375 3.375 0 0 0 6.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0 0 15 2.25h-1.5a2.251 2.251 0 0 0-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 0 0-9-9Z" />
                            </svg>

                        <span> Add Items </span>    
                    </NavLink>
                </li>
                <li>
                    <NavLink  className={( {isActive, isPending }) => isActive ? isNavActiveStyle : isPending ? isNavPendingStyle : "flex space-x-1 transition-all" } to={`/admin/${id}/inventory`}> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                            strokeWidth={1.5} stroke="currentColor" 
                            className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                        
                        <span> Inventory  </span> 
                    </NavLink>
                </li>

                <li>
                    <NavLink className={( {isActive, isPending }) => isActive ? isNavActiveStyle : isPending ? isNavPendingStyle : "flex space-x-1 transition-all" } to={`/admin/${id}/customers`}> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                            strokeWidth={1.5}   stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span> Customers </span> 
                    </NavLink>
                </li>


                <li>
                    <NavLink className={( {isActive, isPending }) => isActive ? isNavActiveStyle : isPending ? isNavPendingStyle : "flex space-x-1 transition-all" } to={`/admin/${id}/orders`}> 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" 
                            strokeWidth={1.5}   stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>

                        <span> Orders </span> 
                    </NavLink>
                </li>
                
                
            </ul>
         </div>
    )
}

export default NavLinks;