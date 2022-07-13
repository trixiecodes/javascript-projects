let myLeads = [] //array, will store the inputs

//variables that contain an element being fetched from the html (DOM ELEMENTS)
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")

//variable that has our myLeads string turning into array again bc it is previously stored in the localStorage
const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads"))
const tabBtn = document.getElementById("tab-btn")
//if leadsFromLocalStorage is true 
if( leadsFromLocalStorage ) {
    myLeads = leadsFromLocalStorage
    render(myLeads) //telling render function to render out data inside the parentheses -AN ARGUMENT OF THE PARAMETER "leads" in the render function
}

//event listener for the tabBtn so we can save the current tab
tabBtn.addEventListener("click", function() {
    //Grab the URL of the current tab
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){

        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)

    })
    // console.log(tabs)
    // console.log(tabs[0])
    // console.log(tabs[0].url)
})

//render function that has the parameter which can pass any input from the user
function render(leads) {
    let listItems = ""
    //we loop through the parameter which will be used to store the inputs
    for (count = 0; count < leads.length; count ++)
    {
        // ulEl.innerHTML += "<li>" + myLeads[count] + "</li>"
        // const li = document.createElement("li")
        // li.textContent = myLeads[count]
        // ulEl.append(li)

        listItems += `
        <li>
            <a target ='_blank' href='${leads[count]}'>
            ${leads[count]}
            </a>
        </li>
        `
    }
    //listItems contains the inputs we saved and we pass it into the ulEl variable
    ulEl.innerHTML = listItems
}

//delete button event listener, double click to delete
deleteBtn.addEventListener("dblclick", function() {
    //clear the local storage
    localStorage.clear()
    //clear the array
    myLeads = []
    //use render function and see that it's empty again bc we deleted it
    render(myLeads)
})

//save input button event listener
inputBtn.addEventListener("click", function() {
    //we push a a value from the input text column
    myLeads.push(inputEl.value)

    //we clear the text column
    inputEl.value = ""
    //we store the data in the local storage but we have to turn it into a string first
    localStorage.setItem( "myLeads", JSON.stringify(myLeads) )
    //we call render function to see the data we saved
    render(myLeads)
})