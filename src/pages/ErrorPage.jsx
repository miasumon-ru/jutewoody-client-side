import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";


const ErrorPage = () => {
    return (
        <div className="text-center my-20">

            <Helmet>
                <title> ErroPage | JuteWoody </title>
            </Helmet>

            <p className="text-5xl">Ooops...</p>

            <p className="mt-10 text-4xl">Not Found The Page !!</p>

            <Link className="btn bg-[#23BE0A] text-white mt-16" to='/'> Go Back </Link>

        </div>
    );
};

export default ErrorPage;