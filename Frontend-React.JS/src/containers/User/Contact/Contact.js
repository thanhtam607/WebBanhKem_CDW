import React, { Component } from 'react';
import { connect } from 'react-redux';
import "./Contact.scss"
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
class Contact extends Component {

    constructor(props){
        super(props);
        this.state = {
        
        }

    }

    componentDidMount() {
    }
    render() {
        return (
            <div>
        <Header />
        {/* Single Page Header start */}
        <div className="container-fluid page-header py-5">
          <h1 className="text-center text-white display-6">Liên hệ</h1>
          <ol className="breadcrumb justify-content-center mb-0">
            <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
            <li className="breadcrumb-item active text-white">Liên hệ</li>
          </ol>
        </div>
        {/* Single Page Header End */}
        {/* Contact Start */}
        <div className="container-fluid contact py-5">
          <div className="container py-5">
            <div className="p-5 bg-light rounded">
              <div className="row g-4">
                <div className="col-12">
                  <div className="text-center mx-auto" style={{maxWidth: '700px'}}>
                    <h1 className="text-primary">Get in touch</h1>
                    <p className="mb-4">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes. Just copy and paste the files, add a little code and you're done. <a href="https://htmlcodex.com/contact-form">Download Now</a>.</p>
                  </div>
                </div>
                <div className="col-lg-12">
                  <div className="h-100 rounded">
                    <iframe className="rounded w-100" style={{height: '400px'}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387191.33750346623!2d-73.97968099999999!3d40.6974881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sbd!4v1694259649153!5m2!1sen!2sbd" loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
                  </div>
                </div>
                <div className="col-lg-7">
                  <form action className>
                    <input type="text" className="w-100 form-control border-0 py-3 mb-4" placeholder="Tên của bạn" />
                    <input type="email" className="w-100 form-control border-0 py-3 mb-4" placeholder="Nhập vào địa chỉ của bạn" />
                    <textarea className="w-100 form-control border-0 mb-4" rows={5} cols={10} placeholder="Nhập vào ý kiến của bạn" defaultValue={""} />
                    <button className="w-100 btn form-control border-secondary py-3 bg-white text-primary " type="submit">Gửi</button>
                  </form>
                </div>
                <div className="col-lg-5">
                  <div className="d-flex p-4 rounded mb-4 bg-white">
                    <i className="fas fa-map-marker-alt fa-2x text-primary me-4" />
                    <div>
                      <h4>Địa chỉ</h4>
                      <p className="mb-2">Khu phố 5, phường Linh Trung, thành phố Thủ Đức, thành phố Hồ Chí Minh</p>
                    </div>
                  </div>
                  <div className="d-flex p-4 rounded mb-4 bg-white">
                    <i className="fas fa-envelope fa-2x text-primary me-4" />
                    <div>
                      <h4>Email</h4>
                      <p className="mb-2">tiembanhbinhyen@gmail.com</p>
                    </div>
                  </div>
                  <div className="d-flex p-4 rounded bg-white">
                    <i className="fa fa-phone-alt fa-2x text-primary me-4" />
                    <div>
                      <h4>Telephone</h4>
                      <p className="mb-2">(+012) 3456 7890</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Contact End */}
        <Footer/>
      </div>
        )
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
      
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Contact);
