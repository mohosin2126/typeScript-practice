{
    //genreric type
    const rollNumbers:number[] =[3,6,8]
    const names:string[] =["hii","hello"]


// i can also write this like this 
    const rollNumber:Array<number> =[3,6,8]
    const name:Array<string> =["hii","hello"]


    // i can also make it dynamically 
    type GenericArray<T>=Array<T>

    const rollNumberss:GenericArray<number> =[3,6,8]
    const namess:GenericArray<string> =["hii","hello"]





    // 
}