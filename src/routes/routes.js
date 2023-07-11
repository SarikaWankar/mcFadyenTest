import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/home";
import ComingSoon from "../pages/commingSoon/commingSoon";
import { pagesName } from "../constant/constant";
import Header from "../components/header/header";
const Routing = () => {


    return (
        <BrowserRouter>
            <Header className="App-header" />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                {pagesName?.filter(f => f !== 'Home').map((el,idx) => {
                    const path = el.trim();
                    return <Route exact path={"/" + path} element={<ComingSoon />} key={idx}></Route>
                })}

            </Routes>
        </BrowserRouter>
    );
};

export default Routing;
