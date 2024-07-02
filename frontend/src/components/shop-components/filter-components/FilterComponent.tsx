

const FilterLeftComponents = () => {

    return(
        <div className="">
            <form className="flex justify-between items-center" action="#" method="post">
                <div>
                    <h3 className="font-plus-font">Filters</h3>
                </div>

                <div className="border border-yellow-100">
                    <select className="px-4 py-2 border-l-0 bg-white outline-0" name="#" id="#">
                        <option value=""> Filter 1 </option>
                        <option value="value1"> value 1</option>
                        <option value="valu2">value 2</option>
                        <option value="value3">value 3</option>
                        <option value="value4">value 4</option>
                    </select>
                </div>

                <div className="border border-yellow-100">
                    <select className="px-4 py-2 border-l-0 bg-white outline-0" name="#" id="#">
                        <option value=""> Filter 2 </option>
                        <option value="value1"> value 1</option>
                        <option value="valu2">value 2</option>
                        <option value="value3">value 3</option>
                        <option value="value4">value 4</option>
                    </select>
                </div>

                <div className="border border-yellow-100">
                    <select className="px-4 py-2 border-l-0 bg-white outline-0" name="#" id="#">
                        <option value=""> Filter 3 </option>
                        <option value="value1"> value 1</option>
                        <option value="valu2">value 2</option>
                        <option value="value3">value 3</option>
                        <option value="value4">value 4</option>
                    </select>
                </div>

            </form>
        </div>
    )
}

export default FilterLeftComponents;