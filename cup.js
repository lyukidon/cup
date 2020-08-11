let can_u_see_the_cup=false;

let plate_arr=[document.getElementById('one'),document.getElementById('two'),document.getElementById('three'),document.getElementById('four')];

function making_cup(){
    if(can_u_see_the_cup===false){
        for (let i=0;i<plate_arr.length;i++){
            plate_arr[i].classList.add('cup');
        }
        document.getElementById('one').classList.add('cup_bottom');
        can_u_see_the_cup=true;
    }
    else{
        for (let i=0;i<plate_arr.length;i++){
            plate_arr[i].classList.remove('cup');
        }
        document.getElementById('one').classList.remove('cup_bottom');
        can_u_see_the_cup=false;
    }
}
document.getElementById('cup_appear_btn').addEventListener('click',making_cup);

let count=0;
function pouring_water(){
    if (count<4){
        if (can_u_see_the_cup===true){
            plate_arr[count].style.backgroundColor= 'aqua';
            count+=1;
        }
    }
}
document.getElementById('pour_water_btn').addEventListener('click',pouring_water);