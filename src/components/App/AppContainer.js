import { connect } from 'react-redux';

import { getContactsLength } from '../../redux/contacts/contactsSelectors';
import getAlert from '../../redux/alert/alertSelectors';

import App from './App';

const mapStateToProps = state => ({
    alert: getAlert(state),
    count: getContactsLength(state),
});

export default connect(mapStateToProps, null)(App);
