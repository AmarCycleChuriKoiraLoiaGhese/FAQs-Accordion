// All the divs that have questions in it, are retrieved and assigned a function into it.
const questionDivs = document.getElementsByClassName("question-container");
for (const questionDiv of questionDivs)
    questionDiv.addEventListener("click", showAnswer);    

// Function responsible for retrieving svg file from files and assign such svg to the parent
// Parent element desired.
async function getSVG(fileName, parentElement)
{
    let myObject = await fetch(fileName);
    let mySVG = await myObject.text();
    parentElement.innerHTML = parentElement.innerHTML += mySVG;
}

// Function responsible for showing and hiding the answers of the questions.
function showAnswer(event)
{
    // Retrieves the triggered div. 
    let currentDiv = event.currentTarget
    // Retrives the answer div next to it.
    let answerDIv = currentDiv.nextElementSibling;

    // if the answer div is closed...
    if (answerDIv.classList.contains("closed"))
    {
        // Open it by switching classes.
        answerDIv.classList.remove("closed");
        answerDIv.classList.add("opened");

        // Change the svg element from plus to a minus.
        currentDiv.removeChild(currentDiv.children[1]);
        getSVG("assets\\images\\icon-minus.svg", currentDiv);
    }
    // else if it is not closed...
    else
    {
        // Close it by switching classes.
        answerDIv.classList.remove("opened");
        answerDIv.classList.add("closed");

        // Change the svg element from plus to a plus.        
        currentDiv.removeChild(currentDiv.children[1]);
        getSVG("assets\\images\\icon-plus.svg", currentDiv);
    }
}