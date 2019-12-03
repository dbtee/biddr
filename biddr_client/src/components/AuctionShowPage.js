import React, { Component } from "react";
import Spinner from "./Spinner";
import AuctionDetails from "./AuctionDetails";
import { BidList } from "./BidList";
import { Auction } from "../requests";
import NewBidForm from "./NewBidForm";

class AuctionShowPage extends Component {
  constructor(props) {

    super(props);

    this.state = {
      auction: null,
      isLoading: true
    };
    this.componentDidMount= this.componentDidMount.bind(this)
  }

  componentDidMount() {
      Auction.one(this.props.match.params.id).then(auction => {
          this.setState({
              auction: auction,
              isLoading: false
            });
        });

  }

  render() {
    
    if (this.state.isLoading) {
        return <Spinner />;
      }
      const { bids = [] } = this.state.auction;
    return (
      <main>
        <AuctionDetails {...this.state.auction} />

        <h2>Make a bid</h2>
        <NewBidForm {...this.state.auction} />
        <br/>
        <h2>Bids</h2>
        <BidList
            bids={bids}
        />
      </main>
    );
  }
}

export default AuctionShowPage;
