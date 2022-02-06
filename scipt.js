const btnNext = document.querySelector('.next__button');
const cardText = document.querySelector('.card__paragraph');
const translateBtn = document.querySelector('.translate__button');


const objCard = {
    'Pretended to laught at a joke I didnt get':'Притворялся, что смеюсь над шуткой, которую не понял',
    'Missing a high five':'Пропустил \'Дай пять\'',
    'Had a nightmare about zombies chasing me':'Видел сон как меня преследуют зомби',
    'Ugly cried for no reason':'Жоска плакал без причины',
    'Scared myself in a mirror':'Пугался себя в зеркале',
    'Sang in a shower':'Пел в душе',
    'Lied to my parents about where I was going':'Лгал родителям о том, куда иду',
    'Stolen money from parents':'Крал деньги у родителей',
    'Forgotten the punchline of a joke':'Забывал кульминацию шутки',
    'Send text to a wrong person':'Ошибочно слал собщение не тому человеку',
    'Mistaken a man for a women or vise versa':'Принимал мужчину за женщину и наоборот',
    'Laughed so hard. I peed my pants':'Смеялся так, что писался в штаны',
    'Had diarrhea at at a friend\'s house':'Имел диарею пока был у друга',
    'Eaten something cold because I was too lazy to heat it up':'Ел холодную еду, потому что было лень греть',
    'Dipped french fries into a milkshake':'Окунал картошечку фри в коктейль',
    'Bought myself a Happy meal':'Покупал себе Хэппи мил',
    'Burnt my mouth willingly because I was too hungry to wait':'Обжигал рот, потому что был слишком голоден, чтобы ждать',
    'Eaten food while still standing with the fridge door open':'Ел еду, стоя с открытой дверцей холодильника',
    'Counted calories':'Считал калории',
    'Eaten from someone else\'s plate when they weren\'t looking':'Ел с чьей-либо тарелки, пока тот не видел',
    
}
let flag = true;


btnNext.addEventListener('click', nextFrase);
translateBtn.addEventListener('click', (e)=>{

    // console.log(e.target);
    if(flag){
        flag = false;
    }else{
        flag = true
    }
    console.log(flag);
    

});
function nextFrase(){
        let english = Object.keys(objCard);
        let englishGen = english[Math.floor(Math.random()*english.length)];

        let russian = Object.values(objCard);
        let russianhGen = russian[Math.floor(Math.random()*russian.length)];

    if(flag){
        cardText.innerHTML = englishGen;
    }else{
        cardText.innerHTML = russianhGen;
    }

    

    // let russian = objCard[englishGen];
    // translateBtn.addEventListener('click', (e)=>{

    //     console.log(e.target);
    //     flag == false;
        

    // });
   
}
