console.log('App.js is running');

//JSX - Javascript XML
var template =  (
    <div>
        <h1>Indecision Applet</h1>
        <p>This is some info</p>
        <ol>
            <li>Item One</li>
            <li>Item Two</li>
        </ol>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);