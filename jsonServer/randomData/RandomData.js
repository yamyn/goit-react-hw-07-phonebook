/* eslint-disable import/no-extraneous-dependencies */
const shortid = require('shortid');
const faker = require('faker');

class RandomContacts {
    constructor(random, idGenerator) {
        this.faker = random;
        this.idGen = idGenerator;
    }

    generate = () => {
        const name = `${this.faker.name.firstName()} ${this.faker.name.lastName()}`;
        return {
            name,
            id: this.idGen.generate(),
            number: `066${this.faker.random.number({
                min: 1000000,
                max: 9999999,
            })}`,
        };
    };

    generateMany = length => {
        const data = { contacts: [] };
        for (let i = 0; i < length; i += 1) {
            const contact = this.generate();
            data.contacts.push(contact);
        }
        return data;
    };
}

const generator = new RandomContacts(faker, shortid);

module.exports = generator;
