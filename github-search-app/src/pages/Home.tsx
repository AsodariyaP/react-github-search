import React from 'react';
import RepoDetails from "../components/RepoDetails";

function Home() {
    return (
        <div>
            <div>
                <input type={"text"} placeholder={"Search for Github Repository..."} />
                <div>
                    <RepoDetails />
                </div>
            </div>
        </div>
    );
}

export default Home;