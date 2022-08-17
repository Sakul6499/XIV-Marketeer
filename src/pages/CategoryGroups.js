// React
import React from 'react';

// Axios
import axios from 'axios';

// Components
import Side from "../components/Side";

class CategoryGroups extends React.Component {

    constructor(props) {
        super(props);
        this.state = { category_groups: null };
    }

    componentDidMount() {
        if (this.state.category_groups === null) {
            axios.get('https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main/lastSuccessfulBuild/artifact/data/category_groups.json')
                .then(response => {
                    var data = response.data;
                    console.log('Loaded ' + Object.keys(data).length + ' category groups.');

                    var category_groups = [];
                    Object.keys(data).forEach(category_group_name => {
                        var category_group_ids = data[category_group_name];
                        var group_ids = []
                        category_group_ids.forEach(category_group_id => {
                            group_ids.push(category_group_id);
                        });
                        category_groups.push([category_group_name, group_ids]);
                    });

                    this.setState({ category_groups: category_groups });
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
                                    Category Groups
                                </p>
                            </div>
                        </section>
                        {this.state.category_groups === null && (<p>Loading ...</p>)}
                        {this.state.category_groups !== null && (this.state.category_groups.map((item) => <div><p className='is-size-4'>{item[0]}</p><p>{item[1].map((id) => <p>{id}</p>)}</p></div>))}
                    </div>
                </main>
            </>
        );
    }
}
export default CategoryGroups;
