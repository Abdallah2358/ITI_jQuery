var t, t1;
var bugs;
$(document).ready(function () {
    t = setInterval(function () {
        $("#change")[0].innerText = "Car moved :" + $("#car")[0].style.left
    }, 100);
    $("#car").animate({
        left: "1080px",
    }, 5000, function () {
        $("#change")[0].innerText = "Car moved :" + $("#car")[0].style.left
        clearInterval(t)
    });

    $('.myim').BUP(null, 1)
    bugs = $("#bugs");
    bugs.draggable();
    bugs.mouseup(function () {
        x = parseInt(bugs.css('left'));
        y = parseInt(bugs.css('top'));
        distanceFromCenter = Math.pow(Math.pow(-246 - x, 2) + Math.pow(-198 - y, 2), 0.5) //
        console.log(distanceFromCenter);
        if (distanceFromCenter < 150) {
            bugs.hide()
        }
    });
})