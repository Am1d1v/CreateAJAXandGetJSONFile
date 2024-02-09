
// People's data json array
const localUrl = 'people.json'

const btn = document.querySelector('.btn');
const output = document.querySelector('.output')


// Event Lsiteners
//
btn.addEventListener('click', async(event) => {
    const localData = await fetch(localUrl);
    const data = await localData.json();
    console.log(data);
});



