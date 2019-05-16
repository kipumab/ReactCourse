console.log('App.js is running');

//JSX - Javascript XML
var template =  (
    <div>
        <h1>Indecision Applet</h1>
        <p>This is some info</p>
        <ol>
            <li>Item Ones</li>
            <li>Item Two</li>
        </ol>
    </div>
);

var templateTwo = (
    <div>
    <h1>Andrew Bae</h1>
    <p>Age: 26</p>
    <p>Location: Baltimore</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);