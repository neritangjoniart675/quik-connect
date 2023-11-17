/*
Filename: sophisticated_complex_code.js
Content: This code implements a complex finance management system that allows users to track their expenses, generate reports, and set budget goals.
Please note that this is a simplified and conceptual implementation and does not include error handling or authentication.

Usage:
- To add an expense: addExpense(description, amount, category)
- To set a budget goal: setBudgetGoal(category, goalAmount)
- To get a report: getReport(startDate, endDate)
*/

// Expense class definition
class Expense {
  constructor(description, amount, category) {
    this.description = description;
    this.amount = amount;
    this.category = category;
  }
}

// BudgetCategory class definition
class BudgetCategory {
  constructor(category) {
    this.category = category;
    this.expenses = [];
  }
  addExpense(expense) {
    this.expenses.push(expense);
  }
  getTotalExpenses() {
    let total = 0;
    for (const expense of this.expenses) {
      total += expense.amount;
    }
    return total;
  }
}

// FinanceManager class to manage expenses and budgets
class FinanceManager {
  constructor() {
    this.expenses = [];
    this.budgetCategories = new Map();
  }
  addExpense(description, amount, category) {
    const expense = new Expense(description, amount, category);
    this.expenses.push(expense);

    if (!this.budgetCategories.has(category)) {
      this.budgetCategories.set(category, new BudgetCategory(category));
    }
    this.budgetCategories.get(category).addExpense(expense);
  }
  setBudgetGoal(category, goalAmount) {
    if (!this.budgetCategories.has(category)) {
      this.budgetCategories.set(category, new BudgetCategory(category));
    }
    this.budgetCategories.get(category).goalAmount = goalAmount;
  }
  getReport(startDate, endDate) {
    const report = [];

    for (const expense of this.expenses) {
      if (expense.date >= startDate && expense.date <= endDate) {
        report.push(expense);
      }
    }

    const categoriesReport = new Map();

    for (const budgetCategory of this.budgetCategories.values()) {
      categoriesReport.set(budgetCategory.category, {
        totalExpenses: budgetCategory.getTotalExpenses(),
        goalAmount: budgetCategory.goalAmount,
      });
    }

    return { expenses: report, budgetCategories: categoriesReport };
  }
}

// Example usage:

// Create a new finance manager
const manager = new FinanceManager();

// Add expenses
manager.addExpense("Coffee", 5, "Food");
manager.addExpense("Gym membership", 50, "Health");
manager.addExpense("Movie ticket", 15, "Entertainment");

// Set budget goals
manager.setBudgetGoal("Food", 200);
manager.setBudgetGoal("Health", 100);
manager.setBudgetGoal("Entertainment", 50);

// Get report
const startDate = new Date(2022, 0, 1);
const endDate = new Date(2022, 11, 31);
const report = manager.getReport(startDate, endDate);

// Print report
console.log("Expenses:", report.expenses);
console.log("Budget Categories:", Array.from(report.budgetCategories.values()));