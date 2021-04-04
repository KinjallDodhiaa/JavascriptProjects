const button = document.querySelector('button');
const input = document.querySelector('input');
const form = document.querySelector('form');
const section = document.querySelector('section');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const searchInp = form.elements.query.value;
    fetch(`http://api.tvmaze.com/search/shows?q=${searchInp}`)
    .then(response =>{
        if(response.status===200){
            response.json().then(data=>{
                console.log(data);
                form.elements.query.value='';
                section.innerHTML='';
                data.forEach(element =>{
                    const htmlRow = `
                         <img src="${element.show.image.medium}">`
                    section.innerHTML += htmlRow;

                })
            })
        }
    })
})