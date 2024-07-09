import { Outlet } from "react-router"
import { MainNav } from "./nav/MainNav"


const DashboardHome = () => {
    
    return (
        <div>
            <div> <MainNav /> </div>

            <div> search bar </div>

            <div>
                 <Outlet/>
             </div>
        </div>

    
    )
}

export default DashboardHome