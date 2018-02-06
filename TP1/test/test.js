let assert = require('chai').assert;
const monk = require('monk');
let db = monk('localhost:27017/node-testing');
let chai =require('chai');
let chaiHttp = require('chai-http');
chai.use(chaiHttp);



describe('Films', function() {
    before(function () {
        db.get('films').remove({});

    });
    it('should list ALL films on /films GET',function () {
        chai.request('http://localhost:1337')
            .get('/films')
            .then(function (res) {
                assert.equal(res.statusCode,200);
                assert.typeOf(res,'object');
                assert.typeOf(res.body,'array')
                assert.equal(res.body,0);
            })
    });

    it('should add a SINGLE film on /films POST',function () {
        chai.request('http://localhost:1337')
            .post('/films')
            .send({'title': 'Star Wars', 'year': 1977})
            .then(function (res) {
                assert.equal(res.statusCode,200);
                assert.typeOf(res,'object');
                assert.typeOf(res.body.SUCCESS,'object');
                assert.property(res.body.SUCCESS,'title');
                assert.property(res.body.SUCCESS,'year');
                assert.propertyVal(res.body.SUCCESS,'title','Star Wars');
                assert.propertyVal(res.body.SUCCESS,'year',1977);
            })
    });


    it('should list a SINGLE film on /film/<id> GET', function () {
        (db.get('films').findOne({},{}, function (e, docs) {
            chai.request('http://localhost:1337')
                .get('/film/'+docs._id)
                .then(function (res) {
                    assert.equal(res.statusCode, 200);
                    assert.typeOf(res, 'object');
                    assert.typeOf(res.body, 'object');
                    assert.property(res.body, 'title');
                    assert.property(res.body, 'year');
                })
        }));
    });

    it('should update a SINGLE film on /film/<id> PUT', function () {
        (db.get('films').findOne({},{}, function (e, docs) {
            chai.request('http://localhost:1337')
                .put('/film/'+docs._id).send({title: 'Spider Man', year: 2006})
                .then(function (res) {
                    assert.equal(res.statusCode, 200);
                    assert.typeOf(res, 'object');
                    assert.property(res.body, 'UPDATED');
                    assert.typeOf(res.body, 'object');
                    assert.property(res.body.UPDATED, 'title');
                    assert.property(res.body.UPDATED, 'year');
                })
        }));
    });

    it('should delete a SINGLE film on /film/<id> DELETE', function () {
        (db.get('films').findOne({},{}, function (e, docs) {
            chai.request('http://localhost:1337')
                .delete('/film/'+docs._id)
                .then(function (res) {
                    assert.equal(res.statusCode, 200);
                    assert.typeOf(res, 'object');
                    assert.property(res.body, 'REMOVED');
                    assert.typeOf(res.body, 'object');
                    assert.property(res.body.REMOVED, 'title');
                    assert.property(res.body.REMOVED, 'year');
                })
        }));
    });
