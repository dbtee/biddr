import React from "react";

import BidDetails from "./BidDetails";

export function BidList(props) {

  const { bids } = props; 
  return (
    <ul>
      {bids.map(bid => (
        <li key={bid.id}>

          <BidDetails
            {...bid}
          />
        </li>
      ))}
    </ul>
  );
}
