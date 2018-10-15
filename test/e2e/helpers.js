const app = require('../../lib/app');
const request = require('supertest');
const { dropCollection } = require('./db');

let actors = [
    {
        name: 'Matt Diamond',
        dob: new Date('11-11-1911'),
        pob: 'Sweden'
    },
    {
        name: 'Susan Surandin',
        dob: new Date('04-14-1985'),
        pob: 'Miami'
    }
];

let studio = {
    name: 'Portland Studios',
    address: {
        city: 'Portland',
        state: 'Oregon',
        country: 'USA'
    }
};

const createActors = () => {
    return Promise.all(actors.map(createActor))
        .then(actorsRes => { createdActors = actorsRes; });
};



const createActor = actor => {
    return request(app)
        .post('/actors')
        .send(actor)
        .then(res => res.body);
};

const createStudio = studio => {
    return request(app)
        .post('/studios')
        .send(studio)
        .then(res => res.body);
};

module.exports = {
    createActor,
    createStudio
};