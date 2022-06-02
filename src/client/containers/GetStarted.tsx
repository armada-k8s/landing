import React from 'react';
import { Typography, Grid, Box } from '@mui/material';
import FeatureWrapper from '../components/FeatureWrapper';
import GetStartedStep from '../components/GetStartedStep';
import { CodeBlock, CopyBlock } from "react-code-blocks"

function GetStarted() {
  return (
    <FeatureWrapper title='Get started' id='get-started' bgColor='white'>
      <React.Fragment>
        <Grid container justifyContent='space-between' spacing={2}>
          <GetStartedStep
            icon='fa-solid fa-box-open fa-4x'
            headline='1. Clone our Github repo'
          ><>
            <CopyBlock 
              text="git clone git@github.com:oslabs-beta/Armada.git"
            ></CopyBlock>
            </>
          </GetStartedStep>
          <GetStartedStep
            icon='fa-solid fa-terminal fa-4x'
            headline='2. Port forward Prometheus'
          >
            To port-forward Prometheus, run the following command, replacing the terms in brackets with the namespace and service name.
            <CopyBlock text="kubectl port-forward -n <namespace> svc/<service name> 9090" />
          </GetStartedStep>
          <GetStartedStep
            icon='fa-solid fa-window-maximize fa-4x'
            headline='3. Run Armada'
          >
            Run the following commands: 
            <CodeBlock text="npm install"/>
            <CodeBlock text="npm run build"/>
            <CodeBlock text="npm start"/>
            Then go to http://localhost:3001/ and enjoy your new Kubernetes experience!
          </GetStartedStep>
        </Grid>
      </React.Fragment>
    </FeatureWrapper>
  );
}

export default GetStarted;
