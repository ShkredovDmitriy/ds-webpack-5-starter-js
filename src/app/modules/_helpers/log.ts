const log = (title:string, body:any) => {
  if (process.env.NODE_ENV === "development") {
    console.log('//=======' + title + '======//');
    console.log(body);
    console.log('//=======================//');
  }
};

export default log;




