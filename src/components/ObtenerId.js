import { useParams } from "react-router-dom";
import Article from "./Article";

const withRouter = WrappedComponent => props => {
    const params = useParams();
  
    return (
      <WrappedComponent
        {...props}
        params={params}
      />
    );
  };
  export default withRouter(Article);