import React from 'react'

const Contact = () => (
      <div className="container">

        <h1 className="mt-4 mb-3">Contact
          <small>Subheading</small>
        </h1>

        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <a href="index.html">Home</a>
          </li>
          <li className="breadcrumb-item active">Contact</li>
        </ol>

        <div className="row">
          <div className="col-lg-8 mb-4">
          </div>
          <div className="col-lg-4 mb-4">
            <h3>Contact Details</h3>
            <p>
              3481 Melrose Place
              <br />Beverly Hills, CA 90210
              <br />
            </p>
            <p>
              <abbr title="Phone">P</abbr>: (123) 456-7890
            </p>
            <p>
              <abbr title="Email">E</abbr>:
              <a href="mailto:name@example.com">name@example.com
              </a>
            </p>
            <p>
              <abbr title="Hours">H</abbr>: Monday - Friday: 9:00 AM to 5:00 PM
            </p>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-8 mb-4">
            <h3>Send us a Message</h3>
            <form name="sentMessage" id="contactForm">
              <div className="control-group form-group">
                <div className="controls">
                  <label>Full Name:</label>
                  <input type="text" className="form-control" id="name" required data-validation-required-message="Please enter your name." />
                  <p className="help-block"></p>
                </div>
              </div>
              <div className="control-group form-group">
                <div className="controls">
                  <label>Phone Number:</label>
                  <input type="tel" className="form-control" id="phone" required data-validation-required-message="Please enter your phone number." />
                </div>
              </div>
              <div className="control-group form-group">
                <div className="controls">
                  <label>Email Address:</label>
                  <input type="email" className="form-control" id="email" required data-validation-required-message="Please enter your email address." />
                </div>
              </div>
              <div className="control-group form-group">
                <div className="controls">
                  <label>Message:</label>
                  <textarea rows="10" cols="100" className="form-control" id="message" required data-validation-required-message="Please enter your message" maxLength="999"></textarea>
                </div>
              </div>
              <div id="success"></div>
              <button type="submit" className="btn btn-primary" id="sendMessageButton">Send Message</button>
            </form>
          </div>

        </div>

      </div>


)

export default Contact
