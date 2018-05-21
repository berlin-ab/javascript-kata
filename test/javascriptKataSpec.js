var kata = require('../src/kata');
var chai = require('chai');


// The rules of the tic tac toe game are the following:
//
//  a game is over when all fields are taken
//  a game is over when all fields in a column are taken by a player
//  a game is over when all fields in a row are taken by a player
//  a game is over when all fields in a diagonal are taken by a player
//  a player can take a field if not already taken
//  players take turns taking fields until the game is over
//  there are two player in the game (PlayerX and PlayerO)
//

describe('tic-tac-toe kata', function () {
    var expect = chai.expect

    it('field has correct player', function () {
        var board = new Board();
        expect(board.playerAt('A', '1')).equals('X');
    });
})


