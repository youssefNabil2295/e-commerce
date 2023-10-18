import React from 'react'

function Footer() {
    return (
        <footer className="bg-main-light my-3 py-5 ">
            <div className="container">
                <h4>Get the Frech Cart App</h4>
                <p>We will send you a link, ioen it on your phone to download the app.</p>
                <div className="d-flex">
                    <div className="col-sm-10">
                        <input type="text" className="form-control py-2" placeholder="Email..." />
                    </div>
                    <div className="col-sm-2 ps-3">
                        <button className="btn w-100 bg-min text-light">Share App Link</button>
                    </div>
                </div>
                <div   className="line border-bottom  border-2 my-4">
                </div>
            </div>
        </footer>
    )
}

export default Footer