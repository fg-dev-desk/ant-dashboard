import { Row, Col, Card } from 'antd';
import BarChart from '../components/BarChart';

const Dashboard = () => {
  const weeklyData = {
    labels: ['Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb', 'Dom'],
  };

  const chartData = [
    {
      title: 'Opción 1 - Vista Semanal',
      values: [65, 78, 82, 55, 90, 45, 88],
      color: 'primary'
    },
    {
      title: 'Opción 2 - Vista Semanal', 
      values: [45, 62, 75, 88, 72, 95, 68],
      color: 'success'
    },
    {
      title: 'Opción 3 - Vista Semanal',
      values: [78, 85, 92, 67, 84, 76, 89],
      color: 'info'
    },
    {
      title: 'Opción 4 - Vista Semanal',
      values: [56, 73, 68, 91, 77, 83, 65],
      color: 'warning'
    },
    {
      title: 'Opción 5 - Vista Semanal',
      values: [82, 69, 77, 85, 74, 92, 81],
      color: 'danger'
    },
    {
      title: 'Opción 6 - Vista Semanal',
      values: [71, 88, 79, 94, 66, 87, 75],
      color: 'dark'
    },
  ];

  return (
    <div style={{ background: 'transparent', padding: '0' }}>
      <Row gutter={[24, 24]}>
        {chartData.map((data, index) => (
          <Col key={index} xs={24} lg={12}>
            <Card 
              title={
                <div>
                  <h6 style={{ margin: 0, fontSize: '16px', fontWeight: '600', color: '#344767' }}>
                    {data.title}
                  </h6>
                  <p style={{ margin: '4px 0 0', fontSize: '14px', color: '#67748e' }}>
                    <span style={{ color: '#17c1e8' }}>✓</span>
                    <span style={{ fontWeight: '600', marginLeft: '4px' }}>Datos semanales</span>
                  </p>
                </div>
              }
              style={{ 
                borderRadius: '12px',
                boxShadow: '0 4px 6px rgba(0, 0, 0, 0.07)',
                border: 'none'
              }}
              headStyle={{
                borderBottom: 'none',
                paddingBottom: '8px'
              }}
              bodyStyle={{
                paddingTop: '16px'
              }}
            >
              <BarChart
                data={{
                  labels: weeklyData.labels,
                  values: data.values
                }}
                title=""
                height={300}
                type="weekly"
                color={data.color}
              />
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Dashboard;