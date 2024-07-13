import { Outlet } from "react-router"
import { MainNav } from "./nav/nav-links/MainNav"
import SearchAndDate from "./search_and_date/SearchAndDate"


const DashboardHome = () => {
    
    return (
        <div>
            <div> <MainNav /> </div>

            <div> <SearchAndDate />  </div>

            <main>
                 <Outlet/>
             </main>
        </div>

    
    )
}

export default DashboardHome