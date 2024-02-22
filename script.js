function myfunc() {
    let eye1 = document.getElementById("eyeicon");
    let eye2  = document.getElementById("demo");

    if (eye2.type === "password") {
        eye2.type = "text";
        eyeicon.src="assets/show.png";
    }
    else {
        eye2.type = "password";
        eyeicon.src="assets/hide.png"
    }
}
