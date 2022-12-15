
import React, { useEffect, useState } from "react";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Chart2 from "./Chart2";
import Chart1 from "./Chart1";
import Table from "./Table";
// import Chart3 from "./Chart3";

const AddCharts = ({data}) => {
//variable
    const [intensity,setIntensity]=useState(0)
    const [likelihood,setLikelihood]=useState(0)
    const [relevance,setRelevance]=useState(0)
//     Year
// Country
// Topics
// Region
// City 

    useEffect(() => {
        console.log(data)
        if (data.length>0) {
            console.log(data.map((el)=>el.added))
            setIntensity(data.map((el)=>el.intensity).reduce((a,b)=>a+b))
            setLikelihood(data.map((el)=>el.likelihood).filter((el)=>el!=undefined).reduce((a,b)=>a+b))
           
             setRelevance(data.map((el)=>el.relevance).reduce((a,b)=>a+b))
        }
       }, [data]);
    
  return (
    <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
      <h4>Filter data</h4>
    <Grid container spacing={3}>
      
    <Grid item sm={12} xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 3,
            display: "grid",
            gridTemplate: "row",
          }}
        >
          {/* <IntensityChart
            // Cin={Cin}
            // Food={food}
            // Stationery={stationery}
            // Postage={postage}
            // Carriage={carriage}
            // Traveling={traveling}
          /> */}
          
          <Table data={data} />
        </Paper>
      </Grid>
      <Grid item sm={12} xs={12} md={12} lg={12}>
        <Paper
          sx={{
            p: 3,
            display: "grid",
            gridTemplate: "row",
            height: "auto",
            width:"auto"
          }}
        >
          {/* <Amount opening={opening} Cin={Cin} Cout={Cout} /> */}
          {/* <Likelihood /> */}
          <Chart1 data={data} />
        </Paper>
      </Grid>
      <Grid item sm={12} xs={12} md={6} lg={6}>
        <Paper
          sx={{
            p: 3,
            display: "grid",
            gridTemplate: "row",
          }}
        >
          {/* <IntensityChart
            // Cin={Cin}
            // Food={food}
            // Stationery={stationery}
            // Postage={postage}
            // Carriage={carriage}
            // Traveling={traveling}
          /> */}
          {/* <Chart3 data={data} /> */}
          <Chart2 intensity={intensity} relevance={relevance} likelihood={likelihood} />
        </Paper>
      </Grid>
   
    </Grid>

  </Container>
  )
}

export default AddCharts