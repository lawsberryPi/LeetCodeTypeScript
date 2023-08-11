export function reverseWords(s: string): string {
    const afterSplit = s.trim().split(/\s+/);
    return afterSplit.reverse().join(" ");
}

export function longestCommonPrefix(strs: string[]): string {
    if(strs.length === 0) return "";
    strs.sort((n1, n2) => n1.length - n2.length);
    let commonPrefix = strs[0];
    for(let index = 1; index < strs.length; index ++){
        for(let n = 0; n < commonPrefix.length; n ++){
            console.log(`${commonPrefix[n]} , ${strs[index][n]}`)
            if(commonPrefix[n] !== strs[index][n]){
                commonPrefix = commonPrefix.slice(0, n);
            }
            if(commonPrefix === "") return commonPrefix;
        }
    }
    return commonPrefix;    
};