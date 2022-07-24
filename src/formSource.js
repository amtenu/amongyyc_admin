const  userInputs = [
    {
      id:"name",
      label: "name",
      type: "text",
      placeholder: "john_doe",
    },
    {
      id:"age",
      label: "age",
      type: "number",
      placeholder: "",
    },
    // {
    //   id: "displayName",
    //   label: "Name and surname",
    //   type: "text",
    //   placeholder: "John Doe",
    // },
    {
      id:"email",
      label: "email",
      type: "email",
      placeholder: "john_doe@gmail.com",
    },
    {
      id:"password",
      label:"password",
      type: "password",
    },
    {
      id:"Phone",
      label: "Phone",
      type: "text",
      placeholder: "+1 234 567 89",
    },
    {
      id:"address",
      label: "Address",
      type: "text",
      placeholder: "",
    }
   
    // {
    //   id:"Address",
    //   label: "Address",
    //   type: "text",
    //   placeholder: "800 3 St SE 3rd Floor, Calgary, AB T2G 0E7",
    // },
    // {
    //   id: 7,
    //   label: "Country",
    //   type: "text",
    //   placeholder: "USA",
    // },
  ];
  
 const taskInputs = [
    {
      id:"title",
      label: "Title",
      title: "text",
      placeholder: "",
    },
    {
      id: "type",
      label: "Type",
      type: "text",
      placeholder: "type",
    },
    {
      id: "description",
      label: "Description",
      type: "text",
      placeholder: "Description",
    },
    {
      id: "address",
      label: "Address",
      type: "text",
      placeholder: "Address",
    },
    {
      id: "taskLatitude",
      label: "Latitude",
      type: "text",
      placeholder: "Latitude",
    },
    {    
      id: "taskLongitude",
      label: "Longitude",
      type: "text",
      placeholder: "Longitude",
    },
    {
      id:"region",
      label: "Region",
      type: "text",
      placeholder: "Region",
    },
    {
      id:"taskWeek",
      label: "Week",
      type: "text",
      placeholder: "Week",
    }


    
  ];

  const tricksterInputs = [
    {
      id:"name",
      label: "name",
      type: "text",
      placeholder: "john_doe",
    },
    {
      id:"uri",
      label: "uri",
      type: "text",
      placeholder: "",
    },
    {
      id:"activeTimes",
      label: "activeTimes",
      type: "time",
      placeholder: "",
    }
  ];

  const donationInputs = [
    {
      id:"CharityOrgName",
      label: "CharityOrgName",
      type: "text",
      placeholder: "",
    },
    {
      id:"CharityOrgAddress",
      label: "CharityOrgAddress",
      type: "text",
      placeholder: "",
    },
  ];


    export  {userInputs,taskInputs,tricksterInputs,donationInputs};