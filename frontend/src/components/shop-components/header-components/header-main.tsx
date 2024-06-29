import HeaderLinksLeft from "./header-links-left";
import HeaderLinksRight from "./header-links-right";
import HeaderUserActions from "./header-user-action";


const HeaderMain = () => {

    return (
        <div className=" flex justify-evenly items-center">
            <div>
                <HeaderLinksLeft />
            </div>

            <div> 
                <h2> Logo </h2>
            </div>

            <div>
                <HeaderLinksRight />
            </div>

            <div>
                <HeaderUserActions />
            </div>
        </div>
    )
}

export default HeaderMain;