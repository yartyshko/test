//= ../../../node_modules/jquery/dist/jquery.js
//= ../../../node_modules/intl-tel-input/build/js/intlTelInput-jquery.js
//= ../../../node_modules/jquery-validation/dist/jquery.validate.min.js

$("#phone").intlTelInput({
    initialCountry: "us",
    separateDialCode: true,
    preferredCountries: ["us", "ua"]
});

$.validator.methods.email = function( value, element ) {
    return this.optional( element ) || /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test( value );
}

$(".contact-form__form").validate({
    errorElement: "span",
    rules: {
        name:{
            required: true
        },
        phone:{
            required: true,
            minlength: 9
        },
        email: {
            required: true,
            maxlength: 60,
            email: true
        },
        checkbox: {
            required: true
        }
    },
    messages: {
        name: {
            required: "Please enter your name"
        },
        phone: {
            required: "Please enter your phone",
            minlength: "Password must be at least 6 characters"
        },
        email: {
            required: "Please enter your email",
            maxlength: "The email address cannot exceed 60 characters",
            email: "Email is invalid"
        },
        checkbox: "Please accept our policy"
    }
});