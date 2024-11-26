




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



    
    
    
    overFlowElement.fadeIn(500);
    $('body').append(overFlowElement);
   

    
    $('.right').on('click', function() {
        $('.box').fadeOut(0);
        imgIndex++;
        if(imgIndex>=$(images).length){
            imgIndex=0;
        }

        $('.box').fadeIn(500);
        
        console.log($('img').eq(imgIndex).attr('src'))

        $('.box').find('img').attr('src',`${$(images).eq(imgIndex).attr('src')}`);
        

    });

    $('.left').on('click', function() {
        $('.box').fadeOut(0);
        imgIndex--;
        if(imgIndex<0){
            imgIndex=$(images).length-1;
        }
        $('.box').fadeIn(500);
        $('.box').find('img').attr('src',`${$(images).eq(imgIndex).attr('src')}`);
    });

    $('.close').on('click', function() {
        overFlowElement.fadeOut(500, function() {
            overFlowElement.remove(); 
        });
    });

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

