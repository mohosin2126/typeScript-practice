{
    // mapped types 

    const arrOfNumbers: number[]=[1,2,3 ,4,5,6,7]

    // const arrayOfString:string[] = ["1", "2", "3", "4"]

    const arrayOfString:string[] = arrOfNumbers.map((num:number)=>num.toString())

    console.log(arrayOfString)

   

   type AreaNumber={
    height:number;
    width:number;
   }

    // type AreaString={
    //     height:string;
    //     width:string;
    // }


    type AreaString={
        [key in "height"|"width"]:string;
    }




}