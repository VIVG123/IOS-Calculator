let current = 0 ;
let buffer =  0 ;
const a = document.querySelector('.screen') ;
let sign = '0' ;

a.innerText = current ;

const b = document.querySelector('.main') ;
b.addEventListener('click' , function()
{   console.log(parseInt(event.target.innerText)) ;
    call(event.target.innerText) ;
    a.innerText = current ;
}
)

function call(value)
{
    if( !isNaN( parseInt(value) ) )
    {
        current = parseInt(value) + current*10 ;
        console.log(current) ;
        a.innerText = current ;
    } 

    else 
    {   
        
        switch(value)
        {
          case "C" : 
            current = 0 ;
            buffer = 0 ;
            break ;

          case "←" : 
            current = parseInt(current/10) ;
            buffer = current ;
            break ;

          case "=" :
            if(sign === "+")
              {
                current = current + buffer ;
              }

              if(sign === "-")
              {
                current = buffer - current ;
              }
              if(sign === "÷")
              {
                current = buffer/current ;
              }
              if(sign === "X")
              {
                current = current*buffer ;
              }
              
              else current = current + 0 ;
              
              sign = "0" ;
            break ;

          default : 
            sign = value ; 
            buffer = current ;
            current = 0 ;
            a.innerText = current ;
            break ;
        }

        
    }



}
//if(isNaN(parseInt(current)))


