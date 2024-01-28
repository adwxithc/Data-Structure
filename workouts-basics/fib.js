
        function fibnacci(n){
            if(n==1) return [0]
            if(n==2) return [0, 1]
            const fib=[0,1]
            for(let i=2; i<n;i++){
                fib[i]=fib[i-1]+fib[i-2]
            }
            return fib
        }
         //complexity O(n)st
        function fibrec(n){
            if(n<2) return n
            return fibrec(n-1)+fibrec(n-2)
        }
        //complexity O(2^n)t
        // O(n)s

        function memo(n,mem={}){
            if(n<2) return n
            if(mem[n]!==undefined) return mem[n]
            mem[n] = memo(n-1,mem)+memo(n-2,mem)
            return mem[n]
        }

        console.log(memo(8))

