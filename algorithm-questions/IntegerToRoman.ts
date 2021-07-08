
function integerToRoman(value: number): string {
    let string = [];
    let remainder = value;
    if(remainder > 4000 || remainder < 1) return '';
    const romans = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const num = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5 ,4 ,1]
    let i = 0;
    while(value > 0) {
       let quotient = Math.floor(value / num[i]);
        value %= num[i]; 
        for(let counter = 0; counter < quotient; counter++)
            string.push(romans[i]);
        i++;
    }
    return string.join('');
};

function romanToIneger(value: string): number{
    const romanTable: Record<string, number> = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000,
    }
    let i = value.length - 1;
    let integer = 0;
    while( i > -1) {
        let currentInteger = romanTable[value[i]];
        if(i < value.length - 1) {
            let followingInteger = romanTable[value[i + 1]];
            if(followingInteger > currentInteger) {
                integer -= currentInteger;
            } else {
                integer += currentInteger;
            }
        } else {
            integer += currentInteger;
        }
        i--;
    }
    return integer;
};

