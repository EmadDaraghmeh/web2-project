import React from 'react';
import OfferCard from './OfferCard';
function Offers() {
  return (

    <div className='container'>
        <div className="list-group" id="list-tab" role="tablist">
      <a className="list-group-item list-group-item-action active" id="list-ongoing-list" data-bs-toggle="list" href="#list-ongoing" role="tab" aria-controls="list-ongoing">🔄 ongoing</a>
      <a className="list-group-item list-group-item-action" id="list-accepted-list" data-bs-toggle="list" href="#list-accepted" role="tab" aria-controls="list-accepted">✔️ accepted</a>
      <a className="list-group-item list-group-item-action" id="list-declined-list" data-bs-toggle="list" href="#list-declined" role="tab" aria-controls="list-declined">❌ declined</a>
    </div>
      <div className="offercard-container">
        <OfferCard />
        <OfferCard />
        <OfferCard />
        <OfferCard />
      </div>
    </div>
  );
}

export default Offers;

