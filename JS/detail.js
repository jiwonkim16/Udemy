// for(let i=0; i<3; i++){

//     $('.tab-button').eq(i).on('click', function(){
//       탭열기(i)
//   });

// }

$('.list').click(function(e){
//지금 누른 버튼에 숨겨져있는 data-id
    탭열기(e.target.dataset.id)
    console.log('e.target.dataset.id')
})

function 탭열기(a){
  $('.tab-button').removeClass('orange');
  $('.tab-button').eq(a).addClass('orange');
  $('.tab-content').removeClass('show');
  $('.tab-content').eq(a).addClass('show');
}
