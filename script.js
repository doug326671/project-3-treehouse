
//on page onload get the cursor to go insid the name first.
const name = $('#name').focus();
var subbutton = document.getElementById("submitButton");

 var formValid = {
       username:false,
       email:false,
     total:false,
     creditNumber:false,
     zipNumber:false,
     cvvNumber:false,
     bitcoin:false,
     paypal:false
 };




subbutton.addEventListener('click',function(e){
    var name = $("#name").val();
    var mail = $("#mail").val();
    var creditCardNum = $("#cc-num").val();
    var creditCardZip = $("#zip").val();
    var creditCardCvv = $("#cvv").val();
    input.val(sum);
    if(name == '' || mail == '' || creditCardNum == ''|| creditCardZip =='' || creditCardCvv == '' ||sum<100){
        $("#name-error").text('This field is required before the form is submitted').show();
        $("#mail-error").text('This field is required before the form is submitted').show();
        $("#creditNum-error").text('The credit card number field is required before the form is submitted').show();
        $("#zip-error").text('The zip code is required before the form is submitted').show();
        $("#cvv-error").text('The cvv number is required before the form is submitted').show();
        $("#activity-error").text('You must select an activity to submit the form').show();

    }

    if(formValid.username && formValid.email && formValid.total && formValid.creditNumber&& formValid.zipNumber&& formValid.cvvNumber){
        //go ahead
    }else if(formValid.username && formValid.email && formValid.total && formValid.bitcoin){
        //go ahead
    }else if(formValid.username && formValid.email && formValid.total && formValid.paypal){
        //go ahead
    }else{
        e.preventDefault()
    }

},false);




$("#name").on("input",function(){
    var name = $(this).val();
    
    function msg(body){
        $("#name-error").text(body).show();
    };

    function hide(){
        $("#name-error").hide();
    };

    if(name.length<1){
        msg('this field is required');
         formValid.username = false;
        
    }else{
        hide();
        
        
        var testExp = new RegExp (/^[a-zA-Z ]+$/);
        if(!testExp.test(name)){
           msg('This field cannot have special characters');
           formValid.username = false;
           
        }else{
            hide();
            formValid.username = true;
            
            
        }
    }

});

// checks the email to make sure that name field is filled out and if not it keeps button disabled
$("#mail").on("input",function(){
    var mail = $(this).val();
    
    function msg(body){
        $("#mail-error").text(body).show();
    };

    function hide(){
        $("#mail-error").hide();
    };

    if(mail.length<1){
        msg('this field is required');
         formValid.email = false;
    }else{
        hide();
        
        var testExp = new RegExp (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/);
        if(!testExp.test(mail)){
           msg('must be a valid email');
           formValid.email = false;
        }else{
            hide();
            formValid.email= true;
            
        }
    }

});



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


// check the activities to make sure that an activity is clicked

$('input:checkbox').change(
    function(){
            function msg(body){
            $("#activity-error").text(body).show();
        };

        function hide(){
        $("#activity-error").hide();
        };
        if ($(".activities input:checkbox:checked").length > 0) {
            msg( '  activity selected');
            formValid.total = true;
        }else if($(this).prop("checked")==false){
            formValid.total = false;
            hide();
            msg( 'select activity');
        
        }
    });


    var bitcoin = $("option[value ='bitcoin']");

var ccnum = $("#cc-num").on("input",function(){
    var creditNum = $(this).val();
    var testExp = new RegExp (/^[0-9]{13,16}$/);// 13 to 16 numbers
    function msg(body){
        $("#creditNum-error").text(body).show();
    };

    function hide(){
        $("#creditNum-error").hide();
    };

    if(!testExp.test(creditNum)){
        msg('this field is required has to be between 13 and 16 numbers with no dashes');
         formValid.creditNumber = false;
    }else{
        hide();
        formValid.creditNumber= true;
        
    }

});

var zipnum = $("#zip").on("input",function(){
    var zipNum = $(this).val();
    var testExp = new RegExp (/^[0-9]{5}$/);// 
    function msg(body){
        $("#zip-error").text(body).show();
    };

    function hide(){
        $("#zip-error").hide();
    };

    if(!testExp.test(zipNum)){
        msg('Zip Code required has to be 5 numbers with no dashes');
         formValid.zipNumber = false;
    }else{
        hide();
         formValid.zipNumber= true;
        
    }

});

var cvvnum = $("#cvv").on("input",function(){
    var cvvNum = $(this).val();
    var testExp = new RegExp (/^[0-9]{3}$/);// 13 to 16 numbers
    function msg(body){
        $("#cvv-error").text(body).show();
    };

    function hide(){
        $("#cvv-error").hide();
    };

    if(!testExp.test(cvvNum)){
        msg('CVV required has to be 3 numbers');
         formValid.cvvNumber = false;
    }else{
        hide();
        formValid.cvvNumber= true;
        
    }

});






$("#payment").val($("option[value ='credit card']:first").val());


var creditCard = $("option[value ='credit card']");
var payPal= $("option[value ='paypal']");

var creditCardInputFields = $('#credit-card');



$('p:contains("If you selected the Bitcoin")').hide();
$('p:contains("If you selected the PayPal")').hide();

$("#payment").change(function(){
    var selected = $(this).val();
    if(selected == 'credit card'){ 
        $('#credit-card').show();
        $('p:contains("If you selected the Bitcoin")').hide();
        $('p:contains("If you selected the PayPal")').hide();
        
    }else if(selected == 'paypal' || selected == 'bitcoin' || selected == "select_method" || selected == 'credit card'){
        $('#credit-card').hide(); // hiding it if it does not match
        if(selected == 'bitcoin'){
            
            formValid.bitcoin= true;
        
            $('p:contains("If you selected the PayPal")').hide();
            $('p:contains("If you selected the Bitcoin")').show();
        }else if(selected == 'paypal'){
            formValid.paypal= true;
            $('p:contains("If you selected the Bitcoin")').hide();
            $('p:contains("If you selected the PayPal")').show();
        }else if(selected == 'select_method'){
            $('p:contains("If you selected the Bitcoin")').hide();
            $('p:contains("If you selected the PayPal")').hide();
        }
    }
});







 







































//formValid.creditNumber== true;
            //formValid.zipNumber== true;
            //formValid.cvvNumber== true;

 // need to make the form not refresh if some fields are blank

//var submitButton = $("button[type ='submit']");
//var nameField = $('#name');

// test to make sure the input for the card is correct

//if everything is true submit the form
//var regexForCardNumber = /^[0-9]{13,16}$/;// 13 to 16 numbers
// var regexForZipCode = /^[0-9]{5}$///zip code 5 numbers
// var regexForCvv = /^[0-9]{3}$/
// creditCard.attr("selected", true);
// var inputForCardNumber = $('#cc-num');
















//$("#submitButton").submit(function(event){
    //     var isValid  = true;
    //         if (formValid.username && formValid.email && formValid.total && formValid.creditNumber&& formValid.zipNumber&& formValid.cvvNumber){
    //         //disableButton.attr("disabled",false);// enable the disabled button
    
    //         isValid = false;
            
    //     }else if(formValid.username && formValid.email && formValid.total && formValid.bitcoin){
    //         //disableButton.attr("disabled",false);// enable the disabled button
    //         isValid = false;
    //     }else if(formValid.username && formValid.email && formValid.total && formValid.paypal){
    //         //disableButton.attr("disabled",false);// enable the disabled button
    //         isValid = false;
    //     }else{
    //         isValid = false;
                
                
    //             //disableButton.attr('disabled',true);// disable the button
                
    //     }  
    //     if(!isValid){
    //         event.preventDefault();
    //     }
        
    //   });