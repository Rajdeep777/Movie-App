const validateRequest = (req, res, next) => {
    // Validate data
    const { name, year, imdb, genre, imageUrl, fullhd, ultrahd, fullhdbtn, ultrahdbtn} = req.body
    let errors = []
    let currYear = new Date().getFullYear()    
    if (!name || name.trim() == '') {
      errors.push('Name is required')
    }
    if (!genre || genre.trim() == '') {
      errors.push('Genre is required')
    }
    if (!year || year < 1950 || year > currYear) {
      errors.push('Year should be between 1950 to present year')
    }
    if (!imdb || parseFloat(imdb) < 1 || imdb > 10) {
      errors.push('imdb must be between 1 to 10')
    }
    try {
      const validUrl = new URL(imageUrl)
    } catch (error) {
      errors.push('Invalid image URL')
    }
    if (!fullhdbtn || parseFloat(fullhdbtn) < 1) {
      errors.push('FHD Size must be a positive value')
    }
    if (!ultrahdbtn || parseFloat(ultrahdbtn) < 1) {
      errors.push('UHD Size must be a positive value')
    }
    try {
      const validUrl = new URL(fullhd)
    } catch (error) {
      errors.push('Invalid Full HD donwload link')
    }
    try {
      const validUrl = new URL(ultrahd)
    } catch (error) {
      errors.push('Invalid Ultra HD donwload link')
    }
    if (errors.length > 0) {
      return res.render('new-product', {
        errorMessage: errors[0]
      })
    }
    next()
}
export default validateRequest