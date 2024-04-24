import Grid from '@mui/material/Unstable_Grid2';
import { Box, Button, Typography, Stack } from '@mui/material';
import ButtonRow from "./ButtonRow";
import { useSelector, useDispatch } from "react-redux";
import { selectGame, changePlay, resetGame } from "../store/bingoSlice";

export default function CurrentPlayGrid() {
    let currentPlay = useSelector(selectGame);
    let dispatch = useDispatch();
    let handleClick = (index) => {
        dispatch(changePlay(index));
    }
    return (
        <Stack>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Typography variant="h4" component="h1" align="center" sx={{width: "5vw", m: 1}}>
                    B
                </Typography>
                <Typography variant="h4" component="h1" align="center" sx={{width: "5vw", m: 1}}>
                    I
                </Typography>
                <Typography variant="h4" component="h1" align="center" sx={{width: "5vw", m: 1}}>
                    N
                </Typography>
                <Typography variant="h4" component="h1" align="center" sx={{width: "5vw", m: 1}}>
                    G
                </Typography>
                <Typography variant="h4" component="h1" align="center" sx={{width: "5vw", m: 1}}>
                    O
                </Typography>
            </Box>
            <ButtonRow start={0} values={currentPlay.slice(0,5)} onClick={handleClick}/> 
            <ButtonRow start={5} values={currentPlay.slice(5,10)} onClick={handleClick}/> 
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}            
            >
                <ButtonRow start={10} values={currentPlay.slice(10,12)} onClick={handleClick}/> 
                <Box
                    component="img" 
                    sx={{width: "5vw", height: "5vw", m: 1}}
                    src="/image0.jpeg"
                />
                <ButtonRow start={12} values={currentPlay.slice(12,14)} onClick={handleClick}/> 
            </Box>
            <ButtonRow start={14} values={currentPlay.slice(14,19)} onClick={handleClick}/> 
            <ButtonRow start={19} values={currentPlay.slice(19,25)} onClick={handleClick}/> 
            <Button onClick={() => dispatch(resetGame())}>Limpiar</Button>
        </Stack>
    )
}