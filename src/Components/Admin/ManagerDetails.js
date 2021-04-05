import React from 'react';
import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@material-ui/core';
import { useStyles } from '@material-ui/pickers/views/Calendar/SlideTransition';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import { Redirect } from 'react-router';

const MaangeDetails = ({details}) => {

    const { name, colour, price, _id } = details
    console.log({ price })


    const classes = useStyles();
    const handleDelete = () => {
        console.log('clicked', _id)
        fetch(`https://mighty-shore-21196.herokuapp.com/delete/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => alert(`delete succesfully..you can't find it in your home page`))
            .catch(err => console.log(err))
    }

    return (
        <div style={{ padding: '10px' }}>
            <TableContainer component={Paper}>
                <Table className={classes.table} size="small" aria-label="a dense table">
                    <TableHead>
                        <TableRow>
                            <TableCell><h6>Book Name</h6></TableCell>
                            <TableCell align="right"><h6>Colour</h6></TableCell>
                            <TableCell align="right"><h6>Price</h6></TableCell>
                            <TableCell align="right"><h6>Action</h6></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        <TableRow>
                            <TableCell component="th" scope="row">
                                {name}
                            </TableCell>
                            <TableCell align="right">{colour}</TableCell>
                            <TableCell align="right">{price}</TableCell>
                            <TableCell align="right"><FontAwesomeIcon onClick={handleDelete} style={{ color: 'red', cursor: 'pointer' }} icon={faTrashAlt} /></TableCell>
                        </TableRow>

                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default MaangeDetails;