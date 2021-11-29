import './index.css'

const FiltersGroup = props => {
  const {categoryOptions, ratingsList} = props
  const {name} = categoryOptions

  const onclickCategoryOne = () => {
    console.log(name)
  }

  return (
    <div className="filters-group-container">
      <p className="categoryaparagraph">category</p>
      <ul>
        {categoryOptions.map(each => (
          <li key={each.categoryId} className="list-itemone">
            <button
              className="butttoncategory"
              type="button"
              onClick={onclickCategoryOne}
            >
              {each.name}
            </button>
          </li>
        ))}
      </ul>
      <p className="categoryaparagraph">Rating</p>
      <ul>
        {ratingsList.map(eachone => (
          <li key={eachone.ratingId} className="list-itemone">
            <button className="butttoncategory" type="button">
              <img
                src={eachone.imageUrl}
                alt={eachone.ratingId}
                className="starimageone"
              />
            </button>
          </li>
        ))}
      </ul>
      <button type="button" className="clearfilterbutton">
        Clear Filters
      </button>
    </div>
  )
}
export default FiltersGroup
