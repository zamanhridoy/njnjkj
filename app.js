const name = ''
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=${strMeal}')
.then(res => res.json())
.then(data => console.log)