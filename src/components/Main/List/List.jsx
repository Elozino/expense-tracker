import React, { useContext } from 'react'
import { List as MUILiust, ListItem, ListItemAvatar, Avatar, ListItemSecondaryAction, IconButton, Slide, ListItemText } from "@material-ui/core"
import { Delete, MoneyOff } from "@material-ui/icons"

import useStyles from "./styles"
import { ExpenseTrackerContext } from "../../../Context/context"


const List = () => {
  const classes = useStyles()
  const { deleteTransaction, transactions } = useContext(ExpenseTrackerContext)
  // console.log(state)
  // const transactions = [
  //   {
  //     id: 1,
  //     type: 'Income',
  //     category: "Salary",
  //     amount: 50,
  //     date: new Date().toDateString(),
  //   },
  // ]

  return (
    <MUILiust dense={false} className={classes.list}>
      {transactions.map(transaction => (
        <Slide direction="down" in mountOnEnter unmountOnExit key={transaction.id}>
          <ListItem>
            <ListItemAvatar>
              <Avatar className={transaction.type === "Income" ? classes.avatarIncome : classes.avatarExpense}>
                <MoneyOff />
              </Avatar>
            </ListItemAvatar>
            <ListItemText primary={transaction.category} secondary={`$${transaction.amount} - ${transaction.date}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete" onClick={() => deleteTransaction(transaction.id)}>
                <Delete />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        </Slide>
      ))}
    </MUILiust>
  )
}

export default List