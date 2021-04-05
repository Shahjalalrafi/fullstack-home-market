import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { userContext } from '../../App';

const CheckOut = () => {
    const { id } = useParams()
    const [logedInUser, setLogedInUser] = useContext(userContext)
    console.log(logedInUser)

    const history = useHistory()

    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch(`https://mighty-shore-21196.herokuapp.com/events`)
            .then(res => res.json())
            .then(data => {
                const myData = data.find(pd => {
                    return pd._id === id
                })
                setProduct(myData)
            })
    }, [])

    const { name, colour, image, price} = product

    const [selectedDate, setSelectedDate] = React.useState(new Date().toDateString('dd/mm/yyyy'));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        const ordersInfo = {
            name: name,
            colour: colour,
            image: image,
            price: price,
            time: selectedDate,
            LogedInUserName: logedInUser.name,
            LogedInUserEmail: logedInUser.email
        }
        fetch(`https://mighty-shore-21196.herokuapp.com/newBook`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(ordersInfo)
        })
            .then(res =>{
                alert('order succesful')
                history.push('/order')
            })
    }

    return (
        <div className='row'>
            <h1 className='text-center text-success'>checkOut This product</h1>
            <div className='col-md-8 m-auto'>
            <form>
                <label>Name</label>
                <input className='form-control col-5' type="text" value={product.name} />

                <label>Colour</label>
                <input className='form-control col-5' type="text" value={product.colour} />

                <label>price</label>
                <input className='form-control col-5' type="text" value={product.price} />

                <label>Buyer Name: </label>
                <input className='form-control col-5' type="text" value={logedInUser.name} />

                <label>Buyer Email:</label>
                <input className='form-control col-5' type="text" value={logedInUser.email} />


                <div className='col-md-4'>
                <MuiPickersUtilsProvider  utils={DateFnsUtils}>
                    <Grid container justify="space-around">
                        <KeyboardDatePicker
                            margin="normal"
                            id="date-picker-dialog"
                            label="Date picker dialog"
                            format="MM/dd/yyyy"
                            value={selectedDate}
                            onChange={handleDateChange}
                            KeyboardButtonProps={{
                                'aria-label': 'change date',
                            }}
                        />

                    </Grid>
                </MuiPickersUtilsProvider>
                </div>
                {/* <Link to='/order'>checkOut</Link> */}

                <button className="btn btn-success" onClick={handleSubmit}>checkOut</button>
            </form>
            </div>

        </div>
    );
};

export default CheckOut;