import Bowman from '../bowman.js';

test('create Bowman', () => {
  const result = new Bowman('Nick', 'Bowman');
  expect(result).toEqual({
    name: 'Nick',
    type: 'Bowman',
    health: 100,
    level: 1,
    attack: 25,
    defence: 25,
  });
});

