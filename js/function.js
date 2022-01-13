function alertClose(){
    document.getElementById("alert_text").style.display = "none";
}

$(document).ready(function(){
    slideControl("singleDropHead_1","singleDropContent_1");
    slideControl("singleDropHead_2","singleDropContent_2");
    slideControl("singleDropHead_3","singleDropContent_3");
    slideControl("singleDropHead_4","singleDropContent_4");
    slideControl("singleDropHead_5","singleDropContent_5");
    slideControl("singleDropHead_6","singleDropContent_6");
    slideControl("singleDropHead_7","singleDropContent_7");
    slideControl("singleDropHead_8","singleDropContent_8");
    slideControl("singleDropHead_9","singleDropContent_9");
    slideControl("singleDropHead_10","singleDropContent_10");
    slideControl("singleDropHead_11","singleDropContent_11");
    slideControl("singleDropHead_12","singleDropContent_12");
    slideControl("singleDropHead_13","singleDropContent_13");
    slideControl("singleDropHead_14","singleDropContent_14");
    slideControl("singleDropHead_15","singleDropContent_15");
    slideControl("singleDropHead_16","singleDropContent_16");
    slideControl("singleDropHead_17","singleDropContent_17");
    slideControl("singleDropHead_18","singleDropContent_18");
    slideControl("singleDropHead_19","singleDropContent_19");
    slideControl("singleDropHead_20","singleDropContent_20");
    slideControl("singleDropHead_21","singleDropContent_21");
    slideControl("singleDropHead_22","singleDropContent_22");
    slideControl("singleDropHead_23","singleDropContent_23");
    slideControl("singleDropHead_24","singleDropContent_24");
    slideControl("singleDropHead_25","singleDropContent_25");
    slideControl("singleDropHead_26","singleDropContent_26");
    slideControl("singleDropHead_27","singleDropContent_27");
    slideControl("singleDropHead_28","singleDropContent_28");
    slideControl("singleDropHead_29","singleDropContent_29");
    slideControl("singleDropHead_30","singleDropContent_30");
    slideControl("singleDropHead_31","singleDropContent_31");
    slideControl("singleDropHead_32","singleDropContent_32");
});

function slideControl(clickId,contentId){
    $("#"+clickId).click(function(){
        $("#"+contentId).slideToggle();
    });
}
