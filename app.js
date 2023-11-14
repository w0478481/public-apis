
async function fetchData() {
    try {
        const response = await fetch("https://api.open5e.com/v1/races/?format=json");
        const races = await response.json();
        console.log(races);

        // Adding race information to the DOM
        let racesHTML = "";

        races.results.forEach((race) => {
            racesHTML += `<p><strong>Race Name:</strong> ${race.name} ${race.slug} ${race.desc}  </p>`;
        }); 

        // Append racesHTML to the body
        document.body.innerHTML += racesHTML;
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

fetchData();

console.log("Here are some D&D races:");
