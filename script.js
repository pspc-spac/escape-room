var answer1 = "answer1";
var answer2 = "answer2";
var answer3 = "answer3";
var answer4 = "answer4";
var answer5 = "answer5";

var firstPage = $("#intro");
var startBtn = $(".start-btn.beg");

var wrongPg = $(".wrong-page");
var endPg = $(".end-page");

var clue1 = $("#clue-1");
var clue2 = $("#clue-2");
var clue3 = $("#clue-3");
var clue4 = $("#clue-4");
var clue5 = $("#clue-5");

var lock1 = $(".lock-1");
var lock2 = $(".lock-2");
var lock3 = $(".lock-3");
var lock4 = $(".lock-4");

var pass1 = $("#password1");
var pass2 = $("#password2");
var pass3 = $("#password3");
var pass4 = $("#password4");
var pass5 = $("#password5");

var clone = $(".clone");
endPg.hide();
wrongPg.hide();
clue1.hide();
clue2.hide();
clue3.hide();
clue4.hide();
clue5.hide();

lock2.hide();
lock3.hide();
lock4.hide();
$(".laser-beam").hide();
//startBtn.hide();

startBtn.click(function () {
  firstPage.fadeOut("fast", function () {
    clue1.fadeIn("slow");
  });
});

$(".trigger").click(function () {
  $(".modal-wrapper").toggleClass("open");
});

//1. Password

$("#clue-1 i").click(function () {
  if (pass1.val() == answer1) {
    clue1.fadeOut("fast", function () {
      clue2.fadeIn("slow");
    });
  } else {
    $("#clue-1 div.error").removeAttr("hidden");
  }
});
$(pass1).keypress(function (e) {
  if (e.which == 13) {
    $("#clue-1 #pass-submit").click();
  } else {
    $("#clue-1 div.error").attr("hidden", true);
  }
});

$("#clue-2 i").click(function () {
  if (pass2.val() == answer2) {
    clue2.fadeOut("fast", function () {
      clue3.fadeIn("slow");
    });
  } else {
    $("#clue-2 div.error").removeAttr("hidden");
  }
});
$(pass2).keypress(function (e) {
  if (e.which == 13) {
    $("#clue-2 #pass-submit").click();
  } else {
    $("#clue-2 div.error").attr("hidden", true);
  }
});

$("#clue-3 i").click(function () {
  if (pass3.val() == answer3) {
    clue3.fadeOut("fast", function () {
      lock4.fadeIn("slow");
    });
  } else {
    $("#clue-3 div.error").removeAttr("hidden");
  }
});
$(pass3).keypress(function (e) {
  if (e.which == 13) {
    $("#clue-3 #pass-submit").click();
  } else {
    $("#clue-3 div.error").attr("hidden", true);
  }
});

//4. Retinal Scan

$(".drag-eye").draggable();
$("#dropzone").droppable({
  drop: function (event, ui) {
    $(".lock-4 div.error").attr("hidden", true);
    $(".laser-beam").show();
    $(".laser-beam").css("animation-play-state", "running");

    setTimeout(function () {
      $(".laser-beam").hide();
      $(".laser-beam").css("animation-play-state", "paused");

      if (ui.draggable.attr("id") == "eye2") {
        lock4.fadeOut("fast", function () {
          clue5.fadeIn("slow");
        });
      } else {
        $(".lock-4 div.error").removeAttr("hidden");
      }
    }, 4000);
  },
  over: function (event, ui) {
    $(this).css("background", "#d00909");
  },
  out: function (event, ui) {
    $(this).css(
      "background",
      "radial-gradient(circle, rgba(208,9,9,1) 0%, rgba(65,65,65,1) 100%)"
    );
    $(".laser-beam").hide();
    $(".laser-beam").css("animation-play-state", "paused");
  },
});

$("#clue-4 i").click(function () {
  if (pass4.val() == answer4) {
    clue4.fadeOut("fast", function () {
      clue5.fadeIn("slow");
    });
  } else {
    $("#clue-4 div.error").removeAttr("hidden");
  }
});
$(pass4).keypress(function (e) {
  if (e.which == 13) {
    $("#clue-4 #pass-submit").click();
  } else {
    $("#clue-4 div.error").attr("hidden", true);
  }
});

$("#clue-5 i").click(function () {
  if (pass5.val() == answer5) {
    clue5.fadeOut("fast", function () {
      endPg.fadeIn("slow");
    });
  } else {
    $("#clue-5 div.error").removeAttr("hidden");
  }
});
$(pass5).keypress(function (e) {
  if (e.which == 13) {
    $("#clue-5 #pass-submit").click();
  } else {
    $("#clue-5 div.error").attr("hidden", true);
  }
});

//2. Key Card

function makeId2(perId, perObj) {
  //OBJECT REQUIRES: name, img, qr, email
  var newDiv = $("<div id='" + perId + "'>");
  newDiv.appendTo("#ids");
  var divId = "#" + perId + "";

  $(divId).html($("#cam").html());
  $(divId + " h2").text(perObj.name);
  $(divId + " .email").text(perObj.email);
  $(divId + " img.photo").attr("src", perObj.img);
  $(divId + " img.qr").attr("src", perObj.qr);
  $(divId).draggable();
}
var cam = {
  name: "Cameron Doe-Nut",
  img: "http://www.whichfaceisreal.com/fakeimages/image-2019-02-18_050528.jpeg",
  qr: "https://chart.googleapis.com/chart?cht=qr&chl=Cameron%20Doe-Nut&chs=180x180&choe=UTF-8&chld=L|2",
  email: "CameronDoeNut2",
};

makeId2("rob", {
  name: "Robert McKinley",
  img: "http://www.whichfaceisreal.com/fakeimages/image-2019-02-18_011037.jpeg",
  qr: "https://chart.googleapis.com/chart?cht=qr&chl=Robert%20McKinley&chs=180x180&choe=UTF-8&chld=L|2",
  email: "RobertMcKinely66",
});
makeId2("john", {
  name: "John Richards",
  img: "http://www.whichfaceisreal.com/fakeimages/image-2019-02-18_030313.jpeg",
  qr: "https://chart.googleapis.com/chart?cht=qr&chl=John%20Richards&chs=180x180&choe=UTF-8&chld=L|2",
  email: "John.Richards",
});

$("#cam h2").text(cam.name);
$("#cam .email").text(cam.email);
$("#cam img.photo").attr("src", cam.img);
$("#cam img.qr").attr("src", cam.qr);
$("#cam").draggable();

$("#id-reader").droppable({
  drop: function (event, ui) {
    var droppedId = ui.draggable.attr("id");
    if (droppedId == "rob" && $("#" + droppedId + " #soc-sec").val() == 1313) {
      $("#id-reader").addClass("idplaced");
      lock2.fadeOut("fast", function () {
        lock3.fadeIn("slow");
      });
    } else {
      $("#id-reader").removeClass("idhover");
      lock2.fadeOut("fast", function () {
        wrongPg.fadeIn("slow");
      });
    }
  },
  over: function (event, ui) {
    $("#id-reader").addClass("idhover");
  },
  out: function (event, ui) {
    $("#id-reader").removeClass("idhover");
  },
});

//3. Fingerprint

function finishedDrawing() {
  var drawStatus = animation.getStatus();

  if (drawStatus === "end") {
    lock3.fadeOut("fast", function () {
      lock4.fadeIn("slow");
    });
  }
}

var options = {
  duration: 180,
  type: "scenario",
  animTimingFunction: Vivus.EASE_OUT,
};

var animation = new Vivus("fingerprint", options, finishedDrawing);
animation.stop();

lock3.on("mousedown", function () {
  animation.reset();
  clone.addClass("active");
  animation.play(1);
});

lock3.on("mouseup", function () {
  clone.removeClass("active");
  animation.play(-1);
});
