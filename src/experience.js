var Experience = React.createClass({
    render: function() {
        return(
          <div className='cv-section'>
            <div className='cv-section__title'>Experience</div>
            <div>
              <span className='cv-item'>May 2014 - June 2016, </span>
              <span className='cv-item cv-item__position'>Ruby on Rails Developer, </span>
              <span className='cv-item'>Smashing Boxes</span>
            </div>
            <div className='cv-content'>
              Refactored and developed a few Ruby on Rails apps with Rails 4
              <ul>
                <li>Built a search feature that uses elastic search for caching, type-ahead for the frontend search, sidekiq for
            asynchronous requests to an external oData API endpoint.</li>
                <li>Designed an enrollment system that uses web sockets and a Redis instance to communicate between the
            client and a biometric device.</li>
                <li>Rewrote a large time and attendance application that implemented ’Uncle Bobs Clean Architecture’ to improve
            code readability, design, and performance.</li>
                <li>Used Fitnesse for integration tests and rspec for unit tests.</li>
                <li>Created a web app to assist a hospital research breast cancer survivors by recording their nutrition, exercise
            activities and weight via an integration with Fitbit. Also integrated with Twilio to provide coaches with
            outbound calling to reach participants in the study.</li>
              </ul>
            </div>
            <div>
              <span className='cv-item'>Oct 2012 - May 2014, </span>
              <span className='cv-item cv-item__position'>DoT/Ruby on Rails Developer, </span>
              <span className='cv-item'>HRAnswerlink</span>
            </div>
            <div className='cv-content'>
              Managed everything tech related and developed Ruby on Rails apps with Rails 2 & 3
              <ul>
                <li>Created a tech team handling all the interviews.</li>
                <li>Designed new and refactored old Ruby on Rails apps.</li>
                <li>Implemented best security practices for both EC2 and Linode servers</li>
                <li>Used SQL in areas ORM was inefficient.</li>
                <li>Created RESTful APIs</li>
                <li>Implemented SAML/oAuth2 for SSO</li>
              </ul>
            </div>
            <div>
              <span className='cv-item'>Apr 2011 - Oct 2012, </span>
              <span className='cv-item cv-item__position'>Java Developer, </span>
              <span className='cv-item'>HRAnswerlink</span>
            </div>
            <div className='cv-content'>
                Some enjoyable challenges:
                <ul>
                  <li>Integrated various third party software into a PaaS called Rollbase via SOAP and REST. One such extension
                      was an API called HAPI that implemented the HL7 format for transmitting patient information.</li>
                  <li>Created a multi-classloader to allow hotswapping and custom routing on the tomcat server to avoid downtime.</li>
                  <li>Began to create an automated integration process by mapping elements within an uploaded WSDL to fields
                      within Rollbase and generating the code dynamically. Informed the developer of Rollbase which later implemented it into its core.</li>
                  <li>Greatly improved a client’s ability to do payroll by allowing them to do updates in a excel like fashion via
                      AJAX through a jQuery plugin called Datatables.</li>
                </ul>
            </div>
            <div>
              <span className='cv-item'>2010 - 2011, </span>
              <span className='cv-item cv-item__position'>Student, </span>
              <span className='cv-item'>Indiana University Southeast</span>
            </div>
            <div className='cv-content'>
            Fun times:
            <ul>
              <li>Teacher assistant for Python, Java, and C++ classes.</li>
              <li>Created a benchmarking application using the QT framework that tested string matching algorithms Boyer
            Moore, Knuth Morris Pratt, and my own variant of the two.</li>
              <li>Ported a ’minesweeping’ program to QT that consisted of artificial neural networks and a genetic algorithm.</li>
              <li>Researched implementation methods for finding epistasis (genes phenotypes masking other genes).</li>
              <li>Helped a colleague port an X80Pro Robot ActiveX Library to Java so other students in the university could
                  enjoy working with the Robots without the need to learn ActiveX. I then created an Android app to remotely
                  control the robots.</li>
              <li>Competed in the ACM competition.</li>
             </ul>
           </div>
           <div>
             <span className='cv-item'>∞, </span>
             <span className='cv-item cv-item__position'>Contributor, </span>
             <span className='cv-item'>Open Source</span>
           </div>
           <div className='cv-content'>
           Contributed to various projects:
           <ul>
             <li>Farseer Physics Engine</li>
             <li>Rails</li>
             <li>Rack</li>
             <li>LibGDX</li>
             <li>client_side_validations</li>
             <li>RubyXL</li>
           </ul>
         </div>
       </div>
        );
    }
});

module.exports = Experience;
