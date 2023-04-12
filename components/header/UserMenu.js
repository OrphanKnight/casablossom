import { AiOutlineSearch } from "react-icons/ai";
import { BsSuitHeart } from "react-icons/bs";
import {
  RiAccountPinCircleLine,
  RiArrowDropDownFill,
  RiSpyFill,
} from "react-icons/ri";
import Link from "next/link";
import styles from "./styles.module.scss";
import { signOut, signIn } from "next-auth/react";
export default function UserMenu({ session }) {
  return (
    <div className={styles.menu}>
      <h4>Welcome to CasaBlossom !</h4>
      {session ? (
        <div className={styles.flex}>
          <img src={session?.user?.image} alt="" className={styles.menu__img} />
          <div className={styles.col}>
            <span>Welcome Back,</span>
            <h3>{session?.user?.name}</h3>
            <span onClick={() => signOut()}>Sign out</span>
          </div>
        </div>
      ) : (
        <div className={styles.flex}>
          <button className={styles.btn_primary}>Register</button>
          <button className={styles.btn_outlined} onClick={() => signIn()}>
            Login
          </button>
        </div>
      )}
      <ul>
        <li>
          <Link href="/profile/UserProfileAddresses">Profile</Link>
        </li>
        <li>
          <Link href="/profile/UserProfileOrders?tab=1&q=all-orders__">
            My Orders
          </Link>
        </li>
        <li>
          <Link href="/profile/UserProfileAddresses">Address</Link>
        </li>
      </ul>
    </div>
  );
}
