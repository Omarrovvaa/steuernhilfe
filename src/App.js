import React from 'react';

// Импортируем компоненты
import Header from './components/Header';
import Hero from './components/Hero';
import EligibilityInfo from './components/EligibilityInfo';
import HowItWorks from './components/HowItWorks';
import DocumentsNeeded from './components/DocumentsNeeded';
import WhyChooseUs from './components/WhyChooseUs';
import ApplicationForm from './components/ApplicationForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <EligibilityInfo />
        <HowItWorks />
        <DocumentsNeeded />
        <WhyChooseUs />
        <ApplicationForm />
      </main>
      <Footer />
    </>
  );
}

export default App;
