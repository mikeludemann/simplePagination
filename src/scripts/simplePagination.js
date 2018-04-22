var showCount = 5;
    countElements = $('#list').children('div').size();
    countSites = Math.ceil(countElements / showCount);
    lastSite = countSites - 1;

$(document).ready(function () {

    $('body').append('<div class="controls"></div><input id="current_page" type="hidden"><input id="showCount" type="hidden">');

    $('#current_page').val(0);

    $('#showCount').val(showCount);

    var fullNavigation = '<a class="start" onclick="start()"><<</a>';
    fullNavigation += '<a class="prev" onclick="previous()"><</a>';

    var current_Link = 0;

    while (countSites > current_Link) {

        fullNavigation += '<a class="page" onclick="goToSite(' + current_Link + ')" longdesc="' + current_Link + '">' + (current_Link + 1) + '</a>';

        current_Link++;

    }

    fullNavigation += '<a class="next" onclick="next()">></a>';
    fullNavigation += '<a class="end" onclick="end()">>></a>';

    $('.controls').html(fullNavigation);
    $('.controls .page:first').addClass('active');

    $('#list').children().css('display', 'none');
    $('#list').children().slice(0, showCount).css('display', 'block');

    console.log(lastSite);

});

// Help functions

function goToSite(pageIndex) {

    var showCount = parseInt($('#showCount').val(), 0);

    start = pageIndex * showCount;

    end = start + showCount;

    $('#list').children().css('display', 'none').slice(start, end).css('display', 'block');

    $('.page[longdesc=' + page_num + ']').addClass('active').siblings('.active').removeClass('active');

    $('#current_page').val(page_num);

}



function previous() {

    previousPage = parseInt($('#current_page').val(), 0) - 1;

    //if there is an item before the current active link run the function

    if ($('.active').prev('.page').length == true) {

        goToSite(new_page);

    }

}

function next() {

    nextPage = parseInt($('#current_page').val(), 0) + 1;

    //if there is an item after the current active link run the function

    if ($('.active').next('.page').length == true) {

        goToSite(new_page);

    }

}

function start() {

    goToSite(0);

}

function end() {

    goToSite(lastSite);

}