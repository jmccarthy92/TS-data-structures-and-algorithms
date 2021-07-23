export function newtonsSqrt(num: number, threshold: number = 0.0001): number {
    let x = num;
    let root;
    while(true) {
        root = newtonsRoot(x,num);
        if(Math.abs(root - x) < threshold) break;
        x = root; 
    }
    return Math.round(root);
}

function newtonsRoot(x: number,n: number): number {
    return 0.5 * (x + (n/x));
}