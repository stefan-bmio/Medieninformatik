window.onload = function() {

	var quiz = {
		"quizElements" : [
			{
				"question" : 'Welche Aussage ist richtig, wenn Sie nach dieser Änderung das Programm ausführen?',
				"answers" : [
					'Der ganze Inhalt des Fensters wird zum linken Rand versetzt.', // answer 0
					'Der ganze Inhalt des Fensters wird zum oberen Rand versetzt.', // answer 1
					'Der ganze Inhalt des Fensters wird zum rechten Rand versetzt.', // answer 2
					'Der ganze Inhalt des Fensters wird zum unteren Rand versetzt.' // answer 3
				],
				"rightAnswer" : 1
			}
		]
	};
	quiz1OfN = new Quiz1OfN();
	quiz1OfN.initialize(
		'quiz', // id wo das quiz eingefuegt wird
		quiz,
		{
			htmlWrong : '<img src="../../.inc/quizfalse.gif" />',
			htmlRight : '<img src="../../.inc/quiztrue.gif" />',
			classTdAnswer : 'loesungskasten', // <table><tr><td class="">[Antwort Auswahl] ...
			classTable : 'quiz', // <table class=""> ...
			classQuestion : 'quizQuestion', // <table><tr><th class="">...
			classAnswer : 'quizAnswer', // <table><tr><td><div class="">
			classTdInput : 'quizTdInput', // <tabel><tr><td class=""><input type="radio ...>...
			classTdRightWrong : 'quizTdRightWrong', // <table><tr><td class="">[richtig | falsch] ...
			beforeQuizElement : '',
			afterQuizElement : ''
		}
	);
	quiz1OfN.insert();
}