import { useParams } from "react-router-dom";
import Search from "./Search";

const withRouter = WrappedComponent => props => {
    const params = useParams();
  
    return (
      <WrappedComponent
        {...props}
        params={params}
      />
    );
  };
  export default withRouter(Search);
