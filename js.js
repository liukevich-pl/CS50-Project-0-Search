// LOGO (H1) COLOR
let str = document.querySelector('.google-text').innerHTML;
var new_str = '';
for(let char of str) new_str += '<span>'+char+'</span>';
document.querySelector('.google-text').innerHTML = new_str;
// END

document.querySelector('.search_icon').addEventListener('click', function(){
    if(document.querySelector('.input').value != '') document.querySelector('form').submit();
});

/* 47298ded4941e482c33c05136c8ff974 */