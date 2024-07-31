import TableHeader from './TableHeader'
import { COLUMNS} from '../utils/constants';
import DataTable from 'react-data-table-component';
import useFetchAPi from '../utils/useFetchAPI';

const Body = () => {

  const users = useFetchAPi();

  if(users==null){
    return <h2>SHIMMER</h2>
  }

  return (
    <div className="sm:mx-20">
        <TableHeader/>
        <DataTable className="my-10 border rounded-lg border-gray-200" columns={COLUMNS} data={users} />
    </div>
  )
}

export default Body