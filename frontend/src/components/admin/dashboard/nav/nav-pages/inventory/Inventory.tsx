

export const Inventory = () => {

    return (
        <div>

            <div className="flex justify-between px-6 py-4 space-x-2">
                <div className="w-1/4 p-4 rounded h-32 shadow bg-green-50 space-y-4">
                    <h5 className="text-gray-500 font-plus-font"> Total Inventory items </h5>
                    <h3 className="text-3xl font-bold font-plus-font"> 67 items </h3>
                </div>
                <div className="shadow w-1/4 p-4 bg-green-50">
                    <h5 className="text-gray-500 font-plus-font"> Filter </h5>
                    <select className="w-full h-16 bg-gray-100 outline-none" name="items-filet" id="">
                        <option value="value"> op 1 </option>
                        <option value="val1"> op2 </option>
                        <option value="val2"> oop3 </option>
                        <option value="val3"> op4 </option>
                        <option value="val4"> op5 </option>
                    </select>
                </div>
                <div className="w-1/4 p-4 rounded h-32 shadow bg-green-50 space-y-4">
                    <h2 className="text-gray-500 font-plus-font"> Total items ordered </h2>
                    <h3 className="text-3xl font-bold font-plus-font"> 78 items </h3>
                </div>
                
                <div className="w-1/4 p-4 rounded h-32 shadow bg-green-50 space-y-4">
                    <h2 className="text-gray-500 font-plus-font"> Current Pending Orders </h2>
                    <h3 className="text-3xl font-bold font-plus-font"> 78 items </h3>
                </div>
            </div>

            <div className="flex">
                <div>
                    <h2> links := orders </h2>
                </div>
            </div>
        </div>
    )
}