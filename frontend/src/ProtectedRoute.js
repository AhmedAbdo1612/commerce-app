import { Navigate } from "react-router-dom";
const ProtectedRoute = function({authenicated, children}){

    if(!authenicated){
        return <Navigate to={'/signin'} replace/>
    }
    return children
}
export default ProtectedRoute