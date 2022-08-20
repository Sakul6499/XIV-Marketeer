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

export default class BasicItemsPage extends React.Component {

    constructor(props) {
        super(props);

        console.log(this.props);

        this.title = this.props.title;
        if (this.title == null) {
            throw new Error("No title set!");
        }

        this.query_url = this.props.query_url;
        if (this.query_url == null) {
            throw new Error("No query_url set!");
        }

        this.state = { items: null };
    }

    componentDidMount() {
        console.log("Mounted!");
        if (this.state.items === null && this.query_url != null) {
            axios.get(this.query_url)
                .then(response => {
                    var data = response.data;
                    console.log('Received information about ' + Object.keys(data).length + ' items.');

                    var items = [];
                    Object.keys(data).forEach(item_id => {
                        var item_json = data[item_id];
                        var item = Item.FromJSON(item_json);
                        items.push(item);
                    });

                    console.log("Loaded " + items.length + " items.");
                    this.setState({ items: items });
                })
                .catch(err => {
                    console.log("Encountered an error while converting JSON to Item:");
                    console.log(err);
                })
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log("Should update? " + (nextProps.title !== this.props.title || nextState.items !== this.state.items));
        console.log(nextProps);
        console.log(nextState);
        return nextProps.title !== this.props.title || nextState.items !== this.state.items;
    }

    render() {
        return (
            <>
                <main className="columns mr-2" key={this.title}>
                    <div className="column is-one-fifth">
                        <Side />
                    </div>
                    <div className="column">
                        <PageTitleComponent title={this.title} />
                        <ItemsComponent items={this.state.items} />
                    </div>
                </main>
            </>
        );
    }
}
