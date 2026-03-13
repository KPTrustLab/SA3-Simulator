const API_KEY = "";

async function generateQuestion() {

const response = await fetch("https://api.openai.com/v1/responses", {
method: "POST",
headers: {
"Content-Type": "application/json",
"Authorization": `Bearer ${API_KEY}`
},
body: JSON.stringify({
model: "gpt-4.1-mini",
input: "Generate an IFoA SA3 insurance exam scenario asking the candidate to list risks."
})
});

const data = await response.json();

document.getElementById("question").innerText =
data.output[0].content[0].text;

}

async function evaluateAnswer() {

const question = document.getElementById("question").innerText;
const answer = document.getElementById("answer").value;

const response = await fetch("https://api.openai.com/v1/responses", {
method: "POST",
headers: {
"Content-Type": "application/json",
"Authorization": `Bearer ${API_KEY}`
},
body: JSON.stringify({
model: "gpt-4.1-mini",
input: `Evaluate this SA3 answer.

Question: ${question}

Answer: ${answer}

Give score estimate and missing risk angles.`
})
});

const data = await response.json();

document.getElementById("feedback").innerText =
data.output[0].content[0].text;

}
