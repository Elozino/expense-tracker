import { useContext } from "react"
import { ExpenseTrackerContext } from "../Context/context"

import { incomeCategories, expenseCategories, resetCategories } from "../constants/categories"

const useTransaction = (title) => {
  resetCategories();
  const { transactions } = useContext(ExpenseTrackerContext);
  const transactionsPerType = transactions.filter((t) => t.type === title);
  const total = transactionsPerType.reduce((acc, currentVal) => acc += currentVal.amount, 0);
  const categories = title === "Income" ? incomeCategories : expenseCategories;
  console.log({ transactionsPerType, total, categories });


  transactionsPerType.forEach((t) => {
    const category = categories.find((c) => c.type === t.category);
    if (category) {
      category.amount += t.amount;
    }
  })

  const filterCategories = categories.filter((c) => c.amount > 0);
}  

