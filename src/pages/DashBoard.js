import React from 'react';
import { GoKebabVertical } from 'react-icons/go';
import { BsArrowUpRight } from 'react-icons/bs';
import { Column } from '@ant-design/plots';
import { Table } from 'antd';

const columns = [
  {
    title: 'SNo',
    dataIndex: 'key',
  },
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Product',
    dataIndex: 'product',
  },
  {
    title: 'Status',
    dataIndex: 'status',
  },
];
const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    status: `London, Park Lane no. ${i}`,
  });
}
const DashBoard = () => {
  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'Apr',
      sales: 145,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'Jun',
      sales: 38,
    },
    {
      type: 'Jul',
      sales: 38,
    },
    {
      type: 'Aug',
      sales: 38,
    },
    {
      type: 'Sep',
      sales: 38,
    },
    {
      type: 'Oct',
      sales: 75,
    },
    {
      type: 'Nov',
      sales: 42,
    },
    {
      type: 'Dec',
      sales: 50,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    color: ({ type }) => {

      return '#ffd333';
    },
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Month',
      },
      sales: {
        alias: 'Income',
      },
    },
  };
  return (
    <>
      <h3 className='mb-4'>Dashboard</h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className='d-flex flex-grow-1 justify-content-between align-items-end bg-white p-3 rounded-3'>
          <div>
            <p className='mb-0'>Total</p>
            <h4 className='mb-0'>$1000</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6> <BsArrowUpRight /> 32%</h6>
            <p className='mb-0'>Compared to April 2022</p>
          </div>
        </div>
        <div className='d-flex flex-grow-1 justify-content-between align-items-end bg-white p-3 rounded-3'>
          <div>
            <p className='mb-0'>Total</p>
            <h4 className='mb-0'>$1000</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='red'> <BsArrowUpRight /> 32%</h6>
            <p className='mb-0'>Compared to April 2022</p>
          </div>
        </div>
        <div className='d-flex flex-grow-1 justify-content-between align-items-end bg-white p-3 rounded-3'>
          <div>
            <p className='mb-0'>Total</p>
            <h4 className='mb-0'>$1000</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'> <BsArrowUpRight /> 32%</h6>
            <p className='mb-0'>Compared to April 2022</p>
          </div>
        </div>
      </div>
      <div className='mt-4'>
        <h3 className='mb-4'>Income statics</h3>
        <div>
          <Column {...config} />;
        </div>
      </div>
      <div className="mt-4">
        <h3 className="mb-4">Recent Orders</h3>
        <div>
          <Table
            columns={columns}
            dataSource={data1}
          />
        </div>
      </div>
      <div className="my-4">
        <h3 className="mb-4">Recent Reviews</h3>
        <div></div>
      </div>
    </>
  )
}

export default DashBoard;
