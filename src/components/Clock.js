import React from "react";
import Button from "./Button";

class Clock extends React.Component {

    state = {date: new Date(), locale: 'bn-BD'};

    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    handleClick = (locale) => {
        this.setState({
            locale
        });
    }

	render() {
        const {date, locale} = this.state;
        let toggleLocale = (locale === 'bn-BD') ? 'en-Us' : 'bn-BD';
        
		return (
            <>
                <h1 className='head'>
                    <span className='text'>Time now: {date.toLocaleTimeString(locale)}</span>
                </h1>
                <Button change={this.handleClick} locale={toggleLocale} enable={true}/>
            </>
		)
	}
}

export default Clock;