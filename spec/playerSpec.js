describe('Player', function(){

  var player;

  beforeEach(function(){
    player = new Player('Bowling pro');
  });

  it('has name attribute', function(){
    expect(player.getName()).toEqual('Bowling pro')
  });

  it('starts with an empty scorecard object', function(){
    expect(player.getscoreCard()).toBeInstanceOf(Scorecard)
  });

});