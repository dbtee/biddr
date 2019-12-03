import React from "react";

function AuctionDetails(props) {
    
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.body}
        <br />

        By {props.user.full_name}
      </p>

        <h3>Ends at: {props.ends_at}</h3>
        <h3>Reserve price: ${props.reserve_price}</h3>
    </div>
  );
}

export default AuctionDetails;
