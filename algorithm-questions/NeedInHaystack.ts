export function needleInHaystack(stringA: string, stringB: string){
    let haystackNdx = -1;
    if(stringB.length > stringA.length || !(stringA.length && stringB.length)) return haystackNdx;
    if(stringA.length === stringB.length) {
        return stringA === stringB ? 0 : -1
    } 
    for(let i = 0; i < stringA.length; i++) {
        if(stringA[i] === stringB[0]){
            haystackNdx = i;
            for(let j = 1; j < stringB.length; j++) {
                if(stringA[i + j] !== stringB[j]) {
                    haystackNdx = -1;
                    break;
                }
            }
            if(haystackNdx > -1) return haystackNdx;
        }
    }
    return haystackNdx;
}