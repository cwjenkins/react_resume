var Header          = require('./header');
var AboutMe         = require('./about_me')
var Skillset        = require('./skillset')
var Experience      = require('./experience')
var Education       = require('./education')
var Accomplishments = require('./accomplishments')
var Interests       = require('./interests')

ReactDOM.render(
  <div className='container'>
    <Header />
    <br />
    <AboutMe />
    <br />
    <Skillset />
    <br />
    <Experience />
    <br />
    <Education />
    <br />
    <Accomplishments />
    <br />
    <Interests />
    <br />
  </div>,
  document.body
);
