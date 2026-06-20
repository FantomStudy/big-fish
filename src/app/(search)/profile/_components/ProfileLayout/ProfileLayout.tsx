import { getUser } from "@/constants/mock/user";
import { ProfileSidebar } from "./ProfileSidebar";
import styles from "./ProfileLayout.module.css";

export const ProfileLayout = ({ children }: { children: React.ReactNode }) => {
  const user = getUser();

  return (
    <div className="container">
      <div className={styles.layout}>
        <ProfileSidebar user={user} />
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};
