import { Card } from '@components/ui/card';
import PomodoroTimer from '@components/feature/PomodoroTimer';

const Home = () => {
  return (
    <div className="flex flex-col gap-12">
      <Card className="p-8 md:p-12 bg-card/50 backdrop-blur-sm border-border/50">
        <PomodoroTimer />
      </Card>
    </div>
  );
};

export default Home;
