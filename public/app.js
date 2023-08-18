const promptSubmitBtn = document.getElementById("promptSubmit");
const textPrompt = document.getElementById("prompt");
const responseArea = document.getElementById("response");

promptSubmitBtn.addEventListener('click', ()=>{
    promptSubmitBtn.style.visibility = "hidden"
    fetch(`/api/askgrumpy/${textPrompt.value}`)
    .then((res) => res.text())
    .then(message => {
        responseArea.textContent = message
        promptSubmitBtn.style.visibility = "visible"
        textPrompt.value = ""
    }).catch(err => {
        console.log(err)
        promptSubmitBtn.style.visibility = "visible"
        textPrompt.value = ""
    })
})