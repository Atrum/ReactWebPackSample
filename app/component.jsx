import React from 'react'
import ReactDOM from 'react-dom'
import Rx from 'rx'

var dummyService = {
  fetchData() {
    return [2000, 1000,3000,200,300];
  }
}

var Component = React.createClass({
  componentDidMount() {
    Rx.Observable.interval(this.props.interval)
      .select(i => Math.floor(Math.random() * 100) + 1  )
      .subscribe(i => this.setState({
        value: i
      }));
  },
  getInitialState() {
    return {
      value: 0
    }
  },
  render() {
    return <div ref="myDiv" className="btn btn-success col-xs-2">
      <h1>{this.state.value}</h1>
    </div>;
  }
});

var Components = React.createClass({
  getAllValues() {
    return dummyService.fetchData().map(i =>
      <div key={i}>
        <Component interval={i} />
      </div>);
  },
  render() {
    return <div className="container">
      <div className="row">
        {this.getAllValues()}
      </div>
    </div>
  }
});

var element = <div className="container">
  <div className="row">
    <div className="col-md-6">
      <Components></Components>
    </div>
  </div>
</div>;

ReactDOM.render(element, document.getElementById("main"));