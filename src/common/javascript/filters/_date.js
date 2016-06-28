/**
 * Created by haner on 16/6/27.
 *
 */
/*jshint esversion: 6 */
export function timeago(time) {
    time = new Date(time);
    var delta = parseInt((new Date() - time) / 1000, 10);
    if (delta <= 0) return '刚刚';

    var minutes = delta / 60;
    if (minutes < 1) return '分钟前';
    if (minutes < 2) return '分钟左右';

    var hours = minutes / 60;
    if (hours < 1) return parseInt(minutes, 10) + '分钟前';
    if (hours < 1.5) return '';

    var days = hours / 24;
    if (days < 1) return Math.round(hours) + '小时前';
    if (days < 7) return parseInt(days, 10) + ' 天前';

    var month = time.getMonth() + 1;
    if (month < 10) month = '0' + month;
    var date = time.getDate();
    if (date < 10) date = '0' + date;
    return [time.getFullYear(), month, date].join('-');
}


export function urlize(text) {
    if (!text) return '';
    var pattern = /https?:\/\/[^\s<]+[^<.,:;"')\]\s]/g;
    return text.replace(pattern, function(u) {
        var t = u.replace('http://', '');
        return '<a href="' + u + '">' + t + '</a>';
    });
}

export function logo(style) {
    style = style || {};
    var rv = {'background-color': style.color || '#222221'};
    if (style.logo) {
        rv['background-image'] = 'url(' + style.logo + ')';
    }
    return rv;
}
