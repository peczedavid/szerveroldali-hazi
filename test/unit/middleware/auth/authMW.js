var expect = require('chai').expect;
var authMW = require('../../../../middleware/auth/authMW');

describe('authMW middleware', function () {

  it('should set res.locals.belepve to true', function (done) {
    const mw = authMW({});

    const reqMock = {
        session:{
            belepve: true
        }
    };

    const resMock = {
        locals: {}
    };

    mw(
        reqMock,
        resMock,
        () => {
            expect(resMock.locals).to.be.eql({belepve: true});
            done();
    });
  });

  it('should redirect to /tapkieg and set res.locals.belepve to false because req.session.belepve is false', function (done) {
    const mw = authMW({});

    const reqMock = {
        session:{
            belepve: false
        }
    };

    const resMock = {
        locals: {},
        redirect: (where)=>{
            expect(resMock.locals).to.be.eql({belepve: false});
            expect(where).to.be.eql('/tapkieg');
            done();
        }
    };

    mw(
        reqMock,
        resMock,
        () => {
            // The code shouldn't get here
            done();
    });
  });

  it('should redirect to /tapkieg and set res.locals.belepve to false because req.session.belepve is undefined', function (done) {
    const mw = authMW({});

    const reqMock = {
        session:{
            belepve: undefined
        }
    };

    const resMock = {
        locals: {},
        redirect: (where)=>{
            expect(resMock.locals).to.be.eql({belepve: false});
            expect(where).to.be.eql('/tapkieg');
            done();
        }
    };

    mw(
        reqMock,
        resMock,
        () => {
            // The code shouldn't get here
            done();
    });
  });
});