import { useDispatch} from "react-redux";
import { changeNumber } from "../store/bingoSlice";
import { Box, Typography } from '@mui/material';
import ButtonRow from "./ButtonRow";

export default function LetterRow({letter, start, values}){
    let dispatch = useDispatch();
    let handleClick = (number) => {
        dispatch(changeNumber(number));
    }
    return(
        <Box sx={{display: 'flex', alignItems: 'center', justifyContent: 'center',}}>
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: "5vw", 
                    height: "5vw", 
                    m: 1
                }}            
            >
                <Typography variant="h4" component="h1">
                    {letter}
                </Typography>
            </Box>
            <ButtonRow start={start} values={values} onClick={handleClick}/> 
        </Box>
    )
}