'use strict';

// FIRST TASK
// const one = 1;
// $('.square-item__plus').on('click',function(){
//     const $value = $(this).parent('.square-item').children('.square-item__text');
//     $value.text(Number($value.text()) + one);
// });
// $('.square-item__minus').on('click',function(){
//     const $value = $(this).parent('.square-item').children('.square-item__text');
//     if (Number($value.text()) !== 0)
//         $value.text(Number($value.text()) - one);
// });


// SECOND TASK

// $('.square-item').on('click',function(){
//     if($(this).hasClass('color-red')){
//         $(this).removeClass('color-red');
//         $(this).addClass('color-green');
//         $(this).parent('.square-area').append($(this));
//    }
// })

// THIRD TASK

const one = 1;
const $form = document.forms.form;
const { title, content } = $form.elements;
const $submit = $('form button');
const $title = $('.title');
const $content = $('.content');
let tabs = 0;

$submit.on('click',(e) => {
    e.preventDefault();
    if (title.value !== '' && content.value !== ''){
        const $spanTitle = $('<span>');
        $spanTitle.attr('data-target','tab-' + ++tabs );
        $spanTitle.text(title.value);
        $title.append($spanTitle);
        const $spanContent = $('<span>');
        $spanContent.text(content.value);
        $spanContent.addClass('is-hidden');
        $spanContent.attr('id', 'content-' + tabs );
        $content.append($spanContent);
        if (tabs === one){
            $spanTitle.addClass('is-active') ;
            $spanContent.removeClass('is-hidden') ;
        }
    }
    $('.title > span').each(function(index, span) {
        $(span).on('click',(event) => {
            for (const el of $title.children('span')){
                el.classList.remove('is-active');
            }
            for (const el of $content.children('span')){
                el.classList.add('is-hidden');
            }
            const $event = $(event.target);
            $event.addClass('is-active');
            $(
                `#content-${event.target.dataset.target.split('-')[one]}`)
                .removeClass('is-hidden');
        });
    });
});




