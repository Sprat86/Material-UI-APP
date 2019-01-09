import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import Checkbox from '@material-ui/core/Checkbox';
import SentimentSatisfied from '@material-ui/icons/SentimentSatisfied'
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied'


export const AppList = (props) => {
    return (
        <List component="nav">
            {props.list.map((item, index) => {
                return (
                    <div key={index}>
                        <ListItem button>
                            <ListItemIcon>
                                {item.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={item.name}
                                secondary={item.description}
                            />
                            <Checkbox
                                disableRipple
                                checkedIcon={<SentimentVerySatisfied/>}
                                icon={<SentimentSatisfied/>}
                                checked={item.checked}
                                onChange={(event, checked) => props.onChange(checked, index)}
                            />
                        </ListItem>
                        <Divider/>
                    </div>
                )
            })
            }
        </List>
    )
};