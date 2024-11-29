$.fn.Sliding=function(){

    console.log($(this))
    let images=$(this)
    $(this).on('click', function() {

            
            
            let imgIndex=images.index(this);
            console.log(imgIndex)
        let overFlowElement = $(`
            <div class='overFlow'>
                <button class="btn close"><i class="fa-solid fa-xmark"></i></button>
                <button class="btn left"><i class="fa-solid fa-angle-left"></i></button>
                <div class="box">
                    <img src="${$(images).eq(imgIndex).attr('src')}" alt="" />
                </div>
                <button class="btn right"><i class="fa-solid fa-angle-right"></i></button>
            </div>
        `);
        $('body').append(overFlowElement);
        overFlowElement.fadeIn(500); 

        function nextImg(){
            
            $('.box').fadeOut(0);
            imgIndex++;
            if(imgIndex>=$(images).length){
                imgIndex=0;
            }

            $('.box').fadeIn(500);
            
            console.log($('img').eq(imgIndex).attr('src'))

            $('.box').find('img').attr('src',`${$(images).eq(imgIndex).attr('src')}`);
        }

        $('.right').on('click', function() {
            nextImg();
            

        });

        function previousImg(){
            $('.box').fadeOut(0);
            imgIndex--;
            if(imgIndex<0){
                imgIndex=$(images).length-1;
            }
            $('.box').fadeIn(500);
            $('.box').find('img').attr('src',`${$(images).eq(imgIndex).attr('src')}`);
        }

        $('.left').on('click', function() {
            previousImg();
        });
    

        $('.close').on('click', function() {
            overFlowElement.fadeOut(500, function() {
                overFlowElement.remove(); 
            });
        });


    // ! key Board Navigation 

        $(document).on('keydown', function (e){

            if(e.originalEvent.key=='ArrowRight'){
                nextImg();
            }
            else if(e.originalEvent.key=='ArrowLeft'){
                previousImg();
            }
            else if(e.originalEvent.key=='Escape'){
                overFlowElement.fadeOut(500, function() {
                    overFlowElement.remove();
                });
            }
            console.log(e.keyCode)
            console.log(e.originalEvent.key)

        })
    })
    
}
$('img').Sliding();