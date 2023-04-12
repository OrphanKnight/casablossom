import Layout from "@/components/admin/Layout/Layout";
import styles from "@/styles/dashboard.module.scss";
import { toast } from "react-toastify";
export default function Index() {
  return (
    <Layout>
      <button onClick={() => toast.success("Everything is Working!")}>
        Click to show toastify
      </button>
    </Layout>
  );
}
