import test from 'tape';

test('test placeholder',
  ({ equal, end }) => {
    const actual = true;
    const expected = true;
    equal(actual, expected);

    end();
  }
);
