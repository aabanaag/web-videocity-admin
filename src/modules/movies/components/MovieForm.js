import React, { PureComponent } from 'react';
import { func, object } from 'prop-types';
import {
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Col
} from 'react-bootstrap';
import { Link } from 'react-router';
import Tokenfield from 'tokenfield';
import { isEmpty, result } from 'lodash';

class MovieForm extends PureComponent {
  static propTypes = {
    saveForm: func,
    movie: object
  }

  constructor(props) {
    super();

    this.state = {
      title: '',
      director: '',
      year: '',
      genre: [],
      cast: [],
      plot: '',
      poster: '',
      _id: ''
    };
  }

  componentDidMount() {
    this.renderGenre();
    this.renderCast();
  }

  componentDidUpdate(prevProps) {
    if(prevProps.movie !== this.props.movie) {
      let movie = Object.assign({}, this.state, {
        ...this.props.movie
      });
      this.setState({...movie});

      this.title.value = movie.title;
      this.director.value = movie.director;
      this.year.value = movie.year;
      this.plot.value = movie.plot;
      this.poster.value = movie.poster;

      this.genre.setItems(movie.genre.map((genre, i) => {
        return {
          id: i,
          name: genre
        }
      }));

      this.cast.setItems(movie.cast);
    }
  }

  renderGenre() {
    this.genre = new Tokenfield({
      el: document.getElementById('genre-tokenfield')
    });

    this.genre.on('addedToken', (res, token) => {
      let genre = this.state.genre;
      genre.push(token.name);
      this.setState({ genre });
    });

    this.genre.on('removeToken', (res, token) => {
      let genre = this.state.genre;
      let index = genre.indexOf(token.name);
      genre.splice(index, 1);
      this.setState({ genre });
    });
  }

  renderCast() {
    this.cast = new Tokenfield({
      el: document.getElementById('cast-tokenfield')
    });

    this.cast.on('addedItem', (res, token) => {
      let cast = this.state.cast;
      cast.push({
        name: token.name,
        role: ''
      });
      this.setState({ cast });
    });

    this.cast.on('removeItem', (res, token) => {
      let cast = this.state.cast;
      let index = cast.indexOf(token.name);
      cast.splice(index, 1);
      this.setState({ cast });
    });
  }

  handleSubmit = (e) => {
    e.preventDefault();

    this.props.saveForm(this.state);
  }

  render() {
    return (
      <Form className="movie-form-component" onSubmit={this.handleSubmit} horizontal>
        <FormGroup bsSize="lg">
          <Col componentClass={ControlLabel} xs={12} sm={4} md={3} lg={3}>
            Title
          </Col>
          <Col xs={12} sm={8} md={9} lg={9}>
            <FormControl type="text" inputRef={ref => {this.title = ref; }} onChange={i => this.setState({ title: i.target.value })} />
          </Col>
        </FormGroup>
        <FormGroup bsSize="lg">
          <Col componentClass={ControlLabel} xs={12} sm={4} md={3} lg={3}>
            Director
          </Col>
          <Col xs={12} sm={8} md={9} lg={9}>
            <FormControl type="text" inputRef={ref => {this.director = ref; }} onChange={i => this.setState({ director: i.target.value })} />
          </Col>
        </FormGroup>
        <FormGroup bsSize="lg">
          <Col componentClass={ControlLabel} xs={12} sm={4} md={3} lg={3}>
            Year
          </Col>
          <Col xs={12} sm={8} md={9} lg={9}>
            <FormControl type="text" inputRef={ref => {this.year = ref; }} onChange={i => this.setState({ year: i.target.value })} />
          </Col>
        </FormGroup>
        <FormGroup bsSize="lg">
          <Col componentClass={ControlLabel} xs={12} sm={4} md={3} lg={3}>
            Plot
          </Col>
          <Col xs={12} sm={8} md={9} lg={9}>
            <FormControl componentClass="textarea" inputRef={ref => {this.plot = ref; }} onChange={i => this.setState({ plot: i.target.value })} />
          </Col>
        </FormGroup>
        <FormGroup bsSize="lg">
          <Col componentClass={ControlLabel} xs={12} sm={4} md={3} lg={3}>
            Poster Url
          </Col>
          <Col xs={12} sm={8} md={9} lg={9}>
            <FormControl type="text" inputRef={ref => {this.poster = ref; }} onChange={i => this.setState({ poster: i.target.value })} />
          </Col>
        </FormGroup>
        <FormGroup bsSize="lg">
          <Col componentClass={ControlLabel} xs={12} sm={4} md={3} lg={3}>
            Genre
          </Col>
          <Col xs={12} sm={8} md={9} lg={9}>
            <FormControl type="text" id="genre-tokenfield" />
          </Col>
        </FormGroup>
        <FormGroup bsSize="lg">
          <Col componentClass={ControlLabel} xs={12} sm={4} md={3} lg={3}>
            Cast
          </Col>
          <Col xs={12} sm={8} md={9} lg={9}>
            <FormControl type="text" id="cast-tokenfield" />
          </Col>
        </FormGroup>
        <Link to='/movies' className="btn btn-danger btn-lg pull-right">Cancel</Link>
        <Button bsStyle="success" bsSize="lg" type="submit" className="pull-right">Save</Button>
      </Form>
    )
  }
}

export default MovieForm;