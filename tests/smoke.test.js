const test=require('node:test'); const assert=require('node:assert'); const {plan}=require('../src/agent/agent');
test('agent planner creates retrieval + comparison workflow',()=>{assert.deepStrictEqual(plan('Compare technology and business stories'),['retrieve_news','compare'])});
test('agent planner creates synthesis workflow',()=>{assert.deepStrictEqual(plan('Give me a summary of todays news'),['retrieve_news','synthesize'])});
