import MainNavgation from './MainNavigation';
import LayoutStyles from './Layout.module.css';

const Layout = (props) => {
    return (
        <>
            <MainNavgation />
            <main>{props.children}</main>
        </>
    )
}

export default Layout;