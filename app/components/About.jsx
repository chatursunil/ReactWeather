const React = require('react');

const About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>
                This is Weather Application that has been developed using React.
                I've built this app as part of the React course by Andrew Mead.
            </p>
            <p>
                Here are some of tools that were used:
            </p>
            <ul>
                <li>
                    <a href="https://facebook.github.io/react" target="_blank">React</a> 
                    - This is the javascript framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org" target="_blank">Open Weather Map</a> 
                    - I used this api to fetch the weather data
                </li>
            </ul>
        </div>
    );
}

module.exports = About;