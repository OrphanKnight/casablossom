import Layout from "../../../components/admin/Layout/Layout";
import db from "../../../utils/db";
import User from "../../../models/User";
import EnhancedTable from "../../../components/admin/Users/Table/EnhancedTableForUsers";

export default function Users({ users }) {
  console.log(users);
  return (
    <Layout>
      <EnhancedTable rows={users} />
    </Layout>
  );
}

export async function getServerSideProps(ctx) {
  await db.connectDb();
  const users = await User.find({}).sort({ createdAt: -1 }).lean();
  return {
    props: {
      users: JSON.parse(JSON.stringify(users)),
    },
  };
}
