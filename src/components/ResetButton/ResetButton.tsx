import './ResetButton.css'

const ResetButton = ({onReset}) => {
    return (
        <button className='resetBtn' onClick={onReset}>Reset</button>
    );
}

export default ResetButton;