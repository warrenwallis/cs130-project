import {
  isValidEmail,
  removeCodeBlocks,
} from '@/services/lib/helpers';

test('check valid emails', () => {
  expect(isValidEmail("dingarvin@gmail.com")).toBe(true)
  expect(isValidEmail("a@abc.abc")).toBe(true)
});

test('check invalid emails', () => {
  expect(isValidEmail("akash.com")).toBe(false)
  expect(isValidEmail("squid/")).toBe(false)
});

test('get rid of code blocks', () => {
  expect(removeCodeBlocks("```sparql kidney```")).toBe(" kidney")
});


test('get rid of comments', () => {
  expect(removeCodeBlocks(`\`\`\`sparql
apple
pear#this a fruit
peach\`\`\``)).toBe(
  `
apple
pear
peach`
  )
});

