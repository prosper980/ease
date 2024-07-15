import { Form, useLoaderData } from "react-router-dom"

type Data = {
    id : string,
    userName : string,
    createdAt : string
}

export const ProfileImageAndNames = () => {

    const loaderData = useLoaderData() as Data;
    let username = "";
    if(typeof loaderData === "object"){
        username = loaderData?.userName
    }

    return (
        <div className="flex items-center space-x-3">
            <div className="">
                <img className="h-10 rounded-full" src="https://i.pravatar.cc/150?img=3" alt="profile-image" />
            </div>

            <div>
                <h2 className="text-slate-200 font-plus-font text-sm"> {username} </h2>
            </div>

            <div>
                <Form method="post">
                    <button className="text-slate-100 font-plus-font bg-red-600 px-2 py-1 hover:bg-red-500 rounded" type="submit" value="sign-out" name="intent"> Sign out </button>
                </Form>
            </div>
        </div>
    )

}