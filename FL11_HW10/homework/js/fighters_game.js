class Fighter {
    constructor (name, damage, hp, agility) {
        this.name = name;
        this.damage = damage;
        this.hp = hp;
        this.agility = agility;
        this.Wins = 0;
        this.Losses = 0;
        this.totalHP = hp
    }
    getName() {
        return this.name;
    }
    getDamage() {
        return this.damage;
    }
    getAgility() {
        return this.agility;
    }
    getHealth() {
        return this.hp;
    }
    addWin() {
        this.Wins++;
    }
    addLoss() {
        this.Losses++;
    }
    logCombatHistory() {
        console.log('Name: ' + this.getName() + ', Wins: ' + this.Wins + ', Losses: ' + this.Losses);
    }
    heal(hpToHeal) { 
        this.hp += hpToHeal;
        if (this.hp > this.totalHP) {
            this.hp = this.totalHP;
        }
    }    
    dealDamage(damageToGet) {
        this.hp -= damageToGet;
        if (this.hp < 0) {
            this.hp = 0;
        }
    }
    attack(defender) {
        const hundred = 100;
        let successAttack = hundred - defender.getAgility();
        if (Math.random() < successAttack/hundred) {
            defender.dealDamage(this.getDamage());
            console.log(this.getName() + ' make ' + this.getDamage() + ' damage to ' + defender.getName());
        } else {
            console.log(this.getName() + ' attack missed');
        }
    }
}

function battle (fighter1, fighter2) {
    while (fighter1.getHealth()>0||fighter2.getHealth()>0) {
        fighter1.attack(fighter2);
        fighter2.attack(fighter1);
    }
    console.log(fighter1.getName() + ' health: ' + fighter1.getHealth());
    console.log(fighter2.getName() + ' health: ' + fighter2.getHealth());
    if (fighter1.getHealth() > 0) {
        fighter1.addWin();
        fighter2.addLoss();
    } else {
        fighter1.addLoss();
        fighter2.addWin();
    }
    console.log(fighter1.logCombatHistory());
    console.log(fighter2.logCombatHistory());
    if (fighter1.getHealth() === 0) {
        console.log(fighter1.getName() + ' is dead and cannot fight.');
        console.log(fighter2.getName() + ' is dead and cannot fight.');
    }
} 
let health = 100;
let damage1 = 22;
let damage2 = 18;
let agility1 = 23;
let agility2 = 27;

const myFighter1 = new Fighter('John', damage1, health, agility1);
const myFighter2 = new Fighter('Bob', damage2, health, agility2);

battle(myFighter1, myFighter2);