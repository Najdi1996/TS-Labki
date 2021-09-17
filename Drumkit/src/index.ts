
let boomSound :HTMLAudioElement;
let clapSound : HTMLAudioElement;
let hihatSound :HTMLAudioElement;
let kickSound: HTMLAudioElement;
let operhantSound: HTMLAudioElement;
let rideSound: HTMLAudioElement;
let snareSound: HTMLAudioElement;
let tinkSound: HTMLAudioElement;
let tomSound: HTMLAudioElement;


let channel1:any[] =[];
let channel2:any[] =[];
let channel3:any[] =[];
let channel4:any[] =[];


let isChannel1Record:boolean =false;
let isChannel2Record:boolean =false;
let isChannel3Record:boolean =false;
let isChannel4Record:boolean =false;

let recordStartTime:any;


appStart();


function appStart() :void{
    document.body.addEventListener('keypress', onKeyDown);
    setChannels();
    getSounds();
}


function setChannels():void{
    document.querySelector('#chnl1').addEventListener('click', onPlayChannel1)
    document.querySelector('#chnl2').addEventListener('click', onPlayChannel2)
    document.querySelector('#chnl3').addEventListener('click', onPlayChannel3)
    document.querySelector('#chnl4').addEventListener('click', onPlayChannel4)

    document.querySelector('#rchnl1').addEventListener('click', onRecordChannel1)
    document.querySelector('#rchnl2').addEventListener('click', onRecordChannel2)
    document.querySelector('#rchnl3').addEventListener('click', onRecordChannel3)
    document.querySelector('#rchnl4').addEventListener('click', onRecordChannel4)

    document.querySelector('#stopr').addEventListener('click', onStopRecord)
}


function getSounds() :void{
    boomSound =document.querySelector('[data-sound="boom"]');
    clapSound=document.querySelector('[data-sound="clap"]');
    hihatSound=document.querySelector('[data-sound="hihat"]');
    kickSound=document.querySelector('[data-sound="kick"]');
    operhantSound=document.querySelector('[data-sound="operhant"]');
    rideSound=document.querySelector('[data-sound="ride"]');
    snareSound=document.querySelector('[data-sound="snare"]');
    tinkSound=document.querySelector('[data-sound="tink"]');
    tomSound=document.querySelector('[data-sound="tom"]');
    
}


function onPlayChannel1() :void{
channel1.forEach(sound=>{
    setTimeout(()=>playSound(sound.key),sound.time)
    
});
}

function onPlayChannel2() :void{
    channel2.forEach(sound=>{
        setTimeout(()=>playSound(sound.key),sound.time)
        
    });
}

function onPlayChannel3() :void{
    channel3.forEach(sound=>{
        setTimeout(()=>playSound(sound.key),sound.time)
        
    });
}

function onPlayChannel4() :void{
    channel4.forEach(sound=>{
        setTimeout(()=>playSound(sound.key),sound.time)
        
    });
}


function onRecordChannel1(ev :Event):void{
    channel1 =[]; 
    isChannel1Record =true;
    isChannel2Record =false;
    isChannel3Record =false;
    isChannel4Record =false;
    
    recordStartTime=ev.timeStamp;
}


function onRecordChannel2(ev : Event):void{
    channel2=[];
    isChannel1Record =false;
    isChannel2Record =true;
    isChannel3Record =false;
    isChannel4Record =false;
    recordStartTime=ev.timeStamp;
}


function onRecordChannel3(ev:Event):void{
    channel3=[];
    isChannel1Record =false;
    isChannel2Record =false;
    isChannel3Record =true;
    isChannel4Record =false;
    recordStartTime=ev.timeStamp;
}


function onRecordChannel4(ev:Event):void{
    channel4=[];
    isChannel1Record =false;
    isChannel2Record =false;
    isChannel3Record =false;
    isChannel4Record =true;
    recordStartTime=ev.timeStamp;
}


function onStopRecord():void{
isChannel1Record =false;
isChannel2Record=false;
isChannel3Record =false;
isChannel4Record =false;
}


function RecordChannel(ev: KeyboardEvent):void {
    const key=ev.key;
    const stampTime =ev.timeStamp;
    const time=stampTime-recordStartTime;

if(isChannel1Record==true) {channel1.push({key,time})}
else if(isChannel2Record==true) {channel2.push({key,time})}
else if(isChannel3Record==true) {channel3.push({key,time})}
else if(isChannel4Record==true) {channel4.push({key,time})}
}


function onKeyDown(ev: KeyboardEvent):void {
const key=ev.key;
console.log(ev);
RecordChannel(ev);
playSound(key);
}



function playSound(key:string):void{
    switch(key){
        case 'a':{hihatSound.currentTime =0;
            hihatSound.play();
        break;}
        case 's':{boomSound.currentTime =0;
            boomSound.play();
        break;}
        case 'd':{clapSound.currentTime =0;
            clapSound.play();
        break;}
        case 'f':{kickSound.currentTime =0;
            kickSound.play();
        break;}
        case 'g':{operhantSound.currentTime =0;
            operhantSound.play();
        break;}
        case 'q':{rideSound.currentTime =0;
            rideSound.play();
        break;}
        case 'w':{snareSound.currentTime =0;
            snareSound.play();
        break;}
        case 'e':{tinkSound.currentTime =0;
            tinkSound.play();
        break;}
        case 'r':{tomSound.currentTime =0;
            tomSound.play();
        break;}
    }

}