let text=`Thank you so much for contacting us. Dreamland guest relations. You're speaking with Ronaldo. May I have your name, please? Yes, sure. My name is robin soleimani. What is your phone number? It is 9876535362 as mentioned in the book Diary. Thank you so much for providing the info!`

let sentences = [];

sentences = text.split(/[\\.!?]/);                             //Task 1- to extract sentences from the given text


sentences.forEach(sentence => {
    if(sentence.trim().split(" ").length > 3) {                 //Task 1- to print sentences with words>3
        console.log(sentence.replace(/[0-9]/g, "X"));           //Task 2- to mask phone number
    }
})


