(function($) {
    $.fn.danmu = (function(opt) {
        var conf = $.extend({}, {
            width: 500,
            height: 300,
        }, opt),

        obj = $(this),
        
        init = function(conf) {
            var inner = '' + 
                '<section id="data-danmu"></section>' + 
                '<div id="data-send">' +
                    '<select id="data-size">' +
                        '<option value ="20">20</option>' +
                        '<option value ="24">24</option>' +
                        '<option value ="26">26</option>' +
                        '<option value ="32">32</option>' +
                    '</select>' +
                    '<input type="color" id="data-color"><br>' +
                    '<input type="text" id="data-msg" required>' +
                    '<button class="submit">send</button>' +
                '</div>' + 
                '<style>' +
                    '#data-danmu { position: relative; overflow: hidden; display:inline-block; width: 100%; height: 100%; box-shadow: 2px 2px1px #888888; border: solid 1px #CDD7E2; }' +
                    '#data-danmu span { position: absolute; display: inline-block; font-weight: bold; font-family: Consolas, "Liberation Mono", Menlo, Courier, monospace; }' + 
                    '#data-send { width: 100%; margin: 2px 0; }' +
                    '#data-send input { height: 1.4em; font-size: 1.2em; margin: 2px 0; vertical-align: middle; }' +
                    '#data-send #data-size { width: 4em; height: 2em; }' +
                    '#data-send #data-color { margin: 0 5px; }' +
                    '#data-send #data-msg { width: 80%; padding: 2px 0; }' +
                    '#data-send .submit { height: 2.2em; width: 18%; float: right; font-size: 1em; }' +
                '</style>';

            obj.append(inner);
            obj.width(conf.width);
            obj.height(conf.height);
        },

        run = function() {
            init(conf);
        };

        return run();
    }); 
})(jQuery);  
