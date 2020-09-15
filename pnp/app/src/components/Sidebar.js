import React from 'react'
import './sidebar.css'

function Sidebar() {
    return (
        
        <>
            <nav className="col-md-2 d-none d-md-block bg-light sidebar">
                <div className="sidebar-sticky">
                    <ul className="nav flex-column">
                    <li className="nav-item">
                        <a className="nav-link active" href="www.google.com">
                        Dashboard <span className="sr-only">(current)</span>
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="www.google.com">
                        Orders
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="www.google.com">
                        Products
                        </a>
                    </li>
                    
                    </ul>

                    <h6 className="sidebar-heading d-flex justify-content-between align-items-center px-3 mt-4 mb-1 text-muted">
                    <span>Saved reports</span>
                    <a className="d-flex align-items-center text-muted" href="www.google.com">
                        <span data-feather="plus-circle"></span>
                    </a>
                    </h6>
                    <ul className="nav flex-column mb-2">
                    <li className="nav-item">
                        <a className="nav-link" href="www.google.com">
                        Current month
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="www.google.com">
                        Last quarter
                        </a>
                    </li>
                    
                    </ul>
                </div>
            </nav>
        </>
        
    )
}

export default Sidebar
