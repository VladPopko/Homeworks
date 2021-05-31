'use strict';

const zero = 0;
const one = 1;
const $form = document.forms.form;
const { title, content } = $form.elements;
const $submit = $form.elements[$form.elements.length - one];
const $title =  document.querySelector('.title');
const $content =  document.querySelector('.content');

let tabs = 0;

$submit.addEventListener('click',(e) => {
    e.preventDefault();
    
    if (title.value !== '' && content.value !== ''){
        $title.append(document.createElement('span'));
        $title.children[tabs].textContent = title.value;
        $title.children[tabs].setAttribute('name', 'tab-' + tabs );

        $content.append(document.createElement('span'));
        $content.children[tabs].textContent = content.value;
        $content.children[tabs].classList.add('is-hidden');
        $content.children[tabs++].setAttribute('name', 'content-' + tabs );
        console.log($title.children.length);
        if ($title.children.length === one){
            $title.children[tabs-one].classList.add('is-active') ;
            $content.children[tabs-one].classList.remove('is-hidden') ;
        }
    }
})

