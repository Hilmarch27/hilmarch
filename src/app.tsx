import Portfolio from '@/components';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';

export function App() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return <Portfolio />;
}
