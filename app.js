
// People's data json array
const localUrl = 'people.json'

const btn = document.querySelector('.btn');
const output = document.querySelector('.output')


// Event Lsiteners
// Fetch People's Data
btn.addEventListener('click', async(event) => {
    const localData = await fetch(localUrl);
    const data = await localData.json();

    // Show Data in DOM
    ShowInDOM(data);
});

//  Show Data in DOM
function ShowInDOM(data){
    output.innerHTML = '<h2>JSON Data</h2>';

    data.forEach((element) => {
        output.innerHTML += `<p>${element.name.first} ${element.name.last}</p>`;
    });
}



