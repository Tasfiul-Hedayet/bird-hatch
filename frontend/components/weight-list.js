'use client';

import { useEffect, useState } from 'react'
import styles from './list.css';
import axios from 'axios';
import { Trash, Info, Pencil } from 'lucide-react';

export default function WeightList({searchTerm}) {

  const [isClient, setIsClient] = useState(false)

  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {

    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_ORIGIN}/api/v1/weights/getAllWeights`);
      const data = response.data.data.allWeights;
      setData(data)
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
    fetchData();
  }, [searchTerm]);
 
  useEffect(() => {
    setIsClient(true)
  }, [])

  if(!isClient){
    return null;
  }

  async function deleteWeight(id){
    console.log(`Weight ID: ${id}`);
    try {
      const response = await axios.delete(`${process.env.NEXT_PUBLIC_ORIGIN}/api/v1/weights/${id}`);
      console.log(response);
      location.reload();
      alert('Delete success')
    } catch (error) {
      console.error('Error deleting weight: ', error);
      alert(error.response.data.error)
    }
  }

  return (
    <div className='table-cover'>
      <table>
        <tr>
          <th>Leg Tag</th>
          <th>Weight</th>
          <th>Date</th>
          <th>Actions</th>
        </tr>
        {data && data.map((weight, index) => {
          const dateOnly = weight.Date.split('T')[0];
          return (
            <tr key={index}>
              <td>{weight.leg_tag}</td>
              <td>{weight.Weight}</td>
              <td>{dateOnly}</td>
              <td className='action-row'>
                <Trash
                  size={32} 
                  className='icon' 
                  onClick={() => deleteWeight(weight.weight_id)}
                />

                <Info 
                  size={32} 
                  className='icon'
                /> 
                <Pencil 
                  size={32} 
                  className='icon' />
              </td>
            </tr>
          )
        }
        )}
      </table>
    </div>
  )
}
