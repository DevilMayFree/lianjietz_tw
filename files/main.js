//主banner動畫
    $(document).ready(function() {
        var wSize = $(window).width();
        var hSize = $(window).height();

        //runner,people
        var runnerW = wSize * 0.03384
        var peopleW = wSize * 0.03538
        var carW = wSize * 0.12307
        $(".runnerR").width(runnerW);
        $(".walkerRight").width(runnerW);
        $(".walkerLeft").width(runnerW);
        $(".walkerR3").width(runnerW);
        $(".walkerL3").width(runnerW);
        $(".travelerL").width(runnerW);
        $(".travelerR").width(runnerW);
        $(".carL").width(carW);
        $(".carR").width(carW);
        $(".people").width(peopleW);

        //people
        randomPos();

        function randomPos() {
            $(".people").each(function() {
                var peopleRdmPos = Math.round(Math.random() * 80);
                var peopleRdmPos10 = peopleRdmPos + 10
                $(this).css({ left: peopleRdmPos10 + "%" })
            });
        }

        //runner
        var runnerRdmPos = Math.round(Math.random() * 50);
        var runnerRdmPosDis = 100 - runnerRdmPos
        $(".Bridge .runner").css({ left: runnerRdmPos + "%" });
        $(".Bridge .runner").animate({ left: 100 + "%" }, runnerRdmPosDis * 120, "linear", function() {
            $(".Bridge .runner").css({ left: -3.384 + "%" });
            runnerLoop();
        });

        function runnerLoop() {
            setInterval(function() {
                var rdmDelay = Math.round(Math.random() * 40000);
                $(".Bridge .runner").delay(rdmDelay + 4000).animate({ left: 50 + "%" }, 8000, "linear").animate({ left: 100 + "%", bottom: 0 }, 8000, "linear", function() {
                    $(".Bridge .runner").css({ left: -3.384 + "%" });
                });
            }, 100);
        }

        //runnerR
        setInterval(function() {
            var rdmDelay = Math.round(Math.random() * 40000);
            $(".Bridge .runnerR").delay(rdmDelay + 4000).animate({ left: 50 + "%" }, 8000, "linear").animate({ left: -3.384 + "%" }, 8000, "linear", function() {
                $(".Bridge .runnerR").css({ left: 100 + "%" });
            });
        }, 100);

        //walkerRight

        var walkerRightRdmPos = Math.round(Math.random() * 50);
        var walkerRightRdmPosDis = 100 - walkerRightRdmPos
        $(".Bridge .walkerRight").css({ left: walkerRightRdmPosDis + "%" });
        $(".Bridge .walkerRight").animate({ left: -3.384 + "%" }, walkerRightRdmPosDis * 420, "linear", function() {
            $(".Bridge .walkerRight").css({ left: 100 + "%" });
            walkerRightLoop();
        });

        function walkerRightLoop() {
            setInterval(function() {
                var rdmDelay = Math.round(Math.random() * 20000);
                $(".Bridge .walkerRight").delay(rdmDelay + 4000).animate({ left: 50 + "%" }, 17000, "linear").animate({ left: -3.384 + "%" }, 17000, "linear", function() {
                    $(".Bridge .walkerRight").css({ left: 100 + "%" });
                });
            }, 100);
        }

        //walkerLeft

        var walkerLeftRdmPos = Math.round(Math.random() * 50);
        var walkerLeftRdmPosDis = 100 - walkerLeftRdmPos
        $(".Bridge .walkerLeft").css({ left: walkerLeftRdmPos + "%" });
        $(".Bridge .walkerLeft").animate({ left: 100 + "%" }, walkerLeftRdmPosDis * 460, "linear", function() {
            $(".Bridge .walkerLeft").css({ left: -3.384 + "%" });
            walkerLeftLoop();
        });

        function walkerLeftLoop() {
            setInterval(function() {
                var rdmDelay = Math.round(Math.random() * 20000);
                $(".Bridge .walkerLeft").delay(rdmDelay + 4000).animate({ left: 50 + "%" }, 20000, "linear").animate({ left: 100 + "%" }, 20000, "linear", function() {
                    $(".Bridge .walkerLeft").css({ left: -3.384 + "%" });
                });
            }, 100);
        }

        //walkerR3
        setInterval(function() {
            var rdmDelay = Math.round(Math.random() * 20000);
            $(".Bridge .walkerR3").delay(rdmDelay + 4000).animate({ left: 50 + "%" }, 18000, "linear").animate({ left: -3.384 + "%" }, 18000, "linear", function() {
                $(".Bridge .walkerR3").css({ left: 100 + "%" });
            });
        }, 100);

        //walkerL3

        var walkerL3RdmPos = Math.round(Math.random() * 50);
        var walkerL3RdmPosDis = 100 - walkerL3RdmPos
        $(".Bridge .walkerL3").css({ left: walkerL3RdmPos + "%" });
        $(".Bridge .walkerL3").animate({ left: 100 + "%" }, walkerL3RdmPosDis * 400, "linear", function() {
            $(".Bridge .walkerL3").css({ left: -3.384 + "%" });
            walkerL3Loop();
        });

        function walkerL3Loop() {
            setInterval(function() {
                var rdmDelay = Math.round(Math.random() * 20000);
                $(".Bridge .walkerL3").delay(rdmDelay + 4000).animate({ left: 50 + "%" }, 18000, "linear").animate({ left: 100 + "%" }, 18000, "linear", function() {
                    $(".Bridge .walkerL3").css({ left: -3.384 + "%" });
                });
            }, 100);
        }

        //travelerL
        setInterval(function() {
            var rdmDelay = Math.round(Math.random() * 20000);
            $(".Bridge .travelerL").delay(rdmDelay + 4000).animate({ left: 50 + "%" }, 19000, "linear").animate({ left: 100 + "%" }, 19000, "linear", function() {
                $(".Bridge .travelerL").css({ left: -3.384 + "%" });
            });
        }, 100);

        //travelerR

        var travelerRRdmPos = Math.round(Math.random() * 50);
        var travelerRRdmPosDis = 100 - travelerRRdmPos
        $(".Bridge .travelerR").css({ left: travelerRRdmPos + "%" });
        $(".Bridge .travelerR").animate({ left: -3.384 + "%" }, travelerRRdmPos * 460, "linear", function() {
            $(".Bridge .travelerR").css({ left: 100 + "%" });
            travelerRLoop();
        });

        function travelerRLoop() {
            setInterval(function() {
                var rdmDelay = Math.round(Math.random() * 20000);

            }, 100);
        }

    });

    $(window).resize(function() {
        var wSize = $(window).width();
        var hSize = $(window).height();

        var runnerW = wSize * 0.03384
        var peopleW = wSize * 0.03538
        var carW = wSize * 0.12307
        $(".runnerR").width(runnerW);
        $(".walkerRight").width(runnerW);
        $(".walkerLeft").width(runnerW);
        $(".walkerR3").width(runnerW);
        $(".walkerL3").width(runnerW);
        $(".travelerL").width(runnerW);
        $(".travelerR").width(runnerW);
        $(".people").width(peopleW);
    });

     $(function() {
        $(".menu-btn").click(function() {
            $(".nav").addClass("focus");
            $(".header").addClass("focus");
            $(".black").addClass("focus");
            $("body").addClass("focus");
            $("html").addClass("focus");
        });
        $(".black").click(function() {
            $(".nav").removeClass("focus");
            $(".header").addClass("focus");
            $(".black").removeClass("focus");
            $("body").removeClass("focus");
            $("html").removeClass("focus");
        });

        $(".toggle").trigger("click");

    });
    if ($(window).width() < 1024) {

        $(function() {
            $(".inner-box > a").click(function() {
                if ($(this).prop("class") != "focus") {
                    $(".inner-box > a").removeClass("focus");
                    $(".second").removeClass("focus");
                    $(this).addClass("focus");
                    $(this).next(".second").addClass("focus");
                } else {
                    $(".inner-box > a").removeClass("focus");
                    $(".second").removeClass("focus");
                }
            });
        });
    }

    $(function() {
        

    });

    