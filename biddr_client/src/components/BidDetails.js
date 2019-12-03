import React from "react";

function BidDetails(props) {

  return (
    <div className="ui list">
      <div className="ui segment">
        <p>
          ${props.price} <br />
          By {props.user.first_name}
          <br />
        </p>
      </div>
    </div>
  );
}

export default BidDetails;
