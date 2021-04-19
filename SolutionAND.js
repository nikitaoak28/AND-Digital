/**
* The following is the function where the solution shall be written
*/
let result = [];
let combiStr;
let p=document.getElementById('numbers') ;

console.log(solution('326'));
 console.log(solution('A3B 2C 6D'));
 console.log(solution('02518'));
 console.log(solution('ABCD'));
 console.log(solution('122'));
 console.log(solution('203'));

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
          let finalResult=[];  
          finalResult.push(result[0]);
          //if result has duplicates,remove them   
          for(let i=0;i<result.length;i++)
          {
            (!finalResult.includes(result[i]))? finalResult.push(result[i]):null;
          }
          finalResult=finalResult.sort(function(x,y){return y-x});               
          p.innerText +='result of number'+actualNum+'='+finalResult.join(',')+'\n';
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
      result.push(combiStr);     
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


