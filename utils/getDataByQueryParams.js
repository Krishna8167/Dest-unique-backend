export const getDataByQueryParams = (data, queryObj) => {

  const { continent, country, is_open_to_public } = queryObj
  /* 
    const continent = queryObj.continent
    const country = queryObj.country
    const is_open_to_public = queryObj.is_open_to_public
  */

  if (continent) {
    data = data.filter( destination => 
      destination.continent.toLowerCase() === continent.toLowerCase() 
    )
  }

  if (country) {
    data = data.filter( destination => 
      destination.country.toLowerCase() === country.toLowerCase() 
    )
  }

  if (is_open_to_public) {
    data = data.filter( destination => 
        destination.is_open_to_public === JSON.parse(is_open_to_public.toLowerCase())
    )
  }

  return data
} 