This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Coding Challenge Overview

Each of our Paylocity product teams operates like a small startup, empowered to deliver business value in whatever way
they see fit. Because our teams are close knit and fast moving it is imperative that you are able to work collaboratively
with your fellow developers.

This coding challenge is designed to allow you to demonstrate your abilities and discuss your approach to design and
implementation with your potential colleagues. You are not expected to spend more than a few hours on this project,
and you are free to use whatever technologies you prefer but please be prepared to discuss the choices you’ve made.
The most important part of this challenge is to use your work as a jumping off point for a broad and deep
conversation with our developers.

We are expecting candidates to typically spend few hours on this exercise, and we realize that this may lead to an
incomplete implementation. Please take this as an opportunity to demonstrate the best of your abilities – feel free to
mock out or skip pieces of the implementation and focus your time on exactly what you’d like to show us. We’re not
looking for you to give up your weekend for this project, we want something to start a meaningful conversation.

### Business Need:

One of the critical functions that we provide for our clients is the ability to pay for their employees’ healthcare benefits
package. A portion of these costs are deducted from their paycheck, and we handle that deduction. Create a front-end
application that displays the total cost of their healthcare benefits package per paycheck.

### Calculation breakdown:

- The cost of benefits is $1000/year for each employee
- Each dependent (children and possibly spouses) incurs a cost of $500/year
- Anyone whose name starts with ‘A’ gets a 10% discount, employee or dependent

### Assumptions:

- All employees are paid $2000 per paycheck before deductions.
- There are 26 paychecks in a year.

### Requirements:

- Mock out an API for the retrieval of employee/dependent data
  - Tip: All data can be stored client-side in memory
- List out the employee and their dependents
- Allow the user to change their elections and display a preview of the calculated benefits
- CRUD functionality
  - I.E Add/edit employee + dependents
- Allow the user to save their changes and reflect them on subsequent page loads

#### Don't waste your time on:

- Implementing a backend, data-access layer, etc.
- Perfect UI/UX design, though a general knowledge should be shown

#### Delivery of solution:

- Please include instructions on how to run the application in your submission.
- You are not expected to spend more than a few hours on this project, and you are free to use whatever
  technologies you prefer but please be prepared to discuss the choices you’ve made. The most important part of
  this challenge is to use your work as a jumping-off point for a deeper conversation with our developers.
- If you preferred, there are some simple skeleton projects to help get you started (Temporarily hosted on
  (Nova Maday's personal GH account, will be moved to a proper resting place eventually)
