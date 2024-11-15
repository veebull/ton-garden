import React, { Suspense, useState } from 'react';
import GameHeader from './components/GameHeader';
import { Home, Gift, ClipboardList, Users } from 'lucide-react';
import PageDialog from './components/PageDialog';

// Lazy load pages
const GameWorld = React.lazy(() => import('./components/GameWorld'));
const Inventory = React.lazy(() => import('./components/pages/Inventory'));
const Missions = React.lazy(() => import('./components/pages/Missions'));
const Invite = React.lazy(() => import('./components/pages/Invite'));
const BottomNav = React.lazy(() => import('./components/BottomNav'));

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'inventory' | 'missions' | 'invite'>('home');
  const [isPageOpen, setIsPageOpen] = useState(false);

  const handlePageChange = (page: 'home' | 'inventory' | 'missions' | 'invite') => {
    if (page === 'home') {
      setIsPageOpen(false);
    } else {
      setIsPageOpen(true);
    }
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'inventory':
        return <Inventory />;
      case 'missions':
        return <Missions />;
      case 'invite':
        return <Invite />;
      default:
        return null;
    }
  };

  return (
    <div className="h-screen flex flex-col bg-black">
      <div className="flex-1 flex flex-col max-w-md mx-auto w-full bg-sky-400 relative">
        <GameHeader />
        
        <main className="flex-1 flex flex-col overflow-hidden">
          <Suspense fallback={<div className="flex-1 bg-sky-300" />}>
            <GameWorld />
          </Suspense>

          <PageDialog 
            isOpen={isPageOpen} 
            onClose={() => handlePageChange('home')}
            title={currentPage.charAt(0).toUpperCase() + currentPage.slice(1)}
            currentPage={currentPage}
            onPageChange={handlePageChange}
          >
            <Suspense fallback={<div className="flex-1 bg-sky-300" />}>
              {renderPage()}
            </Suspense>
          </PageDialog>

          <Suspense fallback={<div className="h-48 bg-white rounded-t-3xl" />}>
            <BottomNav currentPage={currentPage} onPageChange={handlePageChange} />
          </Suspense>
        </main>
      </div>
    </div>
  );
}