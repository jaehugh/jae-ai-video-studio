import test from"node:test";import assert from"node:assert/strict";import{createPlan,routeRequest}from"../src/index.js";
test("creates renderer manifest",()=>{const r=createPlan({subject:"Agent workflows",audience:"founders",goal:"book a call",duration:30,clipDuration:5});assert.equal(r.storyboard.length,6);assert.equal(r.moneyPrinterTurbo.video_aspect,"9:16");assert.equal(r.rendering.supported,false)});
test("requires core brief",()=>assert.ok(createPlan({}).error));
test("health declares planning mode",async()=>{const d=await(await routeRequest(new Request("https://x/health"))).json();assert.equal(d.mode,"planning_only")});
