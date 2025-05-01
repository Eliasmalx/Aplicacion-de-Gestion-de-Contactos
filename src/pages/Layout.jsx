import { Outlet } from "react-router-dom/dist"
import ScrollToTop from "../components/ScrollToTop"
import { UserCreate } from "../components/UserCreate.jsx";




// Base component that maintains the navbar and footer throughout the page and the scroll to top functionality.
export const Layout = () => {
    return (
        <ScrollToTop>
            <UserCreate />
                <Outlet />
        </ScrollToTop>
    )
}