import Zombie from '../zombie.js';

test('create Zombie', () => {
  const result = new Zombie('Nick', 'Zombie');
  expect(result).toEqual({
    name: 'Nick',
    type: 'Zombie',
    health: 100,
    level: 1,
    attack: 40,
    defence: 10,
  });
});