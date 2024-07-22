import { Outlet } from "react-router"
import { MainNav } from "./nav/nav-links/MainNav"

const DashboardHome = () => {
    
    return (
        <div>
            <div>
                 <MainNav />
            </div>

            <main>
                 <Outlet/>
             </main>
        </div>

    
    )
}

export default DashboardHome