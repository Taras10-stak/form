$('#save').click(function () {
   let name = $('#name').val();
   let surname = $('#surname').val();




   console.log(name[0] + surname[0]);
   
   $('#photo').text(name[0] + surname[0]);
   $('#photo').css('backgroundColor', getrandomcolor());

   if (!name) {
      
      $('#unname').css('display', 'flex');
      $('#photo').text('');
      $('#photo').css('backgroundColor', 'white');
   } 
   if (!surname) {
      
      $('#unsurname').css('display', 'flex');
      $('#photo').text('');
      $('#photo').css('backgroundColor', 'white');
   } 
   
})

let palitra = ['orange', 'green', 'red', 'yellow'];

function getrandomcolor () {
   
   return palitra[Math.floor(Math.random() * palitra.length)];
   
}
console.log(getrandomcolor());

$('#clean').click(function () {
   
   $('#photo').text('');
   $('#photo').css('backgroundColor', 'white');

   $('#name').val('');
   $('#surname').val('');

   $('#unname').css('display', 'none');
   $('#unsurname').css('display', 'none');
})



