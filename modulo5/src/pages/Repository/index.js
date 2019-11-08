import React, { Component } from 'react';
import api from '../../servises/api';

class Repository extends Component {
  state = {
    repository: {},
    issues: [],
    loading: true,
  };

  async componentDidMount() {
    const { match } = this.props;

    const repoName = decodeURIComponent(match.params.repository);

    const [repository, issues] = await Promise.all([
      api.get(`/repos/${repoName}`),
      api.get(`/repos/${repoName}/issues`, {
        params: {
          state: 'open',
          per_page: 5,
        },
      }),
    ]);

    this.setState({
      repository: repository.data,
      issues: issues.data,
      loading: false,
    });
    console.log(repository);
    console.log(issues);
  }

  render() {
    const { repository, issues, loading } = this.state;

    return <h1>FDS</h1>;
  }
}

export default Repository;
