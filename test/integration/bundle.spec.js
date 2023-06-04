var expect = require('chai').expect;


describe('integration', function() {

  describe('bundle', function() {

    // when
    var md = require('../../');

    it('should expose collection utils', function() {

      // then
      expect(md.find).to.exist;

    });


    it('should expose fn utils', function() {

      // then
      expect(md.bind).to.exist;

    });


    it('should expose lang utils', function() {

      // then
      expect(md.isArray).to.exist;

    });


    it('should expose object utils', function() {

      // then
      expect(md.pick).to.exist;

    });

  });

});