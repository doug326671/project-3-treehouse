
//on page onload get the cursor to go insid the name first.
const name = $('#name').focus();

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
prop is a method 
*/
var colorActivate = $('#color').prop('disabled',true);// start off by disable the color drop down.
var selectAshirtTheme = $('#design').click(function(){ // choose the design id so it can listen for clicks
    var colorActivate = $('#color').prop('disabled',false);
    var selectedTheme = $(this).val(); // click on js puns or i heart js it will be stored in selected theme
    if(selectedTheme == 'js puns'){
        $('#color option:contains("JS shirt only")').toggle();  
        $("#color").val("cornflowerblue");
    } else if(selectedTheme === 'heart js'){ 
        $('#color option:contains("JS Puns shirt only")').toggle();
        $("#color").val("tomato");
    } else if(selectedTheme != 'heart js' && 'js puns'){ // if either of the options are selected disable color
        colorActivate.prop('disabled',true);
    } 
});

// select the checkboxes and assign them to variables
var all = $("input[name ='all']");
var jsFrameworks = $("input[name ='js-frameworks']");
var jsLibs = $("input[name ='js-libs']");
var express = $("input[name ='express']");
var node = $("input[name ='node']");
var buildTools = $("input[name ='build-tools']");
var npm = $("input[name ='npm']");



// sum for different activity prices
var sum = 0;

// creating a label and appending it to the html page, this will help display the total for the activity
var label = $("<label>").text('Total: ');
var input = $('<output></output>').attr({id: 'from', name: 'total:'});
input.appendTo(label);
$('.activities').append(label);
input.val(sum);


var allCheckbox = all.change(function(){
    var checked = $(this).prop('checked');
    if(checked){
        sum += 200;
        input.val(sum);
    }else if($(this).prop('checked',false)){
        sum  -= 200;
        input.val(sum)
        
    }
    
});


var jsFrameworksCheckbox = jsFrameworks.change(function(){
    var checked = $(this).prop('checked');
    if(checked){
        sum += 100;
        input.val(sum);
    }else if($(this).prop('checked',false)){
        sum -=100;
        input.val(sum);
    }
    if(checked){
        express.prop('disabled',true);

    }else{
        express.prop('disabled',false);
    }
});

//if the express event is clicked then disable any other event that will run in conflict
var expressCheckbox = express.change(function(){
    var checked = $(this).prop('checked');
    if(checked){
        sum += 100;
        input.val(sum);
    }else if($(this).prop('checked',false)){
        sum -=100;
        input.val(sum);
    }
    if(checked){
        jsFrameworks.prop('disabled',true);

    }else{
        jsFrameworks.prop('disabled',false);
    }
});

// if the java script libraries is checked then disbale anyother event

var jsLibsCheckbox =jsLibs.change(function(){
    var checked = $(this).prop('checked');
    if(checked){
        sum += 100;
        input.val(sum);
    }else if($(this).prop('checked',false)){
        sum -=100;
        input.val(sum);
    }
    if(checked){
        node.prop('disabled',true);

    }else{
        node.prop('disabled',false);
    }
});

// if the node event is clicked then disable anyother event that will come into conflict
var nodeCheckbox =node.change(function(){
    var checked = $(this).prop('checked');
    if(checked){
        sum += 100;
        input.val(sum);
    }else if($(this).prop('checked',false)){
        sum -=100;
        input.val(sum);
    }
    if(checked){
        jsLibs.prop('disabled',true);

    }else{
        jsLibs.prop('disabled',false);
    }
});

var buildToolsCheckbox =buildTools.change(function(){
    var checked = $(this).prop('checked');
    if(checked){
        sum += 100;
        input.val(sum);
    }else if($(this).prop('checked',false)){
        sum -=100;
        input.val(sum);
    }
});

var npmCheckbox = npm.change(function(){
    var checked = $(this).prop('checked');
    if(checked){
        sum += 100;
        input.val(sum);
    }else if($(this).prop('checked',false)){
        sum -=100;
        input.val(sum);
    }
});

// next portion will be the payment
//selecting the credit card option first 

var creditCard = $("option[value ='credit card']");
var payPal= $("option[value ='paypal']");
var bitcoin = $("option[value ='bitcoin']");
var creditCardInputFields = $('#credit-card');

var regexName = /^[a-zA-Z0-9_ ]*$/;
var emailCheck =/^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
var regexForCardNumber = /^[0-9]{13,16}$/;// 13 to 16 numbers
var regexForZipCode = /^[0-9]{5}$///zip code 5 numbers
var regexForCvv = /^[0-9]{3}$/
creditCard.attr("selected", true);
var inputForCardNumber = $('#cc-num');

//console.log(inputForCardNumber);

$('p:contains("If you selected the Bitcoin")').hide();
$('p:contains("If you selected the PayPal")').hide();

$("#payment").change(function(){
    var selected = $(this).val();
    if(selected == 'credit card'){ 
        $('#credit-card').show();
        
    }else if(selected == 'paypal' || selected == 'bitcoin' || selected == "select_method"){
        $('#credit-card').hide(); // hiding it if it does not match
        if(selected == 'bitcoin'){
            $('p:contains("If you selected the PayPal")').hide();
            $('p:contains("If you selected the Bitcoin")').show();
        }else if(selected == 'paypal'){
            $('p:contains("If you selected the Bitcoin")').hide();
            $('p:contains("If you selected the PayPal")').show();
        }else if(selected == 'select_method'){
            $('p:contains("If you selected the Bitcoin")').hide();
            $('p:contains("If you selected the PayPal")').hide();
        }
    }
});

// need to make the form not refresh if some fields are blank

var submitButton = $("button[type ='submit']");
var nameField = $('#name');

// test to make sure the input for the card is correct


//if everything is true submit the form
 submitButton.click(function(){
    var name = $("#name").val();
    var mail = $("#mail").val();
    var creditCardNum = $("#cc-num").val();
    var creditCardZip = $("#zip").val();
    var creditCardCvv = $("#cvv").val();
    
    input.val(sum);

    if(name == '' || !emailCheck.test(mail) || mail==''||sum<100|| !regexForCardNumber.test(creditCardNum)||!regexForZipCode.test(creditCardZip)||!regexForCvv.test(creditCardCvv)){
        
        alert('fill out all fields');
        $("#name").css('background-color','red');
        $("#mail").css('background-color','red');
        $("#cc-num").css('background-color','red');
        $("#zip").css('background-color','red');
        $("#cvv").css('background-color','red');
        input.css('background-color','red');
        if(sum>=100){
            return true;
        }



        return false;
    }


 });

 

