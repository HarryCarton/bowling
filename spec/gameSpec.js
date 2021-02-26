describe('Game', function(){
    var game;
    var player;

    beforeEach(function(){
        game = new Game()
        game.addPlayer(player)
    });
    it('it starts the game with a player object atrribute', function(){
        expect(game.getPlayer()).toEqual(player)
    });

});