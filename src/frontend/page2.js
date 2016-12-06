import * as ghostwriter from 'ghostwriter-apptool';
import DocumentMeta from 'react-document-meta';

export default class Page2 extends React.Component {

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
          canonical="https://ghostwriter-example.process.space/page2"
          title="Page 2 | Ghostwriter Example"
          description="Ut wisi enim ad minim veniam..."
        />
        <div><img src="http://i.giphy.com/26BRqlh5iohZRCnVm.gif"/></div>
        <div>Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</div>
      </div>
    );
  }
};
