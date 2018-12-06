$(function () {
    $('li>a').on('click', function (e) {
        e.preventdefault;
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000, function () {
            window.location.hash = hash;
        });
    });
});

$(function () {
    $("form").submit(function (e) {
        e.preventDefault();
        var $form = $(this);
        $.post($form.attr("action"), $form.serialize())
            .done(function (data) {
                $("#html").html(data);
                $("#formulaire").modal("hide");
            })
            .fail(function () {
                alert("en maintenance ...");
            });
    });
});

$('.banner').css({
    'height': (($(window).height())) + 'px'
});

$(window).on('resize', function () {
    $('.banner').css({
        'height': (($(window).height())) + 'px'
    });
});

 $('.nav a').on('click', () => $('button.navbar-toggle').click());


