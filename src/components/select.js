import React from 'react';
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';


const styles = theme => ({
    button: {
        display: 'block',
        marginTop: theme.spacing.unit * 2,
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 120,
    },
});



class AppSelect extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            open: false,
            error: null,
            isLoaded: false,
            items: []
        };
        this.handleChange = this.handleChange.bind(this);
    }


    componentDidMount() {
        fetch("https://js.dump.academy/keksobooking/data")
            .then(res => res.json())
            .then(
                (result) => {
                    let arr = [];
                    result.forEach(function (item){
                        arr.push(item.offer.title);
                    });
                    console.log(arr);

                    this.setState({
                        isLoaded: true,
                        items: arr
                    });
                },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }



    handleChange(event) {
        this.setState({title: event.target.value});
        console.log(event.target.value);
    }

    handleClose = () => {
        this.setState({open: false});
    };

    handleOpen = () => {
        this.setState({open: true});
    };

    render() {
        const {classes} = this.props;
        const {items} = this.state;
            return (
                <div>
                    <form autoComplete="off">
                        <Button className={classes.button}  onClick={this.handleOpen}>
                            Open the select
                        </Button>
                        <FormControl className={classes.formControl}>
                            <InputLabel htmlFor="demo-controlled-open-select">Title</InputLabel>
                            <Select
                                open={this.state.open}
                                onClose={this.handleClose}
                                onOpen={this.handleOpen}
                                value={this.state.title}
                                onChange={this.handleChange}
                                inputProps={{
                                    name: 'title',
                                    id: 'demo-controlled-open-select',
                                }}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                {items.map((item, index) => {
                                    return (
                                        <MenuItem key={index} value={index}>{item}</MenuItem>
                                    )
                                })
                                }
                            </Select>
                        </FormControl>
                    </form>

                <Paper elevation={1}>
                    <Typography variant="h5" component="h3">
                        This is a sheet of paper.
                    </Typography>
                    <Typography component="p">
                        Hello people
                    </Typography>
                </Paper>

            </div>
        );
    }
}

AppSelect.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppSelect);