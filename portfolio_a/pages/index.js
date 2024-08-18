import { useState } from "react";
import Layout from "../components/Layout";
import Home from "../components/Home";
import About from '../components/About';

export default function Index() {
  const [activeSection, setActiveSection] = useState("Home");

  const renderContent = () => {
    switch (activeSection) {
      case "Home":
        return <Home />;
      case "About":
        return <About />;

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
