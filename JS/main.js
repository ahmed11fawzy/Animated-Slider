$.fn.Sliding=function(){
    let images=$(this)
    console.log('two',images)
    let imgIndex=images.index(this);
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




}
$('img').on('click', function() {
    
    console.log($(this).attr('src'))
    $('img').Sliding();

})









/* 
$('img').on('click', function(){

    let imgIndex=$('img').index(this);
    console.log(imgIndex)

    console.log($(this).attr('src'))
    $('body').append(overFlowElement);
    overFlowElement.fadeIn(500);
    $('.box').html(`<img src="${this.src}" alt="" srcset="">`);

    
    $('.right').on('click', function() {
        $('.box').fadeOut(0);
        imgIndex++;
        if(imgIndex>=$('img').length){
            imgIndex=0;
        }

        $('.box').fadeIn(500);
        $('.box').html(`<img src="${$('img').eq(imgIndex).attr('src')}" alt="" srcset="">`);

    });

    $('.left').on('click', function() {
        $('.box').fadeOut(0);
        imgIndex--;
        if(imgIndex<0){
            imgIndex=$('img').length-1;
        }
        $('.box').fadeIn(500);
        $('.box').html(`<img src="${$('img').eq(imgIndex).attr('src')}" alt="" srcset="">`);
    });



    

})


 */

