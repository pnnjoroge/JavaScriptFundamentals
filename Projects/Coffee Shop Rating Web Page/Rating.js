/*
*   EXAM 2 PART 2
*   Create a review page for a product or
*   restaurant. A review should have a name,
*   details (text), and a rating out of 5.
*
*   Requirements:
*     -Can add a review
*     -After adding a review, form should 'reset'
*     -Review count with total number of reviews
*     -Should have at least one image, can link
*       to an image you found on google.
*     -At least 10 styles applied. These can
*       be applied in the header, (<style>)
*       via DOM manipulation, or an external
*       css file.
*
*   Please upload your HTML and JS files with your
*   submission along with your css file if you used one.
*/


// YOUR CODE STARTS HERE
const button = document.getElementById("NameButton");
const userName = document.getElementById("userName");
const name = document.getElementById("name");

function showName(name,inputName){
    name.innerText = `Name: ${userName.value}`;
}

button.addEventListener("click", () => {
  showName(userName.value);
})


const starContainers = document.querySelectorAll(".stars");
starContainers.forEach((el)=>{
const starsUL = createElements(el,"ul","main");
const output = createElements(el,"div","output");


for (let x=0; x<5; x++){
    const star = createElements(starsUL, "li","star");
    star.innerHTML = "&#10029;";
    star.starValue = (x+1);
    ["mouseover", "mouseout", "click"].forEach((ele)=>{
        star.addEventListener(ele,starRating);
    })
}
})
function starRating(e){
    // console.log(e.type)
    // console.log(e.target.starValue); 
    const eventType = e.type;
    const parent = e.target.closest(".stars");
    console.log(parent);
    const output = parent.querySelector(".output");
    const ratedStars = parent.querySelectorAll(".stars");
    if (eventType === "click"){
        output.innerHTML = `You rated this ${e.target.starValue} stars!`;
        addColor(ratedStars,e.target.starValue);
    }
    else if(eventType === "mouseover"){
        addColor(ratedStars,e.target.starValue);
    }
}
function addColor(ratedStars, val){
    console.log(val);
    ratedStars.forEach((star,index)=>{
        if (index < val){
            star.classList.add("orange");
        }
        else{
            star.classList.remove("orange");
        }
    })

}

function createElements(parent,elType,myClass){
    const el = document.createElement(elType);
    el.classList.add(myClass);
    parent.append(el);
    return el;
}

const submitInput = document.getElementsById("bordered-text-box");
const submitButton = document.getElementById("submit");

function submitReview(){
    const submittedText = submitInput.value;
    console.log('Thanks! Submitted:', submittedText);
}
submitInput.reset();

// YOUR CODE ENDS HERE
