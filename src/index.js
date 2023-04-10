//index.js holds the code that is run initially upon the loading of the page
//technically it is converted by the start up scripts to run as more compatible format/files for the browser
//npm start is the script that transforms the data
import ReactDOM from 'react-dom/client';

import './index.css'; //ex. you can't import css into js files (npm start allows the import to inject into the main HTML page loaded in the browser)
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />); //again this <App /> component is transformed into readable / executable format for the browser


//WHAT HAPPENS IN INDEX.JS
// import ReactDOM from 'react-dom/client';
/* React is imported from the react-dom package in the packages
react-dom and react are the react libraries to pull all react functionality available within index.js*/

// import './index.css'; 
// import App from './App';

// const root = ReactDOM.createRoot(document.getElementById('root')); 
/*the createRoot method is telling where the React UI should be placed in the loaded webpage
the index.html (/public/index.html) is where the root is created <div id="root"></div> which doesn't hold any content INITIALLY
However with react, the data can be rendered dynamically and at a later time (rather than page load)*/

// root.render(<App />); 
/* here we tell react-dom to render something (<App />) at the root location,
    where root is the variable defined to link to the index.html's id=root location
App is a react component, which is rendered in an HTML element (in place of/inside of the root <div></div>*/
