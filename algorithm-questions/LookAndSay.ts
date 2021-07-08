// 1
// 11
// 21
// 1211
// 111221
// 312211
// 13112221
// 1113213211
// 31131211131221
// 13211311123113112211
function getSayValue(n: string): string {
    let count = 1;
    let result = '';
    let current = n[0];

    for(let i = 1; i <= n.length; i++) {
        if(current !== n[i] || i === n.length) {
            result += `${count}${current}`;
            current = n[i];
            count = 1;
        } else {
            count++;
        }
    }
    return result;
}


function lookAndSay(n: number) {
    let val = '1';
    for(let i = 0; i < n; i++) {
        console.log(val);
        val = getSayValue(val);
    }
}
