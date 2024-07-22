import React, { useState } from "react";
import Header from "./components/Header";
import BecomeAcca from "./components/BecomeAcca";
import WhyChooseUs from "./components/WhyChooseUs";
import WhatWillYouLearn from "./components/WhatWillYouLearn";
import PlacementAssistance from "./components/PlacementAssistance";
import KickOffJourney from "./components/KickOffJourney";
import RequestCallBackModal from "./components/RequestCallBackModal";

const App = () => {
  const [showModal, setShowModal] = useState(false);

  const handleRequestCallBack = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Header />
      <BecomeAcca />
      <WhyChooseUs />

      <WhatWillYouLearn />
      <PlacementAssistance />
      <KickOffJourney onRequestCallBack={handleRequestCallBack} />
      <RequestCallBackModal show={showModal} handleClose={handleCloseModal} />
    </div>
  );
};

export default App;
