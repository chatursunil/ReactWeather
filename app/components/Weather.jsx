const React = require('react');
const WeatherForm = require('WeatherForm');
const WeatherMessage = require('WeatherMessage');
const openWeatherMap = require('openWeatherMap');
const ErrorModal = require('ErrorModal');

const Weather = React.createClass({
    getInitialState: function() {
        return {
            isLoading: false
        };
    },
    handleSearch: function(location) {
        this.setState({
            isLoading: true,
            errorMessage: undefined,
            location: undefined,
            temp: undefined
        });

        openWeatherMap.getTemp(location).then((temp) => {
            this.setState({isLoading: false, location, temp});
        }, (e) => {
            this.setState({
                isLoading: false,
                errorMessage: e.message
            });
         });
    },
    componentDidMount: function() {
        const location = this.props.location.query.location;
        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    componentWillReceiveProps: function(newProps){
         const location = newProps.location.query.location;
        if (location && location.length > 0) {
            this.handleSearch(location);
            window.location.hash = '#/';
        }
    },
    render: function() {
        const {isLoading, temp, location, errorMessage} = this.state;

        function renderMessage() {
            if (isLoading) {
                return <h3 className="text-center">Fetching weather...</h3>;
            } else if (temp && location) {
                return <WeatherMessage temp={temp} location={location}></WeatherMessage>;
            }
        }

        function renderError () {
            if (typeof errorMessage === 'string') {
                return (
                    <ErrorModal message={errorMessage}></ErrorModal>
                );
            }
        }

        return(
            <div>
                <h1 className="text-center page-title">Get Weather</h1>
                <WeatherForm onSearch={this.handleSearch}></WeatherForm>
                {renderMessage()}
                {renderError()}
            </div>
        );
    }
});

module.exports = Weather;