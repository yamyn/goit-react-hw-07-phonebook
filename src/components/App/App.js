import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import styles from './App.module.css';
import slideTittleTransition from '../../transitions/slide-500ms.module.css';
import popTransition from '../../transitions/pop.module.css';

import Section from '../Section/Section';
import ContactsList from '../ContactsList/ContatctsListContainer';
import Filter from '../Filter/FilterContainer';
import CreateContactForm from '../CreateContactForm/CreateContactFormContainer';
import Alert from '../Alert/Alert';

export default class App extends Component {
    static propTypes = {
        alert: PropTypes.string.isRequired,
        count: PropTypes.number.isRequired,
    };

    state = {
        addTittle: false,
    };

    componentDidMount() {
        this.setState({
            addTittle: true,
        });
    }

    render() {
        const { addTittle } = this.state;
        const { alert, count } = this.props;
        const isAlert = !!alert;

        return (
            <div className={styles.container}>
                <CSSTransition
                    in={addTittle}
                    timeout={500}
                    classNames={slideTittleTransition}
                    unmountOnExit
                >
                    <h1>Phonebook</h1>
                </CSSTransition>

                <Section title="">
                    <CreateContactForm />
                </Section>
                <CSSTransition
                    in={count >= 2}
                    timeout={500}
                    classNames={popTransition}
                    unmountOnExit
                >
                    <Section title="">
                        <Filter />
                    </Section>
                </CSSTransition>

                <Section title="">
                    <ContactsList />
                </Section>

                <CSSTransition
                    in={isAlert}
                    timeout={300}
                    classNames={popTransition}
                    unmountOnExit
                >
                    <Alert message={alert} />
                </CSSTransition>
            </div>
        );
    }
}
