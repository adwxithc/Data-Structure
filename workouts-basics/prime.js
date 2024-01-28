
        function isPrime(n){
            if(n<2) return false
            for( let i=2;i< n/2 ;i++ ){
                if(n%i==0) return false
            }
            return true
        }
        console.log(isPrime(5))
        console.log(isPrime(2))
        console.log(isPrime(6))
        console.log(isPrime(12))
        console.log(isPrime(17))
//O(n/2)t  O(1)s

        function isPrime2(n){
            if(n<2) return false
            for( let i=2;i< Math.sqrt(n) ;i++ ){
                if(n%i==0) return false
            }
            return true
        }
//O(sqrt(n))t  O(1)s

