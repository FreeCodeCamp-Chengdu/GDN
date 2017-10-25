require(['jquery', 'EasyWebApp'],  function ($, EWA) {

    function getConfig(more) {

        var config = $.extend({ },  more || { });

        this.$_View.find('[data-form]').each(function () {

            config[ this.dataset.form ] = this.textContent.trim();
        });

        return config;
    }


    EWA.component(function (data) {

        var form = this.$_View.find('form').view(), _this_ = this;

        $.post('/survey/form',  getConfig.call( this ),  function (data) {

            _this_.render('fid', data.objectId);
        });

        this.$_View.find('.row').on('blur',  '[contenteditable]',  function () {

            var $_This = $( this );

            $.put(
                $_This.parents('[data-url]')[0].dataset.url,
                getConfig.call( $_This.parents(':htmlview').view() )
            );
        });

        data.addQuestion = function (multiple) {

            var _this_ = form.insert({multiple: multiple},  form.length);

            $.post(
                _this_.$_View[0].dataset.url,
                getConfig.call(_this_,  {multiple: _this_.multiple})
            ).then(function (data) {

                _this_.render('qid', data.questions[0].objectId);
            });
        };

        data.addOption = function () {

            var list = this.$_View.find(':listview').view();

            var _this_ = list.insert({ },  list.length);

            $.post(
                _this_.$_View[0].dataset.url,  getConfig.call(_this_)
            ).then(function (data) {

                _this_.render('oid', data.options[0].objectId);
            });
        };

        data.finish = function () {

            (new EWA()).loadPage( -1 );
        };
    });
});
