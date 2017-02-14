const React = require('react');
const {Link} = require('react-router');

const Examples = (props) => {
    return(
        <div>
            <h1 className="text-center">Examples</h1>
            <p>Here are a few example locations to try out:</p>
            <ol>
                <li>
                    <Link to="/?location=miami">Miami, FL</Link>
                </li>
                <li>
                    <Link to="/?location=delhi">Delhi, India</Link>
                </li>
            </ol>
        </div>
    
    );
}

module.exports = Examples;