import {Button, ButtonGroup } from "@mui/material";


export function Page(props) {

const navButtons = ['Home', 'About me', 'Projects']


    return (
        <div>
            <div>
                <ButtonGroup variant="contained" aria-label="Basic button group">
                {navButtons.map(navButton => <Button key={navButton}>{navButton}</Button>)}
            </ButtonGroup></div>
            <div>{props.children}</div>
            <footer>footer</footer>

        </div>

    )

}