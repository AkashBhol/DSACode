import { Box, InputLabel, Pagination, Select, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

const customDataGridStyle = {
    "& .MuiDataGrid-columnHeaders": {
        backgroundColor: "#F3F9FD!important",
        color: "#304669!important",
    },
    ".MuiDataGrid-columnHeader:focus-within": { outline: "none" },
    ".MuiDataGrid-cell": { borderBottom: "0px", color: "#304669" },
    ".MuiDataGrid-cell:focus-within": {
        outline: "none!important",
        color: "#36c96d!important",
    },
    ".MuiDataGrid-columnSeparator": { display: "none !important" },
    ".MuiSvgIcon-root": { backgroundColor: "transparent" },
    ".MuiDataGrid-root": { padding: "8px", borderRadius: "4px" },
    ".MuiDataGrid-row": {
        borderBottom: "1px solid #E7EBF0",
        maxHeight: "48px!important",
        minHeight: "48px!important",
    },
    ".MuiCheckbox-root": { color: "#D1D1D1" },
    ".MuiDataGrid-cellContent": {
        color: "#304669!important",
        fontFamily: "Roboto",
        letterSpacing: "0.4px",
        fontSize: "14px",
    },
    ".MuiDataGrid-virtualScrollerRenderZone": { backgroundColor: "#FFFF" },
    ".MuiDataGrid-footerContainer": {
        display: "block",
        width: "100%",
        border: "0px",
    },
    ".MuiTablePagination-spacer": { display: "none" },
    ".MuiTablePagination-actions": {
        position: "absolute",
        right: "0px",
        backgroundColor: "#FFF",
    },
    ".MuiTablePagination-displayedRows": { position: "absolute", right: "90px" },
    ".MuiDataGrid-virtualScroller": { overflow: "auto" },
    ".MuiTablePagination-select": {
        backgroundColor: "#F0F1F4",
        borderRadius: "4px!important",
    },
    ".MuiTablePagination-toolbar": { paddingLeft: "0px" },
    ".MuiIconButton-root.Mui-disabled": {
        backgroundColor: "#F0F1F4",
        borderRadius: "0px",
    },
    ".MuiIconButton-root": { borderRadius: "0px" },
    ".Mui-checked": { color: "rgb(54, 201, 109)!important" },
};

export default function DataTable(props) {

    const theme = useTheme();
    const getPageDetails = () => {
        var pageRange = "0 - 0 of 0";
        var page = props.page + 1;
        if (props.totalRecords > 0) {
            let lastRecordIndex = page * props.rowsPerPage;
            if (lastRecordIndex <= props.totalRecords) {
                let firstRecordIndex = lastRecordIndex - props.rowsPerPage + 1;
                pageRange =
                    firstRecordIndex +
                    "-" +
                    lastRecordIndex +
                    " of " +
                    props.totalRecords;
            } else {
                let firstRecordIndex = lastRecordIndex - props.rowsPerPage + 1;
                pageRange =
                    firstRecordIndex +
                    "-" +
                    props.totalRecords +
                    " of " +
                    props.totalRecords;
            }
        }
        return pageRange;
    };

    return (
        <div style={{ height: 400, width: "100%", overflowY: "visible" }}>
            <DataGrid
                {...props}
                key={props.key}
                hideFooter="true"
                paginationMode="server"
                page={props.page}
                rows={props.rows}
                columns={props.columns}
                rowHeight={50}
                pagination
                rowCount={props.totalRecords}
                checkboxSelection={props.checkboxSelection}
                isRowSelectable={props.isRowSelectable}
                selectionModel={props.selectionModel}
                disableColumnMenu
                style={{ border: "none", height: props.height }}
                sx={customDataGridStyle}
                hideFooterSelectedRowCount={true}
                pageSize={props.rowsPerPage}
                onPageSizeChange={(newPageSize) => props.onPageSizeChange(newPageSize)}
                onRowSelectionModelChange={(params) => {
                    props.onSelection(params);
                }}
                onPageChange={(params) => props.onPageChange(params)}
            />
            {props.hidePagination === undefined && (
                <Box
                    sx={{ display: { xs: "block", md: "flex" } }}
                    justifyItems="center"
                >
                    <Box item flexGrow={1} pl={2} display="flex" pt={1}>
                        <Box pl={1} pt={1}>
                            <InputLabel htmlFor="filled-age-native-simple">
                               "No fo Pages"
                            </InputLabel>
                        </Box>
                        <Box pl={1}>
                            <Select
                                native
                                size="small"
                                value={props.rowsPerPage}
                                //onChange={handleChange}
                                inputProps={{
                                    name: "age",
                                    id: "filled-age-native-simple",
                                }}
                                onChange={(e) => props.onPageSizeChange(e.target.value)}
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={20}>20</option>
                                <option value={props.rowsPerPage}>{props.rowsPerPage}</option>
                            </Select>
                        </Box>
                        <Box pl={1} pt={1}>
                            <InputLabel htmlFor="filled-age-native-simple">
                                {getPageDetails()}
                            </InputLabel>
                        </Box>
                    </Box>
                    <Box item pr={1} pt={1} sx={{ pb: { xs: "100px", md: "0px" } }}>
                        <Pagination
                            count={Math.ceil(props.totalRecords / props.rowsPerPage)}
                            sx={[
                                () => ({
                                    button: { backgroundColor: "#F2F2F2", color: "#637381" },
                                }),
                                () => ({
                                    ul: {
                                        "& .Mui-selected": {
                                            backgroundColor: theme.palette.primary.main,
                                            color: "white",
                                        },
                                    },
                                }),
                                () => ({
                                    ul: {
                                        "&:hover": {
                                            "& .Mui-selected": {
                                                backgroundColor: theme.palette.primary.light,
                                            },
                                        },
                                    },
                                }),
                            ]}
                            shape="rounded"
                            page={props.page + 1}
                            onChange={(e, v) => props.onPageChange(v - 1)}
                        />
                    </Box>
                </Box>
            )}
        </div>
    )
}