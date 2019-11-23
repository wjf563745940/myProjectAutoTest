const  utils=require('@/common/utils.js');
console.log(utils)
const {changeUpperCase} =utils;
test('changeUpperCase a to equal A', () => {
  expect(changeUpperCase('aa')).toBe('AA');
});
test('changeUpperCase 1a to equal "" ', () => {
  expect(changeUpperCase('1a')).toBe('');
});
test('changeUpperCase {} to equal "" ', () => {
  expect(changeUpperCase({})).toBe('');
});
test('changeUpperCase [] to equal "" ', () => {
  expect(changeUpperCase([])).toBe('');
});