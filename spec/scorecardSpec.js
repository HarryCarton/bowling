describe('Scorecard', function() {
    var scorecard;

    beforeEach(function(){
        scorecard = new Scorecard();
    });

    it('starts an empty score card', function() {
        expect(scorecard.getscoreList()).toEqual([])
    });

    it('can have a frame added to scoreList', function(){
        var frame = jasmine.createSpy('frame')
        scorecard.addFrame(frame)
        expect(scorecard.scoreList).toEqual([frame])
    });  
});