import React, { PureComponent } from 'react';
import { func, bool } from 'prop-types';
import { Link } from 'react-router';
import {
  Form,
  FormGroup,
  FormControl,
  InputGroup,
  Button
} from 'react-bootstrap';

class Search extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      search: ''
    };
  }

  static propTypes = {
    search: func,
    logout: func,
    showTransaction: bool,
    showMovies: bool
  }

  handleSearch = (e) => {
    e.preventDefault();

    this.props.search(this.state.search);
  }

  handleLogout = (e) => {
    e.preventDefault();

    this.props.logout();
  }

  renderTransactionButton() {
    if (this.props.showTransaction) {
      return (
        <InputGroup.Button>
          <Link to="/transactions" className="btn btn-warning btn-lg">
            <i className="fa fa-film"></i> Transactions
          </Link>
        </InputGroup.Button>
      )
    } else return null;
  }

  renderMovieButton() {
    if (this.props.showMovies) {
      return (
        <InputGroup.Button>
          <Link to="/movies" className="btn btn-warning btn-lg">
            <i className="fa fa-film"></i> Movies
          </Link>
        </InputGroup.Button>
      )
    } else return null;
  }

  renderAddButton() {
    if (this.props.showTransaction) {
      return (
        <InputGroup.Button>
          <Link to="/movies/add" className="btn btn-danger btn-lg">
            <i className="fa fa-plus"></i>
          </Link>
        </InputGroup.Button>
      )
    } else return null;
  }

  render() {
    return (
      <Form className="search">
        <FormGroup bsSize="lg">
          <InputGroup>
            <FormControl type="text" onChange={i => this.setState({search: i.target.value})} />
            <InputGroup.Button>
              <Button
                bsStyle="success"
                bsSize="lg"
                onClick={this.handleSearch}>
                <i className="fa fa-search"></i>
              </Button>
            </InputGroup.Button>
            { this.renderAddButton() }
            { this.renderTransactionButton() }
            { this.renderMovieButton() }
            <InputGroup.Button>
              <Button
                bsStyle="info"
                bsSize="lg"
                onClick={this.handleLogout}>
                <i className="fa fa-sign-out"></i>
              </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </Form>
    )
  }
}

export default Search;