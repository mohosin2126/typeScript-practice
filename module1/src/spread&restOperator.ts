{
// spread operator in array 

const bros1: string[]=["mir","Firoz","Mizan"]
const bros2:string[]=["Tonmoy","Nahid","rahat"]

bros1.push(...bros2)

// spread operator in object
const mentors1={
    typescript:"mezba",
    redux:"Mir",
    dbms:"Mizan"
}

const mentors2={
    prisma:"firoz",
    next:"Tonmoy",
    cloud:"Nahid"

}

const mentorList={
    ...mentors1,
    ...mentors2
}




// rest operator 

const greetFriends=(...friends:string[])=>{
   friends.forEach((friend:string)=>console.log(friend))
}

greetFriends("abul","babul","kabul")


}