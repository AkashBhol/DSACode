import { Card, Grid, Button, PaginationItem, Tooltip } from '@mui/material';
import React, { Fragment, useEffect, useState } from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { useNavigate, navigate } from 'react-router-dom';
import axios from 'axios';
//import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
// import SendIcon from '@mui/icons-material/Send';
// import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Container, PaginationLink } from 'reactstrap';
import { DataGrid, useGridApiRef } from '@mui/x-data-grid';
import DataTable from './DataTable';



export default function ShowEmployee() {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(0);
    const [totalRecords, setTotalRecords] = React.useState(0);
    const [openAddDialog, setOpenAddDialog] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const [row, setRow] = useState([]);

    const handleSubmit = (page, pageSize) => {
        axios.get(`http://localhost:8085/fetchdata?page=${page}&size=${pageSize}`)
            .then(res => {
                debugger
                setRow(res.data.data.countries);

                setTotalRecords(res?.data?.data?.totalCount);
            })
            .catch(error => {
                console.error(error);
            })
    }
    console.log(totalRecords)
    useEffect(() => {
        handleSubmit(page, rowsPerPage);
    }, [page]);

    useEffect(() => {
        if (page === 0) handleSubmit(page, rowsPerPage);
        else setPage(0);
    }, [rowsPerPage]);

    const handleChangePage = (newPage) => {
        setPage(newPage);
    };

    const openViewCountry = () => {
        setOpenAddDialog(true);
    };

    const handleChangeRowsPerPage = (pageSize) => {
        setRowsPerPage(pageSize);
    };
    const column = [
        {
            field: "firstName",
            headerName: "Name",
            width: 180,
            renderCell: (e) => (
                <Tooltip title={e.row.firstName} arrow placement="bottom">
                    <span>{e.row.firstName}</span>
                </Tooltip>
            ),
            flex: 2,
        },
        {
            field: "email",
            headerName: "Email",
            width: 180,
            renderCell: (e) => (
                <Tooltip title={e.row.email} arrow placement="bottom">
                    <span>{e.row.email}</span>
                </Tooltip>
            ),
            flex: 2,
        },
        {
            field: "city",
            headerName: "City",
            width: 180,
            renderCell: (e) => (
                <Tooltip title={e.row.city} arrow placement="bottom">
                    <span>{e.row.city}</span>
                </Tooltip>
            ),
            flex: 2,
        },
        {
            headerName: "Action",
            display: "flex-end",
            //renderCell: (e) => (
            //     <IconHandaler>
            //       <Tooltip title="View" arrow>
            //         <VisibilityIcon
            //           onClick={() => handleActions("View", e.id)}
            //           style={{ alignSelf: "center", paddingTop: "0px" }}
            //         />
            //       </Tooltip>
            //       <Tooltip title="Edit" sx={{ marginLeft: 1 }}>
            //         <EditIcon
            //           onClick={() => handleActions("Edit", e.id)}
            //           style={{ alignSelf: "center", paddingTop: "0px" }}
            //         />
            //       </Tooltip>
            //       <Tooltip title="Delete" sx={{ marginLeft: 1 }}>
            //         <DeleteIcon
            //           onClick={() => handleActions("Delete", e.id)}
            //           style={{ alignSelf: "center", paddingTop: "0px" }}
            //         />
            //       </Tooltip>
            //     </IconHandaler>
            //),
        },
    ]
    return (
        <>
            <Card style={{
                marginTop: '40px',
                marginLeft: '40px',
                marginRight: '0px',
                backgroundColor: '#371ecf5e'
            }}>

                <Button variant="outlined" startIcon={<DeleteIcon />} style={{
                    marginRight: '30px',
                    backgroundColor: '#b8cb39'
                }}>

                </Button>
                <Button variant="contained" style={{
                    marginBottom: '6px',
                    marginRight: '80px'
                }}
                    onClick={handleSubmit}
                >Click Here To See Data</Button>
                <span style={{
                    fontSize: '40px',
                    color: '#424944'
                }}>Show Employee Data</span>
                <DataTable
                    columns={column}
                    rows={row}
                    totalRecords={totalRecords}
                    onPageChange={(newPage) => handleChangePage(newPage)}
                    onPageSizeChange={(pageSize) => handleChangeRowsPerPage(pageSize)}
                    rowsPerPage={rowsPerPage}
                />
            </Card>

            <Button variant="contained" style={{
                marginLeft: '-470px',
                marginTop: '20px'
            }}
                onClick={() => { navigate("/back") }
                }
            >BACK</Button>


        </>
    )

}