// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

axios.get('https://lambda-times-backend.herokuapp.com/topics')
    .then(response => {
        console.log(response);
        response.data.topics.forEach(topic => {
            console.log(topic);
            const entryPoint = document.querySelector('.topics');
            const lambdaTab = tabCreator(topic);
            entryPoint.appendChild(lambdaTab);
        })
    })
    .catch(error => {
        console.log('Why does god hate me?', error);
    })


function tabCreator(object) {
    const newTab = document.createElement('div');
    newTab.classList.add('tab');
    newTab.textContent = object;

    return newTab
}