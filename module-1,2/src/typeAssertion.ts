{
// 



let anything:any;

anything="Next Level WebDevelopment";

anything=222;
(anything as number)

const kgToGm=(value:string|number)=>{
    if (typeof value ==="string"){
        const convertedValue=parseFloat(value)
        return `The converted value is ${convertedValue}`
    }
    if(typeof value==="number"){
        return value*1000
    }
}

const result=kgToGm(1000) as number;
const result2=kgToGm("1000") as string;








// 

}