import React from 'react';
import { Button, message, Space } from 'antd';
import {  MenuItem, Select, Stack, TextField } from '@mui/material';
const BudgetForm = ({setBudgetData, budgetData, amount, category, date, description, setAmount, setCategory, setDate, setDescription, budegetKey, setBudegetKey, handleCancel}) => {
  const onFinish = (e) => {
    e.preventDefault()
    if(+amount<0){
      message.error('amount must be positive')
    } else {
      if(budegetKey===""){
        setBudgetData([...budgetData,{key:`${new Date().getTime()}`,amount, category, date, description}])
        message.success('Submit success!');
      } else {
        let newData = [...budgetData.filter((e)=>e.key !== budegetKey),{key:budegetKey,amount, category, date, description}]
        setBudgetData(newData.sort((a,b)=>+a.key - +b.key))
        console.log(budgetData);
      }
      setAmount("")
      setCategory("")
      setDate("")
      setDescription("")
      setBudegetKey("")
      handleCancel()
    }

  };
  return (
    <form onSubmit={onFinish}>
        <Stack spacing={2} direction="row">
            <TextField
                id="amount"
                type="number"
                variant='outlined'
                color='secondary'
                label="Amount"
                onChange={e => setAmount(e.target.value)}
                value={amount}
                fullWidth
                required
                sx={{mb: 2}}
            />
        </Stack>
        <Stack spacing={2} direction="row">
            <TextField
                id="date"
                type="date"
                variant='outlined'
                color='secondary'
                label=""
                onChange={e => setDate(e.target.value)}
                value={date}
                fullWidth
                required
                sx={{mb: 2}}
            />
        </Stack>
        <Stack spacing={2} direction="row">
        <Select
            id="demo-simple-select"
            value={category}
            label="Category"
            onChange={(e)=>setCategory(e.target.value)}
        >
            <MenuItem value="incomes">Incomes</MenuItem>
            <MenuItem value="expenses">Expenses</MenuItem>
        </Select>
        </Stack>
        <Stack spacing={2} direction="row">
            <TextField
                id="description"
                type="text"
                variant='outlined'
                color='secondary'
                label="Description"
                onChange={e => setDescription(e.target.value)}
                value={description}
                fullWidth
                required
                sx={{mb: 2}}
            />
        </Stack>
        <Space>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Space>
      </form>
  );
};
export default BudgetForm;