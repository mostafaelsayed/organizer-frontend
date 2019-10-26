import React from 'react';


class Calendar extends React.Component {
    render() {
        return <h1>Calendar Here, {this.props.date}</h1>;
    }
}

export default Calendar;