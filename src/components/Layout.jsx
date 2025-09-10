import { useState, useEffect } from 'react';
import { Layout as AntLayout } from 'antd';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const { Content } = AntLayout;

const Layout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleSignIn = () => {
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    setIsAuthenticated(false);
    setSidebarOpen(false);
  };

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div style={{
      minHeight: '100vh',
      background: isAuthenticated ? '#f0f2f5' : 'transparent',
      display: isAuthenticated ? 'block' : 'flex',
      alignItems: isAuthenticated ? 'stretch' : 'center'
    }}>
      {isAuthenticated && isMobile && (
        <button 
          onClick={toggleSidebar}
          style={{
            position: 'fixed',
            top: '1rem',
            right: '1rem',
            zIndex: 1001,
            background: 'linear-gradient(195deg, #42424a, #191919)',
            color: 'white',
            border: 'none',
            borderRadius: '50%',
            width: '3rem',
            height: '3rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)',
            cursor: 'pointer',
            fontSize: '18px'
          }}
        >
          ☰
        </button>
      )}
      
      <Sidebar 
        isAuthenticated={isAuthenticated} 
        onSignOut={handleSignOut}
        isMobile={isMobile}
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />
      
      <AntLayout style={{ 
        marginLeft: isAuthenticated && !isMobile ? '280px' : '0',
        minHeight: '100vh',
        background: 'transparent'
      }}>
        <Content style={{ 
          padding: isAuthenticated ? '24px' : '0',
          minHeight: '100vh',
          background: 'transparent'
        }}>
          <Outlet context={{ isAuthenticated, handleSignIn }} />
        </Content>
      </AntLayout>

      {/* Mobile overlay */}
      {isMobile && sidebarOpen && (
        <div 
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0, 0, 0, 0.5)',
            zIndex: 999
          }}
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
};

export default Layout;