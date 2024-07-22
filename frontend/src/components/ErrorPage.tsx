import {  ErrorResponse, useRouteError } from "react-router"


export const ErrorPage = () => {
    const error  = useRouteError() as ErrorResponse;
    
    return (
        <div className="flex justify-center items-center">
            <div>
                <h1>Oops</h1>
                <p> {error.status} </p>
                <p> {error.statusText} </p>
                <p> {error.data} </p>
            </div>
        </div>
    )
}