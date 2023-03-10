import './datatable.scss';
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link, useLocation } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import useFetch from '../../hooks/useFetch';
import axios from 'axios';
import { AuthContext } from '../../context/AuthContext';

const Datatable = ({ columns, type }) => {
  const { user } = useContext(AuthContext);
  const token = user.token;

  const location = useLocation();
  const path = location.pathname.split('/')[1];

  const [list, setList] = useState([]);

  const title = `Add New ${type}`;

  const { data, loading, error } = useFetch(
    `http://localhost:8800/api/${path}`
  );
  console.log(data);

  useEffect(() => {
    setList(data);
  }, [data]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/api/${path}/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
    } catch (err) {
      console.log(err);
    }
    setList(list.filter((item) => item._id !== id));
  };

  const actionColumn = [
    {
      field: 'action',
      headerName: 'Action',
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: 'none' }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <div className="datatableTitle">
        {title}
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid
        className="datagrid"
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        checkboxSelection
        getRowId={(row) => row._id}
      />
    </div>
  );
};

export default Datatable;
