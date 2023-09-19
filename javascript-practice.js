
function isPrime(num){
    var prime = true
    if(num <= 1){
        return ""
    }else{
        for(let i = 2; i < num; i++){
            if(num % i == 0){
                prime = false
                break
            }
        }

        if(prime){
            return num + " is a prime number"
        }else{
            return ""
        } 
    }
}
// print prime numbers from 1 - 100
for(i = 0; i < 30; i++){
    console.log(isPrime(i))
    console.log("Done")
}