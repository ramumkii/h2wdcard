import { addTodo } from '../../actions/user';

describe('addTodo', () => {
  it('returns data', () => {
    expect(addTodo().payload.error).toBeFalsy();
  });

  it('returns data', () => {
    expect(addTodo().payload).toBe('a');
  });
});
