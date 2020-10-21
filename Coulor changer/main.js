function colorchanger() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var dgcolour = "rgb(" + x + "," + y + "," + z + ")";
    console.log(dgcolour);
    document.body.style.background = dgcolour;
}
