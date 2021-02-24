describe('Scorecard', function() {
    var scorecard;

    beforeEach(function(){
        scorecard = new Scorecard();
    });

    it('starts an empty score card', function() {
        expect(scorecard.getscoreList()).toEqual([])
    });
});