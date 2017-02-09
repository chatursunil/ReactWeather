const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');

const Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        };
    },
    handleSearch: function(location) {
        this.setState({isLoading: true});

        openWeatherMap.getTemp(location).then((temp) => {
            this.setState({isLoading: false, location, temp});
        }, (err) => {
            this.setState({isLoading: false});
            alert(err);
        });
    },
    render: function() {
        const {isLoading, temp, location} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3>Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}></WeatherMessage>;
            }
        }
        return(
            <div>
                <h3>Weather Component</h3>
                <WeatherForm onSearch={this.handleSearch}></WeatherForm>
                {renderMessage()}
            </div>
        );
    }
});

module.exports = Weather;