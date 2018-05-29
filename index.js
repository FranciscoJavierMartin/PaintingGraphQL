const hapi=require('hapi');
const mongooose=require('mongoose');

//Add connection to database
mongooose.connect('');
mongooose.connect('');

mongooose.connection.once('open',()=>{
  console.log('connected to database');
})

const server=hapi.server({
  port:4000,
  host:'localhost'
});

const init=async () => {

  server.router({
    method:'GET',
    path:'/',
    handler: function(request,reply){
      return `<h1>My modern API</h1>`;
    }
  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();