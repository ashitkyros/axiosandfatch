import React from "react";
import DarkModeWithLocal from "./Componets/DarkmoLoacalSto/DarkModeWithLocal";
import Darkmod from "./Componets/DarkmoLoacalSto/Darkmod";
import Trywithoutstill from "./Componets/DarkmoLoacalSto/Trywithoutstill";
import Loading from "./GSAP/Loading";
// import AxiosExample from "./Componets/axios";
// import FetchExample from "./Componets/Fetch";

const App = () => {
    return (
        <>
            {/* <AxiosExample/> */}
            {/* <FetchExample /> */}
            <div className="d-flex container">
                <Darkmod />
                <Trywithoutstill />
            </div>
            {/* <Loading /> */}
            {/* <DarkModeWithLocal /> */}
            
        </>
    );
};

export default App;
