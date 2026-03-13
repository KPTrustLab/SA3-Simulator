async function generateQuestion() {

const response = await fetch("https://your-worker-url.workers.dev", {
method: "POST",
headers: {
"Content-Type": "application/json"
},
body: JSON.stringify({
prompt: "Generate an IFoA SA3 scenario question for a general insurance company."
})
});

const data = await response.json();

document.getElementById("question").innerText =
data.output[0].content[0].text;

}
