import * as React from "react";
import * as jstz from "jstimezonedetect";
import * as moment from "moment";

interface WorldClockProps {}
interface WorldClockState {
    time: any
    timeZone: string
}

export class WorldClock extends React.Component<WorldClockProps, WorldClockState> {
    state ={
        time: new Date(),
        timeZone: jstz.determine().name()
    };
    private updateDate(): void {
        setInterval(() => {this.setState({
            time: new Date()
        })},
        60000);
    }

    public render() {
        this.updateDate();
        
        return <div className="lg-worldClock">
            <label>UTC: </label>
            {this.state.time.toUTCString()}
            <br />
            <label>Local: </label>
            {this.state.time.toLocaleTimeString()}
            
        </div>
    }
}

interface ClockProps{
    timezone: string,
    time: any,
    offset: number
}

class Clock extends React.Component<{}, {}> {
    public render() {
        return (
            <div className="lg-clock">
                
            </div>
        );
    }
}