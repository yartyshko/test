//= ../../../node_modules/jquery/dist/jquery.js
//= ../../../node_modules/intl-tel-input/build/js/intlTelInput-jquery.js

$("#phone").intlTelInput({
    initialCountry: "us",
    separateDialCode: true,
    preferredCountries: ["us", "ua"]
});