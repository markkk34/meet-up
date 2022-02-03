import { NavLink } from "react-router-dom";
import NavigationStyles from './MainNavigation.module.css';

const MainNavgation = () => {
    return (
        <header className={NavigationStyles.header}>
            <div className={NavigationStyles.logo}>
                <h2>Meetups</h2>
            </div>
            <nav className={NavigationStyles.navigation}>
                <ul className={NavigationStyles['navigation-list']}>
                    <NavLink to='/'>
                        <li className={NavigationStyles['nav-item']}>
                            All Meetups
                        </li>
                    </NavLink>
                    <NavLink to='/favorites'>
                        <li className={NavigationStyles['nav-item']}>
                            Favorites
                        </li>
                    </NavLink>
                    <NavLink to='/new-meetup'>
                        <li className={NavigationStyles['nav-item']}>
                        Add new meetup
                        </li>
                    </NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavgation;