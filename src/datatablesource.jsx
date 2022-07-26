export const userColumns = [
    { field: "id", headerName: "Id", width: 70 },
    {
      field: "name",
      headerName: "User",
      width: 250,
      // renderCell: (params) => {
      //   return (
      //     <div className="cellWithImg">
      //       <img className="cellImg"  alt='' />
      //       {params.row.username}
      //     </div>
      //   );
      // },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
    },
  
    {
      field: "age",
      headerName: "Age",
      width: 100,
    },
    {
      field: "totalScore",
      headerName: "totalScore",
      width: 160,
      // renderCell: (params) => {
      //   return (
      //     <div className={`cellWithStatus ${params.row.status}`}>
      //       {params.row.status}
      //     </div>
      //   );
      // },
    },
  

  ];
  
  //temporary data
  export const userRows = [
    {
      id: 1,
      username: "Amanuel",
      img: "",
      score: 450,
      email: "aman@gmail.com",
      age: 30,
    },
    // {
    //   id: 2,
    //   username: "Jamie Lannister",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "2snow@gmail.com",
    //   status: "passive",
    //   age: 42,
    // },
    // {
    //   id: 3,
    //   username: "Lannister",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "3snow@gmail.com",
    //   status: "pending",
    //   age: 45,
    // },
    // {
    //   id: 4,
    //   username: "Stark",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "4snow@gmail.com",
    //   status: "active",
    //   age: 16,
    // },
    // {
    //   id: 5,
    //   username: "Targaryen",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "5snow@gmail.com",
    //   status: "passive",
    //   age: 22,
    // },
    // {
    //   id: 6,
    //   username: "Melisandre",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "6snow@gmail.com",
    //   status: "active",
    //   age: 15,
    // },
    // {
    //   id: 7,
    //   username: "Clifford",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "7snow@gmail.com",
    //   status: "passive",
    //   age: 44,
    // },
    // {
    //   id: 8,
    //   username: "Frances",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "8snow@gmail.com",
    //   status: "active",
    //   age: 36,
    // },
    // {
    //   id: 9,
    //   username: "Roxie",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "snow@gmail.com",
    //   status: "pending",
    //   age: 65,
    // },
    // {
    //   id: 10,
    //   username: "Roxie",
    //   img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    //   email: "snow@gmail.com",
    //   status: "active",
    //   age: 65,
    // },
  ];

  export const taskColumns = [
    { field: "id", headerName: "Id", width: 70 },
    {
      field: "type",
      headerName: "Type",
      width: 250,
      // renderCell: (params) => {
      //   return (
      //     <div className="cellWithImg">
      //       <img className="cellImg"  alt='' />
      //       {params.row.username}
      //     </div>
      //   );
      // },
    },
    {
      field: "title",
      headerName: "Title",
      width: 230,
    },
    {
      field: "description",
      headerName: "Description",
      width: 100,
    },
    {
      field: "address",
      headerName: "Address",
      width: 160,

    },
    {
      field: "region",
      headerName: "Region",
      width: 160,
    },
    {
      field: "taskLatitude",
      headerName: "Latitude",
      width: 160,
    },
    {
      field: "taskLongitude",
      headerName: "Longitude",
      width: 160,
    },
  ];


  export const tricksterColumns = [
    { field: "id", headerName: "Id", width: 70 },
    {
      field:"name",
      headerName: "Name",
      width: 250,
    },
    {
      uri: "img",
      headerName: "Image",
      width: 230,
       renderCell: (params) => {
        return (
          <div className="cellWithImg">
           <img className="cellImg"  alt='' />
           {params.row.username}
        </div>
        );
      }
    },
    {
      field:"activeTimes",
      headerName: "Active Times",
      width: 100,
    },
  ]

  export const donationColumns = [
    { field: "id", headerName: "Id", width: 70 },
    {
      field: "donatedTo",
      headerName: "Donated To",
      width: 250,
    },
    {
      field: "donatedBy",
      headerName: "Donated By",
      width: 230,
    },
    {
      field: "donation",
      headerName: "Donation",
      width: 100,
    },
  ]
