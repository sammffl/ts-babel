import math from './math'

class A {
    a = 1
}

const { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 }

const n = { x, y, ...z }
// n = 1
console.log(n)
const s = {} as A
s.a = 1

// const enum E { A }
