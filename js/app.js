'use strict';

const ajaxSettings = {
  method: 'get',
  /* this ajax for get data from json file (page-1) */
  datatype: 'json'
}
// function name(params) {
$.ajax('./data/page-1.json', ajaxSettings)

  .then(data => {
    data.forEach((val, idx) => {
      let animals = new Animals(val.image_url, val.title, val.description, val.keyword, val.horns);
      animals.displayan();
      animals.fun2();
      console.log(idx);
    })

  });
// }
$('#page-1').on('click', () => {
  $('#gallery').text(``);
  $.ajax('./data/page-1.json', ajaxSettings)

    .then(data => {
      data.forEach((val, idx) => {
        let animals = new Animals(val.image_url, val.title, val.description, val.keyword, val.horns);
        animals.displayan();
        animals.fun2();
        console.log(idx);
      })
    })

})

/* this ajax for get data from json file (page-2) */
$('#page-2').on('click', () => {
  $('#gallery').text(``);

  $.ajax('./data/page-2.json', ajaxSettings)
    .then(data => {
      data.forEach((val, idx) => {
        let animals = new Animals(val.image_url, val.title, val.description, val.keyword, val.horns);
        animals.displayan();
        animals.fun2();
        console.log(idx);
      })
    })
})

// $("#photo-name")

let arr = [];
/* this constractur for take data from ajax and make object */
function Animals(imageUrl, title, description, keyword, horns) {
  this.imageUrl = imageUrl;
  this.title = title;
  this.description = description;
  this.keyword = keyword;
  this.horns = horns;
  arr.push(this);
}
/* this prototype for confor galleryvem the data to div  */
console.log(arr);
Animals.prototype.displayan = function () {
  let musTemplate = $('#animalsTemp').html();
  let newObj = Mustache.render(musTemplate, this);
  $('#gallery').append(newObj);
}

/* this prototype for fill the select with unique options */
var optionArrya = [];
Animals.prototype.fun2 = function () {
  let musTemplate2 = $('#addoptions').html();
  let newObj = Mustache.render(musTemplate2, this);
  if (!optionArrya.includes(this.keyword)) {
    optionArrya.push(this.keyword);
    $('#photo-name').append(newObj);
  }
  // console.log(optionArrya);
}

$('#photo-name').on('click', function () {
  console.log($('#photo-name').val());
  $('#gallery div').css('display', 'none');
  if (`${$('#photo-name').val()}` === `all`) {
    $('#gallery div').css('display', 'flex');

  }
  $(`.${$('#photo-name').val()}`).css('display', 'flex');
});




// $('#photo-name').on('click',function(){
//   console.log(event.target.value);
//   let arrayCheck=[];
//   for(let i in arr){
//     if(arr[i].keyword===event.target.value){
//       arrayCheck.push(arr[i]);
//       console.log(arr[i].keyword);

//     }
//   }
//   $('#gallery').text(``);
//   for(let i in arrayCheck){
//     $('#gallery').append(`<div>
//     <h4>${arrayCheck[i].title}</h4>
//     <img src="${arrayCheck[i].imageUrl}">
//     <p>${arrayCheck[i].description}</p>
//     </div>`)
//   }

//   if (event.target.value==='') {
//     for(let i in arr){
//       $('#gallery').append(`<div>
//         <h4>${arr[i].title}</h4>
//         <img src="${arr[i].imageUrl}">
//         <p>${arr[i].description}</p>
//         </div>`)
//     }


//   }
// });
