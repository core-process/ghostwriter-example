import * as ghostwriter from 'ghostwriter-apptool';
import DocumentMeta from 'react-document-meta';

export default class Page0 extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    ghostwriter.done('page');
  }

  render() {
    return (
      <div className="page">
        <DocumentMeta
          auto={{ ograph: true }}
          canonical="https://ghostwriter-example.process.space/"
          title="Welcome | Ghostwriter Example"
          description="Lorem ipsum dolor sit amet..."
        />
        <div><img src="http://i.giphy.com/ypqHf6pQ5kQEg.gif"/></div>
        <div>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</div>
      </div>
    );
  }
};
