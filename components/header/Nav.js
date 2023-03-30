import styles from "./styles.module.scss";
import SearchBar from "./Search";
import { AiOutlineSearch } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import {
  RiAccountPinCircleLine,
  RiArrowDropDownFill,
  RiSpyFill,
} from "react-icons/ri";
import { UseState } from "react";
import Link from "next/link";
import UserMenu from "./UserMenu";
import { useSession } from "next-auth/react";
// https://www.youtube.com/watch?v=PwWHL3RyQgk&ab_channel=Skillthrive
export default function Navbar() {
  const { data: session } = useSession();
  const [visible, setVisable] = UseState(false);
  return (
    <div className={styles.nav}>
      <div className={styles.nav__container}>
        <div>CasaBlossom</div>

        <ul className={styles.nav__list}>
          <li className={styles.li}></li>
          <li className={styles.li}>
            <Link href="/">
              <span>Home</span>
            </Link>
          </li>
          <li className={styles.li}>
            <span>Shop</span>
          </li>
          <li>
            <SearchBar />
          </li>
          <li className={styles.li}>
            <BsSuitHeart />
            <Link href="#">
              <span>Whishlist</span>
            </Link>
          </li>
          <li
            className={styles.li}
            onMouseOver={() => setVisable(true)}
            onMouseLeave={() => setVisable(false)}
          >
            {session ? (
              <div className={styles.li}>
                <div className={styles.flex}>
                  <img src={session?.user?.image} alt="" />
                  <span>{session?.user?.name}</span>
                  <RiArrowDropDownFill />
                </div>
              </div>
            ) : (
              <div className={styles.li}>
                <div className={styles.flex}>
                  <RiAccountPinCircleLine />
                  <span>Account</span>
                  <RiArrowDropDownFill />
                </div>
              </div>
            )}
            {visible && <UserMenu session={session} />}
          </li>
        </ul>
      </div>
    </div>
  );
}
