import React from 'react'
import { Button, Table, Tag } from 'antd';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { DeleteFilled, EditFilled } from '@ant-design/icons';

const CurrencyApp = ({onDeleting, onEditing, budgetData}) => {
const columns = [
  {
    title: 'Amount',
    dataIndex: 'amount',
    key: 'amount',
  },
  {
    title: 'Date',
    dataIndex: 'date',
    key: 'date',
  },
  {
    title: 'Category',
    key: 'category',
    dataIndex: 'category',
    render: (_, { category }) => {
      return(
            category==="expenses"?
              <Tag color="volcano" key={category}>{category}</Tag>:
              <Tag color="green" key={category}>{category}</Tag>
      )
    },
  },
  {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
  },
  {
    title: 'Edit/delete',
    key: 'edit',
    dataIndex: 'edit',
    render: (_, record)=>{
      return(
        <>
          <Button onClick={()=>onEditing(record)} shape="circle" icon={<EditFilled />} />
          <Button onClick={()=>onDeleting(record)} shape="circle" icon={<DeleteFilled />} />
        </>
      )
    }
  },
];
const Wrapper = styled(Box)({
  backgroundColor: 'white',
  padding: 10,
  margin:20,
  borderRadius: 5,
  height:"85vh",
  overflowY:"scroll",

  '&::-webkit-scrollbar': {
    display:"none"
  }, 
  '@media (max-width: 780px)': {
    overflowX:"scroll",
  }
});
  return (
    <Wrapper>
        <Table columns={columns} dataSource={budgetData} pagination={{defaultPageSize:10}} />        
    </Wrapper>
  )
}

export default CurrencyApp