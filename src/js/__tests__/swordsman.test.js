import Swordsman from '../swordsman.js';

test('create Swordsman', () => {
  const result = new Swordsman('Nick', 'Swordsman');
  expect(result).toEqual({
    name: 'Nick',
    type: 'Swordsman',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});