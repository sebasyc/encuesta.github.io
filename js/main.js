$(document).ready( function () {
    $('* #in-hide').hide()

    $('input[type=radio]').click(function() {  
        if ($('#box2no').is(':checked')) {  
            $('.input-check2').fadeIn() 
        } else {
            $('.input-check2').fadeOut()
        }

        if ($('#box3no').is(':checked')) {  
            $('.input-check3').fadeIn() 
        } else {
            $('.input-check3').fadeOut()
        }
    })
    $('#select-option').change( function () {
        if ($(this).find('option:selected').val() === 'otro') {
            $('.input-select4').fadeIn() 
        } else {
            $('.input-select4').fadeOut()
        }
    })

})