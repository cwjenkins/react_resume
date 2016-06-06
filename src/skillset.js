var Skillset = React.createClass({
    render: function() {
        return (
                <div className='cv-section'>
                  <div className='cv-section__title'>Skillset</div>
                  <div className='cv-item'>Programming</div>
                  <table className='skillset__list cv-content'>
                    <tr>
                      <td>Ruby</td>
                      <td>Javascript/jQuery</td>
                      <td>Java</td>
                    </tr>
                    <tr>
                      <td>C++</td>
                      <td>SQL</td>
                      <td>Ansible</td>
                    </tr>
                  </table>
                  <br />
                  <div className='cv-item'>Stack</div>
                  <table className='skillset__list cv-content'>
                    <tr>
                      <td>Angular</td>
                      <td>Nginx</td>
                      <td>Unicorn</td>
                    </tr>
                    <tr>
                      <td>Ruby on Rails</td>
                    </tr>
                  </table>
                </div>
        );
    }
});

module.exports = Skillset;
