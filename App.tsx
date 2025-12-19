import React from 'react';
import YaldaCampaign from './components/YaldaCampaign';

const App: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-[#050505] text-white overflow-hidden selection:bg-red-500 selection:text-white">
      <YaldaCampaign />
    </div>
  );
};

export default App;