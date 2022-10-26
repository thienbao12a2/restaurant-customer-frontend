import React from "react";
import { Functions } from "../lib";
import moment from "moment-timezone";

class Fields extends React.Component {
  state = {
    name: "",
    phoneNumber: "",
    email: "",
    type: "",
    message: "",
    submitted: false,
    filled: false,
  };
  onSubmit = (event) => {
    const { name, phoneNumber, email, type, message } = this.state;
    const { API_PostRequest } = Functions;
    event.preventDefault();
    this.setState({ submitted: true });
    if (
      this.state.name &&
      this.state.phoneNumber &&
      this.state.email &&
      this.state.type
    ) {
      const response = API_PostRequest.onContactRestaurant({
        name,
        phone_number: phoneNumber,
        email,
        event_type: type,
        message,
        timeStamp: moment().toISOString(),
        read: false,
      });
      console.log(response);
      this.setState({ filled: true });
    }
  };
  render() {
    return (
      <section className="contactformbar py-110">
        <div className="container">
          <h4 className="text-default text-center mb-2 text-uppercase">
            Looking to have an event?
          </h4>
          <p className="text-gray text-center mb-5">
            Fill out this form below and we'll get right back to you!
          </p>
          <div className="contact-form">
            <form className="formreply">
              <div className="row mx-0">
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      aria-describedby="emailHelp"
                      placeholder="Name*"
                      value={this.state.name}
                      onChange={(event) =>
                        this.setState({ name: event.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="Email*"
                      value={this.state.email}
                      onChange={(event) =>
                        this.setState({ email: event.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="number"
                      className="form-control"
                      id="email"
                      placeholder="Phone number*"
                      value={this.state.phoneNumber}
                      onChange={(event) =>
                        this.setState({ phoneNumber: event.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="mb-3">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      placeholder="Type Of Events*"
                      value={this.state.type}
                      onChange={(event) =>
                        this.setState({ type: event.target.value })
                      }
                    />
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-3 ">
                    <textarea
                      className="form-control"
                      placeholder="Message"
                      value={this.state.message}
                      onChange={(event) =>
                        this.setState({ message: event.target.value })
                      }
                    ></textarea>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="mb-0 text-center btnsubmit">
                    <button
                      className="book-btn btn-font"
                      onClick={this.onSubmit}
                    >
                      Submit
                    </button>
                    <p>
                      {this.state.submitted
                        ? this.state.filled
                          ? "We will be in touch shortly!"
                          : "Please fill out the form."
                        : ""}
                    </p>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

export default Fields;
