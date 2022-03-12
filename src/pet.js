const MIN_FITNESS = 0;
const MAX_FITNESS = 10;
const MIN_HUNGER = 0;
const MAX_HUNGER = 10;
const MAX_AGE = 30;

function Pet(name) {
    this.name = name
    this.age = 0
    this.hunger = 0
    this.fitness = 10
    this.children = []
}

Pet.prototype = {
    get isAlive() {
        return this.age < MAX_AGE && this.hunger < MAX_HUNGER && this.fitness > MIN_FITNESS;
    }
}

Pet.prototype.throwError = function() {
    if (!this.isAlive) {
        throw new Error('Your pet is no longer alive :(')
    }
}

Pet.prototype.growUp = function() {
    this.throwError();

    this.age += 1
    this.hunger += 5
    this.fitness -= 3
}

Pet.prototype.walk = function() {
    this.throwError();
    
    this.fitness += 4;
    if(this.fitness > MAX_FITNESS) {
        this.fitness = MAX_FITNESS;
    } 
}

Pet.prototype.feed = function() {
    this.throwError();

    this.hunger -= 3;
    if(this.hunger < MIN_HUNGER) {
        this.hunger = MIN_HUNGER;
    }
}

Pet.prototype.checkUp = function() {
    this.throwError();

    if(this.fitness <= 3 && this.hunger >= 5) {
        return 'I am hungry AND I need a walk'
    } else if(this.fitness <= 3) {
        return 'I need a walk'
    } else if(this.hunger >= 5) {
        return 'I am hungry'
    } else {
        return 'I feel great!'
    }
}

Pet.prototype.adoptChild = function(babyName) {
    const baby = new Pet(babyName)
    this.children.push(baby);
}


module.exports = Pet