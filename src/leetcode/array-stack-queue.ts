const removeStars = function removeStars(s: string): string {
    const trackingStack = new Array<string>();
    for (const eachChar of s) {
        if (eachChar === '*') {
            trackingStack.pop();
        }
        else {
            trackingStack.push(eachChar);
        }
    }
    return trackingStack.join('');
};

const asteroidCollision = function asteroidCollision(asteroids: number[]): number[] {
    const trackingStack = new Array<number>();
    for (const eachAsteroid of asteroids) {
        if (trackingStack.length >= 1) {
            let closesAsteroid = trackingStack.pop();

            // same sign then do nothing
            while ((closesAsteroid ?? 0 * eachAsteroid) < 0) {
                var absoluteClosestAsteriod = Math.abs(closesAsteroid ?? 0);
                var absoluteEachAsteroid = Math.abs(eachAsteroid);
                // the existing asteriod will be distroyed
                if (absoluteClosestAsteriod < absoluteEachAsteroid) {
                    closesAsteroid = trackingStack.pop();
                }
                else if(absoluteClosestAsteriod > absoluteEachAsteroid){
                    trackingStack.push(absoluteClosestAsteriod);
                }
            }
            trackingStack.push(closesAsteroid ?? 0);
            trackingStack.push(eachAsteroid);   
        }
    }
    return trackingStack;
};

export { removeStars, asteroidCollision };