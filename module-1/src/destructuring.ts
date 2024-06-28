// object destructure

const user={
    id:345,
    name:{
        firstName:"mezbaul",
        middleName:"abedin",
        lastName:"persian",
    },
    contactNo:"01770000000",
    address:"dhaka"

}


const {
    contactNo,
    name:{middleName}
}=user


//same goes for array 