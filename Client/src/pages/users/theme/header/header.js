import { memo } from "react";
import Spinner from "./spinner";
import Navigation from "../../../../../../Frontend-React.JS/src/containers/User/Header/navigation";
import SearchModel from "./searchModel";

const Header = ({pageActive}) => {
    return (<>
            <Spinner/>
            <Navigation pageActive={pageActive}/>
            <SearchModel/>
        </>
    );
};

export default memo(Header);
