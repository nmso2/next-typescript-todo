import {
  Grid,
  IconButton,
  List,
  ListItem,
  Typography,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Paper,
  Divider,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FolderIcon from "@mui/icons-material/Folder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import { styled } from "@mui/material/styles";
import * as React from "react";

const TodoList = ({
  items,
  onRemoveTodo,
}: {
  items: any;
  onRemoveTodo: any;
}) => {
  const onClick = (text: string): void => alert(text);

  return (
    <Grid
      item
      xs={12}
      md={4}
      sx={{
        marginX: "auto",
      }}
    >
      <Paper>
        <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
          Your Todos
        </Typography>
        <Divider />
        <List sx={{ pb: "40px" }}>
          {items?.map((item: Object, index: any) => (
            <>
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon onClick={() => onRemoveTodo(item.id)} />
                  </IconButton>
                }
              >
                <ListItemAvatar>
                  <Avatar>
                    <ListAltIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={item.text} />
              </ListItem>
              <Divider />
            </>
          ))}
        </List>
      </Paper>
    </Grid>
  );
};

export default TodoList;
