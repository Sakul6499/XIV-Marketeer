// React
import React from 'react';

// Axios
import axios from 'axios';

// Components
import Side from "../components/Side";
import PageTitleComponent from "../components/PageTitleComponent";

// Classes
import Item from "../classes/Item";
import ItemsComponent from '../components/ItemsComponent';

export default class MedianPriceNQ extends React.Component {

    constructor(props) {
        super(props);
        this.state = { items: null };
    }

    componentDidMount() {
        if (this.state.items === null) {
            axios.get('https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/median_price_nq.json')
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

    render() {
        return (
            <>
                <main className="columns mr-2">
                    <div className="column is-one-fifth">
                        <Side />
                    </div>
                    <div className="column">
                        <PageTitleComponent title='Median Price (NQ)' />
                        <ItemsComponent items={this.state.items} />
                    </div>
                </main>
            </>
        );
    }
}
