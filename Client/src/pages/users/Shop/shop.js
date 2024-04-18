import React from "react";
import Header from "../theme/header/header";
import Breadcrumb from "../../../../../Frontend-React.JS/src/containers/User/breadcrumb";
import Footer from "../theme/footer";
import Pagination from "./pagination";

const Shop = () => {
    const breadcrumbItems = [
        { title: "Trang chủ", link: "/", active: false },
        { title: "Sản phẩm", link: "/shop", active: true }
    ];

    return (
        <>
            <Header pageActive={"Sản phẩm"}/>
            <Breadcrumb items={breadcrumbItems} />
            <div className="container-fluid fruite py-5">
                <div className="container py-5">
                    <h1 className="mb-4">Peace Bakery</h1>
                    <div className="row g-4">
                        <div className="col-lg-12">
                            <div className="row g-4">
                                <div className="col-xl-3">
                                    <div className="input-group w-100 mx-auto d-flex">
                                        <input type="search" className="form-control p-3" placeholder="Tìm kiếm"
                                               aria-describedby="search-icon-1"/>
                                        <span id="search-icon-1" className="input-group-text p-3"><i className="fa fa-search"></i></span>
                                    </div>
                                </div>
                                <div className="col-6"></div>
                                <div className="col-xl-3">
                                    <div className="bg-light ps-3 py-3 rounded d-flex justify-content-between mb-4">
                                        <label htmlFor="fruits">Sắp xếp:</label>
                                        <select id="fruits" name="fruitlist" className="border-0 form-select-sm bg-light me-3" form="fruitform">
                                            <option value="volvo">Mặc định</option>
                                            <option value="saab">Popularity</option>
                                            <option value="opel">Organic</option>
                                            <option value="audi">Fantastic</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                           <Pagination/>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    );
};

export default Shop;
