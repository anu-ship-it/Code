const tea = ['green tea', 'black tea', 'oolong tea', 'white tea', 'herbal tea'];
console.log(tea);

tea.push('oolong tea');

const index = tea.indexOf('green tea');
console.log(index);
if(index > -1){
    tea.splice(index, 1);
}

console.log(tea);
tea.pop();
