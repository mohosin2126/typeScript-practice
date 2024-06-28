{
    // conditional types 

    type a1=null 
    type b=undefined

 type x=a1 extends null?true:false 

 type y=b extends null?true:b extends undefined?undefined:any;




}