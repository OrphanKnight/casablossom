import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect, useRef } from "react";
import style from "./styles.module.scss";
import {
  RiAccountPinCircleLine,
  RiArrowDropDownFill,
  RiSpyFill,
} from "react-icons/ri";
import { useSession } from "next-auth/react";
import UserMenu from "../UserMenu";
import SearchBar from "../Search";
export default function UseMe({ searchHandler }) {
  const ref = useRef();
  const [isOpenMyDropdown, setIsOpenMyDropdown] = useState(false);
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const { data: session } = useSession();
  const [visible, setVisable] = useState(false);
  return (
    <header className={style.header} id="header">
      <nav className={`${style.navbar_items} ${style.navbar_container}`}>
        {/* Logo  */}
        <a href="/" className={style.brand}>
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

        <SearchBar searchHandler={searchHandler} />
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
      <div className={style.header} id="header">
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
                  <div className={style.cartImage}>
                    <FontAwesomeIcon icon={faCartShopping} />
                  </div>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
