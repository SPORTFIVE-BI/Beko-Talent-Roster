// --- DATA SECTION ---
const countries = [
  "UK", "France", "Romania", "Germany", "Spain", "Netherlands", "Czechia", "Egypt", "Morocco"
];

// Budget data injected from budgets.csv
const athleteBudgets = {
  "Jude Bellingham": 1.5,
  "Bukayo Saka": 0.8,
  "Jamal Musiala": 1.5,
  "Omar Marmoush": 0.5,
  "Achraf Hakimi": 0.8,
  "Virgil Van Dijk": 1.2,
  "Aitana Bonmati": 0.5,
  "Salma Paralluelo": 0.3,
  "Alexia Putellas": 0.3,
  "Carlos Alcaraz": 2.5,
  "Alex Zverev": 0.5,
  "Ons Jabeur": 0.5,
  "Marketa Vondrousova": 0.5,
  "Lando Norris": 1.5,
  "Charles Leclerc": 1.5,
  "Carlos Sainz": 1.0,
  "Pierre Gasly": 0.8,
  "Marc Marquez": 0.6,
  "Victor Wembanyama": 3.0,
  "Nikola Jokic": 2.0,
  "Luka Doncic": 3.0,
  "Mathieu Van Der Poel": 0.5,
  "Remo Evenepoel": 0.3,
  "Leon Marchand": 0.4,
  "Alica Schmidt": 0.5,
  "Femke Bol": 0.3
};

const athletes = [
  { name: "Jude Bellingham", data: [10.0, 3.8, 3.1, 9.8, 6.8, 5.6, 4.1, 2.1, 2.7], sport: "Football", gender: "Male", nationality: "United Kingdom", social: 42477775 },
  { name: "Bukayo Saka", data: [10.0, 2.0, 2.2, 2.0, 2.5, 2.4, 1.9, 1.9, 1.7], sport: "Football", gender: "Male", nationality: "United Kingdom", social: 13480403 },
  { name: "Jamal Musiala", data: [2.6, 1.8, 2.1, 6.9, 2.4, 2.2, 1.8, 1.8, 1.6], sport: "Football", gender: "Male", nationality: "Germany", social: 10444721 },
  { name: "Omar Marmoush", data: [2.6, 1.6, 2.0, 3.1, 2.0, 1.9, 1.6, 7.3, 1.6], sport: "Football", gender: "Male", nationality: "Egypt", social: 6058172 },
  { name: "Achraf Hakimi", data: [2.3, 4.4, 2.4, 3.1, 6.2, 2.7, 1.8, 2.5, 10.0], sport: "Football", gender: "Male", nationality: "Morocco", social: 29572448 },
  { name: "Virgil Van Dijk", data: [7.3, 2.6, 3.0, 2.6, 3.5, 8.4, 2.5, 3.6, 2.7], sport: "Football", gender: "Male", nationality: "Netherlands", social: 20292575 },
  { name: "Aitana Bonmati", data: [0.6, 0.4, 0.4, 0.4, 4.9, 0.5, 0.2, 0.2, 0.3], sport: "Football", gender: "Female", nationality: "Spain", social: 2829806 },
  { name: "Salma Paralluelo", data: [0.6, 0.3, 0.4, 0.4, 4.1, 0.4, 0.2, 0.1, 0.1], sport: "Football", gender: "Female", nationality: "Spain", social: 670322 },
  { name: "Alexia Putellas", data: [0.7, 0.5, 0.4, 0.4, 6.1, 0.6, 0.3, 0.2, 0.4], sport: "Football", gender: "Female", nationality: "Spain", social: 5233736 },
  { name: "Carlos Alcaraz", data: [1.9, 2.2, 2.0, 1.0, 10.0, 1.2, 1.6, 0.6, 0.7], sport: "Tennis", gender: "Male", nationality: "Spain", social: 8625490 },
  { name: "Alex Zverev", data: [1.6, 1.5, 1.8, 3.1, 1.7, 1.0, 1.6, 0.6, 0.6], sport: "Tennis", gender: "Male", nationality: "Germany", social: 3000741 },
  { name: "Ons Jabeur", data: [1.5, 1.4, 1.7, 0.8, 1.5, 0.9, 1.3, 2.6, 2.6], sport: "Tennis", gender: "Female", nationality: "Tunisia", social: 3305023 },
  { name: "Marketa Vondrousova", data: [1.4, 1.3, 1.7, 0.8, 1.4, 0.9, 4.2, 0.6, 0.6], sport: "Tennis", gender: "Female", nationality: "Czechia", social: 172069 },
  { name: "Lando Norris", data: [7.5, 1.7, 1.5, 1.8, 3.0, 6.6, 1.7, 0.3, 0.4], sport: "Motorsport", gender: "Male", nationality: "United Kingdom", social: 17715648 },
  { name: "Charles Leclerc", data: [4.4, 5.5, 2.1, 2.0, 3.2, 4.7, 2.0, 0.3, 0.5], sport: "Motorsport", gender: "Male", nationality: "France", social: 28033179 },
  { name: "Carlos Sainz", data: [4.4, 1.8, 1.6, 1.5, 10.0, 4.6, 1.6, 0.3, 0.4], sport: "Motorsport", gender: "Male", nationality: "Spain", social: 18686079 },
  { name: "Pierre Gasly", data: [2.7, 4.6, 1.2, 1.2, 2.0, 4.6, 1.2, 0.3, 0.4], sport: "Motorsport", gender: "Male", nationality: "France", social: 8316921 },
  { name: "Marc Marquez", data: [1.1, 0.9, 0.5, 0.6, 10.0, 0.7, 0.8, 0.1, 0.1], sport: "Motorsport", gender: "Male", nationality: "Spain", social: 8250532 },
  { name: "Victor Wembanyama", data: [0.8, 5.9, 0.9, 0.7, 1.6, 0.7, 0.7, 0.4, 0.4], sport: "Basketball", gender: "Male", nationality: "France", social: 6464101 },
  { name: "Nikola Jokic", data: [0.6, 0.7, 0.8, 0.6, 1.2, 0.5, 0.6, 0.4, 0.4], sport: "Basketball", gender: "Male", nationality: "Serbia", social: 690000 },
  { name: "Luka Doncic", data: [1.1, 1.3, 1.1, 1.0, 4.6, 0.8, 0.9, 0.5, 0.5], sport: "Basketball", gender: "Male", nationality: "Slovenia", social: 18774339 },
  { name: "Mathieu Van Der Poel", data: [0.8, 1.2, 0.8, 0.6, 1.8, 4.5, 1.1, 0.2, 0.3], sport: "Cycling", gender: "Male", nationality: "Netherlands", social: 1575890 },
  { name: "Remo Evenepoel", data: [0.8, 1.2, 0.8, 0.6, 1.8, 1.4, 1.2, 0.2, 0.4], sport: "Cycling", gender: "Male", nationality: "Belgium", social: 1815195 },
  { name: "Leon Marchand", data: [0.2, 5.2, 0.5, 0.3, 0.5, 0.2, 0.2, 0.1, 0.1], sport: "Swimming", gender: "Male", nationality: "France", social: 1669426 },
  { name: "Alica Schmidt", data: [1.3, 0.9, 0.7, 3.9, 1.1, 1.0, 1.6, 0.2, 0.6], sport: "Athletics", gender: "Female", nationality: "Germany", social: 8355717 },
  { name: "Femke Bol", data: [0.9, 0.5, 0.5, 0.6, 0.6, 3.8, 0.9, 0.2, 0.5], sport: "Athletics", gender: "Female", nationality: "Netherlands", social: 649187 }
];
// Attach cost to each athlete
athletes.forEach(a => {
  a.cost = athleteBudgets[a.name] || 0;
});
// --- END DATA SECTION ---

function getColor(index) {
  const palette = [
    "#e6194b","#3cb44b","#ffe119","#4363d8","#f58231","#911eb4","#46f0f0","#f032e6",
    "#bcf60c","#fabebe","#008080","#e6beff","#9a6324","#fffac8","#800000","#aaffc3",
    "#808000","#ffd8b1","#000075","#808080","#000000"
  ];
  return palette[index % palette.length];
}

// Generate checkboxes dynamically
const optionsList = document.getElementById("options-list");
athletes.forEach((athlete, idx) => {
  const label = document.createElement("label");
  label.className = "athlete-option";
  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.value = idx;
  checkbox.checked = idx < 5; // Start with the first 5 athletes selected
  label.appendChild(checkbox);
  label.appendChild(document.createTextNode(athlete.name));
  optionsList.appendChild(label);
  optionsList.appendChild(document.createElement("br"));
});

// Get indices of selected athletes
function getSelectedAthleteIndices() {
  const checkboxes = optionsList.querySelectorAll("input[type=checkbox]");
  return Array.from(checkboxes).reduce((arr, cb, idx) => {
    if (cb.checked) arr.push(idx);
    return arr;
  }, []);
}

// Chart.js setup
let radarChart;
function updateChart() {
  const selected = getSelectedAthleteIndices();

  // Athlete datasets
  const athleteDatasets = selected.map(idx => ({
    label: athletes[idx].name,
    data: athletes[idx].data,
    fill: true,
    borderColor: getColor(idx),
    backgroundColor: getColor(idx) + "55", // semi-transparent
    pointBackgroundColor: getColor(idx),
    pointBorderColor: "#fff",
    pointHoverBackgroundColor: "#fff",
    pointHoverBorderColor: getColor(idx)
  }));

  // Cumulative Country Score dataset (new)
  const cumulativeData = cumulativeCountryScores(selected).map(Number); // Convert to number
  const cumulativeDataset = {
    label: 'Cumulative Country Score',
    data: cumulativeData,
    fill: false,
    borderColor: '#222',
    borderWidth: 3,
    borderDash: [10, 6], // dashed line
    pointBackgroundColor: '#222',
    pointBorderColor: '#fff',
    pointRadius: 6,
    pointHoverRadius: 8,
    order: 0 // Draw on top
  };

  // Combine datasets: athletes plus cumulative
  const datasets = [
    ...athleteDatasets,
    cumulativeDataset
  ];

  if (radarChart) {
    radarChart.data.datasets = datasets;
    radarChart.update();
  } else {
    const ctx = document.getElementById("radarChart").getContext("2d");
    radarChart = new Chart(ctx, {
      type: "radar",
      data: {
        labels: countries,
        datasets: datasets
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top"
          },
          title: {
            display: false
          }
        },
        scales: {
          r: {
            beginAtZero: true,
            min: 0,
            max: 10, // Fixed upper bound for all axes
            pointLabels: {
              display: true // country names still visible
            },
            ticks: {
              display: false // Remove the axis value labels (1-10)
            }
          }
        }
      }
    });
  }
}

// Utility: format number with commas
function formatNumber(num) {
  return num.toLocaleString();
}

// Utility: format money (m = million euros)
function formatMillionEuros(num) {
  return "€" + num.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }) + "m";
}

// Summarize values by key for selected athletes
function summarizeByKey(selectedIndices, key) {
  const summary = {};
  selectedIndices.forEach(idx => {
    const value = athletes[idx][key];
    summary[value] = (summary[value] || 0) + 1;
  });
  return summary;
}

// Total global social following for selected athletes
function totalSocial(selectedIndices) {
  return selectedIndices.reduce((sum, idx) => sum + athletes[idx].social, 0);
}

// Total cost for selected athletes
function totalCost(selectedIndices) {
  return selectedIndices.reduce((sum, idx) => sum + (athletes[idx].cost || 0), 0);
}

// Calculate cumulative country scores as per user spec (1 decimal place)
function cumulativeCountryScores(selectedIndices) {
  if (selectedIndices.length === 0) return Array(countries.length).fill("0.0");
  return countries.map((_, countryIdx) => {
    const scores = selectedIndices.map(idx => athletes[idx].data[countryIdx]);
    if (scores.length === 0) return "0.0";
    const maxScore = Math.max(...scores);
    const restScores = scores.filter(x => x !== maxScore);
    let total = maxScore + 0.6 * restScores.reduce((a, b) => a + b, 0);
    if (total > 10) total = 10;
    return total.toFixed(1);
  });
}

// Calculate average of cumulative country scores
function averageCountryScore(cumulativeScores) {
  if (!cumulativeScores.length) return "0.0";
  const sum = cumulativeScores.reduce((acc, val) => acc + parseFloat(val), 0);
  return (sum / cumulativeScores.length).toFixed(1);
}

// Update dashboard summary and vertical country score table
function updateSummary() {
  const selected = getSelectedAthleteIndices();

  // Cumulative market score per country
  const cumulativeScores = cumulativeCountryScores(selected);

  // Summaries
  const sportSummary = summarizeByKey(selected, "sport");
  const genderSummary = summarizeByKey(selected, "gender");
  const nationalitySummary = summarizeByKey(selected, "nationality");
  const socialSum = totalSocial(selected);
  const costSum = totalCost(selected);

  // Athlete count
  document.getElementById('athlete-count-number').textContent = selected.length;

  // Sport breakdown
  document.getElementById('sport-count-number').textContent = Object.keys(sportSummary).length;
  document.getElementById('sport-breakdown-context').textContent =
    Object.entries(sportSummary).map(([sport, count]) => `${sport}: ${count}`).join(", ") || "-";

  // Gender breakdown
  document.getElementById('gender-count-number').textContent = Object.keys(genderSummary).length;
  document.getElementById('gender-breakdown-context').textContent =
    Object.entries(genderSummary).map(([gender, count]) => `${gender}: ${count}`).join(", ") || "-";

  // Nationality breakdown
  document.getElementById('nationality-count-number').textContent = Object.keys(nationalitySummary).length;
  document.getElementById('nationality-breakdown-context').textContent =
    Object.entries(nationalitySummary).map(([nation, count]) => `${nation}: ${count}`).join(", ") || "-";

  // Social following total
  document.getElementById('social-following-number').textContent = formatNumber(socialSum);

  // Cost total
  document.getElementById('total-cost-number').textContent = formatMillionEuros(costSum);

  // Vertical country table
  let tableHtml = `<table class="country-score-table"><tr><th>Country</th><th>Cumulative Score</th></tr>`;
  for (let i = 0; i < countries.length; i++) {
    tableHtml += `<tr>
      <td class="country-name">${countries[i]}</td>
      <td class="cumulative-score">${cumulativeScores[i]}</td>
    </tr>`;
  }
  tableHtml += `</table>`;

  // Add Average Score Box below the table, styled as dashboard-box
  const avgScore = averageCountryScore(cumulativeScores);
  tableHtml += `
    <div class="dashboard-box" id="avg-market-score-box" style="margin-top:12px;">
      <div class="dashboard-number" id="avg-market-score-number">${avgScore}</div>
      <div class="dashboard-label">Avg. Country Score</div>
    </div>
  `;

  document.getElementById("country-table-container").innerHTML = tableHtml;
}

// Listen for checkbox changes
optionsList.addEventListener("change", () => {
  updateChart();
  updateSummary();
});

// Initial render
updateChart();
updateSummary();