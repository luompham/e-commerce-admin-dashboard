import { React, useEffect } from 'react';
import { Table } from 'antd';
import { getBrands } from '../features/brand/brandSlice';
import { useDispatch, useSelector } from 'react-redux';
import { CiEdit } from 'react-icons/ci';
import { AiFillDelete } from 'react-icons/ai';
import { Link } from 'react-router-dom';

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
    title: 'Action',
    dataIndex: 'action',
  },
];

const BrandList = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getBrands());
  }, []);
  const brandState = useSelector((state) => state.brand.brands);
  const brandStateLength = brandState.length
  const data1 = [];
  for (let i = 0; i < brandStateLength; i++) {
    data1.push({
      key: i + 1,
      name: brandState[i].title,
      action: (
        <>
          <Link className='fs-4 text-danger' to='/'><CiEdit /></Link>
          <Link className='ms-3 fs-4 text-danger' to='/'><AiFillDelete /></Link>
        </>
      ),
    });
  }
  console.log(brandState)
  return (
    <>
      <div>
        <h3 className="mb-4 title">Brands</h3>
        <div>
          <Table
            columns={columns}
            dataSource={data1}
          />
        </div>
      </div>
    </>
  )
}

export default BrandList;
