const errorHandle = (error1, error2, error3) => {
  console.log(error1);
  console.log(error2);
  console.log(error3);
};

userSuccess = () => {
  console.log("successfully created!");
};

const renderSafeSpaces = response => {
  console.log(response);

  response.forEach(space => {
      let open;
      if (space.housingCapacity <= space.occupants) {
          open = `<span><button class="reserve-button">Reserve</button></span>`;
      } else {
          open = `<span class="full-message">Spot Full</span>`
      }
    $("#safe-spaces").append(`
            <li class="safe-space">
                <p>Address: ${space.address} ${open}</p>
        </li>`);
  });
};

$("#submitBtn").on("click", function(e) {
  e.preventDefault();
  var data = {
    name: $("#nameField").val(),
    location: $("#locField").val(),
    birthday: $("#bdayField").val(),
    hometown: $("#hometownField").val()
  };
  console.log(data);
  $.ajax({
    method: "POST",
    url: "http://localhost:3001/api/usercreate",
    data: data,
    success: userSuccess,
    error: errorHandle
  });
});

$(document).ready(function() {
  $.ajax({
    method: "GET",
    url: "http://localhost:3001/api/safespaces",
    success: renderSafeSpaces,
    error: errorHandle
  });
});
