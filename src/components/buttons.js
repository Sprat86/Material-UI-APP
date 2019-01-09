import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import AddCircleOutline from "@material-ui/icons/AddCircleOutline"
import "./styles.css"


const styles = theme => ({
    button: {
        margin: theme.spacing.unit,
    },
    rightIcon: {
        marginLeft: theme.spacing.unit,
    },
    fab: {
        margin: theme.spacing.unit,
    },
});

function AppButtons(props) {
    const {classes} = props;
    return (
        <div style={{marginBottom: 50}}>
            <Button
                variant="contained"
                color="primary"
                className={classes.button}
                onClick={(event) => props.onAddPopover(event.currentTarget)}
            >
                Добавить элемент
                <AddCircleOutline className={classes.rightIcon}/>
            </Button>
            <Button
                variant="contained"
                color="secondary"
                className={classes.button}
                disabled={props.itemsChecked.length === 0}
                onClick={() => props.onDelete()}
            >
                Удалить выбранные элементы
                <DeleteIcon className={classes.rightIcon}/>
            </Button>
            <Button
                variant="contained"
                href="https://yandex.ru"
                className={classes.button}
            >
                Перейти на Yandex
            </Button>
            <Button
                variant="fab"
                color="secondary"
                aria-label="Add"
                style={{
                    position: 'fixed',
                    right: 50,
                    bottom: 50
                }}
                onClick={() => props.openIsModal()}>
                <AddIcon/>
            </Button>
        </div>
    )
}

export default withStyles(styles)(AppButtons);