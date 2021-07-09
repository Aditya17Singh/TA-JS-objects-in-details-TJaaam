//Prototypal Pattern
// let bookMethods = {
//   isAnswerCorrect: function(index){
//     return index === this.index;
//   },
//   getCorrectAnswer: function(){
//     return this.options[this.index];
//   }
// }

// function Question(title,options,index){
//   let book = Object.create(bookMethods);
//   book.title = title;
//   book.options = options;
//   book.index = index;
//   return book;
// }

// let firstQuestion =  Question(
//     'Where is the capital of Jordan',
//     ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
//     1
//   );
//   let secondQuestion =  Question(
//     'Where is the capital of Jamaica',
//     ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
//     2
//   );


//Pseudoclassical Pattern

function Question(title,options,index){
  this.title = title;
  this.options = options;
  this.index = index;
}

Question.prototype = {
  isAnswerCorrect: function(index){
    return index === this.index;
  },
  getCorrectAnswer: function(){
    return this.options[this.index];
  }
}

let firstQuestion = new Question(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = new Question(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);

console.log(firstQuestion.isAnswerCorrect(1))


//Class Pattern

class Book {
  constructor(name,author,pages){
  this.name = name;
  this.author = author;
  this.pages = pages;
  }
  getSummary(){
      return `${this.name} is written by ${this.author} and it contains ${this.pages} pages`
  }
  changePage(page){
      this.pages = page;
      return this.pages;
  }
  changeAuthor(author){
    this.author = author;
    return this.author;
}
}

//Prototypal Pattern

// let bookMethods = {
//      getSummary : function(){
//           return `${this.name} is written by ${this.author} and it contains ${this.pages} pages`
//       },
//       changePage : function(page){
//           this.pages = page;
//           return this.pages;
//       },
//       changeAuthor : function (author){
//         this.author = author;
//         return this.author;
//     }
// }

// function createBook(name,author,pages){
//     let book = Object.create(bookMethods);
//     book.name = name;
//     book.author = author;
//     book.pages = pages;
//     return book;
// }

//PseudoClassical Pattern

// function CreateBook(name,author,pages){
//    this.name = name;
//    this.author = author;
//    this.pages = pages;
// }

// CreateBook.prototype = {
//     getSummary : function(){
//         return `${this.name} is written by ${this.author} and it contains ${this.pages} pages`
//     },
//     changePage : function(page){
//         this.pages = page;
//         return this.pages;
//     },
//     changeAuthor : function (author){
//       this.author = author;
//       return this.author;
//   }
// }

//Class Pattern




//Test
let book1 = new Book("To kill a mockingbird" , "Harper lee",246)
let book2 = new Book("Harry Potter and stone" , "J.K" , 346)