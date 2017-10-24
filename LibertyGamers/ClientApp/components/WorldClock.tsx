import * as React from "react";

interface WorldClockProps {
    timerId: number
}
interface WorldClockState {
    date: any
}

export class WorldClock extends React.Component<WorldClockProps, WorldClockState> {
    state = {
        date: (new Date()).toLocaleTimeString
    }
    public componentDidMount() {
        
    }
    public render() {
        return <div className="lg-worldClock">

        </div>
    }
}