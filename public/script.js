$(document).ready(function() {
    $('#signup-form').submit(function(event) {
        event.preventDefault();
        
        // Validate form
        let isValid = true;
        
        if ($('#name').val().trim() === '') {
            isValid = false;
            alert('Please enter your name.');
        }
        
        if ($('#address').val().trim() === '') {
            isValid = false;
            alert('Please enter your address.');
        }
        
        if ($('#phone').val().trim() === '' || !/^[0-9]{10}$/.test($('#phone').val())) {
            isValid = false;
            alert('Please enter a valid phone number.');
        }
        
        if ($('#language').val() === '') {
            isValid = false;
            alert('Please select a language.');
        }
        
        if (isValid) {
            window.location.href = '../index2.html';
        }
    });
});
$(document).ready(function() {
    $('#signup-form').submit(function(event) {
        event.preventDefault();
        var formData = {
            name: $('#name').val(),
            address: $('#address').val(),
            phone: $('#phone').val(),
            language: $('#language').val()
        };
        $.ajax({
            type: 'POST',
            url: '/submit-form',
            data: formData,
            success: function(response) {
                console.log(response);
            }
        });
    });
});
function login() {
    window.location.href = '../index4.html';
    }
   document.getElementById('navigationText').addEventListener('click', back);