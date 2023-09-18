import Character from '../character.js';
import Bowman from '../bowman.js';

test('short name', () => {
    expect(() => new Character('A', 'Bowman')).toThrow('Invalid name length');
  });
  
  test('long name', () => {
    expect(() => new Character('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA', 'Bowman')).toThrow('Invalid name length');
  });
  
  test('ivalid character type', () => {
    expect(() => new Character('Nick', 'Warrior')).toThrow('Invalid character type');
  });