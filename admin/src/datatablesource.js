export const userColumns = [
  { field: 'id', headerName: 'ID', width: 70 },

  {
    field: 'user',
    headerName: 'User',
    width: 180,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img
            className="cellImg"
            src={params.row.img || 'https://i.ibb.co/MBtjqXQ/no-avatar.gif'}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    },
  },

  {
    field: 'email',
    headerName: 'Email',
    width: 200,
  },

  {
    field: 'country',
    headerName: 'Country',
    width: 100,
  },

  {
    field: 'city',
    headerName: 'City',
    width: 100,
  },

  {
    field: 'phone',
    headerName: 'Phone',
    width: 130,
  },

  // {
  //   field: 'isAdmin',
  //   headerName: 'Admin',
  //   width: 160,
  //   renderCell: (params) => {
  //     return (
  //       <div className={`cellWithStatus ${params.row.isAdmin}`}>
  //         {params.row.isAdmin}
  //       </div>
  //     );
  //   },
  // },
];
export const hotelColumns = [
  { field: '_id', headerName: 'ID', width: 250 },
  {
    field: 'name',
    headerName: 'Name',
    width: 200,
  },
  {
    field: 'type',
    headerName: 'Type',
    width: 100,
  },
  {
    field: 'desc',
    headerName: 'Description',
    width: 230,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 100,
  },
];

export const roomColumns = [
  { field: '_id', headerName: 'ID', width: 70 },
  {
    field: 'title',
    headerName: 'Title',
    width: 230,
  },
  {
    field: 'desc',
    headerName: 'Description',
    width: 270,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 100,
  },
  {
    field: 'maxPeople',
    headerName: 'Max People',
    width: 100,
  },
];
