
const resultdiv = document.querySelector('#result')
const srearch = document.querySelector('#srearch')
const submit = document.querySelector('#submit')
const fromSearch = document.querySelector('#fromSearch')


submit.addEventListener("click", function(){
    resultdiv.innerHTML = ''
    let searchResule = srearch.value;
    Sraechvideolist(searchResule)
})


function Sraechvideolist(searchResule){
   
    fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&key=AIzaSyAJQPREpPFXShvlgistOdIildgx62JAGfw&type=video&q=${searchResule}`)
    
    .then((data) => {
      console.log(data);
      return data.json();
    })
    .then((mainData) => {
        console.log(mainData);
        const item = mainData.items;

        [...item].forEach(item => {
            result = `
            <div class='col-12 card p-3 mt-3'>
               <div class='row'>
                    <div class='col-12'>
                    <iframe width="100%" height="415" src="https://www.youtube.com/embed/${item.id.videoId}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div> 
                    <div class='col-12 my-2'>
                        <p> ${item.snippet.title} </p>
                    </div> 
               </div>
            </div>`
        resultdiv.innerHTML += result
        })

    })
 }
//  Sraechvideolist()



