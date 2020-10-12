const searchForm = document.querySelector('form');
const searchResultDiv = document.querySelector('.search-result');
const container = document.querySelector('.container');
let value = 0;
const button = document.getElementById('proximo');
let searchQuery = 'food';
const AppId = '8bddf8f9';
const App_key = '370bd1fa522357364f814d55bfe3dc8d'
const baseUrl = ''
searchForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    searchQuery = e.target.querySelector('input').value;
    fetchApi()
})
async function fetchApi(){
const baseURL = `https://api.edamam.com/search?q=${searchQuery}&app_id=${AppId}&app_key=${App_key}&from=10&to=20`;
const response = await fetch(baseURL)
const data = await response.json();
console.log(data)
generateHTML(data.hits);

console.log(data.hits);

}
async function generateHTML(results){
    let  generatedHTML = '';
    results.map((result) =>{

      generatedHTML += `  <div class="item">
      <img src="${result.recipe.image}" alt="food">
      <div class="flex-container">
          <h1 class="title">${result.recipe.label}</h1>
          <a class="view-button" href="${result.recipe.url}">View Recipe</a>
      </div>
      <p class="item-data">Calories:${result.recipe.calories.toFixed(2)}</p>
      
      <p class="item-data">Health Label:${result.recipe.healthLabels}</p>
  </div>
</div> `
    })
    searchResultDiv.innerHTML = generatedHTML;
}

