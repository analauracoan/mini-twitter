import PropTypes from "prop-types";
 
export const Public = ({ children }) => <>{children}</>;

Public.propTypes = {
    children: PropTypes.node,
};