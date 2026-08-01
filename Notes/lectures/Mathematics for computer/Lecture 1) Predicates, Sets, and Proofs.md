## Proof

**Proof:**  
A method of ascertaining truth via:
- Experiments  
- Asking questions  
- Sampling  
- Legal investigation  
- Questioning authority  
- Religion  
- Inner conviction  

**Mathematical Proof:**  
Verification of a proposition by a chain of **logical deductions** from a base set of **axioms**.

**Proposition:**  
A statement that is **true or false**.  
- Examples:  
  - `2 + 3 = 5` ✅  
  - `2 + 3 = 4`  ✅
  - `∀n∈N, n² + n + 41 is prime` (True for 0–39, false for 40 onwards)

**Predicate:**  
A proposition that **depends on a variable**.  
- Examples:  
  - `n is prime`  
  - `n is odd`  

**Goldbach Conjecture:**  
- Every even number greater than 2 is the sum of 2 primes.  
- Not proven true or false → called a **conjecture**.

---

## Boolean Operators

Let **A, B** be propositions:  

1. **NOT**  
   - `¬A` or `Ā` → "A is false"  
   - Truth table:  

     | A | ¬A |
     |---|----|
     | T | F  |
     | F | T  |

2. **AND**  
   - `A ∧ B` or `A & B`  
   - Truth table:  

     | A | B | A ∧ B |
     |---|---|--------|
     | T | T | T      |
     | T | F | F      |
     | F | T | F      |
     | F | F | F      |

3. **OR**  
   - `A ∨ B` or `A || B`  
   - Inclusive vs exclusive OR:  
     - English: "Chicken or Pasta" → XOR (only one)  
     - "Neither allowed" → NAND  
     - "Both allowed" → No special term  

4. **Implication**  
   - `A → B` → "If A, then B"  
   - Equivalent: `¬A ∨ B`  
   - Converse: `B → A`  
   - Contrapositive: `¬B → ¬A`  
   - Inverse: `¬A → ¬B`  
   - Note: `A → B` is equivalent to its **contrapositive**  

---

## Sets

**Definition:**  
A collection of **well-defined objects**.  
- Order doesn't matter, no repeats.  

**Examples:**  
- `{8, 2, 42, 21} = {2, 8, 42, 21} = {2, 2, 8, 42, 21, 42}`  
- `N, Q, R, Z, C` (Number sets)  
- Empty set: `{}` or `Φ`  
- Nested set: `A = {2, {3, 4}, 5, 6}` → does **not** contain `3` directly  

**Subset / Superset:**  
- `A ⊆ B` → A is subset of B  
- `B ⊇ A` → B is superset of A  
- Examples:  
  - `A = {1, 2, 3}`, `B = {1, 2}` → `B ⊆ A ✅`, `A ⊆ B ❌`  
  - `Φ ⊆ A ✅`  

**Set Operations:**  
- `A ∪ B` → all in A **or** B **or both** (XOR)  
- `A ∩ B` → all in **both** A and B (AND)  
- `A Δ B` → all in A or B **but not both** (OR)  
- `A - B` → all in A **but not in B**  
- `A!` → all in **universal set** not in A (NOT)  

**Set-builder Notation:**  
- `{ n ∈ N | n is prime } = {2, 3, 5, 7, 11, 13, ...}`  

---

## Tuples

**Definition:**  
Ordered list of elements, **repeats allowed**, uses `( )`.  
- `(7,1,4) != (1,7,1,4) != (1,7,4)`  
- **No operations** like in sets.  

---

## Axioms

**Definition:**  
A proposition assumed to be **true**; starting point for proofs.  

**Example:**  
- **Euclid's Parallel Postulate:**  
  > For every point P and line l, P not on l → there exists a **unique line** through P parallel to l.  
  - Cannot be proven from other axioms  
  - Not true in spherical/hyperbolic geometry  

**Conditions of Axioms:**  
1. **Consistency:**  
   - A set of axioms is consistent if false ≠ true.  
2. **Completeness:**  
   - A set is complete if **every true proposition** can be proved from axioms.  

**Gödel Incompleteness Theorem:**  
- Cannot have both consistency and completeness simultaneously.  
- Choice: **consistency over completeness**  
- Some true statements **cannot be proven** from current axioms.

---

