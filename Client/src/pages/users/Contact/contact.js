import React from "react";
import Header from "../theme/header/header";
import Breadcrumb from "../theme/breadcrumb";
import Footer from "../theme/footer";
const Contact = ()=>{
    const breadcrumbItems = [
        { title: "Trang chủ", link: "/", active: false },
        { title: "Liên hệ", link: "/contact", active: true }
    ];
    return (
        <><Header pageActive={"Liên hệ"}/>
            <Breadcrumb items={breadcrumbItems}/>
            <div className="container-fluid contact py-5">
                <div className="container py-5">
                    <div className="p-5 bg-light rounded">
                        <div className="row g-4">
                            <div className="col-12">
                                <div className="text-center mx-auto" style={{maxWidth:'700px'}}>
                                    <h1 className="text-primary">Liên hệ</h1>
                                    <p className="mb-4">Liên hệ với chúng tôi ngay nếu quý khách có thắc mắc, ý kiến
                                        phản hồi hay đóng góp. Xin chân thành cảm ơn!</p>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="h-100 rounded">
                                    <iframe className="rounded w-100"
                                            style={{height: '400px'}}
                                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18773.836012880063!2d106.75738369035878!3d10.863314618235568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3175276398969f7b%3A0x9672b7efd0893fc4!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBOw7RuZyBMw6JtIFRwLiBI4buTIENow60gTWluaA!5e0!3m2!1svi!2s!4v1657022439109!5m2!1svi!2s"
                                            loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                                </div>
                            </div>
                            <div className="col-lg-7">
                                <form action="" className="">
                                    <input type="text" className="w-100 form-control border-0 py-3 mb-4"
                                           placeholder="Tên của bạn"/>
                                        <input type="email" className="w-100 form-control border-0 py-3 mb-4"
                                               placeholder="Nhập vào địa chỉ của bạn"/>
                                            <textarea className="w-100 form-control border-0 mb-4" rows="5" cols="10"
                                                      placeholder="Nhập vào ý kiến của bạn"></textarea>
                                            <button
                                                className="w-100 btn form-control border-secondary py-3 bg-white text-primary "
                                                type="submit">Gửi
                                            </button>
                                </form>
                            </div>
                            <div className="col-lg-5">
                                <div className="d-flex p-4 rounded mb-4 bg-white">
                                    <i className="fas fa-map-marker-alt fa-2x text-primary me-4"></i>
                                    <div>
                                        <h4>Địa chỉ</h4>
                                        <p className="mb-2">Khu phố 5, phường Linh Trung, thành phố Thủ Đức, thành phố
                                            Hồ Chí Minh</p>
                                    </div>
                                </div>
                                <div className="d-flex p-4 rounded mb-4 bg-white">
                                    <i className="fas fa-envelope fa-2x text-primary me-4"></i>
                                    <div>
                                        <h4>Email</h4>
                                        <p className="mb-2">tiembanhbinhyen@gmail.com</p>
                                    </div>
                                </div>
                                <div className="d-flex p-4 rounded bg-white">
                                    <i className="fa fa-phone-alt fa-2x text-primary me-4"></i>
                                    <div>
                                        <h4>Điện thoại</h4>
                                        <p className="mb-2">0934857324</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}
export default Contact;