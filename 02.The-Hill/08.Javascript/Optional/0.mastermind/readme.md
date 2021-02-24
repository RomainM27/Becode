# MasterMind

[Rules](https://fr.wikipedia.org/wiki/Mastermind)

- For normal mode, the solution = 4 different colours

## Mission

* Create 3 div in HTML (minimum)
	- one for response history
	- one for current responses
	- one for the choice of colours (place 6 circles of different colours)

* In JS: make sure that when you click on a color, it is placed in the div of the answers.

* Make sure that when the 4 colours are placed in the answer div, they move into the historical div.

* When the colors arrive in the history, on the right, black or white balls are displayed indicating :
	- they are well placed
	- they're right but not in the right place

* The black and white balls must not be in the same order as the coloured balls (otherwise it's too easy)

* Make a function that creates an automatic solution at the beginning of each game. (using random)

* Make sure that when we make a mistake we can take the colours off the current answers.

## Tips

* Make the black balls appear first, then the white balls.
* Using innerHTML and others
* Use a "round" class and just modify the background-color (for the movements in the different div)

