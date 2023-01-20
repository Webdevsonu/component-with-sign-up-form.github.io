function validate() {
  let x = document.forms["myform"]["first"].value;
  if (x == "") {
    document.getElementById('errorname').style.display = "block";
    document.getElementById('errorlastname').style.display = "block";
    document.getElementById('erroremail').style.display = "block";
    document.getElementById('errorpassword').style.display = "block";
    return false;
  }
}
