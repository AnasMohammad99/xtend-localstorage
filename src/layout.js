import React, { useEffect, useState } from 'react';
import { FloatButton, Layout, Modal, Space } from 'antd';
import AppSidebar from './components/Sidebar';
import AppRoutes from './routes';
import { Avatar, Box, Typography } from '@mui/material';
import { PlusOutlined } from '@ant-design/icons';
import BudgetForm from './components/BudgetForm';

const { Header, Sider, Content } = Layout;
const headerStyle = {
  // textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 20,
  // lineHeight: '64px',
  backgroundColor: '#7dbcea',
  display: "flex",
  width:"100%",
  justifyContent:"space-between"
};
const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};
const siderStyle = {
  textAlign: 'center',
  lineHeight: '120px',
  color: '#fff',
};

const AppLayout = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [budgetData, setBudgetData] = useState(JSON.parse(localStorage.getItem('items'))||[])
  const [amount, setAmount] = useState("")
  const [category, setCategory] = useState("")
  const [date, setDate] = useState("")
  const [description, setDescription] = useState("")
  const [budegetKey, setBudegetKey] = useState("")
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(budgetData));
  }, [budgetData]);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onEditing = (record) => {
    setIsModalOpen(true);
    setAmount(record.amount);
    setDate(record.date);
    setDescription(record.description);
    setCategory(record.category);
    setBudegetKey(record.key)
  }
  const onDeleting = (record) => {
    let newBudgetData = budgetData.filter((e)=>e.key!==record.key)
    setBudgetData(newBudgetData)
  }
  return(
  <Space
    direction="vertical"
    style={{
      width: '100%',
    }}
    size={[0, 48]}
  >
    <Layout style={{height:'100vh'}}>
      <Header style={headerStyle}>
        <Box style={{
          display:"flex",
          justifyContent:"space-between",
          alignItems:"center",
          minWidth:"7rem"
        }}>
          <Avatar />
          <Typography>Jon Doe</Typography>
        </Box>
        {/* {
          Crypto[0]?        <Box style={{
            display:"flex",
            justifyContent:"space-between",
            alignItems:"center",
            minWidth:"22rem"
          }}>
            <Typography>{Crypto[0].name}</Typography>
            <Typography>{Crypto[0].quote.USD.price} $</Typography>
            <Typography style={{
              color:"red"
            }}>{Crypto[0].quote.USD.volume_change_24h}</Typography>
          </Box>:<Spin />
        } */}
      </Header>
      <Layout hasSider>
        <Sider theme="dark" style={siderStyle}><AppSidebar /></Sider>
        <Content style={contentStyle}><AppRoutes onDeleting={onDeleting} onEditing={onEditing} budgetData={budgetData} /></Content>
      </Layout>
        <FloatButton icon={<PlusOutlined />} onClick={showModal} />
    </Layout>
        <Modal title="Basic Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <BudgetForm handleCancel={handleCancel} budegetKey={budegetKey} setBudegetKey={setBudegetKey} setBudgetData={setBudgetData} budgetData={budgetData} amount={amount} category={category} date={date} description={description} setAmount={setAmount} setCategory={setCategory} setDate={setDate} setDescription={setDescription} />
      </Modal>
  </Space>
  )
};
export default AppLayout;