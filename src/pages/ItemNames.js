// React
import React from 'react';

// Axios
import axios from 'axios';

// Components
import Side from "../components/Side";

class ItemNames extends React.Component {

    constructor(props) {
        super(props);
        this.state = { item_names: null };
    }

    componentDidMount() {
        if (this.state.item_names === null) {
            axios.get('https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main/lastSuccessfulBuild/artifact/data/item_names.json')
                .then(response => {
                    var data = response.data;
                    console.log('Loaded ' + Object.keys(data).length + ' item names.');

                    var item_names = [];
                    Object.keys(data).forEach(item_id => {
                        var item_name = data[item_id];
                        item_names.push([item_id, item_name]);
                    });

                    this.setState({ item_names: item_names });
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    render() {
        return (
            <>
                <main className="columns">
                    <div className="column is-one-fifth">
                        <Side />
                    </div>
                    <div className="column">
                        <section className="hero">
                            <div className="hero-body">
                                <p className="title">
                                    Item Names
                                </p>
                            </div>
                        </section>
                        {this.state.item_names === null && (<p>Loading ...</p>)}
                        {this.state.item_names !== null && (this.state.item_names.map((item) => <p className='is-size-4'>{item[0] + ' => ' + item[1]}</p>))}
                    </div>
                </main>
            </>
        );
    }
}
export default ItemNames;
