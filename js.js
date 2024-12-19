let home = document.querySelector('#home');
let back1 = document.querySelector('#back1');
let main = document.querySelector('#main');
let backimg2 = document.querySelector('#backimg2');
let backimg3 = document.querySelector('#backimg3');
let menuCont = document.querySelector('#menuCont');
let timeCont = document.querySelector('#timeCont');
let timesplit = document.querySelectorAll('.timesplit');
let paperimg = document.querySelectorAll('.paperimg');
let placeSplit = document.querySelectorAll('.placeSplit');
let splitCont = document.querySelector('#splitCont');
let line = document.querySelectorAll('.line');
let map = document.querySelectorAll('.map');
let middleBack = document.querySelector('#middleBack');
let placebgimg = document.querySelector('#placebgimg');
let placeSubTitle = document.querySelectorAll('.placeSubTitle');
let placeTitle = document.querySelectorAll('.placeTitle');
let placeSubInfo = document.querySelectorAll('.placeSubInfo');
let detailInfo = document.querySelectorAll('.detailInfo');
let menumenu = document.querySelectorAll('.menumenu');

let h2 = document.querySelectorAll('h2');

let paper1Scene = 0;
let paper2Scene = 0;
let timeScene = 0;
let menuScene = 0;
let placeScene0 = 0;
let placeScene1 = 0;
let placeScene2 = 0;
let placeScene3 = 0;

if(window.innerWidth > 768){
//컴퓨터
paperimg[1].addEventListener('click', flipFn);
function flipFn(){
flip2Fn();
}



backimg2.addEventListener('click', flip1Fn);
function flip1Fn(){
    switch(paper1Scene){
        case 0: 
            backimg2.style.transform = 'rotateY(-180deg)';
            setTimeout(()=>{backimg2.style.zIndex = '5';}, 300);
            paper1Scene = 1;
            break;
        case 1:
            backimg2.style.transform = 'rotateY(0deg)';
            backimg2.style.zIndex = '7'
            paper1Scene = 0;
            break;
    }
}

menuCont.addEventListener('click', flip4Fn);
function flip4Fn(){
    if(menuScene == 1){
        main.style.transform = 'rotateY(0deg)';
        setTimeout(()=>{main.style.zIndex = '6';}, 300);
        paper2Scene = 0;
        menuScene = 0;
    }
    if(paper2Scene == 1){
        menuScene = 1;
    }
    console.log('flip4');
}

menumenu[0].addEventListener('click',flip2_0Fn);
menumenu[1].addEventListener('click',flip2_1Fn);
menumenu[2].addEventListener('click',flip2_2Fn);
menumenu[3].addEventListener('click',flip2_3Fn);

function flip2_0Fn(){
    flip2Fn();
    place0Fn();
    placeScene0 = 1;
    console.log(paper2Scene);
}
function flip2_1Fn(){
    flip2Fn();
    place1Fn();
    placeScene1 = 1;
    console.log(paper2Scene);
}
function flip2_2Fn(){
    flip2Fn();
    place2Fn();
    placeScene2 = 1;
    console.log(paper2Scene);
}
function flip2_3Fn(){
    flip2Fn();
    place3Fn();
    placeScene3 = 1;
    console.log(paper2Scene);
}

function flip2Fn(){
    switch(paper2Scene){
        case 0: 
            main.style.transform = 'rotateY(-180deg)';
            setTimeout(()=>{main.style.zIndex = '8';}, 300);
            paper2Scene = 1;
            break;
        case 1:
            main.style.transform = 'rotateY(0deg)';
            setTimeout(()=>{main.style.zIndex = '6';}, 300);
            paper2Scene = 0;
            break;
    }
    console.log('flip2');
}




placeSplit[0].addEventListener('click',place0Fn)

function place0Fn(){
    switch(placeScene0){
        case 0:
            placeFn();
            placeSplit[0].classList.remove('place25');
            placeSplit[0].classList.add('place100');
            placeSubTitle[0].classList.remove('fCG');
            placeTitle[0].classList.remove('fCG');
            placeTitle[0].classList.remove('fS1');
            placeTitle[0].classList.add('fS0');
            placeSubInfo[0].classList.remove('fS2');
            placeSubInfo[0].classList.add('fS0');
            detailInfo[0].classList.remove('fS0');
            detailInfo[0].classList.add('fS2');
            map[0].classList.remove('place0');
            map[0].classList.add('place80');
            placeScene0 = 1;
            break;
        case 1:
            placeFn();
            placeScene0 = 0;
            break;
    }
};
placeSplit[1].addEventListener('click',place1Fn)

function place1Fn(){
    switch(placeScene1){
        case 0:
            placeFn();
            placeSplit[1].classList.remove('place25');
            placeSplit[1].classList.add('place100');
            placeSubTitle[1].classList.remove('fCG');
            placeTitle[1].classList.remove('fCG');
            placeTitle[1].classList.remove('fS1');
            placeTitle[1].classList.add('fS0');
            placeSubInfo[1].classList.remove('fS2');
            placeSubInfo[1].classList.add('fS0');
            detailInfo[1].classList.remove('fS0');
            detailInfo[1].classList.add('fS2');
            map[1].classList.remove('place0');
            map[1].classList.add('place80');
            placeScene1 = 1;
            break;
        case 1:
            placeFn();
            placeScene1 = 0;
            break;
    }
    
};
placeSplit[2].addEventListener('click',place2Fn)

function place2Fn(){
    switch(placeScene2){
        case 0:
            placeFn();
            placeSplit[2].classList.remove('place25');
            placeSplit[2].classList.add('place100');
            placeSubTitle[2].classList.remove('fCG');
            placeTitle[2].classList.remove('fCG');
            placeTitle[2].classList.remove('fS1');
            placeTitle[2].classList.add('fS0');
            placeSubInfo[2].classList.remove('fS2');
            placeSubInfo[2].classList.add('fS0');
            detailInfo[2].classList.remove('fS0');
            detailInfo[2].classList.add('fS2');
            map[2].classList.remove('place0');
            map[2].classList.add('place80');
            placeScene2 = 1;
            break;
        case 1:
            placeFn();
            placeScene2 = 0;
            break;
    }
};
placeSplit[3].addEventListener('click',place3Fn)

function place3Fn(){
    switch(placeScene3){
        case 0:
            placeFn();
            placeSplit[3].classList.remove('place25');
            placeSplit[3].classList.add('place100');
            placeSubTitle[3].classList.remove('fCG');
            placeTitle[3].classList.remove('fCG');
            
            placeTitle[3].classList.remove('fS1');
            placeTitle[3].classList.add('fS0');
            placeSubInfo[3].classList.remove('fS2');
            placeSubInfo[3].classList.add('fS0');
            detailInfo[3].classList.remove('fS0');
            detailInfo[3].classList.add('fS2');
            map[3].classList.remove('place0');
            map[3].classList.add('place80');
            placeScene3 = 1;
            break;
        case 1:
            placeFn();
            placeScene3 = 0;
            break;
    }
};
function placeFn(){
    for(i=0;i<4;i++){
        placeSplit[i].classList.remove('place100');
        placeSplit[i].classList.add('place25');
        placeSubTitle[i].classList.add('fCG');
        placeTitle[i].classList.add('fCG');
        placeTitle[i].classList.remove('fS0');
        placeTitle[i].classList.add('fS1');
        placeSubInfo[i].classList.remove('fS0');
        placeSubInfo[i].classList.add('fS2');
        detailInfo[i].classList.remove('fS2');
        detailInfo[i].classList.add('fS0');
        map[i].classList.remove('place80');
        map[i].classList.add('place0');
    }
}




}else{ //모바일
    for(i=0;i<3;i++){
        line[i].src = "img/line_side.png";
    }
    for(i=0;i<3;i++){
        paperimg[i].src = 'img/back22_side.png';
    }
    middleBack.src = 'img/middleSide.png';


    backimg2.addEventListener('click', flip1Fn);
    function flip1Fn(){
        switch(paper1Scene){
            case 0: 
                backimg2.style.transform = 'rotateX(-180deg)';
                setTimeout(()=>{backimg2.style.zIndex = '6';}, 300);
                paper1Scene = 1;
                break;
            case 1:
                backimg2.style.transform = 'rotateX(0deg)';
                backimg2.style.zIndex = '7';
                paper1Scene = 0;
                break;
        }
    }

    menuCont.addEventListener('click', flip4Fn);
    function flip4Fn(){
        if(menuScene == 1){
            main.style.transform = 'rotateX(0deg)';
            setTimeout(()=>{main.style.zIndex = '6';}, 300);
            paper2Scene = 0;
            menuScene = 0;
        }
        if(paper2Scene == 1){
            menuScene = 1;
        }
        console.log('flip4');
    }
    
    menumenu[0].addEventListener('click',flip2_0Fn);
    menumenu[1].addEventListener('click',flip2_1Fn);
    menumenu[2].addEventListener('click',flip2_2Fn);
    menumenu[3].addEventListener('click',flip2_3Fn);
    
    function flip2_0Fn(){
        flip2Fn();
        place0Fn();
        placeScene0 = 1;
        console.log(paper2Scene);
    }
    function flip2_1Fn(){
        flip2Fn();
        place1Fn();
        placeScene1 = 1;
        console.log(paper2Scene);
    }
    function flip2_2Fn(){
        flip2Fn();
        place2Fn();
        placeScene2 = 1;
        console.log(paper2Scene);
    }
    function flip2_3Fn(){
        flip2Fn();
        place3Fn();
        placeScene3 = 1;
        console.log(paper2Scene);
    }
    
    function flip2Fn(){
        switch(paper2Scene){
            case 0: 
                main.style.transform = 'rotateX(-180deg)';
                setTimeout(()=>{main.style.zIndex = '8';}, 300);
                paper2Scene = 1;
                break;
            case 1:
                main.style.transform = 'rotateX(0deg)';
                setTimeout(()=>{main.style.zIndex = '6';}, 300);
                paper2Scene = 0;
                break;
        }
        console.log('flip2');
    }
    


    placeSplit[0].addEventListener('click',place0Fn)

    function place0Fn(){
        switch(placeScene0){
            case 0:
                placeFn();
                placeSplit[0].classList.remove('place10');
                placeSplit[0].classList.add('place100');
                placeSubTitle[0].classList.remove('mfCG');
                placeSubTitle[0].classList.add('mfS2');
                placeSubTitle[0].classList.remove('mfS1');
                placeTitle[0].classList.add('mfS1');
                placeTitle[0].classList.remove('mfS0');
                placeTitle[0].classList.remove('mfCG');
                placeSubInfo[0].classList.remove('mfS0');
                placeSubInfo[0].classList.add('mfS1');
        
                map[0].classList.remove('place0');
                map[0].classList.add('place80');
                placeScene0 = 1;
                break;
            case 1:
                placeFn();
                for(i=0;i<4;i++){
                    placeSplit[i].classList.remove('place10');
                    placeSplit[i].classList.add('place25');

                }
                placeScene0 = 0;
                break;
        }
    };
    placeSplit[1].addEventListener('click',place1Fn)

    function place1Fn(){
        switch(placeScene1){
            case 0:
                placeFn();
                placeSplit[1].classList.remove('place10');
                placeSplit[1].classList.add('place100');
                placeSubTitle[1].classList.remove('mfCG');
                placeSubTitle[1].classList.add('mfS2');
                placeSubTitle[1].classList.remove('mfS1');
                placeTitle[1].classList.add('mfS1');
                placeTitle[1].classList.remove('mfS0');
                placeTitle[1].classList.remove('mfCG');
                placeSubInfo[1].classList.remove('mfS0');
                placeSubInfo[1].classList.add('mfS1');
                
                map[1].classList.remove('place0');
                map[1].classList.add('place80');
                placeScene1 = 1;
                break;
            case 1:
                placeFn();
                for(i=0;i<4;i++){
                    placeSplit[i].classList.remove('place10');
                    placeSplit[i].classList.add('place25');

                }
                placeScene1 = 0;
                break;
        }
    };
    placeSplit[2].addEventListener('click',place2Fn)

    function place2Fn(){
        switch(placeScene2){
            case 0:
                placeFn();
                placeSplit[2].classList.remove('place10');
                placeSplit[2].classList.add('place100');
                placeSubTitle[2].classList.remove('mfCG');
                placeSubTitle[2].classList.add('mfS2');
                placeSubTitle[2].classList.remove('mfS1');
                placeTitle[2].classList.add('mfS1');
                placeTitle[2].classList.remove('mfS0');
                placeTitle[2].classList.remove('mfCG');
                placeSubInfo[2].classList.remove('mfS0');
                placeSubInfo[2].classList.add('mfS1');
        
                map[2].classList.remove('place0');
                map[2].classList.add('place80');
                placeScene2 = 1;
                break;
            case 1:
                placeFn();
                for(i=0;i<4;i++){
                    placeSplit[i].classList.remove('place10');
                    placeSplit[i].classList.add('place25');

                }
                placeScene2 = 0;
                break;
        }
    };
    placeSplit[3].addEventListener('click',place3Fn)

    function place3Fn(){
        switch(placeScene3){
            case 0:
                placeFn();
                placeSplit[3].classList.remove('place10');
                placeSplit[3].classList.add('place100');
                placeSubTitle[3].classList.remove('mfCG');
                placeSubTitle[3].classList.add('mfS2');
                placeSubTitle[3].classList.remove('mfS1');
                placeTitle[3].classList.add('mfS1');
                placeTitle[3].classList.remove('mfS0');
                placeTitle[3].classList.remove('mfCG');
                placeSubInfo[3].classList.remove('mfS0');
                placeSubInfo[3].classList.add('mfS1');
        
                map[3].classList.remove('place0');
                map[3].classList.add('place80');
                placeScene3 = 1;
                break;
            case 1:
                placeFn();
                for(i=0;i<4;i++){
                    placeSplit[i].classList.remove('place10');
                    placeSplit[i].classList.add('place25');

                }
                placeScene3 = 0;
                break;
        }
    };
    function placeFn(){
        for(i=0;i<4;i++){
            console.log('hel    o');
            placeSplit[i].classList.remove('place100');
            placeSplit[i].classList.remove('place25');

            placeSubTitle[i].classList.add('mfCG');
            placeSubTitle[i].classList.remove('mfS2');
            placeSubTitle[i].classList.add('mfS1');
            
            placeTitle[i].classList.remove('mfS1');
            placeTitle[i].classList.add('mfS0');

            placeTitle[i].classList.add('mfCG');
            placeSubInfo[i].classList.add('mfS0');
            placeSubInfo[i].classList.remove('mfS1');

            placeSplit[i].classList.add('place10');
            map[i].classList.remove('place80');
            map[i].classList.add('place0');
        }
    }



}

