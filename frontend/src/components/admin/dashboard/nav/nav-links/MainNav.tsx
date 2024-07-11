import ProfileMain from "../profile/ProfileMain"
import NavLinks from "./NavLinks"


export const MainNav = () => {

    return (
        <nav className="flex items-center justify-around p-3 outline outline-red-200">
            
            <div>
                <NavLinks />
             </div>

             <div>
                <ProfileMain />
             </div>
        </nav>
    )
}