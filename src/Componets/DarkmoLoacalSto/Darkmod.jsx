import React, { useState, useEffect } from "react";

const Darkmod = () => {
    const [color, setColor] = useState({
        color: "black",
        backgroundColor: "white",
    });

    const [btnText, setBtnText] = useState("Switch Dark");

    const toggleStyle = () => {
        if (color.color === "black") {
            setColor({
                color: "white",
                backgroundColor: "black",
            });
            setBtnText("Switch Light");
            localStorage.setItem("darkMode", "true");
        } else {
            setColor({
                color: "black",
                backgroundColor: "white",
            });
            setBtnText("Switch Dark");
            localStorage.setItem("darkMode", "false");
        }
    };

    useEffect(() => {
        const isDarkMode = localStorage.getItem("darkMode") === "true";
        if (isDarkMode) {
            setColor({
                color: "white",
                backgroundColor: "black",
            });
            setBtnText("Switch Light");
        }
    }, []);

    return (
        <>
            <div className="container my-5">
                <div className="card" style={{ width: "18rem" }}>
                    <img
                        src="https://imgv3.fotor.com/images/blog-richtext-image/part-blurry-image.jpg"
                        className="card-img-top"
                        alt="..."
                    />
                    <div className="card-body" style={color}>
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">
                            Some quick example text to build on the card title and make up the bulk
                            of the card's content.
                        </p>
                        <button className="btn btn-dark" onClick={toggleStyle} style={color}>
                            {btnText}
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Darkmod;
