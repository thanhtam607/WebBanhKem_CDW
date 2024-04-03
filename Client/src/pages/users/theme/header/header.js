import { memo } from "react";
import Spinner from "./spinner";
import Navigation from "./navigation";
import SearchModel from "./searchModel";

const Header = () => {
    return (<>
            <Spinner/>
            <Navigation/>
            <SearchModel/>
        </>
    );
};

export default memo(Header);
