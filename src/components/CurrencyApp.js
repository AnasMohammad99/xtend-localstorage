import React from 'react'
import { Spin, Table, Tag } from 'antd';
import { Box } from '@mui/material';
import styled from 'styled-components';

const CurrencyApp = ({Crypto}) => {
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Symbol',
    dataIndex: 'symbol',
    key: 'symbol',
  },
  {
    title: 'Price',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: 'Last 24h',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, { tags }) => (
      <>
        {tags.map((tag) => {
          let color = tag < 0 ? 'volcano' : 'green';
          return (
            <Tag color={color} key={tag}>
              {tag}
            </Tag>
          );
        })}
      </>
    ),
  },
];
const data2 = []
Object.values(Crypto).map((currency)=>{
  data2.push({
      key: currency.id,
      name: currency.name,
      symbol: currency.symbol,
      price: currency.quote.USD.price,
      tags: [currency.quote.USD.volume_change_24h],
  })
  return 0
})
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
      {
        Crypto===""?<Spin />:<Table columns={columns} dataSource={data2} pagination={{defaultPageSize:10}} />
      }
        
    </Wrapper>
  )
}

export default CurrencyApp