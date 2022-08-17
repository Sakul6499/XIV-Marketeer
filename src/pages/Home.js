// React
import React from 'react';

// Components
import Side from "../components/Side";

class Home extends React.Component () {
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
                                    Welcome to XIV Marketeer!
                                </p>
                                <p className="subtitle">
                                    Select a category from the left to get started.
                                </p>
                            </div>
                        </section>
                    </div>
                </main>
            </>
        );
    }
}
export default Home;
