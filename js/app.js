'use strict';



const ajaxSettings = {
    method:'get',
    datatype: 'json'
}
$.ajax('./data/page-1.json',ajaxSettings)
    .then(data => {
        data.forEach((val,idx)=>{
            let animals = new Animals(val.image_url,val.title,val.description,val.keyword,val.horns);
             animals.render();
        })
    })

// $("#photo-name")

let arr=[];
function Animals (imageUrl,title,description,keyword,horns){
    this.imageUrl=imageUrl;
    this.title=title;
    this.description=description;
    this.keyword=keyword;
    this.horns=horns;
    arr.push(this);
}
let arrayAnimal=[];
Animals.prototype.render=function(){
    if(arrayAnimal.includes(this.keyword)){
    }
    else{
        let optEl=`<option>${this.keyword}</option>`;
        $("#photo-name").append(optEl);
    }
    arrayAnimal.push(this.keyword);
    $('#gallery').append(`<div>
    <h4>${this.title}</h4>
    <img src="${this.imageUrl}">
    <p>${this.description}</p>
    </div>`);
}

$("#photo-name").on('click',function(){
    // console.log(event.target.value);
    let arrayCheck=[];
    for(let i in arr){
        if(arr[i].keyword===event.target.value){
            arrayCheck.push(arr[i]);
            // console.log(arr[i].keyword);
            
        }
    }
    $('#gallery').text(``);
   for(let i in arrayCheck){ 
    $('#gallery').append(`<div>
    <h4>${arrayCheck[i].title}</h4>
    <img src="${arrayCheck[i].imageUrl}">
    <p>${arrayCheck[i].description}</p>
    </div>`)
}

if (event.target.value==="") {
    for(let i in arr){ 
        $('#gallery').append(`<div>
        <h4>${arr[i].title}</h4>
        <img src="${arr[i].imageUrl}">
        <p>${arr[i].description}</p>
        </div>`)
    }
    
            
        }
});
