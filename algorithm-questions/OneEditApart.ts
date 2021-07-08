
// OneEditApart("cat", "dog") = false
// OneEditApart("cat", "cats") = true

// c a t
// c a t s
 
// OneEditApart("cat", "cut") = true
// OneEditApart("cat", "cast") = true
// OneEditApart("cat", "at") = true
// OneEditApart("cat", "act") = false

function swap(a: string, b: string): [string, string] {
   return [b, a];
}

export function oneEditApart(a: string, b: string): boolean {
    // HIT easy cases first
    if(a.length > b.length) [a, b] = swap(a,b);
    if(b.length - a.length > 1) return false;


    let difference = false;
    for(let i = 0, j = 0; i < a.length; i++, j++) {
        console.log(a[i], b[j]);
        if(a[i] !== b[j]){
            if(difference) return false; // saw second time
            difference = true;
            if(b.length > a.length) {
                i--;
            }
        }
    }
    return difference || b.length !== a.length;
}