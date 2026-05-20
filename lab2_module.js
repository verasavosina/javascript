export function fib(n) {
    if (n < 0) return 0n;
    if (n === 0) return 0n;
    if (n === 1) return 1n;
    
    let prev = 0n;
    let curr = 1n;
    
    for (let i = 2; i <= n; i++) {
        let next = prev + curr;
        prev = curr;
        curr = next;
    }
    
    return curr;
}