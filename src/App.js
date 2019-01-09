import React, {Component} from 'react'
import 'typeface-roboto';
import AppDrawer from "./components/drawer"
import AppButtons from "./components/buttons"
import {AppForm} from "./components/form"
import {AppList} from './components/list'
import AppSelect from "./components/select"
import Filter1 from '@material-ui/icons/Filter1TwoTone'
import Filter2 from '@material-ui/icons/Filter2TwoTone'
import Filter3 from '@material-ui/icons/Filter3TwoTone'
import Filter4 from '@material-ui/icons/Filter4TwoTone'
import './index.css'
import Popover from '@material-ui/core/Popover';
import Avatar from '@material-ui/core/Avatar';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import PersonIcon from '@material-ui/icons/Person';
import Button from '@material-ui/core/Button';
import Close from '@material-ui/icons/Close';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isPopoverOpen: false,
            isModalOpen: false,
            isSnackbarOpen: false,
            popoverElement: null,
            selectedDate: new Date().getFullYear() + '-' + new Date().getMonth() + '-0' + new Date().getDate(),
            list: [
                {
                    name: 'Элемент 1',
                    description: "Сложное описание 1",
                    icon: <Filter1/>,
                    checked: false
                },
                {
                    name: 'Элемент 2',
                    description: "Сложное описание 2",
                    icon: <Filter2/>,
                    checked: false
                },
                {
                    name: 'Элемент 3',
                    description: "Сложное описание 3",
                    icon: <Filter3/>,
                    checked: false
                },
                {
                    name: 'Элемент 4',
                    description: "Сложное описание 4",
                    icon: <Filter4/>,
                    checked: false
                }

            ]
        }
    }

    onAdd(item) {
        let list = this.state.list;
        list.push(item);
        this.setState({list, isPopoverOpen: false})
    }

    render() {
        return (
            <div>

                <AppDrawer/>

                <div className="container">

                    <AppButtons
                        itemsChecked={this.state.list.map(i => i.checked).filter(i => i)}
                        onDelete={() => {
                            let list = this.state.list.filter(i => !i.checked);
                            this.setState({list})
                        }}
                        onAddPopover={(popoverElement) => {
                            this.setState({popoverElement, isPopoverOpen: true})
                        }}
                        openIsModal={() => this.setState({isModalOpen: true})}
                    />

                    <Popover
                        id="simple-popper"
                        open={this.state.isPopoverOpen}
                        anchorEl={this.state.popoverElement}
                        onClose={() => this.setState({isPopoverOpen: false})}
                        style={{width: 600, padding: '15px 30px'}}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center',
                        }}
                    >
                        <AppForm
                            onAddElement={this.onAdd.bind(this)}
                        />
                    </Popover>

                    <AppList
                        list={this.state.list}
                        onChange={(checked, idx) => {
                            let {list} = this.state;
                            list[idx].checked = checked;
                            this.setState({list})
                        }}
                    />

                    <AppSelect/>
                </div>


                <Dialog
                    open={this.state.isModalOpen}
                    onClose={() => this.setState({isModalOpen: false})}
                    aria-labelledby="simple-dialog-title"
                >
                    <DialogTitle id="simple-dialog-title">Выберите дату!</DialogTitle>
                    <div
                        style={{width: 600}}
                    >
                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <PersonIcon/>
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText
                                    primary='Hello!'
                                />
                            </ListItem>
                            <form
                                style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    margin: '15px 30px'
                                }}
                            >
                                <TextField
                                    id="date"
                                    label="Birthday"
                                    type="date"
                                    defaultValue={this.state.selectedDate}
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    onChange={(event) => this.setState({selectedDate: event.target.value, isSnackbarOpen: true})}
                                />
                            </form>
                        </List>
                    </div>
                    <Button
                        variant="contained"
                        color="primary"
                        onClick={() => this.setState({isModalOpen: false})}
                    >
                        Закрыть окно
                        <Close/>
                    </Button>
                </Dialog>

                <Snackbar
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    open={this.state.isSnackbarOpen}
                    autoHideDuration={5000}
                    onClose={ () => this.setState({isSnackbarOpen: false})}
                    message={<span>{this.state.selectedDate}</span>}
                    action={[
                        <Button key="undo" color="secondary" size="small" onClick={ () => this.setState({isSnackbarOpen: false})}>
                            Отмена
                            <CloseIcon/>
                        </Button>,
                    ]}
                />

            </div>
        )
    }
}
