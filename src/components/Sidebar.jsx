import { Layout, Menu } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  DashboardOutlined,
  ShopOutlined,
  AppstoreOutlined,
  TeamOutlined,
  BankOutlined,
  SettingOutlined,
  SoundOutlined,
  LogoutOutlined,
  BuildOutlined
} from '@ant-design/icons';

const { Sider } = Layout;

const Sidebar = ({ isAuthenticated, onSignOut, isMobile, isOpen, onClose }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    {
      key: '/dashboard',
      icon: <DashboardOutlined />,
      label: 'Dashboard',
    },
    {
      key: '/opcion1', 
      icon: <ShopOutlined />,
      label: 'Opción 1',
    },
    {
      key: '/opcion2',
      icon: <AppstoreOutlined />,
      label: 'Opción 2', 
    },
    {
      key: '/opcion3',
      icon: <TeamOutlined />,
      label: 'Opción 3',
    },
    {
      key: '/opcion4',
      icon: <BankOutlined />,
      label: 'Opción 4',
    },
    {
      key: '/opcion5',
      icon: <SettingOutlined />,
      label: 'Opción 5',
    },
    {
      key: '/opcion6',
      icon: <SoundOutlined />,
      label: 'Opción 6',
    }
  ];

  const handleMenuClick = ({ key }) => {
    navigate(key);
    if (isMobile) {
      onClose();
    }
  };

  const handleSignOut = () => {
    onSignOut();
    if (isMobile) {
      onClose();
    }
  };

  if (!isAuthenticated) {
    return null;
  }

  return (
    <>
      <Sider
        width={280}
        collapsedWidth={0}
        collapsed={isMobile ? !isOpen : false}
        trigger={null}
        style={{
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
          height: '100vh',
          background: 'white',
          boxShadow: isMobile ? '0 4px 6px rgba(0, 0, 0, 0.1)' : 'none',
          zIndex: isMobile ? 1000 : 100,
          transform: isMobile ? (isOpen ? 'translateX(0)' : 'translateX(-100%)') : 'translateX(0)',
          transition: 'transform 0.3s ease',
          border: '1px solid #e5e7eb',
          borderRadius: isMobile ? 0 : '1rem',
          margin: isMobile ? 0 : '0.5rem',
          marginRight: isMobile ? 0 : 0,
          width: isMobile ? 280 : 'calc(280px - 1rem)',
          height: isMobile ? '100vh' : 'calc(100vh - 1rem)'
        }}
      >
        {isMobile && (
          <div
            onClick={onClose}
            style={{
              position: 'absolute',
              top: 12,
              right: 12,
              cursor: 'pointer',
              fontSize: '18px',
              color: '#6b7280',
              zIndex: 1001
            }}
          >
            ✕
          </div>
        )}
        
        <div style={{
          padding: '1.5rem 1rem',
          borderBottom: '1px solid #e5e7eb',
          marginBottom: '0.5rem'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            color: '#1f2937',
            fontSize: '20px',
            fontWeight: '700'
          }}>
            <div style={{
              width: 32,
              height: 32,
              background: 'linear-gradient(195deg, #42424a, #191919)',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginRight: 8,
              color: 'white',
              fontSize: 18
            }}>
              <BuildOutlined />
            </div>
            ESCOTEL
          </div>
        </div>

        <Menu
          mode="inline"
          selectedKeys={[location.pathname]}
          items={menuItems}
          onClick={handleMenuClick}
          style={{
            border: 'none',
            background: 'transparent'
          }}
          className="custom-menu"
        />

        <div style={{ position: 'absolute', bottom: 20, left: 0, right: 0, padding: '0 1rem' }}>
          <div style={{
            color: '#6b7280',
            fontSize: '12px',
            textTransform: 'uppercase',
            fontWeight: '600',
            marginBottom: '0.75rem',
            paddingLeft: '1rem'
          }}>
            Cuenta
          </div>
          <div
            onClick={handleSignOut}
            style={{
              display: 'flex',
              alignItems: 'center',
              padding: '0.75rem 1rem',
              cursor: 'pointer',
              color: '#374151',
              borderRadius: '0.5rem',
              transition: 'background-color 0.2s',
              ':hover': {
                backgroundColor: '#f3f4f6'
              }
            }}
            onMouseEnter={(e) => e.target.style.backgroundColor = '#f3f4f6'}
            onMouseLeave={(e) => e.target.style.backgroundColor = 'transparent'}
          >
            <LogoutOutlined style={{ marginRight: 8, opacity: 0.5 }} />
            Cerrar Sesión
          </div>
        </div>
      </Sider>

      <style jsx global>{`
        .custom-menu .ant-menu-item {
          margin: 4px 8px !important;
          border-radius: 8px !important;
          height: auto !important;
          line-height: 1.5 !important;
          padding: 12px 16px !important;
          color: #374151 !important;
        }
        
        .custom-menu .ant-menu-item-selected {
          background: linear-gradient(195deg, #42424a, #191919) !important;
          color: white !important;
        }
        
        .custom-menu .ant-menu-item-selected .anticon {
          color: white !important;
        }
        
        .custom-menu .ant-menu-item:hover {
          background-color: #f3f4f6 !important;
          color: #374151 !important;
        }
        
        .custom-menu .ant-menu-item-selected:hover {
          background: linear-gradient(195deg, #42424a, #191919) !important;
          color: white !important;
        }
      `}</style>
    </>
  );
};

export default Sidebar;