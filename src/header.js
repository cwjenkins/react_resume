var Header = React.createClass({
  componentDidMount: function() {
      let canvas = ReactDOM.findDOMNode(this.refs.mylabel_canvas);
      let ctx = canvas.getContext('2d');

      ctx.font = '28px Roboto';
      let gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
      gradient.addColorStop('0', 'cyan');
      gradient.addColorStop('1', 'black');
      ctx.fillStyle = gradient;
      ctx.fillText('Software Enthausist · Adrenaline Junkie', 0, 26);
  },

  render: function() {
    return (
      <div className='cv-section header'>
          <div className='header__name'>Colton Jenkins</div>
          <div className='header__mylabel'><canvas width='450' height='27' ref='mylabel_canvas'></canvas></div>
          <div className='header__address'>4244 Johnston LN Kitty Hawk, NC 27949</div>
          <div className='header__details'>
            <span className='phone'><i className="fa fa-phone"></i>919.819.4963</span>
            <span> | </span>
            <span className='email'><i className="fa fa-envelope"></i><a href="mailto:jenkinscolton7@gmail.com" >jenkinscolton7@gmail.com</a></span>
            <span> | </span>
            <span className='website'><i className="fa fa-globe"></i><a href='http://coltonjenkins.com'>coltonjenkins.com</a></span>
            <span> | </span>
            <span className='github'><i className="fa fa-github"></i><a href='https://github.com/cwjenkins'>cwjenkins</a></span>
            <span> | </span>
            <span className='linkedin'><i className="fa fa-linkedin"></i><a href='https://www.linkedin.com/in/coltonjenkins'>coltonjenkins</a></span>
          </div>
      </div>
    );
  }
});

module.exports = Header;
