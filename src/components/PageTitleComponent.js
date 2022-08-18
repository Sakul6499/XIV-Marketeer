// React
import React from 'react';

// Axios
import axios from 'axios';

export default class PageTitleComponent extends React.Component {

    constructor(props) {
        super(props);

        this.title = props['title'];
        this.state = { timestamp: null };
    }

    componentDidMount() {
        if (this.state.timestamp === null) {
            axios.get('https://jenkins.sakul6499.de/job/GitHub%20XIV-Marketeer/job/Jupyter/job/main//lastSuccessfulBuild/artifact/data/timestamp.json').then(response => {
                var timestamp = response.data['timestamp'];
                console.log('Timestamp: ' + timestamp);
                this.setState({ timestamp: timestamp });
            });
        }
    }

    render() {
        return (
            <>
                <div className="hero-body">
                    <p className="title">
                        {this.title}
                    </p>
                    <p className="subtitle">
                        Last Updated: {this.state.timestamp}
                    </p>
                </div>
            </>
        );
    }
}
