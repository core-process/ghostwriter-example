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
          canonical="https://ghostwriter-example.process.space/page1"
          title="Page 1 | Ghostwriter Example"
          description="Duis autem vel eum iriure dolor..."
        />
        <div><img src="http://i.giphy.com/6nuiJjOOQBBn2.gif"/></div>
        <div>Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.</div>
      </div>
    );
  }
};
