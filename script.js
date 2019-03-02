// do not have to use jquery for every aspect of code just make sure you are using some 


//on page onload get the cursor to go insid the name first.
const name = $('#name').focus();// grab the name in the html doc,start cursor in box



//need to have a text field pop when 'other' is selected
//need a click event handler, when other is clicked. 



const textBoxForOther = $('#otherText').hide();//hide the text box until other is clicked

//const $selectOther = $("#title").val('full-stack js developer');

//var $selectOther = $("#otherTextBox");// selects the 'other' value in the html doc

var textSelector = $("[id = textBox]");

$("[id = textBox]").on('click',function(){
    textBoxForOther.show();
});









// $("#title #textBox").click(function(){
//     $("#otherText");textBoxForOther.show();
// });




// $selectOther.on('click', function(event){
   
//     $selectOther.event.target;
//       if ($selectOther){
//        textBoxForOther.show();
  
//       }else{
//           textBoxForOther.hide();
//       }
      
//     });
    
  

    
        // $("#otherTextBox").click(function(){
        //     textBoxForOther.show();
        // });













        // $("#title :selected").val('other').click(function(){
        //     alert('clicked');
        //     textBoxForOther.show();
        // });
      