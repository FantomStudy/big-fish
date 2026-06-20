import { ProfileLayout } from "../_components/ProfileLayout";

const RequiredProfileLayout = ({ children }: LayoutProps<"/profile">) => {
  return <ProfileLayout>{children}</ProfileLayout>;
};

export default RequiredProfileLayout;
