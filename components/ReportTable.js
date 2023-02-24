import { hours } from './data';
import useResource from '../hooks/useResource';

export default function ReportTable() {

  const { resources = [], deleteResource } = useResource()

  const calculate_hourly_cookies = (min, max, average) => {
    let hourlyArray = [];
    for (let i = 0; i < hours.length; i++) {
      let randomCustomers = Math.floor(Math.random() * (max - min + 1)) + min;
      let cookiesSold = Math.round(randomCustomers * average);
      hourlyArray.push(cookiesSold);
    }
    return hourlyArray;
  };

  const calculate_hourlyTotal = (cookiesArray) => {
    return cookiesArray.reduce((x, y) => x + y, 0);
  };

  const getTotalSum = () => {
    let totalSum = [];
    for (let i = 0; i < hours.length; i++) {
      let sum = 0;
      for (let j = 0; j < resources.length; j++) {
        sum += resources[j].hourly[i];
      }
      totalSum.push(sum);
    }
    return totalSum;
  };

  const calculateTotalSum = (hourlyTotals) => {
    let total = 0;
    for (let i = 0; i < hourlyTotals.length; i++) {
      total += hourlyTotals[i];
    }
    return total;
  };

  const handleDelete = (user_id) => {
    deleteResource(user_id);
  };


  return (
    <div>
      {resources.length == 0
        ? <h2 className="my-6d font-bold text-center text-3xl"> No Cookie Stands Available </h2>
        : <table className="w-2/3 mx-auto mb-12 text-sm text-center border border-gray-400">
          <thead className="mx-auto text-sm text-center">
            <tr className="bg-table-cell-darker-green">
              <th className="py-2 px-4 border-2 border-black">Location</th>
              {hours.map((hour, index) => {
                return (<th key={`hour-${index}`} className="py-2 px-4 border-2 border-black"> {hour} </th>)
              })}
              <th className="py-2 px-4 border-2 border-black">Totals</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((item, index) => {
              item.hourly = calculate_hourly_cookies(item.minimum_customers_per_hour, item.maximum_customers_per_hour, item.average_cookies_per_sale);
              item.hourlyTotal = calculate_hourlyTotal(item.hourly);
  
              return (<tr key={`row-${index}`} className={index % 2 === 0 ? "bg-table-cell-lighter-green" : "bg-table-cell-green"}>
                <td className="py-2 px-4 border-2 border-black"> {item.location} 
                    <button onClick={() => handleDelete(item.id)} className="ml-2 hover:text-red-700 font-bold py-1 px-2 rounded text-red-500">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                      </svg>
                    </button>
                </td>
                {item.hourly.map((hourlyData, index) => {
                  return (<td key={`row-${index}-data-${hourlyData}`} className="py-2 px-4 border-2 border-black">{hourlyData}</td>)
                })}
                <td className="py-2 px-4 border-2 border-black">{item.hourlyTotal}</td>
              </tr>)
            })}
            <tr className="bg-table-cell-darker-green">
              <th className="py-2 px-4 border-2 border-black">Totals</th>
              {getTotalSum().map((total, index) => {
                return (
                  <td key={`total-${index}`} className="py-2 px-4 border-2 border-black">
                    {total}
                  </td>
                )
              })}
              <td className="py-2 px-4 border-2 border-black">{calculateTotalSum(getTotalSum())}</td>
            </tr>
          </tbody>
        </table>
      }
    </div>
  );
  
    }