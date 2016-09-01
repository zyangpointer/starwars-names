var expect = require('chai').expect;
var starwars = require('./index');

describe('starwars-names-zhengyang', function(){
  describe('all', function() {
      it('should be array of strings', function() {
        expect(starwars.all).to.satisfy(isArrayOfStrings);

        function isArrayOfStrings(array) {
            return array.every(function(item){
              return typeof item === 'string';
            });
        }

        it('should', function() {
          expect(starwars.all).to.include('Luke');
        });
      });
  });

  describe('random', function(){
      it('should return a random itm', function(){
          var randomItem = starwars.random();
          expect(starwars.all).to.include(randomItem)
      });
  });
});
