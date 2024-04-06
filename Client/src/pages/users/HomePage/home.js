import {memo} from "react";
import Header from "../theme/header/header";
import Footer from "../theme/footer";
import Banner1 from "./banner1";
import Featurs from "./featurs";
import ShopInHome from "./shopInHome";
import Banner2 from "./banner2";

const HomePage = () => {
    return (
        <>
            <Header pageActive={"Trang chủ"}/>
            <Banner1/>
            <Featurs/>
            <ShopInHome/>
            <Banner2/>
            <Footer />
        </>
    );
};

export default memo(HomePage);
