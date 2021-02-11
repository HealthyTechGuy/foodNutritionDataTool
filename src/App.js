import '../node_modules/highlight.js/styles/an-old-hope.css'
import '../node_modules/nutrition-label-jquery-plugin/dist/css/nutritionLabel-min.css'

import React, { useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { VictoryPie, VictoryTooltip } from 'victory';
import SubmitButton from './Submit/SubmitButton';
import StandardNutritionCard from './NutritionCard/StandardNutritionCard';

import DogeImg from './images/Doge.jpg'

const samplePieData = [
  { x: "Vitamin D", y: 35 },
]

let defaultTotalsObject = {
  foodName: '',
  sizeInGrams: 0,
  calories: 0,
  totalFat: 0,
  saturatedFat: 0,
  transFat: 0,
  cholesterol: 0,
  sodium: 0,
  totalCarbs: 0,
  fiber: 0,
  sugars: 0,
  protein: 0,
  vitaminD: 0,
  calcium: 0,
  iron: 0,
  potassium: 0,
  caffine: 0,
  full_nutrient_breakdown: []
}

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary">
      {/* {'Copyright © '} */}
      <Link color="inherit" href="https://rapidapi.com/healthytechguy/api/nutri-s1">
        Powered by Nutri-S - Nutrtion Data Service
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  gridRoot: {
    flexGrow: 1,
  },
  formRoot: {
    '& > *': {
      margin: theme.spacing(1),
      width: '90%',
    },
  },
  primary: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '100px',
    color: theme.palette.text.secondary,
  },
  nuitBreakdownPaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '700px',
    color: theme.palette.text.secondary,
  },
  imgPaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '300px',
    color: theme.palette.text.secondary,
  },
  piePaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '380px',
    color: theme.palette.text.secondary,
  },
  resultsPaper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    height: '100%',
    color: theme.palette.text.secondary,
  },
  codeBlock: {
    height: "100%",
    width: "100%",
    textAlign: "left",
    fontSize: "20px",
    marginLeft: "50px",
    flexWrap: 'wrap',
    flexDirection: "column",
    wordBreak: "break-all",
    overflowWrap: "break-word",
    overflow: "scroll"
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[800],
  }
}));

export default function FoodNutritionTool() {

  const classes = useStyles();

  const [totalsObject, setTotalsObject] = useState(defaultTotalsObject);
  const [inputText, setInputText] = useState('')
  const [rawAPIRespone, setrawAPIRespone] = useState('Nothing here yet, enter a food item in the box above')
  const [pieData, setAllPieData] = useState(samplePieData);
  const [imageURL, setImageURL] = useState(DogeImg);


  function refreshPage() {
    window.location.reload(false);
  }

  function setImage(imageURL) {
    setImageURL(imageURL)
  }

  function setResponseText(apiResponse) {
    setrawAPIRespone(apiResponse)
  }

  function setPieData(pieData) {
    setAllPieData(pieData)
  }

  function setAllTotals(totalsData) {
    setTotalsObject(totalsData)
  }


  return (
    <div className={classes.root}>
      <CssBaseline />
      <Container component="main" className={classes.main} maxWidth="md">
        <Typography variant="h2" component="h1" gutterBottom>
          Food Nutrtion Checker
        </Typography>
        <Typography variant="h5" component="h2" gutterBottom>
          {' Take control of your health with accurate, easy to access food data'}
          {''}
        </Typography>
        <Typography variant="body1" style={{ fontStyle: 'italic' }}>"Let food be thy medicine, and let medicine be thy food" - Hippocrates
        </Typography>

        <div className={classes.gridRoot}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
            </Grid>
            <Grid item xs={12}>

              <Paper elevation={3} className={classes.paper}>

                <form className={classes.formRoot} noValidate autoComplete="off">
                  <TextField id="standard-basic"
                    label="Insert the food that you want to check here."
                    placeholder="One apple and two oranges"
                    multiline
                    rows={1}
                    rowsMax={10}
                    onChange={(e) => setInputText(e.target.value)}
                  />
                </form>

              </Paper>
            </Grid>
            <Grid item xs={5}>
            </Grid>
            <Grid item xs={2}>
              <div className={classes.primary}>
                <SubmitButton inputText={inputText} responseText={setResponseText} allPieData={setPieData} firstImage={setImage} totalsObject={setAllTotals} />
              </div>
            </Grid>
            <Grid item xs={5}>
            </Grid>
            <Grid item xs={12}>
              {/* <Box display="flex">
             </Box> */}
              <Paper elevation={3} className={classes.resultsPaper}>

                {/* <Typography variant="h6" style={{ fontWeight: 700, marginBottom: '10px' }}> Results: {' '} </Typography> */}

                <div className={classes.primary}>
                  {/* <ResetButton /> */}
                  <Button onClick={refreshPage} variant="contained" color="primary" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px' }}>Reset</Button>
                  {/* Reset */}
                </div>
                <br />
                <Divider variant="middle" />
                <br />

                <Accordion >
                  <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography variant="h6" style={{ fontWeight: 'bold' }} className={classes.heading}>See Raw Nutrition Data in JSON</Typography>
                  </AccordionSummary>
                  <AccordionDetails >


                    <pre className={classes.codeBlock}>
                      {rawAPIRespone}
                    </pre>

                  </AccordionDetails>
                </Accordion>

                {/* <Typography variant="h6" style={{}}>  </Typography> */}
                <br />

                <Grid container spacing={3}>
                  <Grid item xs={5}>
                    <Paper className={classes.nuitBreakdownPaper}>
                      <StandardNutritionCard totalsObject={totalsObject}> </StandardNutritionCard>
                    </Paper>

                  </Grid>

                  <Grid item xs={7}>
                    <Paper className={classes.imgPaper}>
                      <Typography variant="h6" style={{ fontWeight: 700, marginBottom: '10px' }}>
                        Image:
                       </Typography>
                      <img alt="foodImage" width="200" height="200" src={imageURL} />
                    </Paper>
                    <br />
                    <Paper className={classes.piePaper}>
                      <Typography variant="h6" style={{ fontWeight: 700, marginBottom: '10px' }}>
                        Pie Chart:
                       </Typography>
                      <VictoryPie
                        labelComponent={<VictoryTooltip />}
                        data={pieData}
                        events={[{
                          target: "data",
                          eventHandlers: {
                            onMouseOver: () => {
                              return [
                                {
                                  target: "data",
                                  mutation: () => ({ style: { fill: "LightSkyBlue", width: 30 } })
                                },
                                {
                                  target: "labels",
                                  mutation: () => ({ active: true })
                                }
                              ];
                            },
                            onMouseOut: () => {
                              return [
                                {
                                  target: "data",
                                  mutation: () => { }
                                }, {
                                  target: "labels",
                                  mutation: () => ({ active: false })
                                }
                              ];
                            }
                          }
                        }]}

                      />
                    </Paper>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </div>


      </Container>
      <footer className={classes.footer}>
        <Container maxWidth="sm">
          <Typography variant="body1">Developed by {' '}
            <Link color="inherit" href="https://rob-oconnor.com">
              Rob O'Connor
            </Link>
          </Typography>
          <Copyright />
        </Container>
      </footer>
    </div>
  );
}