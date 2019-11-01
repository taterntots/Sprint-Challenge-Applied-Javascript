// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

entryPoint = document.querySelector('.header-container');
entryPoint.appendChild(Header());

function Header() {
    const headerPage = document.createElement('div');
    headerPage.classList.add('header');

    const date = document.createElement('span');
    date.classList.add('date');
    date.textContent = 'March 28, 2019';
    headerPage.appendChild(date);

    const paperTitle = document.createElement('h1');
    paperTitle.textContent = 'Lambda Times';
    headerPage.appendChild(paperTitle);

    const temp = document.createElement('span');
    temp.classList.add('temp');
    temp.textContent = '98°';
    headerPage.appendChild(temp);

    return headerPage;
}
