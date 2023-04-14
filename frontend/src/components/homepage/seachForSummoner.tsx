import { 
    useState, 
} from "react";
import './index.css'
import { 
    Button, 
    FormControl, 
    InputLabel, 
    Select, 
    MenuItem, 
    TextField, 
    SelectChangeEvent,
} from '@mui/material';


function searchForSummoner() {
    const [SummonerName, SetSummonerName] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');

    const FRONTEND_PORT = "5174";
    function isEmptyOrSpaces(str: string): boolean{
        return str === null || str.match(/^ *$/) !== null;
    }

    function InputIsCorrect(SummonerName: string, selectedRegion: string): boolean {
        if (isEmptyOrSpaces(SummonerName) && selectedRegion === ''){
            alert('Choose a region and your Summoner Name');
            return false;
        }
        else if (selectedRegion === ''){
            alert('Choose a region');
            return false;
        }
        else if (isEmptyOrSpaces(SummonerName)){
            alert('Enter your Summoner Name');
            return false;
        }
        else {
            return true;
        }
    }

    const handleRegion = (event: SelectChangeEvent<string>): void => {
        setSelectedRegion(event.target.value as string);
    }

    return (
        <div className="Container">
            <div className="TextBox">
                <TextField
                    id="summonerSearchBox"
                    label="Summoner Name"
                    type="search"
                    variant="standard"
                    onChange={e => SetSummonerName(e.target.value)} 
                    value={SummonerName}
                />
            </div>
            <div className="Search">
            <a href={`http://localhost:${FRONTEND_PORT}/#/summoners/${selectedRegion}/${SummonerName}`}>
                <Button variant="contained" onClick={() => InputIsCorrect(SummonerName, selectedRegion)}>Search</Button>
            </a>
                <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="chooseRegion">Region</InputLabel>
                <Select
                    labelId="chooseRegion"
                    id="chooseRegion"
                    value={selectedRegion}
                    label="Region"
                    onChange={handleRegion}
                >
                    <MenuItem value="">
                    <em>None</em>
                    </MenuItem>
                    <MenuItem value={"EUW1"}>EUW</MenuItem>
                    <MenuItem value={"NA"}>NA</MenuItem>
                 </Select>
                </FormControl>
            </div>
            <div>
                <a href="http://localhost:5174/">
                    <img src="PajtimGG2.png" height={"20px"} width={"80px"}></img>
                </a>
            </div>
        </div>
    );
}

export default searchForSummoner;