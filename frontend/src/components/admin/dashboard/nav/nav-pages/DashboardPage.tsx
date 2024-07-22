import { NewOrders } from "./orders/NewOrders"
import { Orders } from "./orders/Orders"
import { AverageRevenue } from "./revenue/AverageRevenue"
import { Revenue } from "./revenue/Revenue"
import { Sales } from "./sales/Sales"


export const DashBoardPage = () => {

    return(
        <div className="px-6 py-4">
            <div className="flex justify-between space-x-2">
                <div className="w-1/5">
                    <Sales />
                </div>
                <div className="w-1/5">
                    <Orders />
                </div>
                <div className="w-1/5">
                    <NewOrders />
                </div>
                <div className="w-1/5">
                    <Revenue />
                </div>
                
                <div className="w-1/5">
                    <AverageRevenue />
                </div>
            </div>

            <div>

            </div>
        </div>
    )
}