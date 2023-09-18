import Daemon from '../daemon.js';

test('create Daemon', () => {
  const result = new Daemon('Nick', 'Daemon');
  expect(result).toEqual({
    name: 'Nick',
    type: 'Daemon',
    health: 100,
    level: 1,
    attack: 10,
    defence: 40,
  });
});