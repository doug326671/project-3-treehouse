
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
    be able to make an array out of all the checkboxes then cycle through each one
*/

var selectRegisterForActivities1 = $('input[type=checkbox]').click(
    function(){
        if (this.checked) {// if something is clicked
            selectRegisterForActivities1 = $(this)[0].nextSibling.nodeValue;//get the content of what is clicked an compare it to something else that was clicked
            console.log(selectRegisterForActivities1);
        }
    });

    var selectRegisterForActivities2 = $('input[type=checkbox]').click(
        function(){
            if (this.checked) {// if something is clicked
                selectRegisterForActivities2 = $(this)[0].nextSibling.nodeValue;//get the content of what is clicked an compare it to something else that was clicked
                console.log(selectRegisterForActivities2);
            }
        });
    


