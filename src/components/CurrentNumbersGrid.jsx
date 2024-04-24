import LetterRow from "./LetterRow";
import { useSelector, useDispatch } from "react-redux";
import { resetNumbers, selectNumbers } from "../store/bingoSlice";
import { Button, Stack } from "@mui/material";

export default function CurrentNumbersGrid(){
    let numbers = useSelector(selectNumbers);
    let dispatch = useDispatch();
    return (
        <Stack>
            <LetterRow letter="B" start={0} values={numbers.slice(0,15)} />
            <LetterRow letter="I" start={15} values={numbers.slice(15,30)} />
            <LetterRow letter="N" start={30} values={numbers.slice(30,45)} />
            <LetterRow letter="G" start={45} values={numbers.slice(45,60)} />
            <LetterRow letter="O" start={60} values={numbers.slice(60,75)} />
            <Button onClick={() => dispatch(resetNumbers())}>Limpiar</Button>
        </Stack>
    )
}