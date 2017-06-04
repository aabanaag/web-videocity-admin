import React, { PureComponent } from 'react';
import { func } from 'prop-types';
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
    add: func
  }

  handleSearch = (e) => {
    e.preventDefault();

    this.props.search(this.state.search);
  }

  handleAdd = (e) => {
    e.preventDefault();

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
            <InputGroup.Button>
              <Link to="/movies/add" className="btn btn-danger btn-lg">
                <i className="fa fa-plus"></i>
              </Link>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </Form>
    )
  }
}

export default Search;