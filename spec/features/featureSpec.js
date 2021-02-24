describe('Feature tests', function() {
    var scorecard;
    var frame;

    beforeEach(function(){
        scorecard = new Scorecard
        frame = new Frame
    });

    it('A frame can be added to scoreList', function(){
        scorecard.addFrame(frame)
        expect(scorecard.getscoreList()).toEqual([frame])
    });
});