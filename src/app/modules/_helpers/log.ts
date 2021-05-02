const log = (props:any) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('/********' + props.header + '**********/');
    console.log(props.body);
    console.log('/**************************/');
  }
}

export default log;
