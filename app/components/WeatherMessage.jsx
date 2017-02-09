const React = require('react');

/*const WeatherMessage = React.createClass({
    render: function() {
        const {temp, location} = this.props;
        return(
            <div>
                <h4>It's {temp} deg in {location}!</h4>
            </div>
        );
    }
});*/

const WeatherMessage = ({temp, location}) => {
    // const {temp, location} = props;
    return(
        <div>
            <h4>It's {temp} deg in {location}!</h4>
        </div>
    );
}

module.exports = WeatherMessage;