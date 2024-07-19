const rob = function rob(nums: number[]): number {
    const trackingStack = new Array<Array<number>>();
    const startingPoint1 = [0];
    const startingPoint2 = [1];
    trackingStack.push(startingPoint1);
    trackingStack.push(startingPoint2);
    const finalScores = new Array<number>();
    // [1,2,3,1]
    // 4 - 1 = 3
    // 
    while (trackingStack.length > 0) {
        const currentProcessor = trackingStack.pop() ?? [];
        // jump one
        const futherestDistance = currentProcessor[currentProcessor.length - 1];
        if (futherestDistance < nums.length - 2) {
            var nextNode = currentProcessor.concat([futherestDistance + 2]);
            trackingStack.push(nextNode)
        }
        // jump two
        if (futherestDistance < nums.length - 3) {
            var nextTwoNode = currentProcessor.concat([futherestDistance + 3]);
            trackingStack.push(nextTwoNode)
        }

        if (futherestDistance == nums.length - 1) {
            let accumulator = 0;
            currentProcessor.forEach(element => {
                accumulator += element;
            });
            finalScores.push(accumulator);
        }
        if (futherestDistance == nums.length - 2) {
            let accumulator = 0;
            currentProcessor.forEach(element => {
                accumulator += element;
            });
            finalScores.push(accumulator);
        }
    }

    return Math.max(...finalScores)
};

export { rob };