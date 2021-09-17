class StatsApp{
    
    
    Inputsnumber: HTMLInputElement; 
    dataDiv:any;
    Inputs :any;

   
    sumInput:HTMLInputElement;
    avgInput:HTMLInputElement;
    minInput:HTMLInputElement;
    maxInput:HTMLInputElement;

    
    constructor(){
        this.startApp();
    }

    startApp(){
        this.getInputs();
        this.createInputs();
        this.watchInputValues();
    }

    
   
    getInputs():void{
        this.Inputsnumber =document.querySelector('#inputs');
        this.Inputs=document.querySelector('.input-data');
        this.sumInput =document.querySelector('#sum');
        this.avgInput =document.querySelector('#avg');
        this.minInput =document.querySelector('#min');
        this.maxInput =document.querySelector('#max');
    }

    
    createInputs(){
        const quantity= +this.Inputsnumber.value;

        this.clearContent(); 

        for(let i=1;i<=quantity;i++)
        {
            
            var input = document.createElement("input");
            input.type = "number";
            input.className = "data"+i;
            input.value="0";
            
            
            var button =document.createElement("button");
            button.innerHTML = 'Delete';
            button.className ="delete"+i;
            button.onclick = function()
            {
                let inputDiv=document.querySelector('.input-data');
                let classname =document.querySelector('.delete'+i);
                let dataname =document.querySelector('.data'+i);
                let brname =document.querySelector('.br'+i);
                
                inputDiv.removeChild(classname);
                inputDiv.removeChild(dataname);
                inputDiv.removeChild(brname);

                
            }

            var br=document.createElement('br');
            br.className ='br'+i;
            
            
            this.dataDiv =document.querySelector('.input-data').appendChild(input);
            this.dataDiv =document.querySelector('.input-data').appendChild(button);
            this.dataDiv =document.querySelector('.input-data').appendChild(br);
            
            
        }
        this.watchInputValues();
    }

    
    clearContent():void{
        this.dataDiv = document.querySelector('.input-data');

        while (this.dataDiv.firstChild) {
            this.dataDiv.removeChild(this.dataDiv.firstChild);
        } 
    }

    
    
    watchInputValues():void {
        this.Inputsnumber.addEventListener('input', ()=>this.createInputs()); 

        this.Inputs.addEventListener('click', ()=>this.computeData());
        
        
        let itemsnumber =document.querySelector('.input-data').childElementCount;
        for(let i=0;i<itemsnumber;i++)
        {
            this.Inputs.children[i].addEventListener('input', ()=>this.computeData());
        }
        
        
    }

    computeData():void{
       let itemsnumber =document.querySelector('.input-data').childElementCount; 

       let itemstable =[]; 

       
       for(let i=0;i<itemsnumber;i++)
       {
           itemstable[i]=this.Inputs.children[i].value;
       }

       
       let sum =0;
       let min=0;
       let max=0;
       
    
       for(let i=0;i<itemstable.length;)
       {
           let numberelement=parseInt(itemstable[i])
           if(i==0)
           {
           min =numberelement;
           max=numberelement;
           }
           if(min>numberelement){min =numberelement}
           if(max<numberelement){max =numberelement}
           sum =sum+numberelement;

           i=i+3;
       }

       let avg=sum/(itemstable.length/3); 
       
        this.showStats(sum, avg, min, max);

    }

  
    showStats(sum:number,avg:number,min:number,max:number){
        this.sumInput.value =sum.toString();
        this.avgInput.value =avg.toString();
        this.minInput.value =min.toString();
        this.maxInput.value =max.toString();
    }
}

const App =new StatsApp();