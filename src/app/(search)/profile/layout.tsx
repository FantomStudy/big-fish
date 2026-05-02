import { ProfileSidebar } from "./_components/ProfileSidebar";
import styles from "./layout.module.css";

const user = {
  name: "Арзамасцев Даниил Михайлович",
  avatarUrl: "https://avatars.githubusercontent.com/u/110792863?v=4",
  balance: 500,
  bonus: 120,
  referalLink: "https://referalnaia.ssilka/ssilka",
};

const ProfileLayout = ({ children }: LayoutProps<"/profile">) => {
  return (
    <div className={styles.layout}>
      <aside>
        <ProfileSidebar user={user} />
      </aside>

      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default ProfileLayout;
