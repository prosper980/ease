import HeaderLinksLeft from "./HeaderLinksLeft";
import HeaderUserActions from "./HeaderUserAction";


export const HeaderMain = () => {

    return (
        <div className=" flex justify-between items-center p-2">
            <div>
                <HeaderLinksLeft />
            </div>

            <div> 
                <h1 className="text-5xl font-plus-font font-bold"> Ease </h1>
            </div>

            <div>
                <HeaderUserActions />
            </div>
        </div>
    )
}

