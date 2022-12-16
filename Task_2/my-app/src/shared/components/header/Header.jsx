import { NavLink } from 'react-router-dom';
import './Header.css';

export const Header = () => (
  <>
    <header className="header bg-w-100">
      <nav className="navbar">
        <NavLink
          className="navbar__logo"
          to="/">
          <img
            src="/assets/images/logo.svg"
            alt="{Finsweet"/>
        </NavLink>

        <div className="navbar__menu">
          <NavLink
            className={navData => navData.isActive ? 'navbar__menu__link active' : 'navbar__menu__link'}
            to="/">
            Home
          </NavLink>

          <NavLink
            className="navbar__menu__link"
            to="/pricing">
            Pricing
          </NavLink>

          <NavLink
            className="navbar__menu__link rounded-button contact-us-button"
            to="/contact-us">
            Contact us
          </NavLink>
        </div>
      </nav>
    </header>
  </>
);
