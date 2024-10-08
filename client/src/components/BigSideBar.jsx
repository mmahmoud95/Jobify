import Wrapper from "../assets/wrappers/BigSidebar";

import { useAppContext } from "../context/appContext";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
function BigSideBar() {
    const { showSideBar } = useAppContext();

    return (
        <Wrapper>
            <div
                className={
                    showSideBar
                        ? "sidebar-container  show-sidebar"
                        : "sidebar-container"
                }
            >
                <div className='content'>
                    <header>
                        <Logo />
                    </header>{" "}
                    <NavLinks />
                </div>
            </div>
        </Wrapper>
    );
}
export default BigSideBar;
