import { Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined, BuildOutlined } from '@ant-design/icons';
import { useOutletContext } from 'react-router-dom';

const SignIn = () => {
  const { isAuthenticated, handleSignIn } = useOutletContext();
  
  if (isAuthenticated) {
    return null;
  }

  const onFinish = (values) => {
    handleSignIn();
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(195deg, #42424a, #191919)',
      fontFamily: 'Inter, sans-serif',
      padding: '1rem',
      boxSizing: 'border-box'
    }}>
      <div style={{
        background: 'white',
        padding: '2rem',
        borderRadius: '12px',
        boxShadow: '0 10px 25px rgba(0,0,0,0.3)',
        width: '100%',
        maxWidth: '400px'
      }}>
        <div style={{
          textAlign: 'center',
          marginBottom: '2rem'
        }}>
          <div style={{
            width: '60px',
            height: '60px',
            background: 'linear-gradient(195deg, #42424a, #191919)',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            margin: '0 auto 1rem',
            color: 'white',
            fontSize: '20px'
          }}>
            <BuildOutlined />
          </div>
          <h2 style={{
            margin: '0 0 0.5rem',
            color: '#344767',
            fontSize: '24px',
            fontWeight: '600'
          }}>
            ESCOTEL
          </h2>
          <p style={{
            margin: 0,
            color: '#666',
            fontSize: '14px'
          }}>
            Sistema de Gestión Empresarial
          </p>
        </div>

        <Form
          name="signin"
          onFinish={onFinish}
          layout="vertical"
          size="large"
        >
          <Form.Item
            name="email" 
            label={<span style={{ color: '#333', fontSize: '14px', fontWeight: '500' }}>Email</span>}
          >
            <Input 
              prefix={<UserOutlined />} 
              placeholder="Ingresa tu email"
              style={{
                padding: '12px',
                border: '1px solid #ddd',
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
          </Form.Item>

          <Form.Item
            name="password"
            label={<span style={{ color: '#333', fontSize: '14px', fontWeight: '500' }}>Contraseña</span>}
          >
            <Input.Password
              prefix={<LockOutlined />}
              placeholder="Ingresa tu contraseña"
              style={{
                padding: '12px',
                border: '1px solid #ddd', 
                borderRadius: '8px',
                fontSize: '14px'
              }}
            />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked" style={{ marginBottom: '1.5rem' }}>
            <Checkbox style={{ fontSize: '14px', color: '#666' }}>
              Recordarme
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              style={{
                width: '100%',
                height: '48px',
                borderRadius: '8px',
                background: 'linear-gradient(195deg, #42424a, #191919)',
                border: 'none',
                fontSize: '16px',
                fontWeight: '600',
                marginBottom: '1rem'
              }}
            >
              Iniciar Sesión
            </Button>
          </Form.Item>
        </Form>

        <div style={{
          textAlign: 'center',
          marginTop: '2rem',
          paddingTop: '1rem',
          borderTop: '1px solid #eee',
          fontSize: '12px',
          color: '#999'
        }}>
          © 2024 ESCOTEL. Todos los derechos reservados.
        </div>
      </div>
    </div>
  );
};

export default SignIn;