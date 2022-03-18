const Pet = require('./src/pet');

describe ('constructor', () => {
    it('returns an object', () => {
        expect(new Pet('Fido')).toBeInstanceOf(Object)
    })

    it('sets the name property', () => {
        const pet = new Pet('Fido')

        expect(pet.name).toEqual('Fido')
    })

    it('has an initial age of 0', () => {
        const pet = new Pet('Fido');

        expect(pet.age).toEqual(0);
    })

    it('has an initial hunger of 0', () => {
        const pet = new Pet('Dash');

        expect(pet.hunger).toEqual(0);
    })

    it('has an initial fitness of 10', () => {
        const pet = new Pet('Flimsy');

        expect(pet.fitness).toEqual(10);
    })

    it('changes properties correctly when growUp() is called', () => {
        const pet = new Pet('Doggie');
        pet.growUp();

        expect(pet.age).toEqual(1);
        expect(pet.hunger).toEqual(5);
        expect(pet.fitness).toEqual(7);
    })

    it('increases fitness by 4, but no more than 10, when walk() is called', () => {
        const pet = new Pet('Peppa');
        pet.growUp(); // fitness is now 7, hunger is 5
        pet.feed(); // hunger is 2
        pet.growUp(); // fitness is 4, hunger is 7
        pet.walk(); // fitness is 8
        expect(pet.fitness).toEqual(8);

        pet.walk() // fitness is 10 (max value)
        expect(pet.fitness).toEqual(10);
    })

    it('decreases hunger by 3, but no less than 0 when feed() is called', () => {
        const pet = new Pet('Bin Bag');
        pet.growUp(); // hunger is 5
        expect(pet.hunger).toEqual(5);

        pet.feed(); // hunger is 2
        expect(pet.hunger).toEqual(2);

        pet.feed(); // hunger is 0 (min value)
        expect(pet.hunger).toEqual(0);
    })

    it('displays relevant message about the sate of the pet', () => {
        const pet = new Pet('Dax');
        pet.growUp(); // fitness is 7; hunger is 5
        expect(pet.checkUp()).toEqual('I am hungry');
        
        pet.feed(); // fitness is 7, hunger is 2
        pet.growUp(); //fitness is 4, hunger is 7
        pet.feed(); // fitness is 4, hunger is 4
        pet.growUp(); // fitness is 1; hunger is 9
        expect(pet.checkUp()).toEqual('I am hungry AND I need a walk');


        pet.walk(); // fitness is 5
        pet.feed();
        pet.feed();
        pet.feed();
        pet.feed(); // hunger is 3
        expect(pet.checkUp()).toEqual('I feel great!');

    })

    it('throws an error if the pet is not alive', () => {
        const pet = new Pet('Trickle');
        pet.age = 30;

        expect(() => pet.feed()).toThrow('Your pet is no longer alive :(');
    })

    it('creates and adds a baby to the children array', () => {
        const mamaBear = new Pet('mama bear');
        mamaBear.adoptChild('babyBear');

        expect(mamaBear.children[0].name).toEqual('babyBear');
    })
})