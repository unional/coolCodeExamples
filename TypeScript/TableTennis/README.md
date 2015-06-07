# Table Tennis
I want to create an example that will use all features in pure TypeScript.
I want to take reuse of object oriented code to the extreme and see how will it work out.

# Author
@unional

# Support Versions
* TypeScript 1.5

# Local Dependencies
None

# Details
Only use features in ES6.
Code in this example can contain business logic but no application logic.
The difference is business logic do things that are told to, e.g. `game.recordFinalScore(...)`,
and application logic controls the flow of the application, e.g.:

```ts
var winner = match.getWinner();
var loser = match.getLoser();
usattRatingSystem.updateRating(winner.usattID, loser.usattID);
var winnerRating = usattRatingSystem.getRating(winner.usattID);
var loserRating = usattRatingSystem.getRating(loswer.usattID);
console.log("Winner (" + winner.name + ")'s new rating: " + winnerRating + "\n");
console.log("Loser (" + loser.name + ")'s new rating: " + loserRating + "\n");
console.log("Start a new match? ");
``` 
