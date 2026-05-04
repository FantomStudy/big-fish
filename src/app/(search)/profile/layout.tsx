import { getUser } from "@/mock/user";
import { ProfileSidebar } from "./_components/ProfileSidebar";
import styles from "./layout.module.css";

const ProfileLayout = ({ children }: LayoutProps<"/profile">) => {
  const user = getUser();

  return (
    <div className={styles.layout}>
      <ProfileSidebar user={user} />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ProfileLayout;
