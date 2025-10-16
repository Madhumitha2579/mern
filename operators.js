const mul = (a,b)=>{
    return a*b
}

const add = (a)=>{
    return mul(2,a)+a
}

const print = (a) =>{
    return add(a)+a
}



const chk = new Promise((res,rej)=>{
    setTimeout(()=>{
        console.log(print(5))
    },2000)
})

console.log("Before Call Promise")

chk.then(res=>console.log("Promise Resolved")).catch(err=>console.log("Promise Rejected")).finally(()=>console.log("Program Completed"))

console.log("After Call Promise")