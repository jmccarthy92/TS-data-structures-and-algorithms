function minimumAppendsForPalindrome(str: String): number{
    let start = 0;
    let end = str.length - 1;
    let count = 0;
    while(start < end) {
        if(str[start] !== str[end]) {
            end = str.length - 1;
            start = count + 1;
            count = start; 
        } else {
            start++;
            end--;
        }
    }
    return count;
}