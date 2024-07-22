import ProfileMain from "../profile/ProfileMain"
import NavLinks from "./NavLinks"


export const MainNav = () => {

    return (
        <nav>
            <div className="flex items-center justify-between px-5 bg-black py-4 border-b border-b-slate-300">      
                <div>
                    <h2 className="text-slate-200 font-bold text-2xl font-plus-font" > Ease Shop </h2>
                </div>

                <div>
                    <NavLinks />
                </div>

                <div>
                    <ProfileMain />
                </div>
            </div>
        </nav>
    )
}