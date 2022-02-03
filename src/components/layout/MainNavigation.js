import { NavLink } from "react-router-dom";
import NavigationStyles from './MainNavigation.module.css';

const MainNavgation = () => {
    return (
        <header className={NavigationStyles.header}>
            <div>Meetups</div>
            <nav>
                <ul className={NavigationStyles['navigation-list']}>
                    <li className={NavigationStyles['nav-item']}>
                        <NavLink to='/'>All Meetups</NavLink>
                    </li>
                    <li className={NavigationStyles['nav-item']}>
                        <NavLink to='/favorites'>Favorites</NavLink>
                    </li>
                    <li className={NavigationStyles['nav-item']}>
                        <NavLink to='/new-meetup'>Add new meetup</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default MainNavgation;