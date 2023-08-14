let count = 0;
let count1 = 0;
let count2 = 0;
document.getElementById('gr-btn').addEventListener('click', function(){
    if(count==33){
        return alert ("Subhan Allah complete");
    }
    count=count+1;
    const pm = document.getElementById('ta');
    pm.innerText = count;
    
    
})
document.getElementById('r-btn').addEventListener('click', function(){
    if(count==0){
        return alert ("You can't put negetive value");
    }
    count=count-1;
    const pm = document.getElementById('ta');
    pm.innerText = count;
    
})
document.getElementById('gn-btn').addEventListener('click', function(){
    if(count1==33){
        return alert ("Alhamdulillah complete");
    }
    count1=count1+1;
    const pl = document.getElementById('t');
    pl.innerText = count1;
    
    
})
document.getElementById('re-btn').addEventListener('click', function(){
    if(count1==0){
        return alert ("You can't put negetive value");
    }
    count1=count1-1;
    const pl = document.getElementById('t');
    pl.innerText = count1;
    
})
document.getElementById('grn-btn').addEventListener('click', function(){
    if(count2==34){
        return alert ("Allah'hu Akbar complete");
    }
    count2=count2+1;
    const p = document.getElementById('tag');
    p.innerText = count2;
    
    
})
document.getElementById('rd-btn').addEventListener('click', function(){
    if(count2==0){
        return alert ("You can't put negetive value");
    }
    count2=count2-1;
    const p = document.getElementById('tag');
    p.innerText = count2;
    
})
document.getElementById('btn').addEventListener('click',function(){
    const p = document.getElementById('tag');
    const pm = document.getElementById('ta');
    const pl = document.getElementById('t');
    pl.innerText = 0;
    pm.innerText = 0;
    p.innerText = 0;
    count2=0;
    count1=0;
    count=0;
})
