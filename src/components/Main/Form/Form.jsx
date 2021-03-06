import React, { useState } from 'react'
import { TextField, Typography, FormControl, Select, Grid, Button, InputLabel, MenuItem } from "@material-ui/core"
import useStyles from "./styles"
import { ExpenseTrackerContext } from '../../../Context/context'
import { useContext } from 'react'
import { v4 as uuidv4 } from "uuid"
import { incomeCategories, expenseCategories } from '../../../constants/categories'

const initialState = {
  amount: "",
  category: "",
  type: "Income",
  date: new Date().toDateString()
}


const Form = () => {
  const classes = useStyles()
  const [formData, setFormData] = useState(initialState)
  const { addTransaction } = useContext(ExpenseTrackerContext)


  const selectedCategories = formData.type === "Income" ? incomeCategories : expenseCategories;
  const createTransaction = () => {
    const transaction = { ...formData, amount: Number(formData.amount), id: uuidv4() }
    addTransaction(transaction)
    setFormData(initialState)
  }
  // console.log(formData);
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography align="center" gutterBottom variant='subtitle2'></Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Type</InputLabel>
          <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
            <MenuItem value="Income">Income</MenuItem>
            <MenuItem value="Expense">Expense</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Category</InputLabel>
          <Select value={formData.category} onChange={(e) => setFormData({ ...formData, category: e.target.value })}>
            {selectedCategories.map((c) => (
              <MenuItem value={c.type} key={c.type}>{c.type}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField type="number" label="Amount" fullWidth value={formData.amount} onChange={(e) => setFormData({ ...formData, amount: e.target.value })} />
      </Grid>
      <Grid item xs={6}>
        <TextField type="date" label="Date" fullWidth value={formData.date} onChange={(e) => setFormData({ ...formData, date: e.target.value })} />
      </Grid>
      <Button className={classes.button} variant="outlined" color="primary" fullWidth onClick={createTransaction}>Create</Button>
    </Grid>
  )
}

export default Form