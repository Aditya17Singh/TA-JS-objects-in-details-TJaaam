//Prototypal Pattern
let bookMethods = {
  isAnswerCorrect: function(index){
    return index === this.index;
  },
  getCorrectAnswer: function(){
    return this.options[this.index];
  }
}

function Question(title,options,index){
  let book = Object.create(bookMethods);
  book.title = title;
  book.options = options;
  book.index = index;
  return book;
}

let firstQuestion =  Question(
    'Where is the capital of Jordan',
    ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    1
  );
  let secondQuestion =  Question(
    'Where is the capital of Jamaica',
    ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
    2
  );


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



//Class Pattern

class Question {
  constructor(title,options,index){
  this.title = title;
  this.options =options;
  this.index=index;
  }
  isAnswerCorrect(index){
    return index === this.index;
  }
  getCorrectAnswer(page){
      this.pages = page;
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

