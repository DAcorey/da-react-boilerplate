// Import Dependencies
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

// Import Local Dependencies
import { exampleAction } from '../../redux/actions/exampleActions';

// Import Component
import App from './App';

// Create PropTypes
App.propTypes = {
    exampleAction: PropTypes.func.isRequired,
    exampleState: PropTypes.string.isRequired
};
  
// Maps States to Component Props
const mapStateToProps = state => ({
    exampleState: state.example.exampleState
});

// Export component w/ Redux State
export default connect(mapStateToProps, { exampleAction })(App);