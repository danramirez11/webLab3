import './ResetButton.css'

interface ResetButtonProps {
    onReset: () => void
}

const ResetButton = ({onReset}: ResetButtonProps) => {
    return (
        <button className='resetBtn' onClick={onReset}>Reset</button>
    );
}

export default ResetButton;