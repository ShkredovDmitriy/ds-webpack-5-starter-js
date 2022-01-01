const log = (title: string, body: string | number) => {
  if (process.env.NODE_ENV === 'development') {
    console.log('//======= ' + title + ' ======//');
    console.log(body);
  }
};

export default log;
