// ABA
function isValidPalindrome(str: String): boolean {
    let start = 0;
    let end = str.length - 1;
    while(start < end) {
        if(str[start] === str[end]) {
            start++;
            end--;
        } else {
            return false;
        }
    }
    return true;
}