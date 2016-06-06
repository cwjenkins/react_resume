var Education = React.createClass({
    render: function() {
        return (
          <div className='cv-section'>
            <div className='cv-section__title'>Education</div>
            <div className='cv-item'>2010 - 2012, Indiana University Southeast</div>
            <div className='cv-content'>
              Double major in Computer Science/Mathematics
              <br />
              Moved to Portland OR due to job promotion
              <br />
              Honor’s Program GPA: 3.6/4.0
            </div>
            <div className='cv-item'>2008 - 2010, Westwood College</div>
            <div className='cv-content'>
              Software Development
              <br />
              Transferred
              <br />
              GPA: 4.0/4.0
            </div>
            <div className='cv-item'>2007 - 2008, Jefferson Community</div>
            <div className='cv-content'>
              General Study’s
              <br />
              Transferred
              <br />
              GPA: 4.0/4.0
            </div>
          </div>
        );
    }
});

module.exports = Education
