import Magician from '../magician.js';

test('create Magician', () => {
  const result = new Magician('Nick', 'Magician');
  expect(result).toEqual({
    name: 'Nick',
    type: 'Magician',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});