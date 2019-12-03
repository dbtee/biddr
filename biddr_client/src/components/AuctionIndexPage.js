import React from "react";
import { Link } from "react-router-dom";
import { Auction } from "../requests";

export class AuctionIndexPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      auctions: [],

      isLoading: true
    };
  }

  componentDidMount() {

    Auction.all().then(auctions => {

      this.setState({
        auctions: auctions,
        isLoading: false
      });
    });
  }


  render() {

    const { showAll = false } = this.props;

    const filteredAuction = this.state.auctions.filter((q, index) => {
      if (showAll || index < 10) {
        return true;
      }
      return false;
    });
    return (
      <main className="AuctionIndexPage">
        <h2>Auctions</h2>
        <div
          className="ui list"
          style={{
            listStyle: "none",
            paddingLeft: 0
          }}
        >
          {filteredAuction.map(auction => (
            <li className="ui segment" key={auction.id}>
              <Link to={`/auctions/${auction.id}`} className="item" href="">
                {auction.title}
              </Link>

            </li>
          ))}
        </div>
      </main>
    );
  }
}
