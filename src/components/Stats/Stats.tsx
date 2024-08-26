import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Stats = ({stats}) => {
    const { total, spent } = stats;
    const percentage = (spent/total) * 100;

    return (
        <section>
            <CircularProgressbar value={spent} text={`${percentage.toFixed(0)}%`} maxValue={total}></CircularProgressbar>
            <div>
                <h3>Budget: ${total}</h3>
                <h3>Remaining: ${total - spent}</h3>
                <h3>Spent: ${spent}</h3>
            </div>
        </section>
    )
}

export default Stats;