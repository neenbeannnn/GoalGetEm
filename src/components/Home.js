import React from 'react';
import NavBar from './NavBar';
import { Person } from 'styled-icons/material/Person';
import '../styles/Home.scss';

const hobbies = [
    {
        label: 'Exercise',
        goals: [
            'Hit the gym 3 times a week',
            'Stretch every morning',
        ],
        people: ['', '', '']
    },
    {
        label: 'Improve diet',
        goals: [
            'Eat less processed food',
            'Drink a cup of water before every meal'
        ],
        people: ['', '', '', '', '', '']
    },
    {
        label: 'Reading',
        goals: [
            'Read a new book every month'
        ],
        people: ['', '']
    },
    {
        label: 'Sudoku',
        goals: [
            'Do 30 minutes of Sudoku puzzles a day'
        ],
        people: ['', '', '', '']
    },
    {
        label: 'Improving relationships',
        goals: [
            'Reach out to a friend',
            'Send a text of appreciation to a friend'
        ],
        people: ['', '', '', '']
    },
    {
        label: 'Meet new people',
        goals: [
            'Go to a social event this week',
            'Say hi to a random person',
            'Ask someone how their day is'
        ],
        people: ['', '', '']
    },
    {
        label: 'Improve grades',
        goals: [
            'Set aside a certain amount of time for studying',
        ],
        people: ['', '', '', '', '', '', '']
    },
    {
        label: 'Better mental health',
        goals: [
            'Say a positive affirmation each day',
            'Allow yourself an hour of relaxation',
            'Spend less time on social media'
        ],
        people: ['', '', '']
    },
    {
        label: 'Reduce stress',
        goals: [
            'Take frequent breaks when working'
        ],
        people: ['', '', '', '', '']
    }
];

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCard: ''
        }
    }

    render() {
        return (
            <div className='home-container'>
                <NavBar
                    currentPage='home'
                />
                <h1 className='home-quote'>"let's do this together!"</h1>
                <div className='home-body'>
                    <section className='hobby-list'>
                        {hobbies.map((element, i) => {
                            return (
                                <div className='hobby-card' key={i} onClick={() => this.setState({ selectedCard: element.label })}>
                                    {element.label}
                                </div>
                            );
                        })}
                    </section>
                    <section className='hobby-info'>
                        {this.state.selectedCard ?
                            <h2>Goal: {hobbies.find((hobby, i) => hobby.label === this.state.selectedCard).label}</h2>
                            : ''
                        }
                        <br />
                        {this.state.selectedCard ? <h4>Weekly challenges</h4> : ''}
                        {this.state.selectedCard ? <hr /> : ''}
                        <ul>
                            {this.state.selectedCard ?
                                hobbies.find((hobby, i) => hobby.label === this.state.selectedCard).goals.map((goalElement, i) => {
                                    return (
                                        <li key={i}>{goalElement}</li>
                                    );
                                }) :
                                <h2> Select a goal to learn more about it</h2>
                            }
                        </ul>
                        <section className='people-info'>
                            <br />
                            {this.state.selectedCard ?
                                <h4>Weekly Participation</h4> : ''
                            }
                            {this.state.selectedCard ?
                                hobbies.find((hobby, i) => hobby.label === this.state.selectedCard).people.map((people, i) => {
                                    return (<Person key={i} size='20px' color='#FFFFFF' />);
                                })
                                : ''

                            }
                        </section>
                    </section>
                </div>
            </div >
        );
    }
}

export default Home;