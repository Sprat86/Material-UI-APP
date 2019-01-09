import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import {deepPurple} from "@material-ui/core/es/colors/index";
import Button from '@material-ui/core/Button';



const styles = theme => ({

    margin: {
        margin: theme.spacing.unit,
    },
    cssLabel: {
        '&$cssFocused': {
            color: deepPurple,
        },
    },
    cssFocused: {},
    cssOutlinedInput: {
        '&$cssFocused $notchedOutline': {
            borderColor: deepPurple,
        },
    },
    notchedOutline: {},
    button: {
        margin: theme.spacing.unit,
    },
    formControl: {
        margin: theme.spacing.unit,
    },
});

export class AppForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
            errors: {
                name: '',
                description: '',
            },
            value: ''
        }
    }

    render() {
        return (
            <div
                style={{margin: 5}}
            >
                <TextField
                    className={styles.margin}
                    InputLabelProps={{
                        classes: {
                            root: styles.cssLabel,
                            focused: styles.cssFocused,
                        },
                    }}
                    InputProps={{
                        classes: {
                            root: styles.cssOutlinedInput,
                            focused: styles.cssFocused,
                            notchedOutline: styles.notchedOutline,
                        },
                    }}
                    helperText={this.state.errors.name}
                    placeholder='Введите название'
                    variant="outlined"
                    id="custom-css-outlined-input"
                    fullWidth={true}
                    onChange={(event) => this.setState({name: event.target.value})}
                />

                <TextField
                    className={styles.margin}
                    InputLabelProps={{
                        classes: {
                            root: styles.cssLabel,
                            focused: styles.cssFocused,
                        },
                    }}
                    InputProps={{
                        classes: {
                            root: styles.cssOutlinedInput,
                            focused: styles.cssFocused,
                            notchedOutline: styles.notchedOutline,
                        },
                    }}
                    helperText={this.state.errors.description}
                    placeholder="Введите описание"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    fullWidth={true}
                    onChange={(event) => this.setState({description: event.target.value})}
                />

                <Button
                    variant="contained"
                    color="secondary"
                    style={{marginTop: 5}}
                    onClick={this.onAdd.bind(this)}
                >
                    Добавить элемент
                </Button>
            </div>
        )
    }

    onAdd() {
        let errors = {};

        if (!this.state.name) errors.name = 'Имя не может быть пустым';
        if (!this.state.description) errors.description = 'Описание не может быть пустым';

        if (errors.name || errors.description) {
            this.setState({errors});
            return
        }

        this.props.onAddElement({
                name: this.state.name,
                description: this.state.description,
                checked: false
            });
        this.setState({name: '', description: '', errors: {
                name: '',
                description: ''
            }
        })
    }
}

export default withStyles(styles)(AppForm);
