
import { AppBar, Button, InputAdornment, MenuItem, Select, TextField, Toolbar } from '@material-ui/core';
import { Stack, ToggleButton, ToggleButtonGroup, Dialog, Alert, IconButton } from '@mui/material';
import React, { useEffect, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import JobsComponent from './Jobs';
import { Job, ProgLan } from './interfaces';
import CloseIcon from '@mui/icons-material/Close';

// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { grey } from '@material-ui/core/colors';
import { Padding } from '@mui/icons-material';


// import FormatBoldIcon from '@mui/icons-material/FormatBold';
// import FormatItalicIcon from '@mui/icons-material/FormatItalic';
// import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
// import FormatColorFillIcon from '@mui/icons-material/FormatColorFill';
// import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
// import InputText from './InputText';

function App() {

  const [searchInput, setSearchInput] = useState<string>('');  
  const [open, setOpen] = useState<boolean>(false);
  const [languages, setLanguages] = useState<string[]>(["C", "Cpp", "Java", "Python", "Javascript", "Kotlin"]);
  const [jobTitleInput, setJobTitleInput] = useState<string>('');
  const [jobDescriptionInput, setJobDescriptionInput] = useState<string>('');
  const [minSalaryInput, setMinSalaryInput] = useState<number>(0);
  const [maxSalaryInput, setMaxSalaryInput] = useState<number>(0);
  const [inputMaxSalaryError, setInputMaxSalaryError] = useState<boolean>(false);
  const [inputMinSalaryError, setInputMinSalaryError] = useState<boolean>(false);

  const jobs: Job[] = [{
    "company": "Google Inc",
    "minSalary": 2000,
    "maxSalary": 2500,
    "languages": [ProgLan.C, ProgLan.Java, ProgLan.Kotlin],
    "isRemote": true,
  },
  {
    "company": "Amazon",
    "minSalary": 1500,
    "maxSalary": 1600,
    "languages": [ProgLan.Cpp],
    "isRemote": false,
  },
  {
    "company": "42 Lisboa",
    "minSalary": 500,
    "maxSalary": 600,
    "languages": [ProgLan.Python],
    "isRemote": false,
  },
  {
    "company": "Critical Techworks",
    "minSalary": 1200,
    "maxSalary": 1600,
    "languages": [ProgLan.Cpp, ProgLan.Kotlin],
    "isRemote": false,
  }]

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {

  }, [inputMaxSalaryError, inputMinSalaryError]);

  
  // // TODO: Check if max salary is bigger than max salary
  // const handleSalaryInput = (e: React.ChangeEvent<HTMLInputElement>, handleInput: Function) => {  

  //   setInputMaxSalaryError(false);
  //   setInputMinSalaryError(false);


  //   if (Number.isNaN(e.target.value))
  //     return ;
    
  //   handleInput(e.target.value);  
    
  //   console.log("current target: ", e.target.value);
  //   console.log("Min salary: ", minSalaryInput);
  //   console.log("Max salary: ", maxSalaryInput);

  //   if (minSalaryInput > maxSalaryInput)
  //   {
  //     setInputMaxSalaryError(true);
  //     setInputMinSalaryError(true);
  //   }

  //   // const salary: number = parseInt(e.target.value);

  // }
  

  const handleMinSalaryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    if (Number.isNaN(e.target.value))
    return ;
    
    setInputMaxSalaryError(false);    
    setInputMinSalaryError(false);
       
    const minSalary: number = parseInt(e.target.value);
    
    // Handle validation
    console.log(typeof(minSalary));
    
    if (minSalary >= maxSalaryInput)
    {
      setInputMinSalaryError(true);
      setInputMaxSalaryError(true);
    }

    setMinSalaryInput(minSalary);
  };

  const handleMaxSalaryInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    
    if (Number.isNaN(e.target.value))
    return ;
    
    setInputMaxSalaryError(false);    
    setInputMinSalaryError(false);    
    
    const maxSalary: number = parseInt(e.target.value);

    // Handle validation
    if (maxSalary <= minSalaryInput)
    {
      setInputMinSalaryError(true);
      setInputMaxSalaryError(true);
    }
      
    setMaxSalaryInput(maxSalary);
  };

  // const [formats, setFormats] = useState(() => ['bold', 'italic']);

  // const handleFormat = (
  //   event: React.MouseEvent<HTMLElement>,
  //   newFormats: string[],
  // ) => {
  //   setFormats(newFormats);
  // };

  return (
  <div>
    <AppBar position='static' style={{marginBottom: 30}}>
      <Toolbar>
        {/* <IconButton edge='start' color='inherit' aria-label='logo' ></IconButton> */}
        <TextField fullWidth id="fullWidth" label="Search" variant="outlined" onChange={(e) => setSearchInput(e.target.value)}/> 
        <IconButton style={{marginRight: 6}}>
          <SearchIcon/>
        </IconButton>
        <Stack direction={'row'} spacing={2}>
          <Button variant="outlined" color='inherit'>Features</Button>
          <Button variant="outlined" color='inherit'>About</Button>
          <Button variant="outlined" color='inherit'>Login</Button>
          <Button variant="outlined" color='inherit' onClick={handleClickOpen}>Post a job</Button>
        </Stack>  
      </Toolbar>
    </AppBar>

    <JobsComponent jobs={jobs} searchInput={searchInput}/>
    
    {/* <TextField multiline variant="outlined" onChange={jobDescription}>Description...</TextField> */}
    <Dialog aria-labelledby="alert-dialog-title" aria-describedby="alert-dialog-description" open={open} onClose={handleClose}>
        <DialogTitle id="alert-dialog-title">{"Post a job"}</DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
          }}>
          <CloseIcon />
        </IconButton>
        <form action='http://localhost:3005/jobs' method='POST'>
          <Stack spacing={4} width={400} margin={5}>
            <TextField required variant='outlined' id="outlined-required" label="Job title" placeholder="Software developer" onChange={(e) => setJobTitleInput(e.target.value)} value={jobTitleInput}/>
            <Select id="programming-language-select" label='Programming languages' value="C">
              {languages.map((lan, index) => <MenuItem key={index} value={lan}>{lan}</MenuItem>)}
            </Select>
            <Select id="job-something" label='Job something' value="Remote">
              <MenuItem value="Presencial">Presencial</MenuItem>
              <MenuItem value="Remote">Remote</MenuItem>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
            </Select>
            <Stack direction={'row'} spacing={2}>
              <TextField 
                required 
                variant='outlined'
                id="outlined-required"
                label="Minimum Salary" 
                placeholder="xxx" 
                onChange={handleMinSalaryInput} 
                value={minSalaryInput ? minSalaryInput: ""}
                InputProps={{
                  startAdornment: <InputAdornment position="start">€</InputAdornment>,
                }}
                inputProps={{
                  inputMode: 'numeric',
                  pattern: '[0-9]*'
                }}
                error={inputMinSalaryError}/>
              <TextField 
                required 
                variant='outlined' 
                id="outlined-required" 
                label="Maximum salary" 
                placeholder="xxx" 
                onChange={handleMaxSalaryInput} 
                value={maxSalaryInput ? maxSalaryInput : ""}
                InputProps={{
                  startAdornment: <InputAdornment position="start">€</InputAdornment>,
                }}
                inputProps={{
                  inputMode: 'numeric',
                  pattern: '[0-9]*'
                }}
                error={inputMaxSalaryError}
                />
            </Stack>
            <TextField required fullWidth variant='outlined' minRows={4} id="outlined-required" multiline  label="Job description" placeholder="Add the job description..." value={jobDescriptionInput} onChange={(e) => setJobDescriptionInput(e.target.value)}/>
            <Button type='submit'>Create Post</Button>
          </Stack>
        </form>
    </Dialog>
  </div>
  );
}

export default App;
{/* {renderJobs()} */}
{/* <ToggleButtonGroup
  value={formats}
  onChange={handleFormat}
  aria-label="text formatting"
>
  <ToggleButton value="bold" aria-label="bold">
    <FormatBoldIcon />
  </ToggleButton>
  <ToggleButton value="italic" aria-label="italic">
    <FormatItalicIcon />
  </ToggleButton>
  <ToggleButton value="underlined" aria-label="underlined">
    <FormatUnderlinedIcon />
  </ToggleButton>
  <ToggleButton value="color" aria-label="color" disabled>
    <FormatColorFillIcon />
    <ArrowDropDownIcon />
  </ToggleButton>
</ToggleButtonGroup> */}

{/* <InputText></InputText> */}
