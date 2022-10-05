import Clock from "./Clock";

export default function ClockList({quantities = []}) {
    return (
        <div>
            {quantities.map(clock => <Clock key={Math.random()} />)}
        </div>
    );
}