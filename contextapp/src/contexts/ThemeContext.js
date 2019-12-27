import React, {createContext } from 'react';
import { connect } from 'react-redux';
class ThemeContextProvider extends Component {
    render() {
        return (
            <div></div>
         )
    }
}
const mapStateToProps = reduxStore => {
    return { reduxStore: reduxStore };
    }
export default connect(mapStateToProps)(ThemeContextProvider);