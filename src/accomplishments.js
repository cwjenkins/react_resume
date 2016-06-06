var Accomplishments = React.createClass({
    render: function() {
        return (
          <div className='cv-section'>
            <div className='cv-section__title'>Accomplishments</div>
            <div>
              <span className='cv-item'>2012, </span>
              <span className='cv-item cv-item__position'>Summer in Ecuador, </span>
              <span className='cv-item'>Indiana University Southeast</span>
            </div>
            <div className='cv-content'>
              Spent 3 weeks in various parts of Ecuador visiting a few high schools teaching students basic html/javascript. Also
              had an amazing time immersing myself into a totally different culture.
            </div>
            <div>
              <span className='cv-item'>2011, </span>
              <span className='cv-item cv-item__position'>Honors Conference, </span>
              <span className='cv-item'>Indiana University Southeast</span>
            </div>
            <div className='cv-content'>
              Presented at the Mid-Eastern Honors Conference in Ohio on epistasis in genetics... the masking of phenotypes
            amongst various genes.
             </div>
          </div>
        );
    }
});

module.exports = Accomplishments;
