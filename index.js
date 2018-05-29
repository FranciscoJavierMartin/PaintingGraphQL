const hapi=require('hapi');
const mongooose=require('mongoose');
const Painting=require('./models/Painting');

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
  },
  {
    method:'GET',
    path:'/api/v1/paintings',
    handler:(req,reply)=>{
      return Painting.find();
    }
  },{
    method: 'POST',
    path:'api/v1/paintings',
    handler:(req,reply)=>{
      const {name,url,techniques}=req.payload;
      const painting=new Painting({
        name,
        url,
        techniques
      });

      return painting.save();
    }

  });

  await server.start();
  console.log(`Server running at: ${server.info.uri}`);
};

init();