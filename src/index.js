'use strict';

const one = 1;
const $form = document.forms.form;
const { title, content } = $form.elements;
const $submit = $form.elements[$form.elements.length - one];
const $title = document.querySelector('.title');
const $content = document.querySelector('.content');

let tabs = 0;

$submit.addEventListener('click',(e) => {
    e.preventDefault();
    if (title.value !== '' && content.value !== ''){
        $title.append(document.createElement('span'));
        $title.children[tabs].textContent = title.value;
        $title.children[tabs++].setAttribute('data-target', 'tab-' + tabs );

        $content.append(document.createElement('span'));
        $content.children[--tabs].textContent = content.value;
        $content.children[tabs].classList.add('is-hidden');
        $content.children[tabs++].setAttribute('id', 'content-' + tabs );
        if ($title.children.length === one){
            $title.children[tabs-one].classList.add('is-active') ;
            $content.children[tabs-one].classList.remove('is-hidden') ;
        }
    }

    document.querySelectorAll('.title > span').forEach(span => {
        span.addEventListener('click',(event) => {
            for (const el of $title.children){
                el.classList.remove('is-active');
            }
            for (const el of $content.children){
                el.classList.add('is-hidden');
            }
            event.target.classList.add('is-active');
            document.querySelector(
                `#content-${event.target.dataset.target.split('-')[one]}`)
                .classList.remove('is-hidden');
        });
    });
});




