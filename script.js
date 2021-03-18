const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();

const nextPages = new Stack();

let currentPage = 'Home Page';
// ------------------------------
// Helper Functions
// ------------------------------
function showCurrentPage(action){
    console.log(`/n${action}`);
    console.log(`Current page = ${currentPage}`);
    console.log(`Back Page =`, backPages.peek());
    console.log('Next page = ', nextPages.peek());
};

function newPage(page){
  backPages.push(currentPage);
  currentPage = page;
  while(!nextPages.isEmpty()){
    nextPages.pop();
  }
  showCurrentPage('NEW: ');
};

function backPage(){
  nextPages.push(currentPage);
  currentPage = backPages.pop()
  showCurrentPage("BACK: ")
};

function nextPage(){
  backPages.push(currentPage);
  currentPage = nextPages.pop();
  showCurrentPage("NEXT: ")

}

/*
 * The following strings are used to prompt the user
 */
const baseInfo = '\nEnter a url';
const backInfo = 'B|b for back page';
const nextInfo = 'N|n for next page';
const quitInfo = 'Q|q for quit';
const question = 'Where would you like to go today? '

// ------------------------------
// User Interface Part 1
// ------------------------------
let finish = false;
let showBack = false;
let showNext = false; 
showCurrentPage("Current: ");
while(finish === false){
  let instructions = baseInfo;
  if(backPages.peek() != null){
    instructions= `${instructions}, ${backInfo}`;
    showBack = true;
  }else {
      showBack = false;
  }
  if(nextPages.peek() !=null){
    instructions = `${instructions}, ${nextInfo}`;
    showNext = true;
  }
  else {
    showNext = false;
  }
  instructions = `${instructions}, ${quitInfo}.`
  console.log(instructions);
  // ------------------------------
  // User Interface Part 2
  // ------------------------------

const answer = prompt(question);
const lowerCase = answer.toLowerCase();
if((lowerCase !=='n') && (lowerCase !='b') && (lowerCase !=='q')){
  newPage(answer);
} else if ((showNext == true) && (lowerCase =='n')){
  nextPage();
} else if ((showBack == true) && (lowerCase =='b')){
  backPage();
} else if (lowerCase ==='b') {
  console.log("Cannot go back a page. Stack is Empty.");
} else if (lowerCase ==='n'){
  console.log("Cannot go to next page. Stack is Empty.");
} else if (lowerCase==='q'){
finish= true;
}
}