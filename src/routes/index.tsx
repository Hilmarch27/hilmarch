import Home from '@/features/home';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/')({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="flex items-center justify-center h-dvh bg-zinc-500">
      <Home />
    </div>
  );
}
