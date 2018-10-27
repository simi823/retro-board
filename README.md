# Retro-Board

## Introduction

**Retro-Board** is a *ReactJS* application that sets up a retrospective dashboard tool that can de used for sprint sessions keep track and discuss what went well and what didn’t. The tool allows teams to easily identify obstacles and discuss ideas for improvements in sprint projects.

There are three caterories:

    - Worked Well: identify items that worked well
    - To Improve: identify items that need to be improved
    - Action Items: identify items that need to addressed  and follwed up on in future sprints

Each category contains various cards of items that can be inserted, deleted and moved from category to another category.

## Installation

Clone or Download the `github` repo into your local computer directory. Make sure that `yarn` is installed.

### Install Packages

Change directory into the `retro-board` directory and install packages:

    $>cd retro-board
    $>yarn install

### Starting Application

After the installation of the packages, start the ReactJS Server to run on your computer at `http://localhost:3000`

    $>yarn start

## Getting Started

Each category allows you to add a new card, delete existing cards, and move cards to the right or left category colum.

### Add New Card

Click on `+` above the category to add a new card and enter text for the item. Click on `ADD` button to save the item content. The new card textbox is toggled on via the `+` button or you can remove it with the `delete` button.

The textbox validates that it is not empty with an `alert`.

### Delete Card

Click on `x` at the bottom of each card to delete the card.

### Move Card

Click on `<` to move the current card to the category to the left or `>` to move the current card to the category to the right. The cards will be moved around when at the front or at the end of the columns.

For example, if the card is in the last column or `Action Items` category, moving to the right will push the card to the first column or `Went Well` category. Also, if the card is in the first column or `Went Well` category, moving to the left will push the card to the last column or `Action Items` category.
