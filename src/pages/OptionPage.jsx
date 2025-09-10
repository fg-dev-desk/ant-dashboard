import { useState } from 'react';
import { Card, Select, Row, Col } from 'antd';
import { CalendarOutlined, BarChartOutlined } from '@ant-design/icons';
import BarChart from '../components/BarChart';

const { Option } = Select;

const OptionPage = ({ optionNumber }) => {
  const colors = ['primary', 'success', 'info', 'warning', 'danger', 'dark'];
  const optionColor = colors[(optionNumber - 1) % colors.length];
  
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
  
  const months = [
    'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
    'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
  ];
  
  const monthlyData = {
    labels: ['Semana 1', 'Semana 2', 'Semana 3', 'Semana 4'],
  };

  const generateRandomData = (month) => {
    const seed = month + optionNumber;
    return Array.from({ length: 4 }, (_, i) => {
      const base = (seed * 7 + i * 13) % 80;
      return base + 20;
    });
  };

  const chartData = {
    title: `${months[selectedMonth]} 2024`,
    values: generateRandomData(selectedMonth),
  };

  const optionDescriptions = {
    1: {
      title: 'Análisis de Ventas',
    },
    2: {
      title: 'Gestión de Inventario',
    },
    3: {
      title: 'Análisis de Clientes',
    },
    4: {
      title: 'Control Financiero',
    },
    5: {
      title: 'Productividad Operativa',
    },
    6: {
      title: 'Marketing Digital',
    }
  };

  const currentOption = optionDescriptions[optionNumber] || optionDescriptions[1];

  return (
    <div style={{ background: 'transparent', padding: '0' }}>
      <Card 
        title={
          <div style={{
            background: 'linear-gradient(195deg, #42424a, #191919)',
            margin: '-24px -24px 24px -24px',
            padding: '40px 24px',
            borderRadius: '12px 12px 0 0',
            color: 'white',
            overflow: 'hidden',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <BarChartOutlined style={{ fontSize: '24px', color: 'white' }} />
              <h6 style={{ margin: 0, fontSize: '22px', fontWeight: '600', color: 'white' }}>
                {currentOption.title}
              </h6>
            </div>
          </div>
        }
        style={{ 
          borderRadius: '12px',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
          border: 'none',
          overflow: 'hidden'
        }}
        headStyle={{
          border: 'none',
          padding: '0'
        }}
        bodyStyle={{
          paddingTop: '0'
        }}
      >
        <Row>
          <Col span={24}>
            <Card 
              title={
                <div style={{ 
                  display: 'flex', 
                  justifyContent: 'flex-end', 
                  alignItems: 'center'
                }}>
                  <Select
                    value={selectedMonth}
                    onChange={setSelectedMonth}
                    style={{ 
                      minWidth: '130px',
                      fontSize: '14px'
                    }}
                    size="small"
                  >
                    {months.map((month, index) => (
                      <Option key={index} value={index}>
                        {month}
                      </Option>
                    ))}
                  </Select>
                </div>
              }
              style={{ 
                borderRadius: '12px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.04)',
                border: '1px solid #f0f0f0'
              }}
              headStyle={{
                borderBottom: '1px solid #f0f0f0',
                paddingBottom: '16px'
              }}
              bodyStyle={{
                paddingTop: '24px'
              }}
            >
              <BarChart 
                data={{
                  labels: monthlyData.labels,
                  values: chartData.values
                }}
                title={chartData.title}
                height={400}
                type="monthly"
                color={optionColor}
              />
            </Card>
          </Col>
        </Row>
      </Card>
    </div>
  );
};

export default OptionPage;