var expect = require('chai').expect;
var getOsszetevoMW = require('../../../../middleware/osszetevo/getOsszetevoMW');

describe('getOsszetevoMW middleware ', function () {

  it('should set res.locals.osszetevo with an osszetevo object from db', function (done) {
    const mw = getOsszetevoMW({
        OsszetevoModel:{
            findOne: (p1, cb) => {
                expect(p1).to.be.eql({_id:'1'});
                cb(null, 'mockOsszetevo');
            }
        }
    });

    const resMock = {
        locals: {}
    };

    mw({
        params:{
            osszetevoid: '1'
        }
    }, resMock
    , () => {
        expect(resMock.locals).to.be.eql({osszetevo: 'mockOsszetevo'});
        done();
    });
  });
  it('should call next with error when there is a db problem', function (done) {
    const mw = getOsszetevoMW({
        OsszetevoModel:{
            findOne: (p1, cb) => {
                expect(p1).to.be.eql({_id:'1'});
                cb('db hiba', null);
            }
        }
    });

    const resMock = {
        locals: {}
    };

    mw({
        params:{
            osszetevoid: '1'
        }
    }, resMock
    , (err) => {
        expect(err).to.be.eql('db hiba');
        done();
    });
  });
  it('should call next when no osszetevo found in db', function (done) {
    const mw = getOsszetevoMW({
        OsszetevoModel:{
            findOne: (p1, cb) => {
                expect(p1).to.be.eql({_id:'1'});
                cb(undefined, null);
            }
        }
    });

    const resMock = {
        locals: {}
    };

    mw({
        params:{
            osszetevoid: '1'
        }
    }, resMock
    , (err) => {
        expect(err).to.be.eql(undefined);
        expect(resMock.locals).to.be.eql({});
        done();
    });
  });
});