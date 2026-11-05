import Header from "./components/Header";
import Footer from "./components/Foooter";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return(
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;