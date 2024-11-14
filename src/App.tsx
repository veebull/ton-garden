import React, { Suspense, useState } from 'react';
import Header from './components/Header';
import { Home, Gift, ClipboardList, Users } from 'lucide-react';

// Lazy load pages
const GameWorld = React.lazy(() => import('./components/GameWorld'));
const Inventory = React.lazy(() => import('./components/pages/Inventory'));
const Missions = React.lazy(() => import('./components/pages/Missions'));
const Invite = React.lazy(() => import('./components/pages/Invite'));
const BottomNav = React.lazy(() => import('./components/BottomNav'));

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'inventory' | 'missions' | 'invite'>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <GameWorld />;
      case 'inventory':
        return <Inventory />;
      case 'missions':
        return <Missions />;
      case 'invite':
        return <Invite />;
      default:
        return <GameWorld />;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex-1 flex flex-col max-w-md mx-auto w-full bg-sky-400 relative">
        <Header />
        
        <main className="flex-1 flex flex-col overflow-hidden">
          <Suspense fallback={<div className="flex-1 bg-sky-300" />}>
            {renderPage()}
          </Suspense>

          <Suspense fallback={<div className="h-48 bg-white rounded-t-3xl" />}>
            <BottomNav currentPage={currentPage} onPageChange={setCurrentPage} />
          </Suspense>
        </main>
      </div>
    </div>
  );
}