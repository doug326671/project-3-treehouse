// do not have to use jquery for every aspect of code just make sure you are using some 


//on page onload get the cursor to go insid the name first.
const name = $('#name').focus();// grab the name in the html doc,start cursor in box



//need to have a text field pop when 'other' is selected
//need a click event handler, when other is clicked. 



const textBoxForOther = $('#otherText').hide();//hide the text box until other is clicked

const $selectOther = $("#title").val('other');// selects the 'other' value in the html doc


$selectOther.on('click', function(event){
      
      if ('click'){
       textBoxForOther.show();
  
      }else{
          textBoxForOther.hide();
      }
      
    });
    
  