describe('Feature tests', function() {
    var scorecard;
    var frame;
    var player;

    beforeEach(function(){
        scorecard = new Scorecard
        frame = new Frame
        player = new Player
    });

    it('A frame can be added to scoreList', function(){
        scorecard.addFrame(frame)
        expect(scorecard.getscoreList()).toEqual([frame])
    });

    it('can edit score list on player', function( ){
        player.getscoreCard().addFrame(frame);
        expect(player.getscoreCard().getscoreList()).toContain(frame)
    });
});