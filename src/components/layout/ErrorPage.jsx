import { NavLink, useNavigate, useRouteError } from "react-router-dom";

export const ErrorPage=()=>{
    const error=useRouteError();
    const navigate=useNavigate();
    const handleGoBack=()=>{
        // navigate(-1);
        navigate("/");
    }

    // console.log(error);
    if(error.status===404)
    {
        return (
            <section className="error-section">
                <div id="error-text">
                    <figure>
                        <img src="https://cdn.dribbble.com/users/722246/screenshots/3066818/404-page.gif"
                        alt="404 page"/>
                    </figure>
                    <div className="text-center">
                        <p className="p-a">
                            The page you were looking is not found 
                        </p>
                        <p className="p-b">... Back to previous page</p>
                    </div>
                </div>
                {/* <NavLink to="/" className="btn">Go back to home page</NavLink> */}
                <button className="btn" onClick={handleGoBack}>Go Back</button>
            </section>
        );
    }
    return <h1>404 Error</h1>
};