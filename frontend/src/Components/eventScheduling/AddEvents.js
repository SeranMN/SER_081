import React from 'react'
import Button from '@mui/material/Button';
import EventIcon from '@mui/icons-material/Event';
import PropTypes from 'prop-types';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import DatePicker from "react-datepicker"
import axios from 'axios'

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};


const AddEvents = () => {

    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(dayjs('2022-09-09T21:11:54'));
    const SUPPORTED_FORMATS = ["image/jpg", "image/jpeg", "image/png"]
    const today = new Date()

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <Button variant="contained" onClick={handleClickOpen} size="medium" startIcon={<EventIcon />}>
                Schedule Event
            </Button>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                    Schedule An Event
                </BootstrapDialogTitle>
                <Formik
                    initialValues={{
                        eventName: '',
                        date: new Date(),
                        time: null,
                        photo: null,
                        description: ''
                    }}
                    validationSchema={Yup.object({
                        eventName: Yup.string()
                            .required('Required'),
                        date: Yup.date().typeError('Invalid date').required("Required").min(today, "Invalid date"),
                        time: Yup.mixed()
                            .required('Required'),
                        photo: Yup.mixed()
                            .nullable()
                            .required('Required')
                            .test(
                                "FILE_FORMAT",
                                "invalid format",
                                (value) => value && SUPPORTED_FORMATS.includes(value?.type)
                            ),

                    })}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log(values)
                        let formData = new FormData();
                        formData.append('file', values.photo)
                        formData.append('eventName', values.eventName)
                        formData.append('date', values.date.$D + '/' + values.date.$M + '/' + values.date.$y)
                        formData.append('time', values.time)
                        formData.append('fileName', values.photo.name)
                        formData.append('description', values.description)

                        axios.post("http://localhost:5000/eventScheduling/create", formData).then((res) => {
                            alert('submiited sucessfully')

                        }).catch((err) => {
                            console.log(err)
                        })
                    }}
                >
                    {props => (
                        <Form>
                            <DialogContent dividers>
                                <Stack direction="row" spacing={8} alignItems='center'>
                                    <FormLabel sx={{ color: "black" }}>Event Name* :</FormLabel>
                                    <TextField name='eventName' onChange={props.handleChange} value={props.values.eventName} style={{ width: 258 }} id="outlined-basic" size="small" label="Event Name*" variant="outlined" />
                                </Stack>
                                <ErrorMessage name="eventName">
                                    {msg => <div style={{ color: 'red' }} className="film-details-input-validation">{msg}</div>}
                                </ErrorMessage>
                                <Stack direction="row" spacing={8} alignItems='center' mt={4}>
                                    <FormLabel sx={{ color: "black", minWidth: '105px' }}>Date* :</FormLabel>
                                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                                        <DesktopDatePicker
                                            inputFormat="MM/DD/YYYY"
                                            value={props.values.date}
                                            onChange={value => props.setFieldValue("date", value)}
                                            renderInput={(params) => <TextField {...params} />}
                                        />
                                    </LocalizationProvider>
                                </Stack>
                                <ErrorMessage name="date">
                                    {msg => <div style={{ color: 'red' }} className="film-details-input-validation">{msg}</div>}
                                </ErrorMessage>
                                <Stack direction="row" spacing={8} alignItems='center' mt={4}>
                                    <FormLabel sx={{ color: "black", minWidth: '105px' }}>Time* :</FormLabel>
                                    <TextField
                                        id="time"
                                        type="time"
                                        name='time'
                                        onChange={value => props.setFieldValue("time", value)}
                                        defaultValue="07:30"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        inputProps={{
                                            step: 300, // 5 min
                                        }}
                                        sx={{ width: 150 }}
                                    />
                                </Stack>
                                <ErrorMessage name="time">
                                    {msg => <div style={{ color: 'red' }} className="film-details-input-validation">{msg}</div>}
                                </ErrorMessage>
                                <Stack direction="row" spacing={7} alignItems='center' mt={4}>
                                    <FormLabel sx={{ color: "black", minWidth: '105px' }}>Upload Photo* :</FormLabel>
                                    <input id="file" name="file" type="file" onChange={(e) => props.setFieldValue("photo", e.currentTarget.files[0])} />
                                </Stack>
                                <ErrorMessage name="photo">
                                    {msg => <div style={{ color: 'red' }} className="film-details-input-validation">{msg}</div>}
                                </ErrorMessage>
                                <Stack direction="row" spacing={8} alignItems='center' mt={4}>
                                    <FormLabel sx={{ color: "black", minWidth: '105px' }}>Description :</FormLabel>
                                    <TextareaAutosize
                                        aria-label="minimum height"
                                        name='description'
                                        onChange={props.handleChange}
                                        value={props.values.description}
                                        minRows={3}
                                        placeholder="Description"
                                        style={{ width: 258, paddingLeft: 8 }}
                                    />
                                </Stack>
                                <ErrorMessage name="description">
                                    {msg => <div style={{ color: 'red' }} className="film-details-input-validation">{msg}</div>}
                                </ErrorMessage>
                            </DialogContent>
                            <div style={{ margin: '15px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <Button autoFocus onClick={handleClose} variant='contained' color="error">
                                        Close
                                    </Button>
                                    <Button type='submit' autoFocus variant='contained'>
                                        Schedule
                                    </Button>
                                </div>
                            </div>
                        </Form>
                    )}
                </Formik>
            </BootstrapDialog>
        </>
    )
}

export default AddEvents