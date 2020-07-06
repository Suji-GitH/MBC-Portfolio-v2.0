const ABOUT = $(".uk-link-heading").eq(0);
const PORTFOLIO = $(".uk-link-heading").eq(1);
const CONTACT = $(".uk-link-heading").eq(2);
const $PORTFOLIO_BTNS = $(".portfolioBtns");
const $SUBMIT = $("#submitBtn");
const $ALERT = $("#alert");

//Hide portfolio buttons when landing
$PORTFOLIO_BTNS.hide();
$ALERT.hide();
UIkit.toggle("#toggle-mail").toggle();
UIkit.toggle("#toggle-phone").toggle();

//Hide portfolio sub buttons on click
PORTFOLIO.on("click", function(){
    $PORTFOLIO_BTNS.show();
});

ABOUT.on("click", function(){
    $PORTFOLIO_BTNS.hide();
});

//Function to hide portfolio sub buttons
CONTACT.on("click", function(){
    $PORTFOLIO_BTNS.hide();
});

// Validate Contact Form
$("#contactForm").validate();

//Contact Form Email Submission
$SUBMIT.on("click", function(){
    event.preventDefault();

    let $inputName = $("#inputName");
    let $inputEmail = $("#inputEmail");
    let $inputMessage = $("#inputMessage");

    //Email API
    Email.send({
    SecureToken : "60f93ef2-2621-4cbc-a1b0-3a4d5758ba9c",
    To : 'sujithranjitk@gmail.com',
    From : $inputEmail.val(),
    Subject : $inputName.val(),
    Body : $inputMessage.val()
    });

    //Clear Input Fields
    $inputName.val("");
    $inputEmail.val("");
    $inputMessage.val("");

    //Show Message
    $ALERT.show();
    
    //Hide Message
      setInterval(function() {
        $ALERT.fadeOut();
    },5000);
});

