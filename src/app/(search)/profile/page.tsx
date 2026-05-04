import { Typography } from "@/components/ui/Typography";
import { ProgressBar } from "./_components/ProgressBar";

const ProfilePage = () => {
  return (
    <main className="stack">
      <Typography variant="title-md" tag="h2">
        Прогресс
      </Typography>
      <ProgressBar />
    </main>
  );
};

export default ProfilePage;
