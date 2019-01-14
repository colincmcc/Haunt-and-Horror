import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';
import { Link } from 'react-router-dom';


class SearchBox extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postFilter: ""
    }
  }

  _executeSearch = async () => {
    // ... you'll implement this 🔜
  }

  handleChange = (e) => {
    this.setState({
      postFilter: e.target.value
    })
    this.props.onChange(e.target.value)
  }

  render() {
    const { movies } = this.state;
    return (
      <div>
        <div>
          Search
          <input
            type="text"
            onChange={e => this.setState({ filter: e.target.value })}
          />
          <button onClick={() => this._executeSearch()}>OK</button>
        </div>
        {movies.map((link, index) => (
          <Link key={link.id} link={link} index={index} />
        ))}
      </div>
    );
  }
}


export default withApollo(SearchBox);
