$(function(){
    function handleFAQ(){
        var qaList = document.querySelectorAll('.faq__qa');
        if(!qaList) return;
        var qaQues = document.querySelectorAll('.faq__ques');
        var qaAns = document.querySelectorAll('.faq__ans');

        qaList[0].querySelector('.faq__ques').classList.add('active');
        qaList[0].querySelector('.faq__ans').classList.add('active');
        Velocity(qaList[0].querySelector('.faq__ans'), 'slideDown', {duration: 350, easing:'linear'});

        for(var n = 0; n < qaQues.length; n++) {
            qaAns[n].style.display = "none";
            qaQues[n].addEventListener('click', function(e){
            var content = e.target.nextElementSibling;
            if(!e.target.classList.contains('active')) {
                e.target.classList.add('active');
                Velocity(content, 'slideDown', {duration: 350, easing:'linear'});
            }else {
                e.target.classList.remove('active');
                Velocity(content, 'slideUp', {duration: 350, easing:'linear'});
            }
            }, false);
        }
    }
    handleFAQ();
})