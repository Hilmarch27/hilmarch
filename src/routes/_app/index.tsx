import { HOME } from '@/routes/_app/-components/home';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/')({
  component: HomeComponent,
});

function HomeComponent() {
  return <HOME />;
}
