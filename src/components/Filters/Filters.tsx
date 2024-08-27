const Filters = ({onFilter}) => {

    const handleChange = (e) => {
        onFilter(e.target.value)
    }

    return (
        <section>
            <form action="">
                <label htmlFor="filter">Filter categories</label>
                <select onChange={handleChange} name="filter" id="">
                    <option value="all">All</option>
                    <option value="food">Food</option>
                    <option value="entertainment">Entertainment</option>
                    <option value="clothing">Clothing</option>
                    <option value="rent">Rent</option>
                    <option value="other">Other</option>
                </select>
            </form>
        </section>
    )
}

export default Filters