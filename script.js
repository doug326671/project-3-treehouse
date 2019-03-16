
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

*/


var getTheBoxes = $('.activities').children();// all the checkboxes are selected and stored in a variable 
var checkboxesClicked =[];// this is the array that will hold all the clicked checkboxes

getTheBoxes.click(function(){ // calling the click function on the getTheBoxes variable to listen for clicks
        
        var putClickedBoxInArray = checkboxesClicked.push($(this)[0]);// everything that is clicked push it into checkboxesClicked
        console.log(putClickedBoxInArray);// shows how many checkboxes are in the array
        console.log(checkboxesClicked);// shows what is int the array
        
        var firstItemClicked = checkboxesClicked[0];//will select the first item that was clicked in the array
        console.log(firstItemClicked, 'first item');// show the first item clicked.
        
        var secondItemClicked = checkboxesClicked[1];
        console.log(secondItemClicked,'second item');
        
        var thirdItemClicked = checkboxesClicked[2];
        console.log(thirdItemClicked,'third item');
       
        var convertToStringFirstItem = firstItemClicked.textContent.match(/\d+/g);//taking the first item and getting the numbers and putting it into an array
        console.log(convertToStringFirstItem);
        
        var convertToStringSecondItem = secondItemClicked.textContent.match(/\d+/g);//taking the first item and getting the numbers
        console.log(convertToStringSecondItem);

        if(firstItemClicked[0]==secondItemClicked[0]){
            alert('starts at same time');
        }

        //var regex = /\d+/;
        //var getTheNumbers = firstItemClicked.search(regex);
        //console.log(getTheNumbers);
});

/*
    need to make a for loop or something that checks the boxes that were checked to see if there is any conflict
    between the checkboxes
*/