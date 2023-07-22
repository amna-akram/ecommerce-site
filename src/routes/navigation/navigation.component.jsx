import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown.svg";
import './navigation.styles.scss'
const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link class='logo-container' to='/'>
          <CrownLogo className="logo"/>
        </Link>
        <div class="nav-links-container">
          <Link class="nav-link" to="/shop">
            SHOP
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
