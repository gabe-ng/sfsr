console.log("hello");

const errorHandle = (error1, error2, error3) => {
    console.log(error1);
    console.log(error2);
    console.log(error3);
}

const renderSafeUsers = (response) => {
    console.log(response);
    
    response.forEach(user => {
        $("#safe-people").append(`
            <li class="saved-user">
                <h3>${user.name}</h3>
                <p>${user.location}</p>
                <p>${user.birthday}</p>
                <p>${user.hometown}</p>
        </li>`);
    })
}

$(document).ready(function () {
    $.ajax({
        method: "GET",
        url: "http://localhost:3001/api/safeusers",
        success: renderSafeUsers,
        error: errorHandle
    })
});

