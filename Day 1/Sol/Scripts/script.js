function hideAll() {
    $('#about').hide();
    $('#imgSec').hide();
    $('#compCont').hide();
}

$("#btnAbout").click(function (e) {
    hideAll()
    $('#about').show();
});

$("#btnGal").click(function (e) {
    hideAll()
    $('#imgSec').show();
});
var start = 2;
var myMal = new gal($('#myImg')[0])

$("#left").click(function (e) {
    console.log("object");
    myMal.prev(1, 8)
});
$("#right").click(function (e) {
    e.preventDefault();
    myMal.next(1, 8)
});

$("#btnSevices").click(function (e) {
    $("#men").toggle();
});
$("#btnComplain").click(function (e) {
    hideAll()
    $('#compCont').show();
    $("#backCompl").hide()

});

$("#subCompl").click(function () {
    var inps = $("#comp>div>input")
    var spans = $("#comp>div>span")
    for (var i = 0; i < inps.length; i++) {
        console.log(inps.get(i).value);
        spans[i + 1].innerText = " : " + inps[i].value;
        inps.eq(i).hide();
    }

    $("#comp>div>label")[0].innerText = 'Your Complain';
    spans[0].innerText = " : " + $("#complain")[0].value;
    $("#comp>div>span").show()
    $("#complain").hide()
    $("#subCompl").hide()

    $("#backCompl").show()

})
$("#backCompl").click(function () {
    var inps = $("#comp>div>input")
    
    $("#comp>div>input").show()
    $("#comp>div>span").hide()

    $("#comp>div>span").eq(0).show()
    $("#comp>div>span").get(0).innerText = '';
    $("#comp>div>label")[0].innerText = ''

    $("#complain").show()
    $("#subCompl").show()
    $("#backCompl").hide()
})
// $("#comp>div>span").dblclick(function () {
//     handleBack()
// })
function handleBack() {
    $("#comp>div>label").eq(0).hide()
    $("#comp>div>span").hide()
    $("#comp>div>input").show()
    $("#complain").show()
    $("#subCompl").show()
    $("#backCompl").hide()
}