import React, { useEffect, useState } from "react";
import "../../App.css";

const DarkModeWithLocal = () => {
    const [isDarkMode, setIsDarkMode] = useState(localStorage.getItem("darkMode") === "true");

    useEffect(() => {
        document.body.classList.toggle("dark-mode", isDarkMode);

        localStorage.setItem("darkMode", isDarkMode);
    }, [isDarkMode]);

    const toggleDarkMode = () => {
        setIsDarkMode(!isDarkMode);
    };

    const setDarkBackground = () => {
        setIsDarkMode(true);
    };

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        }
    }, [isDarkMode]);

    return (
        <div className="App">
            <header className="App-header">
                <h1>{isDarkMode ? "Dark Mode" : "Light Mode"}</h1>
                <button onClick={toggleDarkMode}>
                    Toggle {isDarkMode ? "Light" : "Dark"} Mode
                </button>
                <button onClick={setDarkBackground}>Click Dark</button>
            </header>
        </div>
    );
};

export default DarkModeWithLocal;
