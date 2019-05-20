import {expect} from "chai";
import {Container} from "../Container";


describe('Container', function () {
  describe('#of', function () {
    it('should put the value in a container', () => {
      expect(Container.of(2)).to.eql(new Container(2))
    });
  });
});
