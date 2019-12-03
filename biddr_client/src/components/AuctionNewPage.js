import React, { Component } from "react";

import { Auction } from "../requests";
import NewAuctionForm from "./NewAuctionForm";

export default class AuctionNewPage extends Component {
  state = {
    errors: []
  };
  createAuction = params => {
    Auction.create(params).then(auction => {
      if (auction.errors) {
        this.setState({ errors: auction.errors });
      } else {
        this.props.history.push(`/auctions/${auction.id}`);
      }
    });
  };

  render() {
    return (
      <main>
        <div className="header">Create an Auction</div>
        <NewAuctionForm
          onSubmit={this.createAuction}
          errors={this.state.errors}
        />
      </main>
    );
  }
}
