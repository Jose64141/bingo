import { Box } from '@mui/material';
import SelectableBlock from "./SelectableBlock";

export default function ButtonRow({start, values, onClick}){
    let handleClick = (index) => {
        onClick(index);
    }
    return(
    <Box
        sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
        }}            
    >
    {values.map((value,index) => {
        let number = start + index;
        return (
            <SelectableBlock
                value={number+1}
                text={number+1}
                selected={value}
                onClick={() => handleClick(number)}
            />
    )})}
    </Box>
    )
}