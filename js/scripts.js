$(document).ready(function() {
  $("form").submit(function() {
    event.preventDefault();
    const name = $("#name").val();
    const address = $("#address").val();
    const phone = $("#phone").val();
    const email =$("#email").val();
    const relationship = $("#relationship").val();
    const status = $("input:radio[name=status]:checked").val();
    const dob = $("#birthday").val();
    const favoriteColor =$("#color").val();

  $("#contacts").append("<h3>"+name+"</h3>"+"<p>Phone: "+phone+"</p>"+'<div class="hidden">'+"<p>Address: "+address+"</p>"+"<p>Email: "+email+"</p>"+"<p>Relationship :"+relationship+"</p>"+"<p>Vaccine Status:"+status+"</p>"+"<p>Birthdate: "+dob+"</p>"+"<p>Favorite color Hex code: "+favoriteColor+"</p>"+"</div>")
  });


})