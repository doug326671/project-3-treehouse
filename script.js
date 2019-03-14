
//on page onload get the cursor to go insid the name first.
const name = $('#name').focus();// grab the name in the html doc,start cursor in box

const textBoxForOther = $('#otherText').hide();//hide the text box until other is clicked

// this will hide and unhide the text box when you click other 
$('#title').change(function(){
    var selected = $(this).val();// getting the value of what ever is clicked, storing it in selected
    if(selected == 'other'){ // checking selected to see if it matches other
        $('#otherText').show(); // showing text box if it matches
    }else{
        $('#otherText').hide(); // hiding it if it does not match
    }
});


/*
put a listener on the design portion and nothing will happen with the color till something is clicked 
if js puns is clicked then show certain shirt colors and if i heart js is clicked then show the other 
shirt colors. toggle between shirt colors depending on what is clicked.
*/
var colorActivate = $('#color').prop('disabled',true);// start off by disable the color drop down.
var selectAshirtTheme = $('#design').click(function(){ // choose the design id so it can listen for clicks
    var colorActivate = $('#color').prop('disabled',false);
    var selectedTheme = $(this).val(); // click on js puns or i heart js it will be stored in selected theme
    if(selectedTheme == 'js puns'){
        $('#color option:contains("JS shirt only")').toggle();  
    } else if(selectedTheme === 'heart js'){ 
        $('#color option:contains("JS Puns shirt only")').toggle();
    } else if(selectedTheme != 'heart js' && 'js puns'){ // if either of the options are selected disable color
        colorActivate.prop('disabled',true);
    }
});


/*
    need to listen for checkbox clicks, then need to get the content of whatever is in each differnet check boxes when checked, 
    then need to pull the first number out of each and compare it to something else that was clicked, i might 
    be able to make an array out of all the checkboxes then cycle through each one.
    'this' is acting like a variable 
    the match method will searchs a string for a match against a regular expression and returns the matches as array object
    The map() method creates a new array with the results of calling a function for every array element.
    The map() method calls the provided function once for each element in an array, in order.

*/
//the each will go through all the checkboxes and return them in an array
// var loopThroughAllCheckBoxes = $('input[type=checkbox]').click(function(){
//          var newArray = [];
//     selectRegisterForActivities = $(this)[0].nextSibling.nodeValue.match(/\d+/);//get the content of what is clicked,keeps making new array objects
//     newArray.push($(this).val());
//     console.log(newArray);
//     console.log(selectRegisterForActivities);

// });



var newArray = [];         
var loopThroughAllCheckBoxes = $("input[type=checkbox]").each(function(e) {
       
        $(this).click(function() {
        var putClickedBoxInArray = newArray.push($(this).prop("checked",));
        console.log(putClickedBoxInArray);
        console.log(newArray);
        var firstItemClicked = newArray[0];
        //firstItemClicked.val();
        console.log(firstItemClicked);
        }); 
});

 /*
    so everytime we put something out of the block on the inside that is where the each with take effect
    and go through all the check boxes at once and display them in the console. now the function on the 
    inside is what is putting the clicked items in the array 
 */