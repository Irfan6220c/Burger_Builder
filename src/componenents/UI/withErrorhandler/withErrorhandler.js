import React, { Fragment, Component } from "react";
import Modal from "../../UI/Modal/Modal";

const withErrorHandler = (Wrappedcomponent, axios) => {
  return class extends Component {
    state = {
      error: null,
    };

    componentWillMount() {
        axios.interceptors.request.use(req => {
            this.setState({ error: null });
            return req;
          });

      axios.interceptors.response.use(res => res, (error) => {
        this.setState({ error: error });
      });
    }

    clickHandler= () => {

        this.setState({error: null});
    }


    render() {
      return (
        <Fragment>
          <Modal show ={this.state.error} modalclosed={this.clickHandler}>
              {this.state.error ? this.state.error.message :null}
          </Modal>

          <Wrappedcomponent {...this.props} />
        </Fragment>
      );
    }
  };
};

export default withErrorHandler;
