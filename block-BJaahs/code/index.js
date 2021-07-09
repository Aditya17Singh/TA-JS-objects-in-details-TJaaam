const testData = {
    title: 'Where is the capital of Jordan',
    options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
    correctAnswerIndex: 1,
    isAnswerCorrect(index){
        if(this.correctAnswerIndex === index){
            return true;
        }else{
            return false;
        }
    },
    getCorrectAnswer(){
        return this.options[this.correctAnswerIndex]
    }
};