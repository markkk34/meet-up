
import MainNavgation from './MainNavigation';

const Layout = (props) => {
    return (
        <>
            <MainNavgation />
            <main>{props.children}</main>
        </>
    )
}

export default Layout;