{

 // type guard 

    // type of operator in type guard 

type Alphanumeric=string|number;


    const add =(
        param1:Alphanumeric,
         param2:Alphanumeric,
    ):Alphanumeric =>{
        if(typeof param1==="number" && typeof param2==="number"){
        return param1 + param2 
    }

    else {
        return param1.toString() + param2.toString()
    }
}

const result1=add(1,3)


// type of in gurard 
type NormalUser={
    name:string;
}

type AdminUser={
    name:string;
    role:"admin";
}

const getUser = (user:AdminUser|NormalUser) =>{
    if("role" in user){
        return user.role && user.name
    }
    else{
        return user.name 
    }
}
const normalUser:NormalUser={
    name:"mr. Normal Bhai"
}
}
   


