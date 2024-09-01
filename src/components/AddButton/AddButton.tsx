import './AddButton.css'

interface AddButtonProps {
    showPopup: boolean,
    onChangePop: () => void
}

const AddButton = ({showPopup, onChangePop}: AddButtonProps) => {
    return (
        <button className='addExpenseBtn'
            onClick={onChangePop}
            style={
                {
                    display: showPopup ? 'none' : 'block'
                }
            }>+</button>
    )
}

export default AddButton