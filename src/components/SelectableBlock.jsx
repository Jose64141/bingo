import { Box, ToggleButton, Typography } from '@mui/material';

export default function SelectableBlock({text = "", value, selected, onClick}) {
    return (
        <Box     
        >
            <ToggleButton
                value={value}
                selected={selected}
                onChange={onClick}
                sx={{width: "5vw", height: "5vw", m: 1}}
                >
                <Typography variant="h4" component="h1">
                    {text}
                </Typography>
            </ToggleButton>
        </Box>
    );
}