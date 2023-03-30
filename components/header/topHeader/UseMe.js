import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { UseState, UseEffect, useRef } from "react";
import style from "./styles.module.scss";
import {
  RiAccountPinCircleLine,
  RiArrowDropDownFill,
  RiSpyFill,
} from "react-icons/ri";
import { useSession } from "next-auth/react";
import UserMenu from "../UserMenu";
import SearchBar from "../Search";
export default function UseMe() {
  const ref = useRef();
  const [isOpenMyDropdown, setIsOpenMyDropdown] = UseState(false);
  const [isOpenMenu, setIsOpenMenu] = UseState(false);
  const { data: session } = useSession();
  const [visible, setVisable] = UseState(false);
  // click outside dropdown
  // UseEffect(() => {
  //   const checkIfClickedOutside = (e) => {
  //     if (isOpenMyDropdown && !ref.current.contains(e.target)) {
  //       setIsOpenMyDropdown(false);
  //     }
  //   };

  //   document.addEventListener("mousedown", checkIfClickedOutside);
  // }, [isOpenMyDropdown]);

  return (
    <header className={style.header} id="header">
      <nav className={`${style.navbar_items} ${style.navbar_container}`}>
        {/* Logo  */}
        <a href="/" className={style.brand}>
          {/* <img
            src="../../../images/logo.png"
            alt="Logo"
            className={style.brand__img}
          /> */}
          CasaBlossom
        </a>
        {/* Toggler  */}
        <div
          className={style.burger}
          id="burger"
          onClick={() => {
            setIsOpenMenu(true);
          }}
        >
          <span className={style.burger_line} />
          <span className={style.burger_line} />
          <span className={style.burger_line} />
        </div>
        {/* Search BAr  */}

        <SearchBar />
        {/* Menu Item  */}
        <div className={style.dropdown_container} ref={ref}>
          <div className={style.wrap_container}>
            <div
              className={style.profile_photo}
              onMouseOver={() => setVisable(true)}
              onMouseLeave={() => setVisable(false)}
              //onClick={() => setIsOpenMyDropdown(!isOpenMyDropdown)}
            >
              {session ? (
                <div className={style.li}>
                  <img src={session?.user?.image} alt="" />
                  <span>
                    {session?.user?.name}
                    <RiArrowDropDownFill />
                  </span>
                </div>
              ) : (
                <div className={style.li}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              )}
              {visible && <UserMenu session={session} />}
            </div>
          </div>
        </div>
      </nav>
      <header className={style.header} id="header">
        <div className={style.menu_container}>
          <span
            className={`${style.overlay} ${isOpenMenu ? style.is_active : " "}`}
            onClick={() => setIsOpenMenu(false)}
          />
          <div
            className={`${style.menu} ${isOpenMenu ? style.is_active : " "}`}
            id="menu"
          >
            <ul className={style.menu_inner}>
              <li className={style.menu_item}>
                <a className={style.menu_logo}>CasaBlossom</a>
              </li>
              <li className={style.menu_item}>
                <a
                  className={style.menu_link}
                  href="/"
                  onClick={() => setIsOpenMenu(false)}
                >
                  Home
                </a>
              </li>
              <li className={style.menu_item}>
                <a
                  className={style.menu_link}
                  href="/browse"
                  onClick={() => setIsOpenMenu(false)}
                >
                  Shop
                </a>
              </li>
              <li className={style.menu_item}>
                <a
                  className={style.menu_link}
                  href="/about"
                  onClick={() => setIsOpenMenu(false)}
                >
                  About
                </a>
              </li>
              <div className={style.no_wrap}>
                <li className={style.menu_item}>
                  <a
                    className={style.menu_link}
                    href="/contact"
                    onClick={() => setIsOpenMenu(false)}
                  >
                    Contact Us
                  </a>
                </li>
              </div>
              <li className={style.menu_item}>
                <a
                  className={style.menu_link}
                  href="/cart"
                  onClick={() => setIsOpenMenu(false)}
                >
                  <span>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </header>
  );
}
{
  /* <div className={style.search_container}>
          <div className={style.search_block}>
            <form className={style.search_form}>
              <input
                type="search"
                name="search"
                className={style.search_input}
                placeholder="Search here..."
              />
            </form>
          </div>
        </div> */
}
{
  /* <div className={style.dropdown_container} ref={ref}>
          <div className={style.profile_photo}>
            <div
              className={style.li}
              onClick={() => setIsOpenMyDropdown(!isOpenMyDropdown)}
            >
              <RiAccountPinCircleLine />
              <span>Account</span>
              <RiArrowDropDownFill />
            </div>
          </div>
          <div
            id="myDropdown"
            className={`${style.dropdown_content} ${
              isOpenMyDropdown ? style.show : ""
            }`}
          >
            <div className={style.user_photo}>
              <img src={session?.user?.image} alt="" />
              <div className={style.user_details}>
                <p className={style.username}>username</p>
                <p className={style.email}>info@gmail.com</p>
                <a className={style.signOut} href="#">
                  Sign Out
                </a>
              </div>
            </div>
            <div className={style.user_link}>
              <a href="#">Profile</a>
              <a href="#">Order</a>
              <a href="#">Billing</a>
            </div>
          </div>
        </div> */
}
