describe('Frame', function(){
    var frame;

    beforeEach(function(){
        frame = new Frame
    });

    it('starts with an empty roll list', function(){
        expect(frame.getRolls()).toEqual([])
    });
    describe('addScore',function(){
        it('can add number of pins knocked down onto roll list', function(){
            frame.addScore(5)
            expect(frame.getRolls()).toEqual([5])
        });
        it('can add both numbers of pins knocked down onto roll list', function(){
            frame.addScore(5)
            frame.addScore(2)
            expect(frame.getRolls()).toEqual([5,2])
        });
    });

});