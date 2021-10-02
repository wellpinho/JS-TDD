const { expect } = require("chai");

describe('Main', () => {
  describe('func 1', () => {
    context('case 1', () => {
      // run our test
      it('should happen something A', () => {
        /*
        ** wait what happens
        ** enter data
        ** wait to return (4) => true || (3) => false => broken test
        */
        expect().to.equal();
      });
    });
    
    context('case 2', () => {
      // run our test
      it('should happen something B', () => {
        /*
        ** wait what happens
        ** enter data
        ** wait to return (4) => true || (3) => false => broken test
        */
        expect().to.equal();
      });
    });
  });
  
  describe('func 2', () => {
    context('case A', () => {
      it('', () => {
        expect().to.equal();
      });
    })
  });
});