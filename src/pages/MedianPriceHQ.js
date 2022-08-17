// React
import React from 'react';

// Axios
import axios from 'axios';

// Components
import Side from "../components/Side";

// Classes
import Item from "../classes/Item";

class MedianPriceHQ extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: null };
    }

    componentDidMount() {
        if (this.state.items === null) {
            axios.get('https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/median_price_hq.json')
                .then(response => {
                    var data = response.data;
                    console.log('Loaded ' + Object.keys(data).length + ' items.');

                    var items = [];
                    Object.keys(data).forEach(item_id => {
                        var item_json = data[item_id];
                        var item = Item.FromJSON(item_json);
                        items.push(item);
                    });

                    this.setState({ items: items });
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    renderItems(items) {
        var count = 0;
        if (items === null) {
            return (
                <>
                    <div className="card column">
                        <div className="card-content">
                            <p className="title">
                                Loading ...
                            </p>
                            <p className="subtitle">
                                This may take a while based on your browsers performance!
                            </p>
                        </div>
                    </div>
                </>
            );
        } else {
            return (
                <>
                    {this.state.items.map((item) => this.renderItem(item, ++count))}
                </>
            );
        }
    }

    renderItem(item, placement) {
        return (
            <>
                <div className="card column is-one-third mb-4">
                    <div className="card-content">
                        <p className="title is-size-4">
                            {(placement === 1 && ("1st place")) || (placement === 2 && ("2nd place")) || (placement === 3 && ("3rd place")) || (placement + "th place")}
                        </p>
                        <p className="subtitle is-size-6">
                            <p>{item.getName()} (#{item.getItemId()})</p>
                            Category: {item.getCategory()} (#{item.getCategoryId()})
                        </p>
                    </div>
                    <div className="card-content">
                        <div className="content">
                            <div>Average Price (NQ): {item.getAveragePriceNq().toFixed(2)}</div>
                            <div>Average Price (HQ): {item.getAveragePriceHq().toFixed(2)}</div>
                            <div>Median Price (NQ): {item.getMedianPriceNq().toFixed(2)}</div>
                            <div>Median Price (HQ): {item.getMedianPriceHq().toFixed(2)}</div>
                            <div>Sale Velocity (HQ & NQ): {item.getRegularSaleVelocity().toFixed(2)}</div>
                            <div>Sale Velocity (NQ): {item.getNqSaleVelocity().toFixed(2)}</div>
                            <div>Sale Velocity (NQ): {item.getHqSaleVelocity().toFixed(2)}</div>
                        </div>
                    </div>
                    <footer className="card-footer">
                        <p className="card-footer-item">
                            <span>
                                <a href={item.getGarlandToolsUrl()} className='is-size-6' target="_blank" rel="noreferrer">GarlandTools</a>
                            </span>
                        </p>
                        <p className="card-footer-item">
                            <span>
                                <a href={item.getUniversalisUrl()} className='is-size-6' target="_blank" rel="noreferrer">Universalis</a>
                            </span>
                        </p>
                    </footer>
                </div>
            </>
        );
    }

    render() {
        return (
            <>
                <main className="columns mr-2">
                    <div className="column is-one-fifth">
                        <Side />
                    </div>
                    <div className="column">
                        <section className="hero">
                            <div className="hero-body">
                                <p className="title">
                                    Median Price (HQ)
                                </p>
                            </div>
                        </section>
                        <div className="columns is-multiline is-mobile">
                            {this.renderItems(this.state.items)}
                        </div>
                    </div>
                </main>
            </>
        );
    }
}
export default MedianPriceHQ;
