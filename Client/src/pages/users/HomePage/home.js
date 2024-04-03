import {memo} from "react";
import Header from "../theme/header/header";
import Footer from "../theme/footer";
import Banner1 from "./banner1";
import Featurs from "./featurs";
import Shop from "./shop";
import Banner2 from "./banner2";

const HomePage = () => {
    return (
        <>
            <Header />
            <Banner1/>
            <Featurs/>
            <Shop/>
            <Banner2/>
            <Footer />
        </>
    );
};

export default memo(HomePage);
