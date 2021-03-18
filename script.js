const Stack = require('./Stack.js');
const prompt = require('prompt-sync')();
// ------------------------------
// Initialization
// ------------------------------
const backPages = new Stack();

const NextPages = new Stack();

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
  var instructions = baseInfo;
}
  // ------------------------------
  // User Interface Part 2
  // ------------------------------
