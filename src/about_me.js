var AboutMe = React.createClass({
  render: function() {
    return (
      <div className='cv-section'>
            <div className='cv-item'>About Me</div>
            <div className='cv-content'>
              I’m roughly a quarter short from a fullstack. Fairly savvy on the server side of things and can tackle whatever
              on the frontend with jQuery, but leveraging one of the many Javascript frameworks is still a work in progress
              (angular/react). Given my previous positions I can speak manager, developer, and client. I excel in both team and
              self-driven environments. I always go the extra mile for the client or company to ensure they are satisfied with
              both the quality and timeliness of my work. When I’m not performing magic I’m a father who enjoys reading about
              upcoming technologies and dabbling with new frameworks.
            </div>
      </div>
    );
  }
});

module.exports = AboutMe;
