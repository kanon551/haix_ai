import React, { useEffect, useState } from 'react';
import NormalCard from '../components/NormalCard';
import * as XLSX from 'xlsx';


const Contacts = () => {


    const [keyValuePairs, setKeyValuePairs] = useState<any>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/fakeData_haix.xlsx');
        const arrayBuffer = await response.arrayBuffer();
        const workbook = XLSX.read(arrayBuffer, { type: 'array' });
        const worksheet = workbook.Sheets[workbook.SheetNames[0]];
        const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

        const headers:any = jsonData[0];
        const data = jsonData.slice(1);

        const keyValuePairs = data.map((row:any) => {
          const keyValuePair:any = {};
          row.forEach((value:any, index:any) => {
            const key = headers[index];
            keyValuePair[key] = value;
          });
          return keyValuePair;
        });

        setKeyValuePairs(keyValuePairs);
      } catch (error) {
        console.error('Error fetching XLSX data:', error);
      }
    };

    fetchData();
  }, []);

    return (
        <>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-stretch">
                {keyValuePairs.map((keyValue: any, index: any) => (
                    <NormalCard key={index} obj={keyValue}/>
                ))}
            </div>
        </>

    )
}

export default Contacts
