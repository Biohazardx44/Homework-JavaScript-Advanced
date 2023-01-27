const url = `https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        const allStudentsAvgHigherThan3 = data
            .filter((s) => s.averageGrade > 3);
        console.log(`All students with an average grade higher than 3:`, allStudentsAvgHigherThan3);

        const allFemaleStudentsAvg5 = data
            .filter((s) => s.gender === "Female")
            .filter((s) => s.averageGrade === 5)
            .map((s) => s.firstName + ` - Average Grade:${s.averageGrade}`);
        console.log(`All female student names with an average grade of 5:`, allFemaleStudentsAvg5);

        const allMaleStudentsLiveSkopjeOver18 = data
            .filter((s) => s.gender === "Male")
            .filter((s) => s.city === "Skopje")
            .filter((s) => s.age >= 18)
            .map((s) => s.firstName + ` ` + s.lastName);
        console.log(`All male student full names who live in Skopje and are over 18 years old:`, allMaleStudentsLiveSkopjeOver18);

        const avgAllFemaleStudentsOver24 = data
            .filter((s) => s.gender === "Female")
            .filter((s) => s.age >= 24)
            .map((s) => s.averageGrade);
        console.log(`The average grades of all female students over the age of 24:`, avgAllFemaleStudentsOver24);

        const allMaleStudentsNameStartingWithBAvgGradeHigherThan2 = data
            .filter((s) => s.gender === "Male")
            .filter((s) => s.firstName[0] === `B`)
            .filter((s) => s.averageGrade >= 2);
        console.log(`All male students with a name starting with B and average grade over 2:`, allMaleStudentsNameStartingWithBAvgGradeHigherThan2);
    });