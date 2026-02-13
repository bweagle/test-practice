import { Button } from '../components/Button';

export function StartPage({ onStartTest }) {
  return (
    <div className="staar-container">
      <div className="staar-header">
        <h1 className="staar-title">STAAR Math Practice</h1>
        <p className="staar-subtitle">5th Grade Math Test Prep</p>
      </div>

      <div style={{ textAlign: 'center', padding: '2rem 0' }}>
        <p style={{ fontSize: '20px', marginBottom: '3rem', color: '#495057' }}>
          Choose your test length to begin practicing
        </p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '400px', margin: '0 auto' }}>
          <Button
            size="large"
            onClick={() => onStartTest(10)}
          >
            Short Test (10 questions)
          </Button>

          <Button
            size="large"
            onClick={() => onStartTest(20)}
          >
            Medium Test (20 questions)
          </Button>

          <Button
            size="large"
            onClick={() => onStartTest(40)}
          >
            Full Test (40 questions)
          </Button>
        </div>

        <p style={{ marginTop: '3rem', color: '#6c757d', fontSize: '16px' }}>
          Questions will cover all topics: Numbers, Fractions, Algebra, Geometry, Measurement, and Data Analysis
        </p>
      </div>
    </div>
  );
}
