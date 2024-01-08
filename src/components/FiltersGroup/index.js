import './index.css'

const FiltersGroup = props => {
  const {
    ratingsList,
    categoryOptions,
    takeSearchedCategory,
    takeRating,
    takeUserCategory,
    clearState,
  } = props
  // console.log(ratingsList[0])

  console.log(categoryOptions[0])
  const onSearchCategory = event => {
    takeSearchedCategory(event.target.value)
  }

  const clearAllfilters = () => {
    clearState()
  }

  return (
    <div className="filters-group-container">
      <h1>Category</h1>
      <input type="search" placeholder="Search" onChange={onSearchCategory} />
      <ul className="category-container">
        {categoryOptions.map(each => {
          const {categoryId} = each
          const onClickCategoryButton = () => {
            takeUserCategory(categoryId)
          }
          return (
            <li className="list-element">
              <p className="button" onClick={onClickCategoryButton}>
                {each.name}
              </p>
            </li>
          )
        })}
      </ul>
      <h1>Rating</h1>
      <ul className="rating-container">
        {ratingsList.map(each => {
          const {ratingId} = each

          const onClickRatingButton = () => {
            takeRating(ratingId)
          }
          return (
            <li className="list-rating">
              <button
                type="button"
                className="button-stars"
                onClick={onClickRatingButton}
              >
                <div className="button-images">
                  <img
                    src={each.imageUrl}
                    alt={`rating ${ratingId}`}
                    className="stars"
                  />
                  <p>& up</p>
                </div>
              </button>
            </li>
          )
        })}
      </ul>
      <button type="button" onClick={clearAllfilters}>
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
