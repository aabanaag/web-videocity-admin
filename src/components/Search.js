import React, { PureComponent } from 'react';
import { func } from 'prop-types';
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
    search: func
  }

  handleClick = (e) => {
    e.preventDefault();

    this.props.search(this.state.search);
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
                onClick={this.handleClick}>
                SEARCH
              </Button>
            </InputGroup.Button>
          </InputGroup>
        </FormGroup>
      </Form>
    )
  }
}

export default Search;