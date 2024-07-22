import { Form } from "react-router-dom";

type SearchAndDateProp = {
    location : string
}

const SearchAndDate = ({ location } : SearchAndDateProp) => {

    return(
        <div className="flex justify-between bg-gray-900 py-7 px-10">

            <div className="w-full p-2">
                <h2 className="font-bold font-plus-font text-3xl text-white"> {location} </h2>
            </div>
            
            <div className="flex justify-evenly p-2 w-full outline outline-orange-300">
                <div>
                    <Form>
                            <input type="search" name="nav-search" id="nav-search" />
                    </Form> 
                </div>
                <div> Date </div>
            </div>
        </div>
    )
}

export default SearchAndDate;