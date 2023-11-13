import "./App.scss";
import AVButton from "components/Button/Button";
import React from "react";
import { Container, Grid } from "@material-ui/core";

function App() {
  return (
    <div className="App">
      <Container maxWidth="lg">
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12}>
            <h1>Preview</h1>
          </Grid>

          <Grid item xs={12}>
            <h2>Buttons</h2>
          </Grid>
          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div>Primary</div>
              </Grid>
              <Grid item xs={6}>
                <AVButton
                  label="Button"
                  onClick={() => {console.log('Hi there!')}}
                  size="large"
                  variant="primary"
                />
              </Grid>
              <Grid item xs={6}>
                <AVButton
                  label="Button"
                  size="large"
                  variant="primary"
                  disabled
                />
              </Grid>
              <Grid item xs={6}>
                <AVButton
                  label="Button"
                  size="small"
                  variant="primary"
                />
              </Grid>
              <Grid item xs={6}>
                <AVButton
                  label="Button"
                  size="small"
                  variant="primary"
                  disabled
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div>Secondary</div>
              </Grid>
              <Grid item xs={6}>
                <AVButton
                  label="Button"
                  size="large"
                  variant="secondary"
                />
              </Grid>
              <Grid item xs={6}>
                <AVButton
                  label="Button"
                  size="large"
                  variant="secondary"
                  disabled
                />
              </Grid>
              <Grid item xs={6}>
                <AVButton
                  label="Button"
                  size="small"
                  variant="secondary"
                />
              </Grid>
              <Grid item xs={6}>
                <AVButton
                  label="Button"
                  size="small"
                  variant="secondary"
                  disabled
                />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <div>Text</div>
              </Grid>
              <Grid item xs={6}>
                <AVButton
                  label="Button"
                  size="large"
                  variant="text"
                />
              </Grid>
              <Grid item xs={6}>
                <AVButton
                  label="Button"
                  size="large"
                  variant="text"
                  disabled
                />
              </Grid>
              <Grid item xs={6}>
                <AVButton
                  label="Button"
                  size="small"
                  variant="text"
                />
              </Grid>
              <Grid item xs={6}>
                <AVButton
                  label="Button"
                  size="small"
                  variant="text"
                  disabled
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
