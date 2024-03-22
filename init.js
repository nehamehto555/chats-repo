const mongoose= require('mongoose');
const Chat=require('./models/chat.js');

main()
.then(()=>
    {console.log('connection successfull');
})
.catch((err) => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}

let allChats=[
    {
    from: 'Neha',
    to: 'somnath',
    mesg:' breakup good bye ghadha',
    create_at: new Date(),
},
{
    from: 'Karan',
    to: 'Som',
    mesg:' Id send to connect with you ',
    create_at: new Date(),
},
{
    from: 'Maya',
    to: 'Bander',
    mesg:'Happy college life explain',
    create_at: new Date(),
},
{
    from: 'Bharti',
    to: 'Mukesh',
    mesg:'hellow sali',
    create_at: new Date(),
},
{
    from: 'Abhishek',
    to: 'Radha',
    mesg:'Send me your notebook',
    create_at: new Date(),
},
{
    from: 'Herry',
    to: 'Kavaya',
    mesg:'Just play the game friends',
    create_at: new Date(),
},
];

Chat.insertMany(allChats);



// chat1.save().then((res)=>{
//     console.log(res);
// });

