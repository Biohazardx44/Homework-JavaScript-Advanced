const url = `https://swapi.dev/api/people/1`;

const btn = document.getElementById(`btn`);
btn.addEventListener(`click`, () => {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const name = data.name;
            const h1 = document.createElement(`h1`);
            h1.textContent = name;
            document.body.appendChild(h1);

            const table = document.createElement(`table`);
            document.body.appendChild(table);

            const tbody = document.createElement(`tbody`);
            table.appendChild(tbody);

            const height = document.createElement(`tr`);
            tbody.appendChild(height);

            const weight = document.createElement(`tr`);
            tbody.appendChild(weight);

            const eyeColor = document.createElement(`tr`);
            tbody.appendChild(eyeColor);

            const hairColor = document.createElement(`tr`);
            tbody.appendChild(hairColor);

            const heightRow = document.createElement(`td`);
            heightRow.textContent = `Height:`;
            height.appendChild(heightRow);
            const heightData = document.createElement(`td`);
            heightData.textContent = data.height;
            height.appendChild(heightData);

            const weightRow = document.createElement(`td`);
            weightRow.textContent = `Weight:`;
            weight.appendChild(weightRow);
            const weightData = document.createElement(`td`);
            weightData.textContent = data.mass;
            weight.appendChild(weightData);

            const eyeColorRow = document.createElement(`td`);
            eyeColorRow.textContent = `Eye Color:`;
            eyeColor.appendChild(eyeColorRow);
            const eyeColorData = document.createElement(`td`);
            eyeColorData.textContent = data.eye_color;
            eyeColor.appendChild(eyeColorData);

            const hairColorRow = document.createElement(`td`);
            hairColorRow.textContent = `Hair Color:`;
            hairColor.appendChild(hairColorRow);
            const hairColorData = document.createElement(`td`);
            hairColorData.textContent = data.hair_color;
            hairColor.appendChild(hairColorData);
        });
});