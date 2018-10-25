var showCount = 5,
    countElements = $('#list').children('div').size(),
    countSites = Math.ceil(countElements / showCount),
    lastSite = countSites - 1,
    index = 1;

$(document).ready(function () {

    $('body').append('<div class="controls"></div><input id="current_page" type="hidden"><input id="showCount" type="hidden">');
    $('#current_page').val(0);
    $('#showCount').val(showCount);

    var navigation_html = '<a id="first" onclick="first()">First</a>';
    navigation_html += '<a id="prev" onclick="previous()">Prev</a>';

    var current_link = 0;

    while (countSites > current_link) {

        navigation_html += '<a id="site-' + (current_link + 1) + '" style="display: none" class="page" onclick="goToSite(' + current_link + ')" longdesc="' + current_link + '">' + (current_link + 1) + '</a>';

        current_link++;

    }
    
    navigation_html += '<span class="index">' + (index) + '</span><span> / </span><span class="lastIndex">' + countSites + '</span>';
    navigation_html += '<a id="next" onclick="next()">Next</a>';
    navigation_html += '<a id="last" onclick="last()">Last</a>';

    $('.controls').html(navigation_html);
    $('.controls .page:first').addClass('active');

    $('#list').children().css('display', 'none');
    $('#list').children().slice(0, showCount).css('display', 'block');

});

$(document).ready(function () {

    $("#first").click(function () {

        $("#first").hide();
        $("#prev").hide();
        $("#last").show();
        $("#next").show();

    });

    $("#last").click(function () {

        $("#last").hide();
        $("#next").hide();
        $("#first").show();
        $("#prev").show();

    });

    $("#prev").click(function () {

        if ($("#site-1").hasClass("active")) {

            $("#first").hide();
            $("#prev").hide();
            $("#last").show();
            $("#next").show();

        } else {

            $("#first").show();
            $("#prev").show();
            $("#last").show();
            $("#next").show();
        }

    });

    $("#next").click(function () {

        if ($("#site-" + countSites).hasClass("active")) {

            $("#last").hide();
            $("#next").hide();
            $("#first").show();
            $("#prev").show();

        } else {

            $("#last").show();
            $("#next").show();
            $("#first").show();
            $("#prev").show();

        }

    });

});

function goToSite(page_num) {

    var showCount = parseInt($('#showCount').val(), 0);

    starts = page_num * showCount;

    ends = starts + showCount;

    $('#list').children().css('display', 'none').slice(starts, ends).css('display', 'block');

    $('.page[longdesc=' + page_num + ']').addClass('active').siblings('.active').removeClass('active');

    $('#current_page').val(page_num);
}

function first() {

    goToSite(0);
    index = 1;

    $(".index").html(index);

}

function previous() {

    previousPage = parseInt($('#current_page').val(), 0) - 1;

    if ($('.active').prev('.page').length == true) {

        goToSite(previousPage);

        if (index <= 1 && index == (current_link + 1)) {

            index = 1;

            $(".index").html(index);

        } else {

            $(".index").html(--index);

        }

    }

}

function next() {

    previousPage = parseInt($('#current_page').val(), 0) + 1;

    if ($('.active').next('.page').length == true) {

        goToSite(previousPage);

        if (index >= countSites && index == (current_link + 1)) {

            index = countSites;

            $(".index").html(index);

        } else {

            $(".index").html(++index);

        }

    }

}

function last() {

    goToSite(lastSite);

    index = countSites;

    $(".index").html(index);

}