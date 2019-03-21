
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

// select the checkboxes and assign them to variables      .prop('disabled',true)
var all = $("input[name ='all']");
var jsFrameworks = $("input[name ='js-frameworks']");
var jsLibs = $("input[name ='js-libs']");
var express = $("input[name ='express']");
var node = $("input[name ='node']");
var buildTools = $("input[name ='build-tools']");
var npm = $("input[name ='npm']");

//var totalPrice = [];
var sum = 0;
console.log(sum);

var listTotal = $(".activities").append("Total:");


var allCheckbox = all.change(function(){
    var checked = $(this).prop('checked');
    if(checked){
        sum += 200;
        listTotal.append(sum);
    }else if($(this).prop('checked',false)){
        sum  -= 200;
        listTotal.append(sum);
    }
    
});



var jsFrameworksCheckbox = jsFrameworks.change(function(){
    var checked = $(this).prop('checked');
    if(checked){
        sum += 100;
        listTotal.append( sum );
    }else if($(this).prop('checked',false)){
        sum -=100;
        listTotal.append( sum );
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
        console.log(sum);
    }else if($(this).prop('checked',false)){
        sum -=100;
        console.log(sum);
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
        console.log(sum);
    }else if($(this).prop('checked',false)){
        sum -=100;
        console.log(sum);
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
        console.log(sum);
    }else if($(this).prop('checked',false)){
        sum -=100;
        console.log(sum);
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
        console.log(sum);
    }else if($(this).prop('checked',false)){
        sum -=100;
        console.log(sum);
    }
});

var npmCheckbox = npm.change(function(){
    var checked = $(this).prop('checked');
    if(checked){
        sum += 100;
        console.log(sum);
    }else if($(this).prop('checked',false)){
        sum -=100;
        console.log(sum);
    }
});

