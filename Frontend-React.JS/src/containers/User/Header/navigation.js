import React from "react";
const  Navigation = ({pageActive}) =>{
    return (
                <nav className="navbar navbar-light bg-white navbar-expand-xl">
                    <a href="users/theme#" className="navbar-brand"><h1 className="text-primary-cake display-6">Peace Bakery</h1></a>
                    <button className="navbar-toggler py-2 px-3" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span className="fa fa-bars text-primary"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-white" id="navbarCollapse">
                        <div className="navbar-nav mx-auto">
                            <a href="/" className={`nav-item nav-link ${pageActive === "Trang chủ" ? "active" : ""}`}>Trang chủ</a>
                            <a href="/about" className={`nav-item nav-link ${pageActive === "Giới thiệu" ? "active" : ""}`}>Giới thiệu</a>
                            <a href="/shop" className={`nav-item nav-link ${pageActive === "Sản phẩm" ? "active" : ""}`}>Sản phẩm</a>
                            <a href="/contact" className={`nav-item nav-link ${pageActive === "Liên hệ" ? "active" : ""}`}>Liên hệ</a>
                        </div>
                        <div className="d-flex m-3 me-0">
                            <button className="btn-search btn border border-secondary btn-md-square rounded-circle bg-white me-4" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fas fa-search text-primary"></i></button>
                            <a href="/card" className="position-relative me-4 my-auto">
                                <i className="fa fa-shopping-bag fa-2x"></i>
                                <span className="position-absolute bg-secondary text-white rounded-circle d-flex align-items-center justify-content-center px-1" style={{ top: '-5px', left: '15px', height: '20px', minWidth: '20px' }}>3</span>
                            </a>
                            <a href="users/theme#" className="my-auto">
                                <i className="fas fa-user fa-2x"></i>
                            </a>
                        </div>
                    </div>
                </nav>

    )
}
export default Navigation;