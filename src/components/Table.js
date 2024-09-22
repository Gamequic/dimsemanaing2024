import * as React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Row({ row, headers }) {
  const [open, setOpen] = React.useState(false);

    let rowsHeaders = []
    let rowsHistory = []

    for (let header in headers) {
        if (headers[header]) {
            rowsHeaders.push(header)
        } else {
            rowsHistory.push(header)
        }
    }

  return (
    <React.Fragment>
      <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        {rowsHeaders.map((item, index) => {
            return  <TableCell align="left">{row[item.toUpperCase()]}</TableCell>
        })}
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                History
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    {rowsHistory.map((item, index) => {
                        return  <TableCell>{item}</TableCell>
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                    <TableRow>
                        {
                            rowsHistory.map((item, index) => {
                                return  <TableCell>{row[item.toUpperCase()]}</TableCell>
                            })
                        }
                    </TableRow>
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

export default function CollapsibleTable({ eventsData, headers, title, children }) {
    const rows = eventsData;

  return (
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          {title}
        </AccordionSummary>
        <AccordionDetails>
            <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                <TableRow>
                    <TableCell />
                    {Object.entries(headers).map(([key, value]) => {
                        if (value) {
                        return <TableCell>{key}</TableCell>;
                        }
                        return null;
                    })}
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <Row key={row.name} row={row} headers={headers} />
                ))}
                </TableBody>
            </Table>
            </TableContainer>
            {children}
        </AccordionDetails>
    </Accordion>
  );
}
