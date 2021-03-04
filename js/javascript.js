(function readyJS(win,doc){
    if(doc.querySelectorAll('.apagarDados')){
        for(let i=0; i < doc.querySelectorAll('.apagarDados').length; i++){
            doc.querySelectorAll('.apagarDados')[i].addEventListener('click',function(event){
                if(confirm("Deseja mesmo apagar este dado?")){
                    return true;
                }else{
                    event.preventDefault();
                }
            });
        }
    }
})(window,document);