import { Typography } from "@/components/ui/Typography";
import { ProgressBar } from "./_components/ProgressBar";

const ProfilePage = () => {
  return (
    <main>
      <div>
        <Typography variant="heading-2" tag="h2">
          Прогресс
        </Typography>
        <ProgressBar />
      </div>
    </main>
  );
};

export default ProfilePage;
