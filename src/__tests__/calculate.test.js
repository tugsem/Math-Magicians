import calculate from "../logic/calculate";
describe('testing calculate function',()=> {
    test('Testing AC Button', () => { 
        let btn_name = 'AC';
        let obj = {
            total :'2',
            operation:'+',
            next:'8'
        };
expect(calculate(obj,btn_name)).toStrictEqual({
    total :null,
    operation:null,
    next:null
})
     })
})