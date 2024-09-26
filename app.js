
// Exercise 1 Section
console.log("EXERCISE 1:\n==========\n");

// Exercise 2 Section
console.log("EXERCISE 2:\n==========\n");



// Exercise 1 
function printOdds(count) {
    // Check if count is negative
    if (count < 0) {
        console.log("Please provide a non-negative number.");
        return;
    }

    // Loop from 1 to count
    for (let i = 1; i <= count; i++) {
        // Check if the number is odd
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
printOdds(-5);
printOdds(10);

// Exercise 2
// function checkAge(userName, Age){
//     if (Age > 16){
//         console.log(`Congrats ${userName}, you can drive!`);
//         return;
//     }else {
//         if (Age > 16) {
//             console.log(`Sorry ${userName}, but you need to wait until you're 16.`);
//         }
//     }
// }


 function checkAge(userName, age) {
    // Default values for optional parameters
    userName = userName || "Guest";
    age = age || 0;

    // Declare and initialize local variables
    const aboveSixteen = `Congrats ${userName}, you can drive!`;
    const belowSixteen = `Sorry ${userName}, but you need to wait until you're 16.`;

    // Determine if the age is below 16 and print the appropriate message
    if (age >= 16) {
        console.log(aboveSixteen);
    } else {
        console.log(belowSixteen);
    }
}
checkAge("adedapo", 21);
checkAge("Opeyemi", 12);

// Exercise 3
function determinePosition(x, y) {
    if (x === 0 && y === 0) {
        console.log("The point (0, 0) is at the origin.");
    } else if (x === 0) {
        console.log(`The point (${x}, ${y}) is on the y axis.`);
    } else if (y === 0) {
        console.log(`The point (${x}, ${y}) is on the x axis.`);
    } else if (x > 0 && y > 0) {
        console.log(`The point (${x}, ${y}) is in Quadrant 1.`);
    } else if (x < 0 && y > 0) {
        console.log(`The point (${x}, ${y}) is in Quadrant 2.`);
    } else if (x < 0 && y < 0) {
        console.log(`The point (${x}, ${y}) is in Quadrant 3.`);
    } else if (x > 0 && y < 0) {
        console.log(`The point (${x}, ${y}) is in Quadrant 4.`);
    }
}

determinePosition(0, 2);    
determinePosition(1, 2);    
determinePosition(-6, 18);  
determinePosition(0, 0);    

//Exercise 4
function determineTriangleType(side1, side2, side3) {
    // Check if the sides form a valid triangle
    if (side1 + side2 <= side3 || side1 + side3 <= side2 || side2 + side3 <= side1) {
        return "Invalid triangle";
    }

    // Determine the type of triangle
    if (side1 == side2 && side2 == side3) {
        return "Equilateral triangle";
    } else if (side1 == side2 || side1 == side3 || side2 == side3) {
        return "Isosceles triangle";
    } else {
        return "Scalene triangle";
    }
}

// Examples
console.log(determineTriangleType(1, 2, 2)); 
console.log(determineTriangleType(1, 1, 2));
console.log(determineTriangleType(3, 3, 3)); 
console.log(determineTriangleType(3, 4, 5)); 

//Exercise 4
function dataUsageFeedback(planLimit, day, usage) {
    // Calculating average daily usage so far
    const averageDailyUsage = usage / day;
    // Calculating projected usage for the entire period
    const projectedUsage = averageDailyUsage * 30;
    // Calculating remaining days
    const remainingDays = 30 - day;
    // Calculating remaining data
    const remainingData = planLimit - usage;
    // Calculating average daily usage allowed for the rest of the period
    const averageDailyUsageAllowed = remainingData / remainingDays;

    console.log(`Day ${day} of 30`);
    console.log(`You've used ${usage} GB out of your ${planLimit} GB plan.`);
    console.log(`Average daily usage so far: ${averageDailyUsage.toFixed(2)} GB/day`);

    if (projectedUsage > planLimit) {
        console.log(`You are EXCEEDING your average daily use (${averageDailyUsage.toFixed(2)} GB/day), continuing this high usage, you'll exceed your data plan by ${projectedUsage - planLimit} GB.`);
        console.log(`To stay below your data plan, use no more than ${averageDailyUsageAllowed.toFixed(2)} GB/day for the rest of the period.`);
    } else if (projectedUsage < planLimit) {
        console.log(`You are UNDER your average daily use (${averageDailyUsage.toFixed(2)} GB/day), continuing this usage, you'll have ${planLimit - projectedUsage} GB left.`);
        console.log(`To maximize your data plan, you can use up to ${averageDailyUsageAllowed.toFixed(2)} GB/day for the rest of the period.`);
    } else {
        console.log(`You are EXACTLY on track with your average daily use (${averageDailyUsage.toFixed(2)} GB/day).`);
    }

    if (remainingData <= 0) {
        console.log("You've run out of data!");
    } else {
        console.log(`You have ${remainingData.toFixed(2)} GB of data left for the remaining ${remainingDays} days.`);
    }
}

// Example usage
dataUsageFeedback(100, 15, 56);
