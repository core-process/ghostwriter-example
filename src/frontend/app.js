import { Link } from 'react-router';

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="app">
        <div className="menu">
          <Link to="/">Home</Link>&nbsp;|&nbsp;
          <Link to="/page1">Page 1</Link>&nbsp;|&nbsp;
          <Link to="/page2">Page 2</Link>
        </div>
        {this.props.children}
      </div>
    );
  }
};
