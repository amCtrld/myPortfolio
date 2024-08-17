import { useState } from 'react';
import Layout from '../components/Layout';
import Home from '../components/Home';

export default function Index() {
  const [activeSection, setActiveSection] = useState('Home');

  const renderContent = () => {
    switch (activeSection) {
      case 'Home':
        return <Home />;
      // Add other sections here
      default:
        return <Home />;
    }
  };

  return (
    <Layout activeSection={activeSection} setActiveSection={setActiveSection}>
      {renderContent()}
    </Layout>
  );
}