import Undead from '../undead.js';

test('create Undead', () => {
  const result = new Undead('Nick', 'Undead');
  expect(result).toEqual({
    name: 'Nick',
    type: 'Undead',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});