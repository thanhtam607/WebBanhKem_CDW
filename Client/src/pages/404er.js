import React from "react";
const  Error = () =>{
    return (
        <div className="container-fluid py-5">
            <div className="container py-5 text-center">
                <div className="row justify-content-center">
                    <div className="col-lg-6">
                        <i className="bi bi-exclamation-triangle display-1 text-secondary"></i>
                        <h1 className="display-1">404</h1>
                        <h1 className="mb-4">Không tìm thấy trang</h1>
                        <p className="mb-4">Rất tiếc, trang bạn tìm kiếm không tồn tại trên trang web của chúng tôi!
                            Có thể truy cập trang chủ của chúng tôi hoặc thử sử dụng tìm kiếm?</p>
                        <a className="btn btn-primary text-white rounded-pill py-3 px-5" href="/">Đến trang chủ</a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Error;