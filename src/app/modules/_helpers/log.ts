const log = (text:string) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('/**************************/')
    console.log(text)
    console.log('/**************************/')
  }
}

export default log;
