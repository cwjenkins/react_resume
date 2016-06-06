var Interests = React.createClass({
    render: function() {
        return (
          <div className='cv-section'>
            <div className='cv-section__title'>Interests</div>
            <div className='cv-item'>Professional</div>
            <div className='cv-content'>
              Software architecture, development processes, UX|UI, management styles, avoiding meetings about meetings
            </div>
            <div className='cv-item'>Personal</div>
            <div className='cv-content'>
                Neuroscience, psychology, genetics, robotics, ..., skydiving, surfing, snowboarding, running
            </div>
          </div>
        );
    }
});

module.exports = Interests;
