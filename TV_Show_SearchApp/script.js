const button = document.querySelector('button');
const input = document.querySelector('input');
const form=document.querySelector('form');

form.addEventListener('submit', async function (e){
    e.preventDefault();
    const searchInp = form.elements.query.value;
    form.elements.query.value = '';

    const res = await axios.get(`http://api.tvmaze.com/search/shows?q=${searchInp}`)
    //console.log(res.data[0].show.image.medium);
    makeImages(res.data);

})

const makeImages = (shows) => {
    
    for(let result of shows){
        if (result.show.image) {
            //console.log(result);
            const img = document.createElement('img');

            img.src = result.show.image.medium;
            document.body.append(img);   
        }

    }
}
