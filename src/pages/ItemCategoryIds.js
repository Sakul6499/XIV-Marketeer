// React
import React from 'react';

// Axios
import axios from 'axios';

// Components
import Side from "../components/Side";

class ItemCategoryIds extends React.Component {

    constructor(props) {
        super(props);
        this.state = { item_category_ids: null };
    }

    componentDidMount() {
        if (this.state.item_category_ids === null) {
            axios.get('https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main/lastSuccessfulBuild/artifact/data/item_category_ids.json')
                .then(response => {
                    var data = response.data;
                    console.log('Loaded ' + Object.keys(data).length + ' item category ids.');

                    var item_category_ids = [];
                    Object.keys(data).forEach(item_id => {
                        var category_id = data[item_id];
                        item_category_ids.push([item_id, category_id]);
                    });

                    this.setState({ item_category_ids: item_category_ids });
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
                                    Item Category Ids
                                </p>
                            </div>
                        </section>
                        {this.state.item_category_ids === null && (<p>Loading ...</p>)}
                        {this.state.item_category_ids !== null && (this.state.item_category_ids.map((entry) => <p className='is-size-4'>{entry[0] + ' => ' + entry[1]}</p>))}
                    </div>
                </main>
            </>
        );
    }
}
export default ItemCategoryIds;
