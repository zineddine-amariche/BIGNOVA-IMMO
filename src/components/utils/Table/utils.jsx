import { Box } from "@mui/material";
import { RoleColors } from "../../../data/userMockData";
import Pills from "./components/usePills";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export function useColums(handleOpen, dataTable) {
  const columns = [
    {
      field: "firstName",
      align: "center",
      headerAlign: "center",
      headerName: "fullname",
      minWidth: 200,
    },
    {
      field: "lastName",
      align: "center",
      headerAlign: "center",
      headerName: "lastName",
      minWidth: 200,
    },
    {
      field: "birthDay",
      align: "center",
      headerAlign: "center",
      headerName: "birthDay",
      minWidth: 200,
    },

    {
      field: "email",
      align: "center",
      headerAlign: "center",
      headerName: "email",
      type: "string",
      minWidth: 250,
    },
    {
      field: "phone",
      align: "center",
      headerAlign: "center",
      headerName: "email",
      type: "string",
      minWidth: 250,
    },
    {
      field: "role",
      align: "center",
      headerAlign: "center",
      headerName: "role",
      minWidth: 100,
      renderCell: (roleValue) => {
        let role = {
          label: "",
          color: "",
        };
        //generating the pill color according to the role the user has
        RoleColors.forEach((element) => {
          if (roleValue.row.role == element.id) {
            role = {
              label: element.role,
              color: element.color,
            };
            //console.log(role);
            return;
          }
        });

        return (
          <Box>
            <Pills bgColorPill={role.color} text={role.label} />
          </Box>
        );
      },
    },
    {
      field: "createdAt",
      align: "center",
      headerAlign: "center",
      headerName: "created on",
      type: "string",
      minWidth: 100,
    },
    {
      field: "_id",
      align: "center",
      headerAlign: "center",
      headerName: "Details",
      minWidth: 100,
      renderCell: (cellValue) => {
        return (
          <Box onClick={() => handleOpen(cellValue.value, dataTable)}>
            <MoreHorizIcon fontSize="large" sx={{ cursor: "pointer" }} />
          </Box>
        );
      },
    },
  ];

  const columnTypeLot = [
    {
      field: "typeName",
      align: "center",
      headerAlign: "center",
      headerName: "type Name",
      minWidth: 600,
    },
  
    {
      field: "updatedAt",
      align: "center",
      headerAlign: "center",
      headerName: "updated At",
      minWidth: 400,
    },
 
     
    // {
    //   field: "role",
    //   align: "center",
    //   headerAlign: "center",
    //   headerName: "role",
    //   minWidth: 100,
    //   renderCell: (roleValue) => {
    //     let role = {
    //       label: "",
    //       color: "",
    //     };
    //     //generating the pill color according to the role the user has
    //     RoleColors.forEach((element) => {
    //       if (roleValue.row.role === element.id) {
    //         role = {
    //           label: element.role,
    //           color: element.color,
    //         };
    //         //console.log(role);
    //         return;
    //       }
    //     });

    //     return (
    //       <Box>
    //         <Pills bgColorPill={role.color} text={role.label} />
    //       </Box>
    //     );
    //   },
    // },
    {
      field: "createdAt",
      align: "center",
      headerAlign: "center",
      headerName: "created on",
      type: "string",
      minWidth: 200,
    },
    {
      field: "_id",
      align: "center",
      headerAlign: "center",
      headerName: "Details",
      minWidth: 100,
      renderCell: (cellValue) => {
        return (
          <Box onClick={() => handleOpen(cellValue.value, dataTable)}>
            <MoreHorizIcon fontSize="large" sx={{ cursor: "pointer" }} />
          </Box>
        );
      },
    },
  ];

  const columnProjet=[
    {
      field: "name",
      align: "center",
      headerAlign: "center",
      headerName: "projet",
      minWidth: 200,
    },
    {
      field: "adresse",
      align: "center",
      headerAlign: "center",
      headerName: "adresse",
      minWidth: 200,
    },
    {
      field: "statusName",
      align: "center",
      headerAlign: "center",
      headerName: "status",
      minWidth: 150,
    },

    {
      field: "datestart",
      align: "center",
      headerAlign: "center",
      headerName: "date debut",
      type: "string",
      minWidth: 200,
    },
    {
      field: "datefin",
      align: "center",
      headerAlign: "center",
      headerName: "date fin",
      type: "string",
      minWidth: 200,
    },
    {
      field: "description",
      align: "center",
      headerAlign: "center",
      headerName: "description",
      type: "string",
      minWidth: 200,
    },
    // {
    //   field: "createdBy",
    //   align: "center",
    //   headerAlign: "center",
    //   headerName: "Created By",
    //   type: "string",
    //   minWidth: 200,
    //   // valueGetter: (params) => `${params?.row?.createdBy?.firstName} ${params?.row?.createdBy?.lastName}`,
    //   valueGetter: (params) => {
    //     const createdBy = params?.row?.createdBy;
    //     console.log(createdBy); // Log the value to the console
    //     return `${createdBy?.firstName} ${createdBy?.lastName}`;
    //   },
    //   // hideable: (params) => !params?.row?.createdBy ? false : true,
    // },
    // params?.row?.createdBy && {
    //   field: "createdBy",
    //   align: "center",
    //   headerAlign: "center",
    //   headerName: "Created By",
    //   type: "string",
    //   minWidth: 200,
    //   valueGetter: (params) =>
    //     `${params?.row?.createdBy?.firstName} ${params?.row?.createdBy?.lastName}`,
    // },
    {
      field: "createdBy",
      align: "center",
      headerAlign: "center",
      headerName: "Created By",
      type: "string",
      minWidth: 200,
      valueGetter: (params) => {
        const createdBy = params?.row?.createdBy;
        if (createdBy) {
          return `${createdBy.firstName} ${createdBy.lastName}`;
        }
        return "admin deleted";
      },
      hide: (params) => !params?.row?.createdBy, // Hide the column if createdBy is null
    },
    {
      field: "_id",
      align: "center",
      headerAlign: "center",
      headerName: "Details",
      minWidth: 100,
      renderCell: (cellValue) => {
        return (
          <Box onClick={() => handleOpen(cellValue.value, dataTable)}>
            <MoreHorizIcon fontSize="large" sx={{ cursor: "pointer" }} />
          </Box>
        );
      },
    },
  ];



      // {
    //   field: "role",
    //   align: "center",
    //   headerAlign: "center",
    //   headerName: "role",
    //   minWidth: 100,
    //   renderCell: (roleValue) => {
    //     let role = {
    //       label: "",
    //       color: "",
    //     };
    //     //generating the pill color according to the role the user has
    //     RoleColors.forEach((element) => {
    //       if (roleValue.row.role === element.id) {
    //         role = {
    //           label: element.role,
    //           color: element.color,
    //         };
    //         //console.log(role);
    //         return;
    //       }
    //     });

    //     return (
    //       <Box>
    //         <Pills bgColorPill={role.color} text={role.label} />
    //       </Box>
    //     );
    //   },
    // },
    // {
    //   field: "createdAt",
    //   align: "center",
    //   headerAlign: "center",
    //   headerName: "created on",
    //   type: "string",
    //   minWidth: 100,
    // },
  const lotColumns = [
    {
      field: "numerodelot",
      align: "center",
      headerAlign: "center",
      headerName: "Numero de lot",
      minWidth: 150,
    },
    {
      field: "surfacetotal",
      align: "center",
      headerAlign: "center",
      headerName: "Surface total",
      minWidth: 150,
    },
    {
      field: "prix",
      align: "center",
      headerAlign: "center",
      headerName: "Prix",
      minWidth: 150,
    },

    {
      field: "surfacesansbalcon",
      align: "center",
      headerAlign: "center",
      headerName: "Surface sans balcon",
      type: "string",
      minWidth: 150,
    },
    {
      field: "bloc",
      align: "center",
      headerAlign: "center",
      headerName: "Bloc",
      type: "string",
      minWidth: 150,
    },
    {
      field: "etage",
      align: "center",
      headerAlign: "center",
      headerName: "etage",
      minWidth: 100,
    },
    {
      field: "createdAt",
      align: "center",
      headerAlign: "center",
      headerName: "created on",
      type: "string",
      minWidth: 100,
    },
    {
      field: "_id",
      align: "center",
      headerAlign: "center",
      headerName: "Details",
      minWidth: 100,
      renderCell: (cellValue) => {
        return (
          <Box onClick={() => handleOpen(cellValue.value, dataTable)}>
            <MoreHorizIcon fontSize="large" sx={{ cursor: "pointer" }} />
          </Box>
        );
      },
    },
  ];
  const params = {
    row: {
      createdBy: {
        firstName: "John",
        lastName: "Doe",
      },
    },
  };
  // const columnProjet = columnss(params);
  return {
    columns,
    columnTypeLot,
    columnProjet,
    lotColumns,
  };
}
