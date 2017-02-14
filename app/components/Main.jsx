const React = require('react');

const Nav = require('Nav');

/*const Main = React.createClass({
    render: function() {
        return (
            <div>
                <Nav></Nav>
                <h2>Main Component</h2>
                {this.props.children}
            </div>
        );
    }
});*/

const Main = (props) => {
    return (
        <div>
            <Nav></Nav>
            <div className="row">
                <div className="column medium-6 large-4 small-centered">
                    {props.children}
                </div>
            </div>
        </div>
    );
}

module.exports = Main;