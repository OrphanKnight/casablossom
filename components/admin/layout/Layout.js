import styles from "./styles.module.scss";
import Sidebar from "./sidebar";
import { useSelector } from "react-redux";
import DialogModal from "@/components/DialogModal";
export default function Layout({ children }) {
  const { expandSidebar } = useSelector((state) => ({ ...state }));
  const showSidebar = expandSidebar.expandSidebar;
  return (
    <div className={styles.layout}>
      <DialogModal />
      <Sidebar />
      <div
        className={styles.layout__main}
        style={{ marginLeft: `${showSidebar ? "280px" : "80px"}` }}
      >
        {children}
      </div>
    </div>
  );
}
