import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

const Stats = () => {
    const percentage = 66;

    return (
        <section>
            <CircularProgressbar value={percentage} text={`${percentage}%`}></CircularProgressbar>
            <div>
                <h3>Budget:</h3>
                <h3>Remaining:</h3>
                <h3>Spent:</h3>
            </div>
        </section>
    )
}

export default Stats;