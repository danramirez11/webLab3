import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Stats.css';

interface StatsProps {
    stats: {
        total: number,
        spent: number
    }
}

const Stats = ({stats}: StatsProps) => {
    const { total, spent } = stats;
    const percentage = (spent/total) * 100;

    const graphicStyle = {
        pathColor: `#d01f89`,
        textColor: '#d01f89',
    }

    return (
        <section className='stats'>
            <CircularProgressbar 
            maxValue={total}
            value={spent} 
            text={`${percentage.toFixed(0)}%`} 
            styles={buildStyles(graphicStyle)}
            ></CircularProgressbar>
            <div>
                <h3>Budget: ${total}</h3>
                <h3>Remaining: ${total - spent}</h3>
                <h3>Spent: ${spent}</h3>
            </div>
        </section>
    )
}

export default Stats;