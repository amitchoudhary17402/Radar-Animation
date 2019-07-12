function myRadar(event) {
    let x = event.clientX;
    let y = event.clientY;
    let show = document.getElementById("coordinate");
    show.innerHTML = "X:" + x + "&emsp;&emsp;" + "Y:" + y;
}