import { useParams } from "react-router-dom";
import EditArticle from "./EditArticle";

const withRouter = WrappedComponent => props => {
    const params = useParams();
  
    return (
      <WrappedComponent
        {...props}
        params={params}
      />
    );
  };
  export default withRouter(EditArticle);