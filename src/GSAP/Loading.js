import React from "react";

export default function Loading() {
    return (
        <>
            <div className="main bg-dark h-screen">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h2>i am a react</h2>
                            <h2>Developer</h2>
                        </div>
                        <div className="col-6 ">
                            <h1 className="text-4xl text-white">100</h1>
                            <h1 className="text-4xl text-white">90</h1>
                            <h1 className="text-4xl text-white">75</h1>
                            <h1 className="text-4xl text-white">50</h1>
                            <h1 className="text-4xl text-white">30</h1>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
