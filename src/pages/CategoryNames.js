// React
import React from 'react';

// Axios
import axios from 'axios';

// Components
import Side from "../components/Side";

class CategoryNames extends React.Component {

    constructor(props) {
        super(props);
        this.state = { category_names: null };
    }

    componentDidMount() {
        if (this.state.category_names === null) {
            axios.get('https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main/lastSuccessfulBuild/artifact/data/category_names.json')
                .then(response => {
                    var data = response.data;
                    console.log('Loaded ' + Object.keys(data).length + ' category names.');

                    var category_names = [];
                    Object.keys(data).forEach(category_id => {
                        var category_name = data[category_id];
                        category_names.push([category_id, category_name]);
                    });

                    this.setState({ category_names: category_names });
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
                                    Category Names
                                </p>
                            </div>
                        </section>
                        {this.state.category_names === null && (<p>Loading ...</p>)}
                        {this.state.category_names !== null && (this.state.category_names.map((item) => <p className='is-size-4'>{item[0] + ' => ' + item[1]}</p>))}
                    </div>
                </main>
            </>
        );
    }
}
export default CategoryNames;
