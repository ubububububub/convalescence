import { forwardRef, Fragment } from "react";
import {
  Box,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

export const CustomDrawer = forwardRef(
  ({ isMenuShowing, onDrawerClick }, ref) => {
    const navigate = useNavigate();

    return (
      <Drawer
        anchor="left"
        open={isMenuShowing}
        onClose={onDrawerClick}
        PaperProps={{ style: { position: "absolute" } }}
        BackdropProps={{ style: { position: "absolute" } }}
        ModalProps={{
          container: ref.current,
          style: { position: "absolute" },
        }}
      >
        <Box sx={{ width: 250 }}>
          <List>
            {[
              { text: "홈", link: "/" },
              { text: "인사말", link: "/greeting" },
              { text: "장기요양서비스", link: "/longcare" },
              { text: "방문요양서비스", link: "/visitingcare" },
              { text: "방문목욕서비스", link: "/visitingbath" },
              { text: "가족요양서비스", link: "/familycare" },
            ].map(({ text, link }, index) => (
              <Fragment key={text}>
                <ListItem disablePadding>
                  <ListItemButton
                    onClick={() => {
                      onDrawerClick();
                      navigate(link);
                    }}
                  >
                    {/* <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon> */}
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
                <Divider />
              </Fragment>
            ))}
          </List>
        </Box>
      </Drawer>
    );
  }
);
