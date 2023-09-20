import Character from '../character.js';
import Bowman from '../bowman.js';
import Magician from '../magician.js';

test('short name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Invalid name length');
  });
  
test('long name', () => {
    expect(() => new Character('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'Bowman')).toThrow('Invalid name length');
  });
  
test('ivalid character type', () => {
    expect(() => new Character('Nick', 'Warrior')).toThrow('Invalid character type');
  });

test('levelup function on dead  Magician', () => {
    const result = new Character('Nick', 'Magician');
    result.health = 0;
    expect(() => {
      result.levelUp();
    }).toThrow('This character is dead');
  });

test('levelup function on Bowman', () => {
    const result = new Bowman('Nick', 'Bowman');
    result.levelUp();
    expect(result).toEqual({
      name: 'Nick',
      type: 'Bowman',
      health: 100,
      level: 2,
      attack: 30,
      defence: 30
    });
  });
  
test('function damage on character Magician', () => {
    const result = new Magician('Nick', 'Magician');
    result.damage(20);
    expect(result).toEqual({
      name: 'Nick',
      type: 'Magician',
      health: 88,
      level: 1,
      attack: 10,
      defence: 40,
    });
});