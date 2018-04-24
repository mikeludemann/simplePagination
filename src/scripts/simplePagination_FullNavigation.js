var showCount = 5,
    countElements = $('#list').children('li').size(),
    countSites = Math.ceil(countElements / showCount),
    lastSite = countSites - 1;

$(document).ready(function() {

    $('body').append('<div class="controls"></div><input id="current_page" type="hidden"><input id="showCount" type="hidden">');
    $('#current_page').val(0);
    $('#showCount').val(showCount);

    var navigation_html = '<a class="prev" onclick="first()">First</a>';
        navigation_html += '<a class="prev" onclick="previous()">Prev</a>';
          
    var actualLink = 0;

    while (countSites > actualLink) {
        
        navigation_html += '<a class="page" onclick="goToPage(' + actualLink + ')" longdesc="' + actualLink + '">' + (actualLink + 1) + '</a>';
        
        actualLink++;

    }

    navigation_html += '<a class="next" onclick="next()">Next</a>';
    navigation_html += '<a class="next" onclick="last()">Last</a>';

    $('.controls').html(navigation_html);
    $('.controls .page:first').addClass('active');

    $('#list').children().css('display', 'none');
    $('#list').children().slice(0, showCount).css('display', 'block');

});



function goToPage(page_num) {

    var showCount = parseInt($('#showCount').val(), 0);

    starts = page_num * showCount;

    ends = starts + showCount;

    $('#list').children().css('display', 'none').slice(starts, ends).css('display', 'block');

    $('.page[longdesc=' + page_num + ']').addClass('active').siblings('.active').removeClass('active');

    $('#current_page').val(page_num);
}

function first() {

    goToPage(0);

}

function previous() {

    previous_Page = parseInt($('#current_page').val(), 0) - 1;
    
    if ($('.active').prev('.page').length == true) {

        goToPage(previous_Page);

    }

}

function next() {

    next_Page = parseInt($('#current_page').val(), 0) + 1;
    
    if ($('.active').next('.page').length == true) {

        goToPage(next_Page);

    }

}

function last() {

    goToPage(lastSite);

}