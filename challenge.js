const example = [
  {
    value: 'value1',
    children: [{
      value: 'value2',
      children: [{
        value: 'value3',
        children: []
      }]
    },
    {
     value: 'value4',
     children: [] 
    }],
  },
  {
    value: 'value5',
    children: [{
      value: 'value6',
      children: []
    }]
  }
];

const expected = [
  { value: 'value1'},
  { value: 'value2'},
  { value: 'value3'},
  { value: 'value4'},
  { value: 'value5'},
  { value: 'value6'},
]

let result = [];

const normalize = (input) => {
  if(input.length === 0 ) return result;

  let node = input.pop();
  const { value, children } = node

  if (children.length !== 0 ) {
    normalize(children)
  }

  result = [
    { value },
    ...result
  ]
  return normalize(input)
}

const actual = normalize(example)
console.log(actual)