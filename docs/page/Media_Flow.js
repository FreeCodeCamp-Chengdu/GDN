define(['jquery', 'EasyWebApp'],  function ($, EWA) {

    function set_State(view, link) {

        var next = (link.next || '').uri.replace(
                'https://api.github.com/', 'github/'
            );

        view.$_View.mediaReady().then(function () {

            view.ready = next ? 0 : 2;
        });

        return next;
    }

    return  function ($_List, onInit) {

        if ($_List instanceof Function)  onInit = $_List,  $_List = '';

        $_List = $_List || ':listview';

        onInit = (onInit instanceof Function)  &&  onInit;

        EWA.component(function (data) {

            var iWebApp = new EWA(),  VM = this,  next,
                list_view = this.$_View.find( $_List ).view();

            data = (data instanceof Array)  ?  {list: data}  :  data;

            data = (onInit  &&  onInit.call(iWebApp, VM, data))  ||  data;

            data = $.extend(data, {
                setNext:     function (event) {

                    if ( event.src )
                        next = set_State(this,  event.header.link || '');
                },
                ready:       1,
                loadMore:    function () {

                    this.ready = 1;

                    $.getJSON(next,  function (list, _, XHR) {

                        if (VM.fixData instanceof Function)
                            list = VM.fixData({ }, list)  ||  list;

                        list_view.render(list, list_view.length);

                        next = set_State(
                            VM,  $.parseHeader( XHR.getAllResponseHeaders() ).link
                        );
                    });
                }
            });

            VM.on('ready', data.setNext);

            return data;
        });
    };
});
