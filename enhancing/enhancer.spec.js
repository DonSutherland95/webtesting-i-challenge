const enhancer = require('./enhancer.js');
// test away!
describe('Sanity check', () => {
  it('works', () => { // THIS is the test
    // assertions
    expect(2 + 2).toBe(4)
  })
  test('everything working', () => { // THIS is another test
    expect({}).not.toBe({})
    expect({}).toEqual({})
  })
})
describe('Success function check', ()=>{
    let item1 = {
        name: 'name-1',
        durability: 50,
        enhancement: 10
    }
    let item2 = {
        name: 'name-2',
        durability: 50,
        enhancement: 20
    }
    it('is defined', () => {
    expect(enhancer.success).toBeDefined()
  })
  it('Enhancement increase check', ()=>{
    let enhancementIncrease = enhancer.success(item1)
    expect(enhancementIncrease.enhancement).toBe(11)
  })
  it('Max enhancement check', ()=>{
      let enhancementMax = enhancer.success(item2)
      expect(enhancementMax.enhancement).toBe(20)
  })
})

describe('Fail function check', ()=>{
    let item1 = {
        name: 'name1',
        durability: 60,
        enhancement: 14
    }
    let item2 = {
        name: 'name2',
        durability: 75,
        enhancement: 15
    }
    let item3 = {
        name: 'name3',
        durability: 85,
        enhancement: 16
    }
    it('is defined', () => {
    expect(enhancer.fail).toBeDefined()
  })
  it('Enhancement below 15 check', ()=>{
      let enhancement1 = enhancer.fail(item1)
      expect(enhancement1.durability).toBe(55)
  })
  it('Enhancement equal to 15 check', ()=>{
      let enhancement2 = enhancer.fail(item2)
      expect(enhancement2.durability).toBe(65)
  })
  it('Enhancement above 15 check', ()=>{
      let enhancement3 = enhancer.fail(item3)
      expect(enhancement3.durability).toBe(75)
      expect(enhancement3.enhancement).toBe(15)
  })

})
describe("Repair function check", () => {
  let item1 = {
    name: "item1",
    durability: 90,
    level: 20,
  };
  it("Durability repair check", () => {
    const repairItem = enhancer.repair(item1);
    expect(repairItem.durability).toBe(100);
  });
});