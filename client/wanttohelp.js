$(document).ready(function () {

    $('.submit').on('click', function (e) {
        e.preventDefault();
        let data = {
            canShare: $('#offerHelpTB').val(),
            address: $('#address').val(),
            housingCapacity: $('#capacity').val(),
            occupants: $('#occupants').val()
        }

        $.ajax({
            method: 'POST',
            url: 'http://localhost:3001/api/spacecreate',
            data: data,
            success: handleSuccess,
            error: handleError
        });
    });


    function handleSuccess() {
        console.log('ok')
    };
    function handleError() {
        console.log('error');
    };
});