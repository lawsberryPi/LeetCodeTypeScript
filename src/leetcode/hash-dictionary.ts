const uniqueOccurrences = function uniqueOccurrences(arr: number[]): boolean {
    const trackingDict = new Map<number, number>();

    for (const eachElement of arr) {
        const value = trackingDict.get(eachElement) ?? 0;
        trackingDict.set(eachElement, value + 1);
    }

    const trackingHash = new Set<number>();
    for (const eachCount of trackingDict.values()) {
        if (trackingHash.has(eachCount)) {
            return false;
        }
        trackingHash.add(eachCount);
    }
    return true;
};

const equalPairs = function equalPairs(grid: number[][]): number {
    const rowTracking: { [row: string]: number } = {};
    const columnTracking: Array<Array<number>> = new Array<Array<number>>();

    grid.forEach((eachRow) => {
        const row = eachRow.join(',');
        if (row in rowTracking) {
            rowTracking[row] = rowTracking[row] + 1;
        } else {
            rowTracking[row] = 1;
        }
        for (let i = 0; i < grid.length; i++) {
            if (columnTracking[i]) {
                columnTracking[i].push(eachRow[i]);
            }
            else {
                columnTracking[i] = [eachRow[i]];
            }
        }
    });
    let totalCount = 0;
    var finalResult = columnTracking.map(eachColumn => eachColumn.join(','));
    for(const eachCombination of finalResult){
        if(eachCombination in rowTracking){
            totalCount = totalCount + rowTracking[eachCombination];
        }
    }
    console.log(finalResult);
    return totalCount;
};



export { uniqueOccurrences, equalPairs };