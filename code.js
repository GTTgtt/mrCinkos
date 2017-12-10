var sources = [
    'Images/16708690_881671265308413_8700034839940904614_n.jpg',
    'Images/17155378_890516324423907_6978534014551206222_n.jpg',
    'Images/17351989_900638890078317_6040627547789626372_n.jpg',
    'Images/17425991_906389956169877_3976560945698747332_n.jpg',
    'Images/17553974_903595669782639_2069348189530159500_n.jpg',
    'Images/17760182_907577249384481_5282749482757405395_n.jpg',
    'Images/17796198_909631589179047_4781737284026554020_n.jpg',
    'Images/18193917_922598331215706_2414904208470151782_n.jpg',
    'Images/18320734_925331290942410_7075479937372484188_o.jpg',
    'Images/18519805_933494223459450_1458768780756240703_n.jpg',
    'Images/18581922_935714199904119_2930366751391018391_n.jpg',
    'Images/20638543_983063691835836_5830707556487186984_n.jpg',
    'Images/21586795_1000661993409339_5960846350675019291_o.jpg',
    'Images/22089735_1011189895689882_9165955314349736894_n.jpg',
    'Images/23244094_1029738583835013_6247404116621106411_n.jpg',
    'Images/24129682_1039817682827103_3551662723511911104_n.jpg',
    'Images/24852100_1046920802116791_2224022533775316733_n.jpg'
];
var images = [];
var new_img;
var i = 0;
var flag = 0;
var first, second, third;

function load(){
    //console.log('load() initialized');

    for(i = 0; i < sources.length; i++){
        new_img = document.createElement('img');
        new_img.setAttribute('src', sources[i]);
        images[i] = new_img;
        //console.log('loaded: ' + images[i]);
    }
    
    loadImages();
    
    for(i = 0; i < document.getElementsByTagName('input').length - 1; i++){
        document.getElementsByTagName('input')[i].addEventListener('click', function(){
            
        }, false);
    }
}

function loadImages(){
    var row_num = 0;
    var devide3 = parseInt(images.length / 3);
    var left = images.length - (devide3 * 3);
    
    third = devide3;
    //console.log(third);
    
    second = devide3 + parseInt(left / 2);
    //console.log(second);
    
    first = images.length - third - second;
    //console.log(first);
    
    
    for(i = 0; i < images.length; i++){
        //console.log(i);
        if(i == first) row_num++;
        if(i == second + first) row_num++;
        document.getElementsByClassName('row')[row_num].appendChild(images[i]);
    }
}

function move(direction){
    if(direction == 'right') moveRight();
    else moveLeft();
    
    /*
    var move1 = window.getComputedStyle(document.getElementsByClassName('row')[0].getElementsByTagName('img')[0], null).getPropertyValue('width');
    
    var move2 = window.getComputedStyle(document.getElementsByClassName('row')[1].getElementsByTagName('img')[0], null).getPropertyValue('width');
    
    var move3 = window.getComputedStyle(document.getElementsByClassName('row')[2].getElementsByTagName('img')[0], null).getPropertyValue('width');
    
    console.log(move1);
    
    document.getElementsByClassName('row')[0].getElementsByTagName('img')[0].style.marginLeft = 'calc((10px + '+move1+')*(-1))';
    document.getElementsByClassName('row')[0].getElementsByTagName('img')[0].style.visibility = 'hidden';
    */
}

function moveRight(){
    var firstRowImage_width = document.getElementsByClassName('row')[0].getElementsByTagName('img')[flag].clientWidth;
    
    var secondRowImage_width = document.getElementsByClassName('row')[1].getElementsByTagName('img')[flag].clientWidth;
    
    var thirdRowImage_width = document.getElementsByClassName('row')[2].getElementsByTagName('img')[flag].clientWidth;
    
    console.log(firstRowImage_width);
    console.log(secondRowImage_width);
    console.log(thirdRowImage_width);
}

function moveLeft(){
    
}


