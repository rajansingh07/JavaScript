
//                                                                       JAVASCRIPT EXECUTION CONTEXT

// Execution Context = The environment in which JavaScript code is executed.

// Main types:
// 1. Global Execution Context (GEC)
// 2. Function Execution Context (FEC)
// 3. Eval Execution Context (rarely used)

// JavaScript generally executes code in TWO phases:
// 1. MEMORY CREATION PHASE
// 2. EXECUTION PHASE

// 1. GLOBAL EXECUTION CONTEXT
// ============================================================================
// When JavaScript starts running a program, it first creates the
// Global Execution Context.

// The Global Execution Context contains:
// - Global variables
// - Function declarations/defination
// - Global `this` value

// Basic flow:
//
//                    JavaScript Program
//                           |
//                           v
//                ┌─────────────────────┐
//                │ Global Execution    │
//                │ Context (GEC)       │
//                └─────────────────────┘
//                           |
//              ┌────────────┴────────────┐
//              v                         v
//      Memory Creation Phase       Execution Phase

// 2. MEMORY CREATION PHASE
// ============================================================================

// In this phase, JavaScript allocates memory for variables and functions.
// Function declarations receive their function definition during setup.

// Example:

// let val1 = 10;
// let val2 = 15;
// function addNum(num1, num2) {
//     let total = num1 + num2;
//     return total;
// }

// let result1 = addNum(val1, val2);
// let result2 = addNum(val1, val2);

// Simplified setup:

// ┌───────────────────────────────────────────────┐
// │          GLOBAL EXECUTION CONTEXT             │
// ├───────────────────────────────────────────────┤
// │ val1    → uninitialized                       │
// │ val2    → uninitialized                       │
// │ addNum  → function definition                 │
// │ result1 → uninitialized                       │
// │ result2 → uninitialized                       │
// └───────────────────────────────────────────────┘

// Then JavaScript starts executing the code.

// 3. EXECUTION PHASE
// ============================================================================

// JavaScript now executes the program line by line.

// Example:

// let val1 = 10;
// let val2 = 15;
//
// After execution:
//
// val1 → 10
// val2 → 15

// Then JavaScript reaches:
//
// let result1 = addNum(val1, val2);

// JavaScript needs to execute the function, so it creates a NEW

// Function Execution Context.

// 4. FUNCTION EXECUTION CONTEXT
// ============================================================================

// Every time a function is called, a new Function Execution Context (FEC)
// is created.

// Example:

// addNum(10, 15);

// A simplified view:

// GLOBAL EXECUTION CONTEXT
//          |
//          | calls addNum()
//          v
// ┌─────────────────────────────────────┐
// │ FUNCTION EXECUTION CONTEXT          │
// ├─────────────────────────────────────┤
// │ num1                                │
// │ num2                                │
// │ total                               │
// │                                     │
// │ Memory Phase                        │
// │ Execution Phase                     │
// └─────────────────────────────────────┘
//          |
//          | return 25
//          v
// GLOBAL EXECUTION CONTEXT

// 5. MEMORY CREATION PHASE INSIDE A FUNCTION
// ============================================================================
//
// Consider:
//
// function addNum(num1, num2) {
//     let total = num1 + num2;
//     return total;
// }
//
// When addNum() is called:
//
// addNum(10, 15);
//
// A new Function Execution Context is created.
//
// Simplified memory setup:
//
// ┌───────────────────────────────────────────────┐
// │       FUNCTION EXECUTION CONTEXT              │
// ├───────────────────────────────────────────────┤
// │ num1  → parameter binding                     │
// │ num2  → parameter binding                     │
// │ total → uninitialized                         │
// └───────────────────────────────────────────────┘

// 6. EXECUTION PHASE INSIDE A FUNCTION
// ============================================================================
//
// Arguments are assigned to parameters:
//
// num1 → 10
// num2 → 15
//
// Then:
//
// let total = num1 + num2;
//
// total → 25
//
// Then:
//
// return total;
//
// The value 25 is returned to the place where the function was called. (Returned to global context)
//
// Flow:
//
// addNum(10, 15)
//       |
//       v
// num1 = 10
// num2 = 15
//       |
//       v
// total = 10 + 15
//       |
//       v
// total = 25
//       |
//       v
// return 25
//       |
//       v
// result1 = 25

// 7. COMPLETE EXAMPLE
// ============================================================================

let val1 = 10;
let val2 = 15;

function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}

let result1 = addNum(val1, val2);
let result2 = addNum(val1, val2);

console.log(result1); // 25
console.log(result2); // 25


// ============================================================================
// 8. COMPLETE EXECUTION DIAGRAM
// ============================================================================
//
//                         PROGRAM START
//                              |
//                              v
//                 ┌─────────────────────────┐
//                 │ GLOBAL EXECUTION        │
//                 │ CONTEXT                 │
//                 └─────────────────────────┘
//                              |
//                              v
//                  MEMORY CREATION PHASE
//                              |
//          ┌───────────────────┴──────────────────┐
//          v                                      v
//     val1 → undefined                      val2 → undefined
//     addNum → undefined                    result1 → undefined
//                                           result2 → undefined
//                              |
//                              v
//                     EXECUTION PHASE
//                              |
//                              v
//                       val1 = 10
//                              |
//                              v
//                       val2 = 15
//                              |
//                              v
//                    addNum(val1, val2)
//                              |
//                              v
//              ┌──────────────────────────────┐
//              │ FUNCTION EXECUTION CONTEXT   │
//              ├──────────────────────────────┤
//              │ MEMORY CREATION PHASE        │
//              │ num1                         │
//              │ num2                         │
//              │ total                        │
//              ├──────────────────────────────┤
//              │ EXECUTION PHASE              │
//              │ num1 = 10                    │
//              │ num2 = 15                    │
//              │ total = 25                   │
//              │ return 25                    │
//              └──────────────────────────────┘
//                              |
//                              v
//                    result1 = 25
//                              |
//                              v
//                    Function Context ends
//                              |
//                              v
//                    addNum(val1, val2)
//                              |
//                              v
//              ┌──────────────────────────────┐
//              │ NEW FUNCTION EXECUTION       │
//              │ CONTEXT                      │
//              ├──────────────────────────────┤
//              │ num1 = 10                    │
//              │ num2 = 15                    │
//              │ total = 25                   │
//              │ return 25                    │
//              └──────────────────────────────┘
//                              |
//                              v
//                    result2 = 25
//                              |
//                              v
//                    Function Context ends
//                              |
//                              v
//                         PROGRAM END

// 9. IMPORTANT: EVERY FUNCTION CALL GETS A NEW EXECUTION CONTEXT
// ============================================================================

// Example:

// addNum(10, 15);
// addNum(20, 30);
//
// These are TWO different function calls.
//
// First call:
//
// addNum(10, 15)
//       |
//       v
// FEC #1
// num1 = 10
// num2 = 15
// total = 25
//       |
//       v
// return 25
//       |
//       v
// FEC #1 is removed after completion
//
//
// Second call:
//
// addNum(20, 30)
//       |
//       v
// FEC #2
// num1 = 20
// num2 = 30
// total = 50
//       |
//       v
// return 50
//       |
//       v
// FEC #2 is removed after completion
//
// Each call gets its own local variables and execution context.

// 10. CALL STACK
// ============================================================================
//
// The Call Stack keeps track of execution contexts.

// It follows the LIFO principle:

// LIFO = Last In, First Out

// Think of it like a stack of plates.

// The last plate placed on the stack is the first one removed.

// Example:

// function one() {
//     two();
// }

// function two() {
//     three();
// }

// function three() {
//     console.log("Hello");
// }

// one();

// CALL STACK:

// Step 1:

// ┌─────────────┐
// │   Global    │
// └─────────────┘

// Step 2: one() is called
//
// ┌─────────────┐
// │    one()    │  ← Top
// ├─────────────┤
// │   Global    │
// └─────────────┘

// Step 3: two() is called

// ┌─────────────┐
// │    two()    │  ← Top
// ├─────────────┤
// │    one()    │
// ├─────────────┤
// │   Global    │
// └─────────────┘

// Step 4: three() is called

// ┌─────────────┐
// │   three()   │  ← Top
// ├─────────────┤
// │    two()    │
// ├─────────────┤
// │    one()    │
// ├─────────────┤
// │   Global    │
// └─────────────┘

// three() finishes:

// ┌─────────────┐
// │    two()    │  ← Top
// ├─────────────┤
// │    one()    │
// ├─────────────┤
// │   Global    │
// └─────────────┘

// two() finishes:

// ┌─────────────┐
// │    one()    │  ← Top
// ├─────────────┤
// │   Global    │
// └─────────────┘

// one() finishes:

// ┌─────────────┐
// │   Global    │
// └─────────────┘

// 11. CALL STACK + EXECUTION CONTEXT
// ============================================================================

// The relationship can be remembered like this:
//
//              JavaScript starts
//                     |
//                     v
//              Global Context
//                     |
//                     v
//              Call Stack
//                     |
//          ┌──────────┴──────────┐
//          v                     v
//      Function A            Function B
//          |                     |
//          v                     v
//       New FEC               New FEC
//          |                     |
//          v                     v
//       Execute               Execute
//          |                     |
//          v                     v
//       Return                Return
//          |                     |
//          └──────────┬──────────┘
//                     v
//               Context removed
//
// Important:

// Execution Context = environment in which code runs.

// Call Stack = mechanism that keeps track of active execution contexts.

// 12. FUNCTION EXECUTION CONTEXT LIFECYCLE
// ============================================================================

// Function call
//      |
//      v
// New Function Execution Context
//      |
//      v
// Memory Creation Phase
//      |
//      v
// Execution Phase
//      |
//      v
// return value
//      |
//      v
// Function Execution Context removed

// 13. ONE-LINE MEMORY TRICK
// ============================================================================

// Execution Context
//        ↓
// Memory Phase
//        ↓
// Execution Phase
//        ↓
// Function Call
//        ↓
// New Function Execution Context
//        ↓
// Return
//        ↓
// Context finishes

// Call Stack: Push → Execute → Pop
