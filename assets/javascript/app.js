$(".correctdiv").hide();
$(".incorrectdiv").hide();
$(document).ready(function() { 

var questns = [{

    question: "Who else besides Hayden Christensen tried out for the role of Anakin Skywalker?",
    choices: ["James Franco", "Paul Walker", "Jonathan Rhys Myers", "James Carpinello"],
    correctAnswer: 1,
    asked: false
},{
	question: "Which of the following scenes was not a part of the original script for Episode II?",
    choices: ["The Clone Battle", "The Droid factory", "The Clone factory", "The Chase on Coruscant"],
    correctAnswer: 1,
    asked: false
},{
    question: "Which of the following items was used as an asteroid in the filming of Episode IV?",
    choices: ["Rocks", "Raw Cheese", "Pumice Stone", "Potato"],
    correctAnswer: 3,
    asked: false
},{
	question: "How many Star Wars action figures were sold the year Episode IV was released?",
    choices: ["36 million", "40 million", "42 million", "45 million"],
    correctAnswer: 2,
    asked: false
},{
	question: "Which Star Wars film is the highest domestic grossing film of all Star Wars movies (Don't forget to adjust for inflation!)?",
    choices: ["Episode IV: A New Hope", "Episode VI: Return of the Jedi", "Episode VII: The Force Awakens", "Episode V: Empire Strikes Back"],
    correctAnswer: 0,
    asked: false
},{
	question: "How many lines did Darth Maul have in The Phantom Menace?",
    choices: ["4", "3", "5", "7"],
    correctAnswer: 1,
    asked: false
},{
	question: "Which of the following was a working title for Episode II?",
    choices: ["Jar Jar’s Big Adventure", "The Clone Wars", "Dawn of the Jedi", "Chronicles of Obi-Wan and Anakin"],
    correctAnswer: 0,
    asked: false
},{
	question: "Which of the Star Wars movies was the only one to not be nominated for an Oscar nomination in the Best Visual Effects department?",
    choices: ["Episode VI: Return of the Jedi", "Episode I: The Phantom Menace", "Episode II: Attack of the Clones", "Episode III: Revenge of the Sith"],
    correctAnswer: 3,
    asked: false
},{
	question: "Which great person in history were Yoda’s eyes modeled after?",
    choices: ["John F. Kennedy", "Albert Einstein", "Benjamin Franklin", "Dalai Lama"],
    correctAnswer: 1,
    asked: false
}];





$(".epdiv").on("click", function() {
    $(".epdiv").hide();
    triviagame();

});

var quescount = 0;
//var nextques;

function triviagame(){
	if(quescount!==9){
		$(".correctdiv").hide();
		$(".incorrectdiv").hide();
		var selector = Math.floor(Math.random() * 9);
		console.log("selector: "+selector);
		if(questns[selector].asked == false){
			$(".trivques").show();
			var quesdis = $(".trivques").text(questns[selector].question);
			$(".trivques").append(quesdis);
			$(".trivians").empty();
			$(".trivians").show();
			for (var i = 0; i < questns[selector].choices.length; i++) {
    			//var ansdis = $(".trivians").html('<div class="answer ' + i + '">' + questns[selector].choices[i] + '</div>');
    			var ansdis = $("<div>");
    			ansdis.addClass("text-center ans "+i);
    			ansdis.text(questns[selector].choices[i]);
    			$(".trivians").append(ansdis);
    			console.log("for loop round: "+i);
  			};
  			//function displayCorrect(){

  			//}
  			$(".ans").on("click", function() {
  				//console.log('"' + questns[selector].correctAnswer + '"');
  				if($(this).hasClass(questns[selector].correctAnswer)){
  					$(".correctdiv").show();
  					$(".trivques").hide();
  					$(".trivians").hide();
  					console.log("you're clicking");
  					setTimeout(triviagame,3000);
  				} else{
  					$(".incorrectdiv").show();
  					$(".trivques").hide();
  					$(".trivians").hide();
  					console.log("you're clicking");
  					setTimeout(triviagame,3000);
  				}
    		});
			questns[selector].asked = true;
			quescount++;
			console.log("question count: "+quescount);
			setTimeout(triviagame,10000);

		} else {
			triviagame();

		}

	} else{
		console.log("all asked");
			return;
	}


}



});