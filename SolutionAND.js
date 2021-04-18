/**
* The following is the function where the solution shall be written
*/
let result = [];
let combiStr;
let p=document.getElementById('numbers') ;
console.log(solution('236')); 
console.log(solution('A 3B2 C6D')); 
console.log(solution('ABC')); 

function solution(input) {
  const actualNum = input.replace(/[^0-9]/g,'');
      if(actualNum.toString()  =='' || actualNum.length==0)
      {
        p.innerText+='This is not a number,please enter number.'+'\n';
      }
      else
      {
          //logic for combinations when its a number 
          let numLength=actualNum.length;  
          permute(numLength,actualNum);   
          result=result.sort(function(x,y){return y-x});     
          p.innerText +='result of number'+actualNum+'='+result.join(',')+'\n';
          result=[];          
          numLength=0;           
      }
      return null;
  }
   
  function swapStr(strToSwap,posX,posY)
  { 
    let inputarray=strToSwap.split('').map(Number);
    const tempstr=inputarray[posX];
    inputarray[posX]=inputarray[posY];
    inputarray[posY]=tempstr; 
    strToSwap=inputarray.join('');
    return strToSwap;
  }

  function permute(n,combiStr)
  {
    if(n===1)
    {     
      result.push(combiStr.slice());     
      return;
    }
    permute(n-1,combiStr);
    for(let i=0;i< n-1;i++)
    {     
      if(n %2 ===0){         
        combiStr=swapStr(combiStr,i,n-1);
      }
      else
      {   
        combiStr=swapStr(combiStr,i,n-1);
      }
    permute(n-1,combiStr);
  }

}


